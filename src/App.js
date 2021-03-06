import React, { Component } from 'react';
import Header from './Components/Header';
import StationList from './Components/StationList';
import SubmitForm from './Components/SubmitForm';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      //Initializing the show-popup states
      showSubmitForm: false,
      //Array of station objects comming from Api
      stations: [
      {
        observationId: "", 
        timestamp: "", 
        temperature: "",
        station: "",
        max: "",
        min: ""
      }
      ],

      // Array of all observations comming from Api
      observations: [
      {
       observationId: "", 
       timestamp: "", 
       temperature: "",
       station: ""
     }
     ]
    } // this.state{}    
    
    this.getData = this.getData.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }
    componentWillMount(){ 
      this.getData()
    }
    
    getData() {
      console.log("fetching data from API with GET");
      // Fetch the json objects presenting data from the latest submits by station
      fetch("http://localhost:8080/weather-app-dev/latest/")
      .then(response => response.json())
      .then(response => {
       this.setState({
          // Append response into the this.state.stations array
          stations: response
        })
      })
      .catch(error => {
        console.log("Error fetching the data", error); 
      });

       // Fetch the json objects presenting a array of all the observations submitted
      fetch("http://localhost:8080/weather-app-dev/observations")
      .then(response => response.json())
      .then(response => {
        this.setState({
          // Append response into the this.state.observations array
          observations: response.reverse()
        })            
      })
      .catch(error => {
        console.log("Error fetching the data", error); 
      });
    }

    toggleForm() {
      this.setState({
        showSubmitForm: !this.state.showSubmitForm
      });
    }

   render() {
      return (       
      <main>
      
      <Header 
        observations = { this.state.observations } 
      /> 
      
      <section id="about">
        <h2>Here's WEATHER OBSERVATOR 8000</h2>
        <p>You can submit your weather observations via form to some pre-given stations. Observations are saved to a database and submission automatically updates the view with latest observation.
        From all observations you get to a pop-up list of all the observations submitted.</p>
        <button className="btn" onClick={this.toggleForm.bind(this)}>Open form</button>
      </section>

      <StationList data={ this.state.stations }/>
       
      {this.state.showSubmitForm ? 
        <SubmitForm closePopup={ this.toggleForm } updateData={ this.getData.bind(this)} formState={this.state.showSubmitForm}
        />
        : null
      }

      </main>

     )
   }
}

export default App;
