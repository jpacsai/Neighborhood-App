import React, { Component } from 'react';
import { loadData } from '../actions/eventFetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from './List';
import { sortingEvents } from '../actions/sortingEvents';
import { modalVisibility } from '../actions/modalVisibility';
import FilterModal from './FilterModal';

class Aside extends Component {

	render() {
		const { fetchReady, sortAction, displayList, showAside, modalVisibility, modalVisible } = this.props;

		const asideStyle = showAside ? 'aside-show' : 'aside-hide';

		return (

            <aside className={ asideStyle }>
                <section className='filter-container'>
                    <h2 className='aside-header aside-header-filter'>Filters</h2>
                    <button 
                        className='filter-modal-btn'
                        type="button"
                        onClick={ () => {
                            modalVisibility(modalVisible);
                        } }>
                        Show Filters
                    </button>
                    { modalVisible && < FilterModal /> }
                </section>
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
		modalVisibility
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);