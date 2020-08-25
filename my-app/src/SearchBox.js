import React, { Component } from 'react';


const SearchBox = (props) => {

    return (
        <div className="search-area">
        <form onSubmit={props.handleSubmit}>
            <input onChange={props.handleChange} placeholder="Search By Book Name" type="text"/>
            <button type="submit">Search</button>
            <select value={props.sort} onChange={props.handleSort} >
                <option value="" disabled selected>Sort</option>
                
                <option value="Newest">Newer Books</option>

                <option value="Oldest">Older Books</option>
            </select>
        </form>
        </div>
      
    );
}

export default SearchBox;
