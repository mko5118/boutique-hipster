import React, { } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import Button from '../../../components-ui/button/Button';

import style from './exclusives-item.module.scss';

// *************************** EXCLUSIVES ITEM COMPONENT *************************** //
const ExclusivesItem = ({ exclusive, history, match }) => {
  // 'exclusive' passed down as prop from ExclusivesItems.js
  const { id, item_name, item_color, item_price, item_images, item_url, onSale } = exclusive;

  return (
    <div className={style.exclusivesItem}>
      
      {/* ITEM CONTAINER */}
      <div className={style.itemContainer}>
        <div onClick={() => history.push(item_url)} className={style.imageContainer}>
          <img src={item_images[0]} alt={`${item_name}_${item_color}`} className={style.itemImage} />
        </div>
        <div className={style.buttonContainer}>
          <Button item>Add to Cart - ${item_price}.00</Button>
        </div>
      </div>

      {/* PRICE CONTAINER */}
      <div className={style.priceContainer}>
        <p className={style.itemName}>
          {item_name} - {item_color}
        </p>
        <p className={style.itemPrice}>
          ${item_price}.00
        </p>
      </div>

    </div>
  )
};

export default withRouter(ExclusivesItem);