import React, { Component } from 'react';
// import FilterContainer from './containers/filter-container';
import ListContainer from './containers/list-container';
import MapContainer from './containers/map-container';
import * as loadData from './actions/eventFetch';
import { connect } from 'react-redux';
require('../css/index.css');

class App extends Component {
	componentWillMount() {
		this.props.loadData();
	}

	render() {
		return (
			<div>
				<header>
					<h1 className='title'>Neighborhood App</h1>
				</header>
				<main>
					<aside className='side-menu'>
						{/*<FilterContainer />*/}
						<ListContainer events={this.props.events}/>
					</aside>
					<MapContainer />
				</main>
			</div>
		)
	}
}

function mapStateToProps(state) {
    console.log('events: ', state.events);
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, loadData)(App);


// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no