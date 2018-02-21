import React from 'react';

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
				<li><a href="#" className="openObservationsList">All Observations</a></li>
				<li><a href="#" id="openContact">Contact</a></li>
			</ul>
		</nav>		
	</header> 
    )
  }
}

export default Header;