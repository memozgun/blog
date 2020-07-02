import { firebase, googleAuthProvider } from '../firebase/firebase'
import { store, renderApp } from '../index'
import AppRouter, { history } from '../routers/AppRouter';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})
 
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout = () => {
    store.dispatch(logout());
    renderApp();
    history.push("/")
    
    return () => {
        return firebase.auth().signOut()
    }
}
