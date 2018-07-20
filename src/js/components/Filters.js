import React from 'react';

const Filters = () => (
            <section className='filter-container'>
                <h2 className='aside-header'>Filters</h2>
                <select>
                    <option value="location">Location</option>
                    <option value="date">Date</option>
                </select>
                <button>Filter</button>
            </section>
)

export default Filters;