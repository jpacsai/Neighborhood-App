export function closeUp(event) {

    const value = true;

    return {
        type: 'TOGGLE_CLOSEUP',
        value,
        event
    }
}