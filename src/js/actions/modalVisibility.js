export function modalVisibility(val) {

    const value = val ? false : true;
    const message = 'TOGGLE_MODAL_VISIBILITY';

    return modalVisibilityDispatcher(message, value);
}

function modalVisibilityDispatcher(message, value) {
    return {
        type: message,
        payload: value
    }
}