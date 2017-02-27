import React from 'react';
import s from './RSVPForm.css';

class AttendanceInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {isAttending: true};
    this.toggleAttending = this.toggleAttending.bind(this);
  }

  toggleAttending(){
      console.dir(this);
    if(this.state.isAttending){
        this.setState({isAttending:false});
    } else {
        this.setState({isAttending:true});
    }

  }

  render() {
    let scope = this;
    let attendanceSelector = (
        <div className="FOO">
        <label htmlFor="option-1" className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
            <input type="radio" onChange={scope.toggleAttending} className="mdl-radio__button" id="option-1" name="rsvpAttending" value="yes" checked={this.state.isAttending}/>
            <span className="mdl-radio__label">Will Attend</span>
        </label>
        <br/>
        <label htmlFor="option-2" className="mdl-radio mdl-js-radio mdl-js-ripple-effect">
            <input type="radio" onChange={scope.toggleAttending} className="mdl-radio__button" id="option-2" name="rsvpAttending" value="no" />
            <span className="mdl-radio__label">Will Not Attend</span>
        </label>
        </div>
    );

    var attendanceOption;
    if(scope.state.isAttending){
        attendanceOption = (
            <div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                    <label htmlFor="input_text" className="mdl-textfield__label">Total Number of Guests</label>
                    <input onChange={this.props.changeHandler("guests")} type="text" className="mdl-textfield__input" id="rsvpGuestCount" />
                </div>

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                    <label htmlFor="input_text" className="mdl-textfield__label">Dietary Restrictions</label>
                    <input onChange={this.props.changeHandler("dietary")} type="text" className="mdl-textfield__input" id="rsvpDiet" />
                </div>

                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                    <label htmlFor="input_text" className="mdl-textfield__label">Special Requests</label>
                    <input onChange={this.props.changeHandler("special")} type="text" className="mdl-textfield__input" id="rsvpRequest" />
                </div>

                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-1">
                    <input onChange={this.props.changeHandler("accomodations")} type="checkbox" id="checkbox-1" className="mdl-checkbox__input"/>
                    <span className="mdl-checkbox__label">Contact me about accomodations</span>
                </label>


        </div>
        );
    }
    return (
        <div className={s.attendanceInfo}>

            {attendanceSelector}

            {attendanceOption}

        </div>
    )
  }
}

export default AttendanceInfo;