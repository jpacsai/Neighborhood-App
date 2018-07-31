export function closeUp(event) {

    console.log('closeup', event)
    const value = true;

    return {
        type: 'TOGGLE_CLOSEUP',
        value,
        event
    }
}