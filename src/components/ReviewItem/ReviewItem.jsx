import React from 'react';
import './ReviewItem.css'
import { FiTrash2 } from 'react-icons/fi';

const ReviewItem = ({ product,handleRemoveFromCart }) => {
    // console.log(product);
    const { id, img, name, price, shipping } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Shipping Charge: <span className='orange-text'>${shipping}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FiTrash2 className='delete-icon'></FiTrash2>
            </button>
        </div>
    );
};

export default ReviewItem;