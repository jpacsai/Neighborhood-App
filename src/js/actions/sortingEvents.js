import { sortSwitch } from './sortSwitch';

export function sortingEvents(e, list) {

    const method = e.target.value
    const sortedList = sortSwitch(method, list);

    const message = 'SORTING_LIST';
    
    return {
        type: message,
        sortedList,
        sortByVal: method
    }
}