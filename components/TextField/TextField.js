import React from 'react';
import s from './TextField.css';
class TextField extends React.Component {
    componentDidMount(){
        componentHandler.upgradeDom();
    }

  render() {

    return (
    <div className="mdl-textfield mdl-js-textfield  mdl-textfield--floating-label">
    <label htmlFor={this.props.id} className="mdl-textfield__label">{this.props.label}</label>
    <input  onChange={this.props.onChange} type={this.props.inputType} className={`mdl-textfield__input ${s.input}`} id={this.props.id} />
    </div>
    )
  }
}

TextField.defaultProps = {
  inputType: 'text'
};

TextField.propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    inputType: React.PropTypes.string
}

export default TextField;
