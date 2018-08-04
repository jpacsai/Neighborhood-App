import React, { Component } from 'react';
import { loadData } from './actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from './components/Map';
import { toggleAside } from './actions/toggleAside';
import Aside from './components/Aside';
import { highligthMarker_Out } from './actions/highligthMarker_Out';

require('../css/index.css');

class App extends Component {

	componentDidMount() {
		const { loadData } = this.props;
		loadData();
	}

	render() {
		const { toggleAside, showAside, modalVisible, fetchReady } = this.props;

		return (
			fetchReady !== 'error' ? (<div>
				<header>
					<h1 className='title'>Last Minute Concerts</h1>
					<p className='sub-title'>Find concerts for the next 7 days in Northern England</p>
				</header>

				<nav>
					{ !modalVisible && 
						<button 
							className='aside-toggle-btn'
							aria-label='Show side menu'
							onClick={ () => toggleAside(showAside) 
							}
						>
							<i className="fas fa-bars"></i>
						</button>
					}
				</nav>

				<main>
					<Aside />
					<Map />
				</main>

			</div> ) : 
			(
				<div className='error-message'>
					<h1>Error occurred. Please try again later.</h1>
				</div>
			)
		)
	}
}

function mapStateToProps(state) {
    return {
		showAside: state.showAside,
		modalVisible: state.modalVisibility,
		fetchReady: state.fetchReady
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		loadData: loadData,
		toggleAside,
		highligthMarker_Out
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// https://app.ticketmaster.com/discovery/v2/events.JSON?apikey=GEKqrkYNGL9POROireeB9D6fzdpWP8dj&marketId=204&startDateTime=2018-07-19T15:44:00Z&endDateTime=2018-07-26T23:59:00Z&includeTBA=no&includeTBD=no