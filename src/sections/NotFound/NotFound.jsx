import React from 'react';

export const NotFound = props => {
	return (
		<div className={props.className}>
			<h1>Ops!</h1>
			<p>Esta página no existe.</p>
		</div>
	);
};

export default NotFound;
