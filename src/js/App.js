import React, { Component } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Filters from './components/Filters';


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Filters />
				<main>
					<Map />
				</main>
			</div>
		);
	}
}

export default App;
