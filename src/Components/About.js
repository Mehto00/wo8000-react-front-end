import React from 'react';
import SubmitForm from './SubmitForm';

const About = props => {

  return (   
   <section id="about">
   <h2>Here's WEATHER OBSERVATOR 8000</h2>
   <p>You can submit your weather observations via form to some pre-given stations. Observations are saved to a database and submission automatically updates the view with latest observation.
   From all observations you get to a pop-up list of all the observations submitted.</p>
   <button className="btn" onClick={props.toggleForm.bind(this)}>Open form</button>
   
    {this.state.showSubmitForm ? 
        <SubmitForm closePopup={ this.toggleForm.bind(this) } data={this.state.stations}
        />
        : null
    }

   </section>
   )

}

export default About;

