import React from 'react';

const List = (props) => {
    console.log(props.list)
    return props.list.map((event) => {
        return (
            <li key={ event.id }>{ event.name }
                { <p>date: { event.dates.start.localDate } time: { event.dates.start.localTime }</p> }
            </li>
        )
    })
}

export default List;