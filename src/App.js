import React, { Component } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import StationList from './Components/StationList';
import Station from './Components/Station';
import './App.css';

class App extends Component {

 constructor(){
    super();
    this.state = {
      stations: []
    }
  }

  componentWillMount(){
    this.getApiData();
  }

  getApiData() {
    var temp = [];
      fetch("http://localhost:8080/weather-app-dev/latest/")
      .then(response => response.json())
      .then(response => {

      var observationId = response.map(function(s) { return s.observationId; });
      var timestamps = response.map(function(s) { return s.timestamp; });
      var temperature = response.map(function(s) { return s.temperature; });
      var stationName = response.map(function(s) { return s.station; });
      var max = response.map(function(s) { return s.max; });
      var min = response.map(function(s) { return s.min; });  
        
      for (let i = 0; i < response.length; i++) {
          this.setState({
            station: [observationId[i], timestamps[i], temperature[i], stationName[i], max[i], min[i]],
          })  
        }    
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
        <StationList stationData={this.state.station}/>
      </main>
    )
  }
}

export default App;
