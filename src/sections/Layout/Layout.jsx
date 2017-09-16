import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
	render() {
		return <div style={{ width: '100%' }}>{this.props.children}</div>;
	}
}

Layout.propTypes = {};

export default Layout;
