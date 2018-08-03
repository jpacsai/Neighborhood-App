export function hideModal() {
    const message = 'HIDE_FILTER_MODAL';

    return modalVisibilityDispatcher(message);
}

function modalVisibilityDispatcher(message) {
    return {
        type: message,
        payload: false
    }
}