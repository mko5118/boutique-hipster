import React, { } from 'react';
import { connect } from 'react-redux';
import { IoIosRemove, IoIosAdd, IoMdBackspace } from "react-icons/io";

import { addItem, removeItem, clearItem } from '../../../redux/auth/auth.actions';

import style from './cart-item.module.scss';

// *************************** CART ITEM COMPONENT *************************** //
const CartItem = ({ cartItem, addItem, removeItem, clearItem, }) => {
  // 'cartItem' passed down as prop from CartPage.js
  const { id, product_category, product_name, product_color, product_price, product_description, product_info, product_images, product_url, product_quantity, on_sale, } = cartItem;

  const onAddition = () => { addItem(cartItem) };
  const onSubtraction = () => { removeItem(cartItem) };
  const onRemove = () => { clearItem(cartItem) };

  return (
    <div className={style.cartItem}>

      {/* IMAGE CONTAINER */}
      <div className={style.imageContainer}>
        <img src={product_images[0]} alt={`${product_name}_${product_color}_${id}`} className={style.itemImage} />
      </div>

      {/* DESCRIPTION CONTAINER */}
      <div className={style.descriptionContainer}>
        <div className={style.descriptionHeader}>
          <h4 className={style.itemName}>{product_name}</h4>
          <p className={style.itemPrice}>${product_price}.00</p>
        </div>

        <p className={style.itemColor}>{product_color}</p>

        <div className={style.quantityContainer}>
          <div className={style.quantity}>
            <IoIosRemove onClick={onSubtraction} className={style.quantityIcon} />
            <span className={style.quantityNumber}>{cartItem.quantity}</span>
            <IoIosAdd onClick={onAddition} className={style.quantityIcon} />
          </div>
          <div className={style.delete}>
            <IoMdBackspace onClick={onRemove} className={style.deleteIcon} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);