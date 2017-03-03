import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

import s from './RSVPForm.css';
import TextField from '../TextField/TextField';

class AttendanceInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {isAttending: true};
    this.toggleAttending = this.toggleAttending.bind(this);
  }

  toggleAttending(){
    if(this.state.isAttending){
        this.setState({isAttending:false});
    } else {
        this.setState({isAttending:true});
    }

  }

  render() {
    let scope = this;
    let attendanceSelector = (
        <div>
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
                <TextField label="Total Number of Guests"
                    onChange={this.props.changeHandler("guests")}
                    id="rsvpGuestCount" />
                <TextField label="Dietary Restrictions"
                    onChange={this.props.changeHandler("dietary")} 
                    id="rsvpDiet" />
                <TextField label="Special Requests"
                    onChange={this.props.changeHandler("special")}
                    id="rsvpRequest" />

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

             <ReactCSSTransitionGroup
              transitionName="attendance"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
                {attendanceOption}
            </ReactCSSTransitionGroup>

        </div>
    )
  }
}

export default AttendanceInfo;
