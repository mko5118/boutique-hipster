import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { TiPlus } from 'react-icons/ti';

import { updateShipping } from '../../../redux/auth/auth.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-shipping.module.scss';

// *************************** PROFILE SHIPPING COMPONENT *************************** //
const ProfileShipping = ({ user, updateShipping }) => {
  // 'user' prop passed down from ProfileInformation.js
  const { shipping_street, shipping_street2, shipping_city, shipping_state, shipping_zip, shipping_country } = user;

  const [ formData, setFormData ] = useState({
    shipping_street: shipping_street ? shipping_street : '',
    shipping_street2: shipping_street2 ? shipping_street2 : '',
    shipping_city: shipping_city ? shipping_city : '',
    shipping_state: shipping_state ? shipping_state : '',
    shipping_zip: shipping_zip ? shipping_zip : '',
    shipping_country: shipping_country ? shipping_country : '',
  });

  const [ toggleInputs, setToggleInputs ] = useState(false);    // true === menu is opened to begin with
  let [ isChecked, setIsChecked ] = useState(false);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const onChecked =  () => {
    setIsChecked(isChecked);
    setFormData({
      shipping_street: '',
      shipping_street2: '',
      shipping_city: '',
      shipping_state: '',
      shipping_zip: '',
      shipping_country: '',
    });
  };  

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateShipping(formData);
  };


  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
      <div onClick={() => setToggleInputs(!toggleInputs)} className={style.header}>
        <h3 className={style.headerTitle}>Shipping Address</h3>
        <span className={style.addIcon}><TiPlus /></span>
      </div>
      {
        toggleInputs &&
          <Fragment>
            <FormInput
              profile
              type='text'
              placeholder='Street Name'
              name='shipping_street'  
              value={formData.shipping_street}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Street Name #2'
              name='shipping_street2'
              value={formData.shipping_street2}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='City'
              name='shipping_city'
              value={formData.shipping_city}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='State'
              name='shipping_state'
              value={formData.shipping_state}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Zip Code'
              name='shipping_zip'
              value={formData.shipping_zip}
              onChange={onChange}
            />
            <FormInput
              profile  
              type='text'
              placeholder='Country'
              name='shipping_country'
              value={formData.shipping_country}
              onChange={onChange}
            />
            <label className={style.checkboxContainer}>
              <input onClick={onChecked} type='checkbox' className={style.checkmark} disabled={formData.shipping_street === null || formData.shipping_street === ''} />
              <span className={style.checkboxText}>Clear All</span>
            </label>
            <Button accountInfo>Submit</Button>
          </Fragment>
      }
    </form>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  updateShipping: (formData) => dispatch(updateShipping(formData)),
});

export default connect(null, mapDispatchToProps)(ProfileShipping);