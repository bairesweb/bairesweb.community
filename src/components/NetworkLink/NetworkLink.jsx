import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './NetworkLink.scss';

// Components
import Icon from 'components/Icon/Icon.jsx';

const NetworkLink = props => {
	const classes = {
		[`size-${props.size}`]: props.size,
		[`network-icon-${props.icon}`]: props.icon
	};
	return (
		<a
			className={classNames('network-link', classes, props.className)}
			href={props.link}>
			<div className="network-icon-wrapper">
				<Icon className="network-icon" name={props.icon} />
				<h6 className="network-title">{props.name}</h6>
			</div>
		</a>
	);
};

NetworkLink.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.string,
	size: PropTypes.oneOf(['xs', 'md', 'lg']),
	className: PropTypes.string
};

export default NetworkLink;
