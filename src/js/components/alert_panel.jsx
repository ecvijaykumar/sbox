import React from 'react';
import '../../sass/style.scss';

import Alert from './alert';

class AlertPanel extends React.Component {
    static defaultProps : {
	  style: 'info',
	  alerts: []
    };

    constructor() {
	super();
    }
    render() {
	return (
	    <Alert style={this.props.style}>
	      {this.props.children}
	    </Alert>
	);
    }
};
	    
export default AlertPanel;

