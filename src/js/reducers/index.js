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
	venues: venueReducer
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
	sortBy: ''				string ( 'abc' / 'date' )
	displayList: []			array
}

*/