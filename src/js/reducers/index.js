import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';
import filterEventsReducer from './filterEvents-reducer';
import hideDateReducer from './hideDate-reducer';
import selectDayReducer from './selectDay-reducer';

export default combineReducers({
    events: eventsReducer,
    filterLists: createFilterReducer,
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
	filterLists: {                							// change property name to filterLists
		locations: [],		string
		dates: [], 			string --> "2018-07-28"
		datesObj: []		date Obj
	},
	filtersToApply: {
		locations: [],		array
		selectedDates: []	new Date()
	}
	filteredEvents: [],		object
	dateHidden: boolean,	boolean
	
}

*/