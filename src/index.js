import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';
import { startSetPosts } from './actions/posts'
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';

export const store = configureStore();


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
export const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}

store.dispatch(startSetPosts()).then(() => {
  console.log("done");
  renderApp()

})





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
