import React from 'react';
import Observation from './Observation';

const AllObservations = props => {
    const results = props.observations.reverse();

    // Map reverst results into single Observations
    const Observations = ({results}) => (
    results.map(observation => (
        <Observation key={observation.observationId} timestamp={observation.timestamp} temperature={observation.temperature} station={observation.station} />
      ))
    );

    return (
      <div className="showPopups">         
          <div>
            <div>
            <p className="closePopupCross" onClick={props.closePopup}>&#10006;</p>
            </div>
          </div>
              
          <h3 className="content-box-header">All Observations</h3>
          
          <div className="headerList">
          <ul className="observationList">
              <span className="content-box">
                <li><strong>Station</strong></li>
                <li><strong>Temperature</strong></li>
                <li><strong>Timestamp</strong></li>
              </span>
          </ul>
            
            <ul className="observationList">
              <Observations results={results} />
            </ul>
          </div>  
      </div>
    )
}

export default AllObservations;