export function sortByLocation(arr) {
    if (arr) {
        const newArr = arr.slice(0);
        newArr.sort((a, b) => {
            var locationA = a._embedded.venues[0].city.name;
            var locationB = b._embedded.venues[0].city.name;
            return (locationA < locationB) ? -1 : (locationA > locationB) ? 1 : 0;
        });
        return newArr;
    }
}