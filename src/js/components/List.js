import React from 'react';

const List = (props) => {
    if (props.list) {
        return props.list.map((event) => {
            console.log('event ',event);
            return (
                <li key={ event.id } className='event'>{ event.name }
                    { <p>Date: { event.dates.start.localDate } { (event.dates.start.localTime).slice(0,5) } Location: { event._embedded.venues[0].city.name }</p> }
                </li>
            )
        })
    }
    else {
        return null;
    }
}

export default List;