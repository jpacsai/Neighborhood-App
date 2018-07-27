import React, { Component } from 'react';
import { loadData } from './actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createFilters } from './actions/createFilters';
import FilterContainer from './containers/filter-container';
import List from './components/List';
import MapContainer from './containers/map-container';
import { sortBy } from './actions/sortBy';

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

	sorting(arr, method) {
		if (arr) {
			switch(method) {
				case 'abc':
					return this.sortByAlphabet(arr);
				case 'date':
					return this.sortByDate(arr);
				case 'location':
					return this.sortByLocation(arr);
				default:
					return this.sortByAlphabet(arr);
			}
		}
		return '';
	}

	sortByDate(arr) {
		if (arr) {
			const newArr = arr.slice(0);
			newArr.sort((a, b) => a.dates.start.dateObj.getTime() - b.dates.start.dateObj.getTime());
		return newArr;
		}
	}

	sortByAlphabet(arr) {
		if (arr) {
			const newArr = arr.slice(0);
			newArr.sort((a, b) => {
				var textA = a.name;
				var textB = b.name;
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			})
			return newArr;
		}
	}

	sortByLocation(arr) {
		if (arr) {
			const newArr = arr.slice(0);
			newArr.sort((a, b) => {
				var locationA = a._embedded.venues[0].city.name;
				var locationB = b._embedded.venues[0].city.name;
				return (locationA < locationB) ? -1 : (locationA > locationB) ? 1 : 0;
			});
			return newArr;
		}
	}

	render() {
		const { sortType, displayWhich, fetchReady, sortAction } = this.props;

		const sortedList = this.sorting(displayWhich, sortType);

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
							{ fetchReady && 
								<p className='event-count'><span>{ sortedList.length || '0' } event{ sortedList.length > 1 && 's'} found</span>
									<select 
										className='event-list-sortBy-btn'
										onChange={ (e) => sortAction(e) }
									>
										<option value="abc">Abc</option>
										<option value="date">Date</option>
										<option value="location">Location</option>
									</select>
								</p>
							} 
							<ul className='event-list'>
							{ fetchReady &&
								(( sortedList.length === 0 && <li className='event'>{ 'no match found' }</li> ) || <List list={ sortedList } /> ) }
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
		fetchReady: state.fetchReady,
		locations: state.filterLists.locations,
		filteredEvents: state.filteredEvents,
		isHidden: state.isHidden,
		sortType: state.sortBy,
		displayWhich: state.displayList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		loadData: loadData,
		createFilters: createFilters,
		sortAction: sortBy
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no