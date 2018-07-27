export function sortBy(e) {

    const val = e.target.value;
    const message = ((val) => {
        switch(val) {
            case 'abc':
                return 'SORT_BY_ABC';
            case 'date':
                return 'SORT_BY_DATE';
            case 'location':
                return 'SORT_BY_LOCATION';
            default:
                return 'SORT_BY_ABC';
        }
    })(val);

    console.log(message);

    return {
        type: message,
        sortBy: val
    }
}