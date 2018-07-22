import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
// import filterReducer from './filter-reducer';
import createFilterReducer from './createFilter-reducer';

export default combineReducers({
    events: eventsReducer,
    filters: createFilterReducer
});

/* STATE STRUCTURE:

const store = {
  events: {
    allEvents: [],
    filteredEvents: [],
  },
  filters: {
    genres: [],
    locations: []
  }
}

*/