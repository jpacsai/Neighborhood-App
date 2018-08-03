import React, { Component } from 'react';
import { loadData } from './actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MapContainer from './containers/map-container';
import { toggleAside } from './actions/toggleAside';
import Aside from './components/Aside';

require('../css/index.css');

class App extends Component {

	componentDidMount() {
		const { loadData } = this.props;
		loadData();
	}

	render() {
		const { toggleAside, showAside } = this.props;

		return (
			<div>
				<header>
					<h1 className='title'>Last Minute Concerts</h1>
					<p className='sub-title'>Find concerts for the next 7 days in Northern England</p>
				</header>

				<nav>
					<button 
						className='aside-toggle-btn'
						onClick={ () => toggleAside(showAside) }
					>
						<i className="fas fa-bars"></i>
					</button>
				</nav>

				<main>
					<Aside />
					<MapContainer />
				</main>

			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
		events: state.events.events,
		showAside: state.showAside,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		loadData: loadData,
		toggleAside,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no