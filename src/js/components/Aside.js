import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from './List';
import { sortingEvents } from '../actions/sortingEvents';
import FilterModal from './FilterModal';
import { closeInfoWindow } from './../actions/closeInfoWindow';
import { highligthMarker_Out } from './../actions/highligthMarker_Out';
import { toggleModal } from './../actions/modalVisibility';
import { searchEvents } from './../actions/searchEvents';

class Aside extends Component {

	render() {
		const { fetchReady, sortAction, displayList, showAside, toggleModal, modalVisible, closeInfoWindow, highligthMarker_Out, searchEvents, searchResult } = this.props;

        const asideStyle = showAside ? 'aside-show' : 'aside-hide';
        
        const finalList = searchResult ? searchResult : displayList;

		return (

            <aside className={ asideStyle }>

                <h2 className='aside-header'>Events</h2>
                
                { modalVisible && < FilterModal /> }

                { fetchReady && 
                    <div className='event-control'>
                        <p className='event-control-counter'>{ finalList.length || '0' } event{ finalList.length > 1 && 's'} found</p>

                        <div className='event-control-btn-container'>
                            <button 
                                className='filter-btn'
                                type="button"
                                onClick={ () => {
                                    toggleModal(modalVisible);
                                    closeInfoWindow();
                                    highligthMarker_Out();
                                } }>
                                Show Filters
                            </button>

                            <select 
                                aria-label='Sort event list by'
                                id="sortBy"
                                className='event-list-sortBy-btn'
                                onChange={ (e) => sortAction(finalList, e, true) }
                            >
                                <option value="abc">Abc</option>
                                <option value="date">Date</option>
                                <option value="location">Location</option>
                            </select>

                        </div>
                        <input 
                            className='event-list-search' 
                            type='text' 
                            aria-label='Enter search text'
                            placeholder="Search events name"
                            onChange={ (event) => {
                                searchEvents(event, displayList);
                                closeInfoWindow();
                                highligthMarker_Out();
                            } }
                        />
                    </div>
                } 

                <ul className='event-list'>
                { fetchReady &&
                    (( displayList.length === 0 && <li className='event'>{ 'no match found' }</li> ) || <List list={ finalList } /> ) }
                </ul>

            </aside>
        )
	}
}

function mapStateToProps(state) {
    return {
		fetchReady: state.fetchReady,
		displayList: state.displayList,
		showAside: state.showAside,
        modalVisible: state.modalVisibility,
        searchResult: state.searchResult
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
		sortAction: sortingEvents,
        toggleModal,
        closeInfoWindow,
        highligthMarker_Out,
        searchEvents
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);