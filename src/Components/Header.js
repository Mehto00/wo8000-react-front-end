import React from 'react';
import ContactPopup from './HeaderComponents/ContactPopup';
import AllObservations from './HeaderComponents/AllObservations';

class Header extends React.Component {

 constructor() {
   super();

   //Initializing the showContact- and showAllObservations -popup states and creating a observations for the fetch
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
      // Fetch the json objects presenting a array of all the observations submitted
      fetch("http://localhost:8080/weather-app-dev/observations")
      .then(response => response.json())
      .then(response => {
        this.setState({
          // Append response into the this.state.observations array
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

    toggleAllObservations() {
      this.setState({
        showAllObservations: !this.state.showAllObservations
      });
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
        <li><a href="#" className="openAllObservations" onClick={this.toggleAllObservations.bind(this)}>All Observations</a></li>
        <li><a href="#" id="openContact" onClick={this.toggleContact.bind(this)}>Contact</a></li>
        </ul>
        </nav>

        {this.state.showContact ? 
          <ContactPopup
          closePopup={this.toggleContact.bind(this)}
          />
          : null
        }

        {
          this.state.showAllObservations ? 
          <AllObservations closePopup={this.toggleAllObservations.bind(this)} observations={this.state.observations} />
          : null
        }           
        </header> 
        )
    }
  }

  export default Header;