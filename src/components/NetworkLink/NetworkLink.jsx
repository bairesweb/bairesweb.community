import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './NetworkLink.scss';

// Components
import Icon from 'components/Icon/Icon.jsx';

const NetworkLink = props => {
	return (
		<a
			className={classNames('network-link', props.className)}
			href={props.link}>
			<div className="network-icon-wrapper">
				<Icon className="network-icon" name={props.icon} />
			</div>
			<p className="network-name">{props.name}</p>
		</a>
	);
};

NetworkLink.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	icon: PropTypes.string,
	className: PropTypes.string
};

export default NetworkLink;
