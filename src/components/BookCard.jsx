import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ image, title, author, rating, price }) => {
    return (
        <div className="book-card">
            <img src={image} alt={title} className="book-image" />
            <h3 className="book-title">{title}</h3>
            <p className="book-author">by {author}</p>
            <p className="book-rating">Rating: {rating}</p>
            <p className="book-price">Price: ${price}</p>
        </div>
    );
};

BookCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

export default BookCard;
