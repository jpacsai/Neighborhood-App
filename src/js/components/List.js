import React from 'react';

const List = (props) => {

    const { list } = props;

    if (list === 'no match') {
        return (
            <li className='event'>No match found</li>
        )
    }

    else if (list) {
        return list.map( (event) => {

            const date = event.dates.start.localDate;
            const time = event.dates.start.localTime ? (event.dates.start.localTime).slice(0, 5) : null;
            const location = event._embedded.venues[0].city.name;
            
            return (
                <li 
                    key={ event.id } 
                    className='event'
                    onClick={ () => console.log(event.name)}
                >
                    { event.name }
                    <p>Date: { date } { time } Location: { location }</p>
                </li>
            )
        })
    }

    else {
        return null;
    }
}

export default List;