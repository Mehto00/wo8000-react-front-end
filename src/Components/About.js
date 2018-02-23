import React from 'react';

const About = props => {

    return (   
     <section id="about">
     {console.log(props)}
        <h2>Here's WEATHER OBSERVATOR 8000</h2>
        <p>You can submit your weather observations via form to some pre-given stations. Observations are saved to a database and submission automatically updates the view with latest observation.
        From <a href="#" className="openObservationsList">all observations</a> you get to a pop-up list of all the observations submitted.</p>
        <button className="btn">Open form</button>
      </section>
    )

}

export default About;

