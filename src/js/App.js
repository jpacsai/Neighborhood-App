import React, { Component } from 'react';
import { loadData } from './actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createFilters } from './actions/createFilters';
import FilterContainer from './containers/filter-container';
import List from './components/List';
import MapContainer from './containers/map-container';

require('../css/index.css');

class App extends Component {

	componentDidMount() {
		const { loadData, createFilters } = this.props;
		loadData().then(() => {
			createFilters(this.props.events);
		});
	}

	calculateNum() {
		return this.props.filteredEvents.length === 0 ? this.props.events.length : 
		this.props.filteredEvents === 'no match found' ? 'no match' : this.props.filteredEvents.length;
	}

	render() {
		const displayList = this.props.filteredEvents.length === 0 ? this.props.events : 
			this.props.filteredEvents === 'no match found' ? 'no match' : this.props.filteredEvents;

		return (
			<div>
				<header>
					<h1 className='title'>Neighborhood App</h1>
				</header>

				<main>
					<aside className='side-menu'>
						<FilterContainer />
						<section className='event-list-container'>
							<h2 className='aside-header aside-header-list'>Events</h2>
							{ this.props.filteredEvents && this.props.events && 
								<p className='event-count'>{ displayList.length } event{ displayList.length > 1 && 's'} found</p>
							} 
							<ul className='event-list'>
								<List list={ displayList }/>
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
		locations: state.filters.locations,
		filteredEvents: state.filteredEvents,
		isHidden: state.isHidden
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		loadData: loadData,
		createFilters: createFilters
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no