import React from 'react';
import s from './RSVPForm.css';

class ContactInfo extends React.Component {

  render() {
    return (
        <div className={s.contactInfo}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
            <label htmlFor="input_text" className="mdl-textfield__label">Your Name</label>
            <input  onChange={this.props.changeHandler("name")}  type="text" className="mdl-textfield__input" id="rsvpName" />
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
            <label htmlFor="input_text" className="mdl-textfield__label">Email</label>
            <input onChange={this.props.changeHandler("email")}  type="text" className="mdl-textfield__input" id="rsvpEmail" />
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
            <label htmlFor="input_text" className="mdl-textfield__label">Phone</label>
            <input onChange={this.props.changeHandler("phone")}  type="text" className="mdl-textfield__input" id="rsvpPhone" />
            </div>
        </div>
    )
  }
}

export default ContactInfo;