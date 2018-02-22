import React from 'react';
import Station from './Station';


const StationList = props => {
	
	// Saves props.data into a array of objects
	const results = props.data;

	//maps results into their own seperate Station 
	const Stations = ({results}) => (
	  <div className="stationWrapper">
	    {results.map(station => (
	      <Station className="station" key={station.observationId} timestamp={station.timestamp} temperature={station.temperature} station={station.station} max={station.max} min={station.min} />
	    ))}
	  </div>
	); 
    return (
		
		//Renders a list of stations
    	<Stations results={results} />
    	
	)
}

export default StationList;