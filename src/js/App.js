import React, { Component } from 'react';
import { loadData } from './actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FilterContainer from './containers/filter-container';
import List from './components/List';
import MapContainer from './containers/map-container';
import { sortingEvents } from './actions/sortingEvents';
import { toggleAside } from './actions/toggleAside';

require('../css/index.css');

class App extends Component {

	componentDidMount() {
		const { loadData } = this.props;
		loadData();
	}

	render() {
		const { fetchReady, sortAction, displayList, toggleAside, showAside } = this.props;

		const asideStyle = showAside ? 'aside-show' : 'aside-hide';

		return (
			<div>
				<header>
					<h1 className='title'>Last Minute Concerts</h1>
					<p className='sub-title'>Find concerts for next week in Northern England</p>
				</header>
				<nav>
					<button 
						className='aside-toggle-btn'
						onClick={ () => {
							toggleAside(showAside);
						} }
					>X</button>
				</nav>

				<main>
					<aside className={ asideStyle }>
						<FilterContainer />
						<section className='event-list-container'>
							<h2 className='aside-header aside-header-list'>Events</h2>
							{ fetchReady && 
								<p className='event-count'><span>{ displayList.length || '0' } event{ displayList.length > 1 && 's'} found</span>
									<select 
										className='event-list-sortBy-btn'
										onChange={ (e) => sortAction(displayList, e) }
									>
										<option value="abc">Abc</option>
										<option value="date">Date</option>
										<option value="location">Location</option>
									</select>
								</p>
							} 
							<ul className='event-list'>
							{ fetchReady &&
								(( displayList.length === 0 && <li className='event'>{ 'no match found' }</li> ) || <List list={ displayList } /> ) }
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
		displayList: state.displayList,
		showAside: state.showAside
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		loadData: loadData,
		sortAction: sortingEvents,
		toggleAside
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no