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
          <MainButton customStyle={"buyer"}>Buyer</MainButton>
          <MainButton customStyle={"seller"}>Seller</MainButton>
        </div>
      </div>
      <div className={profileStyles.buttonsDiv}>
        <MainButton customStyle={"profileBtn"}>
          <img alt="icon" src="/" />
          <span>Browse Furniture</span>
        </MainButton>
        <MainButton customStyle={"profileBtn"}>
          <img alt="icon" src="/" />
          <span>View Cart</span>
        </MainButton>
        <MainButton customStyle={"profileBtn"}>
          <img alt="icon" src="/" />
          <span>Upcoming Deliveries</span>
        </MainButton>
        <MainButton customStyle={"profileBtn"}>
          <img alt="icon" src="/" />
          <span>Bought Furniture</span>
        </MainButton>
      </div>
    </div>
  )
};

export default Profile;