import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
// import filterReducer from './filter-reducer';
import createFilterReducer from './createFilter-reducer';
import filtersToApplyReducer from './filtersToApply-reducer';

export default combineReducers({
    events: eventsReducer,
    filters: createFilterReducer,
    filtersToApply: filtersToApplyReducer
});

/* STATE STRUCTURE:

const store = {
  events: {
    events: [],
    ( filteredEvents: [], ) not ready yet
  },
  filters: {
    genres: [],
    locations: []
  }
}

*/