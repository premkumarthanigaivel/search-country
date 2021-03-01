import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './globe-flag.png';
import { Button, Col, Container, Row, Navbar, Form, CardColumns, Card, CardDeck, CardGroup } from 'react-bootstrap';

//fetch('https://restcountries.eu/rest/v2/name/eesti').then(res => res.json()).then(data=> console.log(data))

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.fetchCountries = this.fetchCountries.bind(this);
	}

	fetchCountries() {
		console.log('INSIDE FETCH COUNTRIES');
	}

	render() {
		return (
			<Navbar bg="light" variant="light">
				<Navbar.Brand href="#home">
					<img alt="" src={logo} width="60" height="60" className="d-inline-block align-top" />{' '}
					Country-Catalog
				</Navbar.Brand>
				<Form.Control type="text" placeholder="Search for Countries.." size="sm" />
			</Navbar>
		);
	}
}
class SearchResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row>
				<Col sm={2}>
					<Card>
						<Card.Img variant="top" src={logo} width="60" height="60" />
						<Card.Body>
							<Card.Title>Card title that wraps to a new line</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

function App() {
	return (
		<Container fluid>
			<SearchBar />
			<SearchResults />
		</Container>
	);
}

export default App;
