import React from 'react';

const Filters = () => (
            <section className='filter-container'>
                <h2 className='filter-container-header'>Filters</h2>
                <select>
                    <option value="location">Location</option>
                    <option value="date">Date</option>
                </select>
            </section>
)

export default Filters;