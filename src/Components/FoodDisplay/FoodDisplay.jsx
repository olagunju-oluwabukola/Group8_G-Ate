import React from "react";
import "./FoodDisplay.css";
import { food_list } from "../../assets/assets";
import {assets} from '../../assets/assets'

function FoodDisplay() {
  return (
    <div className="food-display">
      <h2>Menu</h2>
      <div className='food-item'>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          // if (category === "All" || category === item.category) {
            return (
              <div className="food-item" key={index}>
                <div className="food-item-img-container">
                  <img src={item.image} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
        <p>{item.name}</p>
        <p className="food-item-description">{item.description}</p>
        <div className="food-item-name-rating">
          <p className="food-item-price">${item.price}</p>
          <span><img src={assets.rating_starts} alt="" /> 5.0</span>
        </div>
        </div>

              </div>
            );
          // }
        })}
      </div>
    </div>
    </div>
  );
}

export default FoodDisplay;
