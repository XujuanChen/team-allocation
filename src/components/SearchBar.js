import React from 'react'

const SearchBar = ({ team, handleChange }) => {
    return (
        <select className='form-select form-select-lg mt-3' value={team} onChange={handleChange}>
            <option value='A'>Team A</option>
            <option value='B'>Team B</option>
            <option value='C'>Team C</option>
            <option value='D'>Team D</option>
        </select>
    )
}

export default SearchBar