import React from 'react';

import MainButton from "../../UI/MainButton/MainButton.js";
import ViewCartStyles from "./ViewCartButton.module.css";

const ViewCartButton = () => {
    return (
        <div className={ViewCartStyles.button}>
            <MainButton>View Cart</MainButton>
        </div>
    );
};

export default ViewCartButton;