import React from 'react';
import profileStyles from './Profile.module.css';

import MainButton from '../UI/MainButton/MainButton';

const Profile = () => {
  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.userInfo}>
        <span className={profileStyles.name}>Juan D. Cruz</span>
        <span className={profileStyles.email}>Email: juandelacruz@gmail.com</span>
        <div className={profileStyles.accountState}>
          <MainButton className={profileStyles.buyer}>Buyer</MainButton>
          <MainButton className={profileStyles.seller}>Seller</MainButton>
        </div>
      </div>
      <div className={profileStyles.buttonsDiv}>
        <MainButton className={profileStyles.button}>
          <img alt="icon" src="/">
          Browse Furniture
        </MainButton>
        <MainButton className={profileStyles.button}>
          <img alt="icon" src="/">
          View Cart
        </MainButton>
        <MainButton className={profileStyles.button}>
          <img alt="icon" src="/">
          Upcoming Deliveries
        </MainButton>
        <MainButton className={profileStyles.button}>
          <img alt="icon" src="/">
          Bought Furniture
        </MainButton>
      </div>
    </div>
  )
};