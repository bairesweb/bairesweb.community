import React from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

const Icon = ({ className, name }) => {
	return <i className={`bw-icon bw-icon-${name} ${className}`} />;
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default Icon;
