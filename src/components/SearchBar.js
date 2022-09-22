import React from 'react'

const SearchBar = ({ team, handleChange }) => {
    return (
        <select className='form-select form-select-lg mt-3' value={team} onChange={handleChange}>
            <option value='TeamA'>Team A</option>
            <option value='TeamB'>Team B</option>
            <option value='TeamC'>Team C</option>
            <option value='TeamD'>Team D</option>
        </select>
    )
}

export default SearchBar