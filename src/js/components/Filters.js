import React from 'react';
import filterList from './../actions/filterEvents';

const Filters = (props) => {
    const { title, list, events, locations, genres } = props;
    if (list) {
        return (
            <select selected={ title } onChange={ (e) => filterList(events, title, e) }>
                <option disabled value={title}>Select {title}</option>
                { props.list.map(item => {
                    return (
                        <option key={item} value={item}>{item}</option>
                    )
                }) }
            </select>
        )
    }
    else {
        return null;
    }
}

export default Filters;