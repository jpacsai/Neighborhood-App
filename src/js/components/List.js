import React from 'react';

const List = (props) => {
    if (props.list) {
        return props.list.map((event) => {
            const date = event.dates.start.localDate || 'unknown date';
            const time = event.dates.start.localTime || 'unkown time';
            const location = event._embedded.venues[0].city.name || 'unkown location';
            console.log('event ',event);
            return (
                <li key={ event.id } className='event'>{ event.name }
                    { <p>Date: { date } { time } Location: { location }</p> }
                </li>
            )
        })
    }
    else {
        return null;
    }
}

export default List;