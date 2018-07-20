import React from 'react';

const List = (props) => {
    console.log(props.list)
    return props.list.map((event) => {
        return (
            <li key={ event.id } className='event'>{ event.name }
                { <p>Date: { event.dates.start.localDate } { (event.dates.start.localTime).slice(0,5) } Location: { event._embedded.venues[0].city.name }</p> }
            </li>
        )
    })
}

export default List;