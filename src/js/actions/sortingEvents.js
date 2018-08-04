import { sortSwitch } from './sortSwitch';

export function sortingEvents(list, e, type) {

    const method = e.target.value
    const sortedList = sortSwitch(list, method);

    const message = type ? 'SORTING_SEARCH_LIST' : 'SORTING_LIST';
    
    return {
        type: message,
        sortedList,
        sortByVal: method
    }
}