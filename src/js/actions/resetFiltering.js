import { displayWhichList } from './displayList';

export function resetFiltering(events) {
    displayWhichList(events, []);

    return { 
        type: 'CLEAR_FILTERS'
    }
}