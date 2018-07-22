import React, { Component } from 'react';
import MapContainer from './containers/map-container';
import { loadData } from './actions/eventFetch';
import { connect } from 'react-redux';
import List from './components/List';
import FilterContainer from './containers/filter-container';
import { createFilters } from './actions/createFilters';
require('../css/index.css');

class App extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadData()).then(() => {
			dispatch(createFilters(this.props.events));
		});
	}

	render() {
		return (
			<div>
				<header>
					<h1 className='title'>Neighborhood App</h1>
				</header>
				<main>
					<aside className='side-menu'>
						<FilterContainer events={this.props.events} genres={ this.props.genres } locations={ this.props.locations }/>
						<section className='event-list-container'>
							<h2 className={ ['aside-header', 'aside-header-list'].join(' ') }>Events</h2>
							<ul className='event-list'>
								<List list={ this.props.events }/>
							</ul>
						</section>
					</aside>
					<MapContainer />
				</main>
			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
		events: state.events.events,
		genres: state.filters.genres,
		locations: state.filters.locations,
		// filteredEvents: state.filteredEvents
    }
}

export default connect(mapStateToProps)(App);


// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no