import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import { startSetPosts } from './actions/posts'
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';

const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}


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

    store.dispatch(logout());
    renderApp();
    //history.push("/")
  }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
