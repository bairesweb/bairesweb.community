import React, { Component } from 'react';
import logo from './images/bairesWeb-logo-blanco.svg';
import './Home.scss';

// Components
import { Grid, Row, Col } from 'components/Grid';
import NetworkLink from 'components/NetworkLink/NetworkLink';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			networks: [
				{
					id: 'twitter',
					name: 'Twitter',
					href: 'https://twitter.com/bairesweb',
					user: '@bairesweb'
				},
				{
					id: 'meetup',
					name: 'Meetup',
					href: 'https://meetup.com/bairesweb',
					user: '@bairesweb'
				},
				{
					id: 'github',
					name: 'Github',
					href: 'https://github.com/bairesweb',
					user: '@bairesweb'
				}
			]
		};
	}

	render() {
		return (
			<div>
				<header className="hero">
					<Grid fluid>
						<Row>
							<Col sm={12}>
								<img src={logo} className="logo" alt="logo" />
								<h1 hidden>BairesWeb</h1>
								<p>
									Sitio web oficial de la comunidad de{' '}
									<a href="https://www.meetup.com/es-ES/bairesweb/">
										BairesWeb
									</a>
								</p>
							</Col>
						</Row>
					</Grid>
				</header>
				<ul className="social-network-list clear-list">
					{this.state.networks.map(network => (
						<li>
							<NetworkLink
								name={network.name}
								icon={network.id}
								link={network.href}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
