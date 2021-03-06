import React from 'react';  
import ComponentMixin from './component_mixin';

import '../../sass/style.scss';
var _ = require('underscore');

class Input extends ComponentMixin {
    constructor(props) {
	super(props);
	this._bind('_onChange');
    }
    

    setValue(value) {
	super.setValue(value);
    }

    _onChange(event) {
	this.setValue(event.target.value);
    }
    
    renderLabel() {
	let label;
	if (this.props.label) {
	    label = (
		<label htmlFor={this.props.name} className="control-label">{this.props.label}</label>
	    );
	}
	return label;
    }
    renderMessage(message) {
	return(
	    <span className="help-block validation-message">{message}</span>
	);
    }
    render() {
	let classes = this.showError() ? "form-group has-error" : "form-group";


	let reqKeys = ['name', 'type', 'value', 'placeholder', 'className'];
	let _props = _.pick(this.props, reqKeys);
	let _classname = _props.className || "form-control";    
	let other = _.omit(this.props, reqKeys);
	let type = _props.type || "text";
	
    return(
	<div className={classes}>
          {this.renderLabel()}
        <input 
           type={type}
	   name={_props.name}
	   placeholder={_props.placeholder}
           value={this.getValue()}
           className={_classname}
           {...other}
           onChange={this._onChange}
        />
        {this.renderMessage(this.getErrorMessage())}
      </div>
    );
  }
  
};

Input.defaultProps = {
  validationError: '',
  validationErrors: {},
  value: ''
};
export default Input;
