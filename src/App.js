import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './globe-flag.png';

class CountryModal extends React.Component {
	render() {
		return <div class="modal-dialog modal-dialog-centered" />;
	}
}

class CountryCard extends React.Component {
	constructor(props){
		super(props)
		this.state = {showModal: 'N' }
		this.showCountryDetails = this.showCountryDetails.bind(this)
	}
	showCountryDetails(){
		console.log(this.props.country.name+' CLICKED')
		this.setState({showModal: 'Y'});
		console.log('showModal state'+this.state.showModal)
	

	}
	render() {
		return (
			<div className="card" style={{ marginLeft: '17px', marginTop: '10px' }} onClick={this.showCountryDetails}>
				<img src={this.props.country.flag} className="card-img-top" alt="..." width="100" height="100" />
				<div className="card-body">
					<h5 className="card-title">{this.props.country.name}</h5>
					<p className="card-text">
						<ul>
							<li>Capital: {this.props.country.capital}</li>
							<li>Population: {this.props.country.population}</li>
							<li>ShortCode: {this.props.country.alpha3Code}</li>
						</ul>
					</p>
				</div>
			</div>
		);
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { countries: []};
		this.fetchCountries = this.fetchCountries.bind(this);
	}

	fetchCountries(e) {
		console.log(`INPUT ENTERED:${e.target.value}`);
		if (e.target.value) {
			this.setState({ countries: [] });
			let countryRegex = new RegExp(`^${e.target.value}`, 'i');
			console.log('Country to be matched: ' + countryRegex);
			fetch('https://restcountries.eu/rest/v2/all')
				.then((res) => res.json())
				.then((countries) => countries)
				.then((countries) => {
					// console.log(countries);
					countries.forEach((country) => {
						if (countryRegex.test(country.name)) {
							this.setState(function(state) {
								return { countries: [ ...state.countries, country ] };
							});
						}
					});
				})
				.catch((err) => err.message);
		}
	}

	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-expand-lg navbar-light bg-light ">
					<a className="navbar-brand" href="#">
						<img src={logo} alt="" width="60" height="60" className="d-inline-block align-top" />
						Country-Catalog
					</a>

					<input
						className="form-control me-3"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onKeyUp={this.fetchCountries}
					/>
				</nav>

				<div className="row  row-cols-5 row-cols-lg-5 g-2 g-lg-3">
					{this.state.countries.length > 0 &&
						this.state.countries.map((country) => <CountryCard key={country.name} country={country} />)}
				</div>
				{/* {this.state.showModal == 'Y' &&
						 />)} */}
			</React.Fragment>
		);
	}
}

function App() {
	return (
		<React.Fragment>
			<SearchBar />
		</React.Fragment>
	);
}

export default App;
