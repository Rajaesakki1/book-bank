import React, { useState } from 'react';

const SearchBar = ({ books, setFilteredBooks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = books.filter(book => 
            book.title.toLowerCase().includes(e.target.value.toLowerCase()) || 
            book.author.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredBooks(filtered);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search for books..." 
                value={searchTerm} 
                onChange={handleSearch} 
            />
        </div>
    );
};

export default SearchBar;