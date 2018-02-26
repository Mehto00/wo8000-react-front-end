import React, { Component } from 'react';

class SubmitForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popupCheckState: false,
      stationSelected: false,
      tempScale: false,
      temperature: '',
      submitTrue: !this.handleSubmit
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    
    let fd = new FormData();
    fd.set("station", this.state.stationSelected)
    fd.set("temperature", this.state.temperature)

    //Check if user submitted fahrenheit and convert to celsius
    if (this.state.tempScale === "fahrenheit" && this.state.temperature !== "") {
      let fheit = this.state.temperature;
      fheit =  ((fheit - 32) * 5/9).toFixed(1)
      fd.set("temperature", fheit)
    }

    // Check if all the form fields has value before submitting
    if (!this.state.stationSelected || !this.state.tempScale || !this.state.temperature) {
        // Dislpay error message and add red box as styling
        document.querySelector("#submitInfo").classList.add("submitError");
        document.querySelector("#submitText").innerHTML = "All fields are mandatory";
    } 
    
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    
    let PostThePost = new Promise((doThis) => {
      doThis(this.postData(fd))
    });
    
    if (this.state.stationSelected && this.state.tempScale && this.state.temperature !== ''){
    PostThePost.then(() => wait(3000))
    .then(this.props.closePopup)
    .then(this.props.updateData)
  }
  } // END OF else {fetch(postObservation, ..}

  postData(PassedFormData) { 
   fetch("http://localhost:8080/weather-app-dev/observations", {
          method: 'post',
          body: PassedFormData, // post body 
          headers: {
            'Accept': 'multipart/form-data'
          },
          credentials: 'same-origin', // send cookies
          credentials: 'include',     // send cookies, even in CORS
        })  
        .then(res => {
          if (!res.ok) { throw res }          
        console.log(res.status, "Hooray! Your observation was successfully submitted"); 
        document.querySelector("#submitInfo").classList.remove("submitError"); // Removes red box if user has continued after unsuccessful form submit
        document.querySelector("#submitInfo").classList.toggle("submitSuccess"); // Adds greenbox 
        document.querySelector("#curtain").classList.toggle("ghostShown");
        document.querySelector("#submitText").innerHTML = "Observation successfully submitted"; // and feedback about succesful submit
        })
        .catch(res => {
          if (res.status >= 400 && res.status < 500) {
            console.error(res.status, "Upsy-Daisy! Something went wrong when filling the form");
            document.querySelector("#submitInfo").classList.add("submitError");
            document.querySelector("#submitText").innerHTML = "All fields are mandatory";
          } else {
            console.error("Upsy-Daisy! Something's wrong");
            document.querySelector("#submitText").innerHTML = "Something's wrong on form, please contact site admin";
          }
        }
        ) // catch()
    
  } // PostData()

  render() {
    return (
      <section id="submit">
      <div className="formBoxShown">
      <div id="curtain" className=""></div>
      <p className="closePopupCross" onClick={this.props.closePopup}>&#10006;</p><br/>
      
      <div id="submitInfo" className="">
      <p id="submitText"></p>
      </div>
      
      <div className="formContainer">
      <div className="formWrapper">
      
      <form id="postObservation" onSubmit={this.handleSubmit}>

      <h3>Submit observation</h3>

      <fieldset>
      <legend>Select your station</legend>
        <label className="radioButton"><input type="radio" name="stationSelected" value="amsterdam" checked={this.state.stationSelected === "amsterdam"} onClick={this.handleInputChange} />Amsterdam</label>
        <label className="radioButton"><input type="radio" name="stationSelected" value="dubai" checked={this.state.stationSelected === "dubai"} onClick={this.handleInputChange} />Dubai</label>
        <label className="radioButton"><input type="radio" name="stationSelected" value="helsinki" checked={this.state.stationSelected === "helsinki"} onClick={this.handleInputChange}/>Helsinki</label><br/>
        <label className="radioButton"><input type="radio" name="stationSelected" value="new_york" checked={this.state.stationSelected === "new_york"} onClick={this.handleInputChange} />New York</label>
        <label className="radioButton"><input type="radio" name="stationSelected" value="tokyo" checked={this.state.stationSelected === "tokyo"} onClick={this.handleInputChange} />Tokyo</label>
      </fieldset>
      <fieldset>
      <legend>Temperature scale</legend>
        <label>Select from following:</label>
        <label className="radioButton"><input type="radio" name="tempScale" value="celsius" checked={this.state.tempScale === "celsius"} onChange={this.handleInputChange} />celsius</label>
        <label className="radioButton"><input type="radio" name="tempScale" value="fahrenheit" checked={this.state.tempScale === "fahrenheit"} onChange={this.handleInputChange} />fahrenheit</label><br/>
      </fieldset>

      <fieldset>
      <legend>Enter a temperature</legend>
        <label>Temperature</label>
        <input type="number" id="temperature" name="temperature" step="0.01" min="-140.00" max="140.00" value={this.state.temperature} onChange={this.handleInputChange}/><br/>
      </fieldset>

      <fieldset className="noBorder">
        <input type="submit" className="btn" name="submit" value="submit"/>
      </fieldset>

      </form>
    </div>  {/* <div className="formWrapper"> */}
  </div>  {/* <div className="formContainer"> */}
</div> {/* <div className="formBoxShown"> */}
</section>
)
  }
}

export default SubmitForm;