import React from 'react';

class ContactPopup extends React.Component {
  render(){
    return (    
      <div className="showPopups">
      <div> 
      <p className="closePopupCross" onClick={this.props.closePopup}>&#10006;</p>
      </div>

      <img src="img/meika.png" />
      <h3 class="content-box-header">Here's the deal</h3>
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
}

class AllObservations extends React.Component {

  render(){
    return (    
      <div className="showPopups">
      <div>
      <p class="closePopupCross" onClick={this.props.closePopup}>&#10006;</p>
      </div>

      <h3 class="content-box-header">All Observations</h3>
        <div class="observationList">
          <Observation />
        </div>  
      </div>
      )
  } 
}

class Observation extends React.Component {
  showProps(props) {
    console.log(props)
    console.log("hodor")
  }

  render(){
    <showProps />
    return(
      <div class="content-box">
        <p>Station: {props.station}</p>
        <p>Temperature: {props.temperature}</p>
        <p>Time: {props.timestamp}</p>
      </div>   
    )
  }
}


class Header extends React.Component {

 constructor() {
   super();

   this.state = {
     showContact: false,
     showAllObservations: false,
     observations: [
     {
       observationId: "", 
       timestamp: "", 
       temperature: "",
       station: ""
     }
     ]
   } 
 }

 componentWillMount(){  
      // Fetch the json objects presenting data from the latest submits by station
      fetch("http://localhost:8080/weather-app-dev/observations")
      .then(response => response.json())
      .then(response => {
        this.setState({
          // Append response into the this.state.stations array
          observations: response
        })            
      })
      .catch(error => {
        console.log("Error fetching the data", error); 
      });
    }

    toggleContact() {
      this.setState({
        showContact: !this.state.showContact
      });
    }

    toggleObservationsList() {
      this.setState({
        showAllObservations: !this.state.showAllObservations
      });
    }

    listObservations(observations) {
      observations.map(observation => (
        <Observation key={observation.observationId} timestamp={observation.timestamp} temperature={observation.temperature} station={observation.station} />
      ))
    }

    render() {
      return (
        <header>
        <h1>WEATHER OBSERVATOR 8000</h1>
        <div className="popups">
        <div id="observationsBox" className=""></div>
        <div id="contactBox" className=""></div>
        </div>
        <nav className="mainNav">
        <ul>
        <li><a href="#" className="openObservationsList" onClick={this.toggleObservationsList.bind(this)}>All Observations</a></li>
        <li><a href="#" id="openContact" onClick={this.toggleContact.bind(this)}>Contact</a></li>
        </ul>
        </nav>

        {this.state.showContact ? 
          <ContactPopup
          closePopup={this.toggleContact.bind(this)}
          />
          : null
        }
        {this.state.showAllObservations ? 
          <AllObservations closePopup={this.toggleObservationsList.bind(this)}>
          <listObservations observations={this.state.observations}/>
          </AllObservations>
          : null
        }           
        </header> 


        )
    }
  }

  export default Header;