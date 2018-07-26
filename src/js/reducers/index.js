import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';
import filterEventsReducer from './filterEvents-reducer';
import hideDateReducer from './hideDate-reducer';
import selectDayReducer from './selectDay-reducer';

export default combineReducers({
    events: eventsReducer,
    filters: createFilterReducer,
    filtersToApply: combineReducers({
		locations: filtersToApplyReducer,
		selectedDays: selectDayReducer
	}),
    filteredEvents: filterEventsReducer,
	isHidden: hideDateReducer,

});

/* STATE STRUCTURE:

const store = {
	events: [],				objects
	filters: {                							// change property name to filterLists
		locations: [],		string
		dates: [] 			new Date()
	},
	filtersToApply: {
		locations: [],		array
		selectedDates: []	new Date()
	}
	filteredEvents: [],		object
	dateHidden: boolean,	boolean
	
}

*/