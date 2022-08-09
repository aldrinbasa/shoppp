import React from 'react';
import itemDetailsStyles from './ItemDetails.module.css';

import MainButton from '../UI/MainButton/MainButton';

const ItemDetails = () => {
    return (
        <div className={itemDetailsStyles.itemDetails}>
            <img src="/" alt=""/>
            <div className={itemDetailsStyles.details}>
                <p className={itemDetailsStyles.title}>Item title | Lorem ipsum dolor sit amet, consectetur </p>
                <p className={itemDetailsStyles.sellerName}>Seller Name</p>
                {/* Star rating something something */}
                <p className={itemDetailsStyles.starRating}></p>
                <p className={itemDetailsStyles.description}>Item description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className={itemDetailsStyles.price}>$$</p>
                <MainButton>Add to Cart</MainButton>
            </div>
        </div>
    );
};

export default ItemDetails;