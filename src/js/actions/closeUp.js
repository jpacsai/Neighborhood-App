export function closeUp(event) {

    console.log('closeup', event)
    const payload = true;

    return {
        type: 'TOGGLE_CLOSEUP',
        payload
    }
}