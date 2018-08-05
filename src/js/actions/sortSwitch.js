import { sortByAlphabet } from './sortByAlphabet';
import { sortByDate } from './sortByDate';
import { sortByLocation } from './sortByLocation';

// sorts event list by the selected method
export function sortSwitch(list, sortMethod) {

    const val = sortMethod || 'abc';

    const sortedList = ((val) => {
        switch(val) {
            case 'abc':
                return sortByAlphabet(list);
            case 'date':
                return sortByDate(list);
            case 'location':
                return sortByLocation(list);
            default:
                return sortByAlphabet(list);
        }
    })(val);

    return sortedList;
}