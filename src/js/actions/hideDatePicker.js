export function hideDatePicker(val) {
    console.log('hideDatePicker: ', val)
    const value = val ? false : true;
    const message = 'TOGGLE_DATE_VISIBILITY';
    return hideDateDispatcher(message, value);
}

function hideDateDispatcher(message, value) {
    return {
        type: message,
        isHidden: value
    }
}