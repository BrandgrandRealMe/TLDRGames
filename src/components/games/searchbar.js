import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Searchbar = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false); // New state to control visibility

    const handleChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setShowResults(event.target.value.length > 0); // Show results only if there's input
    };

    const filterData = () => {
        const results = data.filter((item) => {
            const searchText = searchTerm.toLowerCase();
            const textMatch = item.text.toLowerCase().includes(searchText);
            const descMatch = item.desc.toLowerCase().includes(searchText);
            return textMatch || descMatch;
        });
        setSearchResults(results);
    };

    useEffect(() => {
        filterData();
    }, [searchTerm]);

    return (
        <div className='searchSection'>
            <div className="searchContainer">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search..."
                    className="searchInput"
                />
                {showResults && searchResults.length > 0 && (  // Show results only with input and matches
                    <ul className="searchResults">
                        {searchResults.map((item) => (
                            <li key={item.text} className="searchResultItem">
                                <a href={item.href}>
                                    <a className="searchResultTitle">
                                        {item.text}
                                    </a>
                                    <p className="searchResultDesc">{item.desc}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Searchbar;