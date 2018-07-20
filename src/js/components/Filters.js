import React from 'react';

const Filters = (props) => (
    <select selected={ props.title }>
        <option disabled value={props.title}>Select {props.title}</option>
        <option value="location">{props.list}</option>
        <option value="date">Date</option>
    </select>
)

export default Filters;