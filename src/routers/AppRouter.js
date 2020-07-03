import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AboutPage from '../components/AboutPage/AboutPage'
import BlogPage from '../components/BlogPage'
import DashboardPage from '../components/AdminDashboard/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import AddPostPage from '../components/AdminDashboard/AddPostPage'
import PostPage from '../components/AdminDashboard/PostPage'
import EditPostPage from '../components/AdminDashboard/EditPostPage'
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';
import ScrollToTop from '../components/scrollToTop';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>

    <div>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={AboutPage} exact={true} />
        <Route path="/blog" component={BlogPage} exact={true}/>
        <PrivateRoute path="/admin/dashboard" component={DashboardPage} exact={true} />
        <PrivateRoute path="/admin/addPost" component={AddPostPage} exact={true} />
        <Route path="/posts/:slug" component={PostPage} exact={true} />
        <PrivateRoute path="/admin/:slug" component={EditPostPage} exact={true} />
        <PublicRoute path="/admin" component={LoginPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export { AppRouter as default }