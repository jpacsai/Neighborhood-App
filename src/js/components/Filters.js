import React from 'react';

const Filters = (props) => {
    const { title, list } = props;
    console.log('list: ',list);
    return (
        <select selected={ title }>
            <option disabled value={title}>Select {title}</option>
            { props.list.map(item => {
                return (
                    <option key={item} value={item}>Select {item}</option>
                )
            })}
        </select>
)}

export default Filters;