import React from "react";
import itemDetailsStyles from "./ItemDetails.module.css";

import MainButton from "../UI/MainButton/MainButton";

const ItemDetails = () => {
  return (
    <div className={itemDetailsStyles.itemDetails}>
      <img src="/" alt="" />
      <div className={itemDetailsStyles.details}>
        <p className={itemDetailsStyles.title}>
          Item title | Lorem ipsum dolor sit amet, consectetur{" "}
        </p>
        <p className={itemDetailsStyles.sellerName}>Seller Name</p>
        <svg
          className={itemDetailsStyles.starRating}
          width="146"
          height="22"
          viewBox="0 0 146 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 0L13.4697 7.60081L21.4616 7.60081L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00401 12.2984L0.538378 7.60081L8.53034 7.60081L11 0Z"
            fill="#FFFF00"
          />
          <path
            d="M42 0L44.4697 7.60081L52.4616 7.60081L45.996 12.2984L48.4656 19.8992L42 15.2016L35.5344 19.8992L38.004 12.2984L31.5384 7.60081L39.5303 7.60081L42 0Z"
            fill="#FFFF00"
          />
          <path
            d="M73 0L75.4697 7.60081L83.4616 7.60081L76.996 12.2984L79.4656 19.8992L73 15.2016L66.5344 19.8992L69.004 12.2984L62.5384 7.60081L70.5303 7.60081L73 0Z"
            fill="#FFFF00"
          />
          <path
            d="M104 0L106.47 7.60081L114.462 7.60081L107.996 12.2984L110.466 19.8992L104 15.2016L97.5344 19.8992L100.004 12.2984L93.5384 7.60081L101.53 7.60081L104 0Z"
            fill="#FFFF00"
          />
          <path
            d="M135 0L137.47 7.60081L145.462 7.60081L138.996 12.2984L141.466 19.8992L135 15.2016L128.534 19.8992L131.004 12.2984L124.538 7.60081L132.53 7.60081L135 0Z"
            fill="darkgray"
          />
        </svg>
        <p className={itemDetailsStyles.starRating}></p>
        <p className={itemDetailsStyles.description}>
          Item description: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={itemDetailsStyles.price}>$$</p>
        <div className={itemDetailsStyles.addCartBtn}>
          <MainButton>Add to Cart</MainButton>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
