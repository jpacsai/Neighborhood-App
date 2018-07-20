import React from 'react';
import Filters from './components/Filters';
import ListContainer from './containers/list-container';
import MapContainer from './containers/map-container';
require('../css/index.css');

const App = () => (
	<div>
		<header>
			<h1 className='title'>Neighborhood App</h1>
		</header>
		<main>
			<aside className='side-menu'>
				<Filters />
				<ListContainer />
			</aside>
			<MapContainer />
		</main>
	</div>
)

export default App;


// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no