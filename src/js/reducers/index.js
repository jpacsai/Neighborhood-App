import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import filterEventsReducer from './filterEvents-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';

export default combineReducers({
    events: eventsReducer,
    filters: createFilterReducer,
    filtersToApply: filtersToApplyReducer,
    // filteredEvents: filterEventsReducer
});

/* STATE STRUCTURE:

const store = {
  events: [],
  filters: {  // change to filterLists
    genres: [],
    locations: []
  },
  filtersToApply: {
    genre: '',
    location: ''
  },
  filteredEvents: []
}

*/