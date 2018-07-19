import { combineReducers } from 'redux';
import PlaceList from './places-reducer';

const combinedReducers = combineReducers({
    places: PlaceList
});

export default combinedReducers;