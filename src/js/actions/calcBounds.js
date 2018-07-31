export function calcBounds(arr) {

    let highestLat = 0;
    let smallestLng = 0;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].lat > highestLat) {
            highestLat = arr[i].lat;
        }
        if (arr[i].lng < smallestLng) {
            smallestLng = arr[i].lng
        }
    }

    const nw = {
        lat: highestLat,
        lng: smallestLng
    }

    let smallestLat = 180;
    let highestLng = -180;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].lat < smallestLat) {
            smallestLat = arr[i].lat;
        }
        if (arr[i].lng > highestLng) {
            highestLng = arr[i].lng
        }
    }

    const se = {
        lat: smallestLat,
        lng: highestLng
    }

    return {
        nw,
        se
    }
}