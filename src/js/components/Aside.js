import React, { Component } from 'react';
import { loadData } from '../actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from './List';
import { sortingEvents } from '../actions/sortingEvents';
import { modalVisibility } from '../actions/modalVisibility';
import FilterModal from './FilterModal';
import { closeInfoWindow } from './../actions/closeInfoWindow';
import { highligthMarker_Out } from './../actions/highligthMarker_Out';

class Aside extends Component {

	render() {
		const { fetchReady, sortAction, displayList, showAside, modalVisibility, modalVisible, closeInfoWindow, highligthMarker_Out } = this.props;

		const asideStyle = showAside ? 'aside-show' : 'aside-hide';

		return (

            <aside className={ asideStyle }>

                <h2 className='aside-header'>Events</h2>
                

                { modalVisible && < FilterModal /> }

                { fetchReady && 
                    <div className='event-control'>
                        <p className='event-control-counter'>{ displayList.length || '0' } event{ displayList.length > 1 && 's'} found</p>

                        <div className='event-control-btn-container'>
                            <button 
                                className='filter-btn'
                                type="button"
                                onClick={ () => {
                                    modalVisibility(modalVisible);
                                    closeInfoWindow();
                                    highligthMarker_Out();
                                } }>
                                Show Filters
                            </button>

                            <select 
                                className='event-list-sortBy-btn'
                                onChange={ (e) => sortAction(displayList, e) }
                            >
                                <option value="abc">Abc</option>
                                <option value="date">Date</option>
                                <option value="location">Location</option>
                            </select>
                        </div>
                    </div>
                } 

                <ul className='event-list'>
                { fetchReady &&
                    (( displayList.length === 0 && <li className='event'>{ 'no match found' }</li> ) || <List list={ displayList } /> ) }
                </ul>

            </aside>
        )
	}
}

function mapStateToProps(state) {
    return {
		events: state.events.events,
		fetchReady: state.fetchReady,
		displayList: state.displayList,
		showAside: state.showAside,
		modalVisible: state.modalVisibility
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		loadData: loadData,
		sortAction: sortingEvents,
        modalVisibility,
        closeInfoWindow,
        highligthMarker_Out
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);