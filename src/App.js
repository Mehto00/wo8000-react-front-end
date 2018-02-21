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
      station: {
      observationId : [],
      timestamps : [],
      temperature : [],
      stationName : [],
      max : [],
      min : []
    }
    }
  }

  componentWillMount(){
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
          this.setState({
            station: {
            observationId: observationId,
            timestamps : timestamps,
            temperature : temperature,
            stationName : stationName,
            max : max,
            min : min,
            }
          })        
         })
        .catch(error => {
         console.log("Error fetching the data", error); 
         
  });     
  }


  render() {

    //console.log(this.state.station);
    return (
      <main>
        <Header /> 
        <About /> 
        <StationList observationId={this.state.observationId} timestamps={this.state.timestamps} temperature={this.state.temperature} station={this.state.station} max={this.state.max} min={this.state.min}
 />
      </main>
    )
  }
}

export default App;
