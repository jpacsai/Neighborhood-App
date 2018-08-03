export function showModal() {
    const message = 'SHOW_FILTER_MODAL';

    return modalVisibilityDispatcher(message);
}

function modalVisibilityDispatcher(message) {
    return {
        type: message,
        payload: true
    }
}