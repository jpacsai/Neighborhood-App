import React from 'react';

const Filters = (props) => {
    const { title, list } = props;
    if (list) {
        return (
            <select selected={ title }>
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