export function closeUp(val) {

    const payload = val ? false : true;

    return {
        type: 'TOGGLE_CLOSEUP',
        payload
    }
}