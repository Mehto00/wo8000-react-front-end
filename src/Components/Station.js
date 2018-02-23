import React from 'react';

const Station = props => {

    let observationId = props.observationId
    let timestamp = props.timestamp
    let temperature = props.temperature
    let stationName = props.station
    let max = props.max
    let min = props.min
    let maxAndMin = max + " / " + min

    // This is for capitalizing the first letters of station
    if (stationName !== "new_york") {
        stationName = stationName.charAt(0).toUpperCase() + stationName.slice(1)
    } else {
        let tempStation = stationName.split("_");
        tempStation[0] = tempStation[0].charAt(0).toUpperCase() + tempStation[0].slice(1)
        tempStation[1] = tempStation[1].charAt(0).toUpperCase() + tempStation[1].slice(1)
        stationName = tempStation.join(" ");
    }

    // If max or min returns a "null" value (as they might) default to a more informative string 
    if (max === "null" || min === "null") {
        maxAndMin = "No observations in the past 24 hours"
    }
    
    return (   
        <section className="stations">
            <h2>{stationName}</h2>
            <p>Latest temp: {temperature} (&#8451;)<br />
                <span id="amsterdam-date">{timestamp}</span>
            </p>
            <p>
                Max / Min: (past 24h)<br />
                {maxAndMin}         
            </p>
            
        </section>
    )

}

export default Station;

