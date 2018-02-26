import React from 'react';

const ContactPopup = props => {
    return (
      <div className="showPopups"> 
      <div> 
      <p className="closePopupCross" onClick={props.closePopup}>&#10006;</p>
      </div>

      <img src="img/meika.png" alt="Meee"/>
      <h3 className="content-box-header">Here's the deal</h3>
      <p>I am a nearly graduated Haaga-Helia student looking for an internship.<br />
      I'm also a graphic designer and a lifelong learner on a path to become a full stack developer.<br />
      I’m living in Helsinki, learning every day to be better at things like coding and cooking.<br />
      And generally in life, of course.</p><br />

      <ul>
      <li className="contactLinks"><a href="http://www.linkedin.com/in/mikkometso/" rel="noopener noreferrer" target="_blank" >You can find my Linkedin profile from here</a>.</li><br />
      <li className="contactLinks"><a href="https://github.com/Mehto00/weather-observator-8000" rel="noopener noreferrer" target="_blank" >And the Github repository of backend API done with Spring here</a>.</li><br />
      <li className="contactLinks"><a href="https://github.com/Mehto00/weather-observator-8000" rel="noopener noreferrer" target="_blank" >And the Github repository of React front end from here</a>.</li><br />
      </ul><br />

      <p> You can always reach out to me via LinkedIn Messages or <br />emailing to me at mikkosanterimetso@gmail.com</p>
      </div>
      )
}

 export default ContactPopup;