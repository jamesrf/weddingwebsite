import React from 'react';
import history from '../../src/history';

import ContactInfo from './ContactInfo';
import AttendanceInfo from './AttendanceInfo';
import s from './RSVPForm.css';

import * as firebase from 'firebase';


class RSVPForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "name":"",
      "email":"",
      "phone":"",
      "attending":"",
      "guests":"",
      "dietary":"",
      "special":"",
      "accomodations":"",
      "message":""
    }
    this.handleDataFieldChange = this.handleDataFieldChange.bind(this);
    this.submit = this.submit.bind(this);

  }
  submit(e){
    e.preventDefault();

    var subRef = firebase.database().ref('submissions');
    var formsub = subRef.push();
    formsub.set(this.state);
    
    alert("Thanks!");
    history.push("/");
  }

  handleDataFieldChange(field){
    return function(e){
      var newState = {};
      newState[field] = e.target.value;
      this.setState(newState);
    }.bind(this);
  }
  render() {
    return (
      <div className={`mdl-card mdl-shadow--2dp ${s.content}`}>
        <div className={`mdl-card__media mdl-color--white ${s.media}`}>
        </div>
        <div className="mdl-card__supporting-text">
            James and Melinda's Wedding <br/>
            Brock House Restaurant <br/>
            Sunday, October 8th, Vancouver, BC
        </div>
        <form ref={(form) => {this.dataForm = form;}} onSubmit={this.submit.bind(this)}>

            <ContactInfo changeHandler={this.handleDataFieldChange}/>
          
            <AttendanceInfo changeHandler={this.handleDataFieldChange}/>

            <br/>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <label htmlFor="input_text" className="mdl-textfield__label">Message to the Bride and Groom</label>
                <input onChange={this.handleDataFieldChange("message")} type="text" className="mdl-textfield__input" id="rsvpMessage" />
            </div>

            
            <br/><br/><br/>
            <div className={`mdl-card__actions mdl-card--border`}>
              <button className="mdl-button mdl-button--raised mdl-js-ripple-effect">Submit</button>
            </div>
        </form>
      </div>
    );
  }
}

export default RSVPForm;
