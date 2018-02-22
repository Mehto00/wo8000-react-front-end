import React from 'react';
import Station from './Station';


const StationList = props => {

	// const properties = ["observationId", "timestamps", "temperature", "stationName", "max", "min"]
 // 	properties.forEach( function(element, index) {});

	

	const results = props.stationData;
	let listOfStations = [];
	let station = {
		timestamps :"",
		temperature :"",
		stationName :"",
		max :"",
		min :""
	}
	if (results != undefined) {
		station.observationId = results[0];
		station.timestamps = results[1];
		station.temperature = results[2];
		station.stationName = results[3]
		station.max = results[4]
		station.min = results[5]
		listOfStations.push(station);
	}
	console.log(station);

		let stations = station.map(temperature => 
 		<Station temperature={temperature}/>
 		)


	//<Station timestamps={station.timestamps} temperature={station.temperatures} stationName={station.stationName} max={station.max} min={station.min} />
	  			//<Station temperature={temperatures} />
	

	//console.log(stations);

 // 		let temperatures = results.temperature.map(temperature => 
	//  		<Station temperature={temperature}/>
	// 	)
	//  	let stationName = results.stationName.map(stationName => 
	// 	 	<Station stationName={stationName}/>
	// 	)
	// 	let max = results.max.map(max => 
	// 	 	<Station max={max}/>
	// 	)
	//  	let min = results.min.map(min => 
	// 	 	<Station min={min}/>
	//	)
    return (
    	<Station />
    	//<Station timestamps={station.timestamps} temperature={station.temperature} stationName={station.stationName} max={station.max} min={station.min} />
	
	)
}

export default StationList;