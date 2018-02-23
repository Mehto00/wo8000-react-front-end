import React, { Component } from 'react';

class SubmitForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      station: '',
      tempScale: '',
      temperature: '',
      submitTrue: !this.handleSubmit
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postData();
    console.log("test");
  }

  postData() {
    const form = document.querySelector("#postObservation");
    let fd = new FormData(form);
    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    //Check if user submitted fahrenheit and convert to celsius
    if (fd.get("tempScale") == "fahrenheit" && fd.get("temperature")) {
      let fheit = fd.get("temperature");
      fd.set("temperature", ((fheit - 32) * 5/9).toFixed(1));
    }

    // Check if all the form fields has value before submitting
    if (!fd.get("station") || !fd.get("tempScale") || !fd.get("temperature")) {
        // Dislpay error message and add red box as styling
        document.querySelector("#submitInfo").classList.add("submitError");
        document.querySelector("#submitText").innerHTML = "All fields are mandatory";
      } else {
        fetch("http://localhost:8080/weather-app-dev/observations", {
          method: 'post',
      body: fd, // post body 
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
        document.querySelector("#submitText").innerHTML = "Observation successfully submitted"; // and feedback about succesful submit

      })
        .then(() => wait(2000))
        .catch(res => {
          if (res.status >= 400 && res.status < 500) {
            console.error(res.status, "Upsy-Daisy! Something went wrong when filling the form");
            document.querySelector("#submitText").innerHTML = "All fields are mandatory";
          } else if (res.status >= 500 && res.status < 600) {
            console.error(res.status, "Upsy-Daisy! Something's wrong on the Server side");
            document.querySelector("#submitText").innerHTML = "Something's wrong on the Server side";
          }
          document.querySelector("#submitInfo").classList.toggle("submitError");
        }
        ) // catch()
    } // END OF else {fetch(postObservation, ..}
  } // PostData()

  render() {
    return (
      <section id="submit">
      <div className="formBoxShown">
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
        <label><input type="radio" id="amsterdam-selected" name="station" value="amsterdam" />Amsterdam</label>
        <label><input type="radio" id="dubai-selected" name="station" value="dubai" />Dubai</label>
        <label><input type="radio" id="helsinki-selected" name="station" value="helsinki" />Helsinki</label><br/>
        <label><input type="radio" id="new_york-selected" name="station" value="new_york" />New York</label>
        <label><input type="radio" id="tokyo-selected" name="station" value="tokyo" />Tokyo</label>
      </fieldset>

      <fieldset>
      <legend>Temperature scale</legend>
        <label>Select from following:</label>
        <label><input type="radio" id="celsius" name="tempScale" value="celsius" />celsius</label>
        <label><input type="radio" id="fahrenheit" name="tempScale" value="fahrenheit" />fahrenheit</label><br/>
      </fieldset>

      <fieldset>
      <legend>Enter a temperature</legend>
        <label>Temperature</label>
        <input type="number" id="temperature" name="temperature" step="0.01" min="-140.00" max="140.00"/><br/>
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