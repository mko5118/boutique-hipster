import React, { } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../../redux/auth/auth.actions';

import style from './navbar-menu.module.scss';

// *************************** NAVBAR MENU COMPONENT *************************** //
const NavbarMenu = ({ toggleMenu, setToggleMenu, isAuthenticated, logoutUser }) => {
  // 'toggleMenu' & 'setToggleMenu' passed down as props from NavbarMobile to allow for closing of menu on click
  const onClick = () => {
    setToggleMenu(!toggleMenu);
  };

  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  return (
    <div className={style.navbarMenu}>
      
      <div onClick={onClick} className={style.menuFiller} />

      {/* SITE LINKS */}
      <div className={style.menu}>
        <div className={style.siteLinks}>
          <ul className={style.links}>
            <li>
              <Link to='/beanies' className={style.link}>Beanies</Link>
            </li>
            <br />
            <li>
              <Link to='/gloves' className={style.link}>Gloves</Link>
            </li>
            <br />
            <li>
              <Link to='/exclusives' className={style.link}>Exclusives</Link>
            </li>
            <br />
            <li>
              <Link to='/about' className={style.link}>Our Story</Link>
            </li>
            <br />
            <li>
              {
                isAuthenticated 
                  ? <span onClick={onLogout} className={style.userLink}>Log Out</span>
                  : <Link to='/account' className={style.userLink}>Log In</Link>
              }
            </li>
          </ul>
        </div>

        {/* FOOTER LINKS */}
        <div className={style.footerLinks}>
          <ul className={style.links}>
            <li>
              <Link to='/' className={style.link}>Returns & Exchanges</Link>
            </li>
            <br />
            <li>
              <Link to='/' className={style.link}>Terms & Conditions</Link>
            </li>
            <br />
            <li>
              <Link to='/' className={style.link}>About Us</Link>
            </li>
            <br />
            <li>
              <Link to='/admin/dashboard' className={style.link}>Contact Us</Link>     {/* CHANGE BACK TO /contact ONCE PAGE IS CREATED */}
            </li>
            <br />
            <li>
              <Link to='/' className={style.link}>Instagram</Link>
            </li>
            <br />
            <li>
              <Link to='/' className={style.link}>Twitter</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);