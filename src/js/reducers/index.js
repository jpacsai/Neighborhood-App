import { combineReducers } from 'redux';
import eventReducer from './events-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';
import filterEventsReducer from './filterEvents-reducer';
import hideDateReducer from './hideDate-reducer';
import selectDayReducer from './selectDay-reducer';
import fetchReadyReducer from './fetchReady-reducer';
import sortByReducer from './sortBy-reducer';
import displayListReducer from './displayList-reducer';

export default combineReducers({
	events: eventReducer,
	fetchReady: fetchReadyReducer,
    filterLists: createFilterReducer,
    filtersToApply: combineReducers({
		locations: filtersToApplyReducer,
		selectedDays: selectDayReducer
	}),
    filteredEvents: filterEventsReducer,
	isHidden: hideDateReducer,
	sortBy: sortByReducer,
	displayList: displayListReducer,
	// venues
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
	dateHidden: boolean,	boolean,
	sortBy: ''				string ( 'abc' / 'date' )
	displayList: []			array
}

*/