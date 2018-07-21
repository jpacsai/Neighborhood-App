import { combineReducers } from 'redux';
import eventsReducer from './events-reducer';
import filterReducer from './filter-reducer';

export default combineReducers({
    events: eventsReducer,
    filters: filterReducer
});