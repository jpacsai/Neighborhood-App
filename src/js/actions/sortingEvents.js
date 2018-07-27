import { switchSort } from './switchSort';

export function sortingEvents(e, list) {

    const method = e.target.value
    const sortedList = switchSort(method, list);

    const message = 'SORTING_LIST';
    
    return {
        type: message,
        sortedList,
        sortByVal: method
    }
}