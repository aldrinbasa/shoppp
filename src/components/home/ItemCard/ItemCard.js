import React from 'react';
import itemStyles from './ItemCard.module.css';

const ItemCard = () => {
    return (
        <section className={itemStyles.item}>
            <img className={itemStyles.image} src="/" />
            <p className={itemStyles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <span className={itemStyles.price}>$$</span>
        </section>
    );
};

export default ItemCard;