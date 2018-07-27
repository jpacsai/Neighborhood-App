export function sortBy(e) {

    const val = e.target.value
    const message = val === 'abc' ? 'SORT_BY_ABC' : 'SORT_BY_DATE';
    
    return {
        type: message,
        sortBy: val
    }
}