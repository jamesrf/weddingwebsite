import React from 'react';

class TextField extends React.Component {

  render() {
      console.dir(this.props);

    return (
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
    <label htmlFor="input_text" className="mdl-textfield__label">{this.props.label}</label>
    <input  onChange={this.props.onChange} type={this.props.inputType} className="mdl-textfield__input" id={this.props.id} />
    </div>
    )
  }
}

TextField.defaultProps = {
  inputType: 'text'
};

TextField.propTypes = {
    inputType: React.PropTypes.string
}

export default TextField;