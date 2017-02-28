import React from 'react';
import s from './RSVPForm.css';
import TextField from '../TextField/TextField';

class ContactInfo extends React.Component {

  render() {
    return (
        <div className={s.contactInfo}>
          <TextField label="Your Name" 
                id="rsvpName" 
                onChange={this.props.changeHandler("name")}/>
          <TextField label="Email"
              id="rsvpEmail"
              onChange={this.props.changeHandler("email")} />

          <TextField label="Phone"
            id="rsvpPhone"
            onChange={this.props.changeHandler("phone")} />
        
        </div>
    )
  }
}

export default ContactInfo;