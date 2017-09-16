import React, { Component } from 'react';
import logo from './images/bairesWeb-logo-blanco.svg';
import './Home.scss';

// Components
import { Grid, Row, Col } from 'components/Grid';

class App extends Component {
	render() {
		return (
			<header className="hero">
				<Grid fluid>
					<Row>
						<Col sm={12}>
							<img src={logo} className="logo" alt="logo" />
							<h1 hidden>BairesWeb</h1>
							<p>
								Sitio web oficial de la comunidad de{' '}
								<a href="https://www.meetup.com/es-ES/bairesweb/">BairesWeb</a>
							</p>
						</Col>
					</Row>
				</Grid>
			</header>
		);
	}
}

export default App;
