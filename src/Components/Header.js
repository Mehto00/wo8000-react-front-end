import React from 'react';
import ContactPopup from './HeaderComponents/ContactPopup';
import AllObservations from './HeaderComponents/AllObservations';

class Header extends React.Component {
    
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
        <li><a href="#" className="openAllObservations" onClick={this.props.toggleAllObservations.bind(this)}
>All Observations</a></li>
        <li><a href="#" id="openContact" onClick={this.props.toggleContact.bind(this)}>Contact</a></li>
        </ul>
        </nav>

        {
          this.props.showContact ? 
          <ContactPopup 
          />
          : null
        }

        {
          this.props.showAllObservations ? 
          <AllObservations observations={this.props.observations} />
          : null
        }



        </header> 
        )
    }
  }

  export default Header;