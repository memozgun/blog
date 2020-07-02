import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth'

import AppRouter, { history } from '../routers/AppRouter';
import { startSetPosts } from '../actions/posts'
import { login, logout } from '../actions/auth';
import { firebase } from '../firebase/firebase';
import { store, renderApp } from '../index'

firebase.auth().onAuthStateChanged((user) => {
    if(user){
      store.dispatch(login(user.uid))
      console.log('uid', user.uid);
      store.dispatch(startSetPosts()).then(() => {
        renderApp()
        if(history.location.pathname === "/admin") {
          history.push('/admin/dashboard')
        }
      });
    } else {
      console.log("logged out");
  
      //store.dispatch(logout());
      renderApp();
      //history.push("/")
    }
  })
  

  
export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box"> 
            <h1 className="box-layout__title">Blog Platform</h1>
            <button className="button" onClick={startLogin}>Login with Google</button>

        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
