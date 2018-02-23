import React from 'react';

const Observation = props => {

    let observationId = props.observation
    let timestamp = props.timestamp
    let temperature = props.temperature
    let station = props.station

    if (station !== "new_york") {
        station = station.charAt(0).toUpperCase() + station.slice(1)
    } else {
        let tempStation = station.split("_");
        tempStation[0] = tempStation[0].charAt(0).toUpperCase() + tempStation[0].slice(1)
        tempStation[1] = tempStation[1].charAt(0).toUpperCase() + tempStation[1].slice(1)
        station = tempStation.join(" ");
    }

    return(
        <span className="content-box">
        <li>{station}</li>
        <li>{temperature}</li>
        <li>{timestamp}</li>
        </span>
    )
}

export default Observation;