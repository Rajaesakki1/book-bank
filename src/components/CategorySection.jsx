import React from 'react';

const CategorySection = ({ categories }) => {
    return (
        <div className="category-section">
            {categories.map(category => (
                <div key={category.id} className="category">
                    <h2>{category.name}</h2>
                    <ul>
                        {category.books.map(book => (
                            <li key={book.id}>{book.title}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CategorySection;