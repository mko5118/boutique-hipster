import React, { useState } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../../redux/auth/auth.actions';
import { setAlert } from '../../../redux/alert/alert.actions';

import FormInput from '../../../components-ui/form-input/FormInput';
import Button from '../../../components-ui/button/Button';

import style from './profile-details.module.scss';

// *************************** PROFILE DETAILS COMPONENT *************************** //
const ProfileDetails = ({ email, logoutUser, setAlert }) => {
  const [ formData, setFormData ] = useState({
    email: email,
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setAlert('Passwords do not match', 'danger', 2000);
    } else {
      console.log('Submitted');
    }
    // Will replace later with setState update
  };
  
  return (
    <form onSubmit={onSubmit} className={style.accountForm}>
    <h3 className={style.title}>Account Details</h3>
    <FormInput
      profile
      style={{ color: 'black '}}
      type='email'
      name='email'  
      placeholder='Change contact email'
      value={formData.email}
      onChange={onChange}
    />
    <h3 className={style.title}>Reset Password</h3>
    <FormInput
      profile
      type='password'
      name='password' 
      placeholder='New Password'
      value={formData.password}
      onChange={onChange}
    />
    <FormInput
      profile
      type='password'  
      name='confirmPassword'
      placeholder='Confirm New Password'
      value={formData.confirmPassword}
      onChange={onChange}
    />
    <p className={style.text}>
      Logged in as {formData.email}. Not you? <span onClick={onLogout} className={style.link}>Logout.</span>
    </p>
    <Button accountInfo>Submit</Button>
  </form>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  setAlert: (msg, alertType, timeout) => dispatch(setAlert(msg, alertType, timeout)),
})

export default connect(null, mapDispatchToProps)(ProfileDetails);