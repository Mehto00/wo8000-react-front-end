import React from 'react';
import StationList from './StationList';

const Station = props => {

    return (
		<section className="stations" id="amsterdam">
			<h2>{props.stationName}</h2>
			
			<p>Latest temp: {props.temperature}(&#8451;)<br />
				<span id="amsterdam-date">{props.timestamps}</span>
			</p>
			<p>
				Max / Min: (past 24h)<br />
				{props.max} / {props.min}
				<span id="amsterdam-max-min">No observations in the past 24 hours
				</span>
			</p>
		</section>
    )

}
export default Station;