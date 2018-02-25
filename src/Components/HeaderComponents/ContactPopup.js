import React from 'react';

const ContactPopup = props => {
    return (
      <div className="showPopups"> 
      <div> 
      <p className="closePopupCross" onClick={props.closePopup} >&#10006;</p>
      </div>

      <img src="img/meika.png" alt="Meee"/>
      <h3 className="content-box-header">Here's the deal</h3>
      <p>I am a nearly graduated Haaga-Helia student looking for an internship.<br />
      I'm also a graphic designer and a lifelong learner on a path to become a full stack developer.<br />
      I’m living in Helsinki, learning every day to be better at things like coding and cooking.<br />
      And generally in life, of course.</p>
      <ul>
      <li><a href="http://www.linkedin.com/in/mikkometso/" target="_blank">You can find my Linkedin profile from here</a>.</li><br />
      <li><a href="https://github.com/Mehto00/weather-observator-8000" target="_blank">And the Github repository about this project here</a>.</li>
      </ul>
      </div>
      )
}

 export default ContactPopup;