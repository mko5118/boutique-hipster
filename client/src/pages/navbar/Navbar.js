import React, { } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart.actions';
import { logoutUser } from '../../redux/auth/auth.actions';

import Button from '../../components-ui/button/Button';

import style from './navbar.module.scss';

// *************************** NAVBAR COMPONENT *************************** //
const Navbar = ({ isAuthenticated, toggleCart, logoutUser }) => {
  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  const logoContainer = (
    <div className={style.logoContainer}>
      <Link to='/' className={style.logoLink}>
        <h1 className={style.logoTitle}>Boutique Hipster</h1>
        <h2 className={style.logoSubtitle}>Johnsonville</h2>
      </Link>
    </div>
  );

  const links = (
    <ul className={style.links}>
      <li>
        <Link to='/' className={style.link}>Men's</Link>
      </li>
      <li>
        <Link to='/' className={style.link}>Women's</Link>
      </li>
      <li>
        <Link to='/exclusives' className={style.link}>Exclusives</Link>
      </li>
      {
        logoContainer
      }
      <li>
        <Link to='/' className={style.link}>Forum</Link>
      </li>
      <li>
        <Link to='/account' className={style.link}>Account</Link>
      </li>
      <li>
        <span onClick={toggleCart} className={style.link}>Cart (0)</span>
      </li>
    </ul>
  );

  return (
    <nav className={style.navbar}>

      <div className={style.textContainer}>
        <h3 className={style.text}>Authentic & Handmade</h3>
      </div>
      
      {
        links
      }

      {
        isAuthenticated &&
          <div className={style.button}>
            <Button onClick={onLogout} navbar>Log Out</Button>
          </div>
      }

    </nav>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);