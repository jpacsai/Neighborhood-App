import { sortSwitch } from './sortSwitch';

export function sortingEvents(list, e) {

    const method = e.target.value
    const sortedList = sortSwitch(list, method);

    const message = 'SORTING_LIST';
    
    return {
        type: message,
        sortedList,
        sortByVal: method
    }
}