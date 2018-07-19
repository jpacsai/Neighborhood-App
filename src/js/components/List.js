import React from 'react';

const List = (props) => {
    return props.list.map((place) => {
        return (
            <li key={ place.place }>{ place.place }
                <p>lat: { place.lat } lng: { place.lng }</p>
            </li>
        )
    })
}

export default List;