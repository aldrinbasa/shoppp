import React from "react";
import HomeStyles from "./Home.module.css";
import SearchBar from "./SearchBar/SearchBar";
import ViewCartButton from "./ViewCartButton/ViewCartButton";
import ItemCard from "./ItemCard/ItemCard";

const Home = () => {
  const renderFeed = () => {
    const NUM_OF_ITEMS = 9;
    var itemsArr = Array.apply(null, Array(NUM_OF_ITEMS));
    return itemsArr.map((item, key) => <ItemCard></ItemCard>);
  };

  return (
    <section className={HomeStyles.home}>
      <div className={HomeStyles.head}>
        <div className={HomeStyles.headContent}>
          <SearchBar></SearchBar>
        </div>
        <ViewCartButton className={HomeStyles.headContent}></ViewCartButton>
      </div>
      <div className={HomeStyles.itemsFeed}>{renderFeed()}</div>
    </section>
  );
};

export default Home;
