import { DateUtils } from 'react-day-picker';

// click on calendar in filter section add that day to filter array in state
export function selectDay(day, selectedDays){
    let selected;
    let selectedIndex;

    if (selectedDays) {
        selectedIndex = selectedDays.findIndex(selectedDay =>
            DateUtils.isSameDay(selectedDay, day));
        selected = !(selectedIndex === -1);
    }
    else {
        selected = false;
    }

    const message = selected ? 'REMOVE_DAY' : 'ADD_DAY';
    let payload = selected ? selectedIndex : day;

    return selectDayDespatcher(message, payload)
}

function selectDayDespatcher(message,payload) {
    return {
        type: message,
        payload
    }
}