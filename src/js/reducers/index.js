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
import boundsReducer from './bounds-reducer';
import hoverListReducer from './hoverList-reducer';
import infoWindowReducer from './infoWindow-reducer';
import toggleAsideReducer from './toggleAside-reducer';
import searchEventsReducer from './searchEvents-reducer';
import hoverMarkerReducer from './hoverMarker-reducer';
import searchValueReducer from './searchValueReducer';

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
	bounds: boundsReducer,
	hoverEvent: hoverListReducer,
	infoWindow: infoWindowReducer,
	showAside: toggleAsideReducer,
	searchResult: searchEventsReducer,
	hoverMarker: hoverMarkerReducer,
	searchValue: searchValueReducer
});

/* STATE STRUCTURE:

const store = {
	events: [],					array of objects
	fetchReady: boolean,		fetch is ready
	filterLists: {
		locations: [],			array of strings
		dates: [], 				array of strings --> format: "2018-07-28"
		datesObj: []			array of date Objects
	},
	filtersToApply: {
		locations: [],			
		selectedDates: []		
	}
	filteredEvents: [],			
	modalVisibility: boolean,	
	displayList: []				
	sortBy: ''					abc / date / location
	allVenues: []				array of all venue objects
	venues: []					array of filtered / searched venues to display
	mapSize: {
		width: num,
		height: num
	}
	bounds: {
		ne: {
			lat: num
			lng: num
		}
		sw: {
			lat: num
			lng: num
		}
	}
	hoverEvent: string			id of hovered event list item
	infoWindow: {
		lat: num
		lng: num
		events: []
	}
	showAside: boolean
	searchResult: []			array of events results of search
	hoverMarker: string			id of hovered venue
}

*/