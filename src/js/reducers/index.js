import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import filterReducer from './filter-reducer';

export default combineReducers({
    events: eventsReducer,
    filter: filterReducer
});

/*

const store = {
  events: {
    events: [],
    locations: [],
    genres: []
  },
  filter: {
    location: '',
    genre: ''
  }
}

*/