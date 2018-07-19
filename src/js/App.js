import React from 'react';
import Filters from './components/Filters';
import ListContainer from './containers/list-container';
import MapContainer from './containers/map-container';
require('../index.css');

const App = () => (
	<div>
		<header>
			<h1>Neighborhood App</h1>
		</header>
		<Filters />
		<main>
			<ListContainer />
			<MapContainer />
		</main>
	</div>
)

export default App;
