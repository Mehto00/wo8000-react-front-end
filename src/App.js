import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import StationList from './Components/StationList';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
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
    ]
 }
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
   }

   render() {
      return (       
       <main>
       <Header /> 
       <About />
       <StationList data={this.state.stations}/>
       </main>

       )
   }
}

export default App;
