import React, { Component } from 'react';
import { loadData } from './actions/eventFetch';
import { connect } from 'react-redux';
import { createFilters } from './actions/createFilters';
import FilterContainer from './containers/filter-container';
import List from './components/List';
import MapContainer from './containers/map-container';

require('../css/index.css');

class App extends Component {

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(loadData()).then(() => {
			dispatch(createFilters(this.props.events));
		});
	}

	render() {
		const displayList = this.props.filteredEvents.length === 0 ? this.props.events : 
			this.props.filteredEvents === 'no match found' ? 'no match' : this.props.filteredEvents;

		const basicEventStyle = 'event-list-container';
		const compactEventStyle = 'event-list-container-compact';

		const eventStyle = this.props.isHidden ? basicEventStyle : [basicEventStyle, compactEventStyle].join(' ');

		return (
			<div>
				<header>
					<h1 className='title'>Neighborhood App</h1>
				</header>

				<main>
					<aside className='side-menu'>
						<FilterContainer 
							events={ this.props.events }
							genres={ this.props.genres }
							locations={ this.props.locations }
						/>
						<section className={ eventStyle }>
							<h2 className={ ['aside-header', 'aside-header-list'].join(' ') }>Events</h2>
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
		genres: state.filters.genres,
		locations: state.filters.locations,
		filteredEvents: state.filteredEvents,
		isHidden: state.dateHidden
    }
}

export default connect(mapStateToProps)(App);

// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no