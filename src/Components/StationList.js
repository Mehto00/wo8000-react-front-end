import React from 'react';
import Station from './Station';


const StationList = props => {

	const properties = ["observationId", "timestamps", "temperature", "stationName", "max", "min"]
 	properties.forEach( function(element, index) {});

	const results = props.station;
		let timestamps = results.timestamps.map(timestamps => 
	 		<Station timestamps={timestamps}/>
		)

 		let temperatures = results.temperature.map(temperature => 
	 		<Station temperature={temperature}/>
		)
	 	let stationName = results.stationName.map(stationName => 
		 	<Station stationName={stationName}/>
		)
		let max = results.max.map(max => 
		 	<Station max={max}/>
		)
	 	let min = results.min.map(min => 
		 	<Station min={min}/>
		)
    return (

    	<Station timestamps={timestamps} temperature={temperatures} stationName={stationName} max={max} min={min} />
	)
}

export default StationList;