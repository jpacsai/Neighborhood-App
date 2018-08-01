export function closeCloseUp() {

    const value = false;

    console.log('close closeup')

    return {
        type: 'CLOSE_CLOSEUP',
        value,
        lat: null,
        lng: null
    }
}