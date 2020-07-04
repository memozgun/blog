import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { startLogout } from '../actions/auth'

export const Header = ( ) => (
  <header className="header">

      <div className="header__content">
        <NavLink  className="header__title" to="/" activeClassName="is-active" exact={true}><img src={"/logo.png"} alt='profile' width="32" height="32"/></NavLink>
        
        <div >
            <NavLink className="header__nav" to="/blog"><p>Blog</p></NavLink>

        </div>
    </div>
    
  </header>
);

