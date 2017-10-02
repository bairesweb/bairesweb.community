import React from 'react';
import PropTypes from 'prop-types';

import './Icon.scss';

const Icon = ({ className, name }) => {
	const iconClass = 'bwIcon';
	return <i className={`${iconClass} ${iconClass}-${name} ${className}`} />;
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default Icon;
