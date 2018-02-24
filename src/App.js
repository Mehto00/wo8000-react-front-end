import React, { Component } from 'react';
import Header from './Components/Header';
import StationList from './Components/StationList';
import SubmitForm from './Components/SubmitForm';
import ContactPopup from './Components/HeaderComponents/ContactPopup';
import AllObservations from './Components/HeaderComponents/AllObservations';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //Initializing the show-popup states
      showSubmitForm: false,
      showContact: false,
      showAllObservations: false,
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
    this.showContact = this.toggleContact.bind(this);
    this.showAllObservations = this.toggleAllObservations.bind(this);
  }

    toggleForm() {
      this.setState({
        showSubmitForm: !this.state.showSubmitForm
      });
    }

    toggleContact() {
      this.setState({
        showContact: !this.state.showContact
      });
    }

    toggleAllObservations() {
      this.setState({
        showAllObservations: !this.state.showAllObservations
      });
    }

componentWillMount(){  
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
          observations: response
        })            
      })
      .catch(error => {
        console.log("Error fetching the data", error); 
      });
   }

   render() {
      return (       
      <main>
      
      <Header 
        observations={ this.state.observations } 
        
        toggleContact={ this.toggleContact } 
        toggleAllObservations={ this.toggleAllObservations }
        
        showContact={ this.state.showContact }
        showAllObservations={ this.state.showAllObservations }
        
        closeContact={ this.showContact.bind(this) }
        closeAllObservations={ this.showAllObservations.bind(this) }
      /> 
      
      <section id="about">
        <h2>Here's WEATHER OBSERVATOR 8000</h2>
        <p>You can submit your weather observations via form to some pre-given stations. Observations are saved to a database and submission automatically updates the view with latest observation.
        From <a href="#" className="openObservationsList">all observations</a> you get to a pop-up list of all the observations submitted.</p>
        <button className="btn" onClick={this.toggleForm.bind(this)}>Open form</button>
      </section>

      <StationList data={ this.state.stations }/>
       
      {this.state.showSubmitForm ? 
        <SubmitForm closePopup={ this.toggleForm.bind(this) } data={this.state.stations}
        />
        : null
      }

      </main>

     )
   }
}

export default App;
