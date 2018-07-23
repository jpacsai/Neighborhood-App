import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';
import filterEventsReducer from './filterEvents-reducer';
import hideDateReducer from './hideDate-reducer';

export default combineReducers({
    events: eventsReducer,
    filters: createFilterReducer,
    filtersToApply: filtersToApplyReducer,
    filteredEvents: filterEventsReducer,
    dateHidden: hideDateReducer
});

/* STATE STRUCTURE:

const store = {
	events: [],
	filters: {                // change property name to filterLists
		genres: [],
		locations: []
	},
	filtersToApply: {
		genre: '',
		location: ''
	},
	filteredEvents: [],
	dateHidden: boolean
}

*/