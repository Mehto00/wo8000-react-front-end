import React from 'react';
import ContactPopup from './HeaderComponents/ContactPopup';
import AllObservations from './HeaderComponents/AllObservations';

class Header extends React.Component {
    constructor(props){
      super(props);
      this.state = {
      //Initializing the show-popup states
      showContact: false,
      showAllObservations: false
     }

    this.toggleContact = this.toggleContact.bind(this);
    this.toggleAllObservations = this.toggleAllObservations.bind(this);
    } 
    
    toggleAllObservations() {
      this.setState({
        showAllObservations: !this.state.showAllObservations
      })
    }

    toggleContact() {
      this.setState({
        showContact: !this.state.showContact
      })
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
        <li><a href="#" className="openAllObservations" onClick={this.toggleAllObservations} >All Observations</a></li>
        <li><a href="#" className="openContact" onClick={this.toggleContact} >Contact</a></li>
        </ul>
        </nav>
                
        {this.state.showContact ? 
            <ContactPopup closePopup={ this.toggleContact.bind(this) }
            />
            : null
        }

        {this.state.showAllObservations ? 
          <AllObservations closePopup={ this.toggleAllObservations.bind(this) } observations={this.props.observations} />
          : null
        }

        </header> 
        )
    }
  }

  export default Header;