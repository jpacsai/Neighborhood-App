import { combineReducers } from 'redux';
import eventReducer from './events-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';
import filterEventsReducer from './filterEvents-reducer';
import selectDayReducer from './selectDay-reducer';
import fetchReadyReducer from './fetchReady-reducer';
import sortByReducer from './sortBy-reducer';
import displayListReducer from './displayList-reducer';
import venueReducer from './venue-reducer';
import modalVisibilityReducer from './modalVisibility-reducer';
import allVenuesReducer from './allVenues-reducer';
import mapSizeReducer from './mapSize-reducer';
import defaultBoundsReducer from './defaultBounds-reducer';
import filterBoundsReducer from './filterBounds-reducer';

export default combineReducers({
	events: eventReducer,
	fetchReady: fetchReadyReducer,
    filterLists: createFilterReducer,
    filtersToApply: combineReducers({
		locations: filtersToApplyReducer,
		selectedDays: selectDayReducer
	}),
    filteredEvents: filterEventsReducer,
	modalVisibility: modalVisibilityReducer,
	displayList: displayListReducer,
	sortBy: sortByReducer,
	allVenues: allVenuesReducer,
	venues: venueReducer,
	mapSize: mapSizeReducer,
	defaultBounds: defaultBoundsReducer,
	filterBounds: filterBoundsReducer
});

/* STATE STRUCTURE:

const store = {
	events: [],				objects
	fetchReady: boolean,	boolean
	filterLists: {
		locations: [],		string
		dates: [], 			string --> format: "2018-07-28"
		datesObj: []		date Obj
	},
	filtersToApply: {
		locations: [],		array
		selectedDates: []	new Date()
	}
	filteredEvents: [],		object
	modalVisibility: boolean,	boolean,
	displayList: []			array
	sortBy: ''				string ( 'abc' / 'date' )
	
	mapSize: {
		width: num,
		height: num
	}
	defaultBounds: {
		ne: {
			lat: num
			lng: num
		}
		sw: {
			lat: num
			lng: num
		}
	}
}

*/