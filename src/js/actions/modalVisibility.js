export function toggleModal(val) {
    const message = 'TOGGLE_FILTER_MODAL';

    const value = val ? false : true;
    return modalVisibilityDispatcher(message, value);
}

function modalVisibilityDispatcher(message, value) {
    return {
        type: message,
        payload: value
    }
}