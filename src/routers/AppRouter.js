import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AboutPage from '../components/AboutPage'
import BlogPage from '../components/BlogPage'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import AddPostPage from '../components/AddPostPage'
import PostPage from '../components/PostPage'
import EditPostPage from '../components/EditPostPage'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={AboutPage} exact={true} />
        <Route path="/blog" component={BlogPage} exact={true}/>
        <PrivateRoute path="/admin/dashboard" component={DashboardPage} exact={true} />
        <PrivateRoute path="/admin/addPost" component={AddPostPage} exact={true} />
        <Route path="/blog/:slug" component={PostPage} exact={true} />
        <PrivateRoute path="/admin/:slug" component={EditPostPage} exact={true} />
        <PublicRoute path="/admin" component={LoginPage} exact={true} />



        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default }