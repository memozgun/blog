import React from 'react';
import Footer from '../Footer'
import PostList from '../PostList'
import { Link } from 'react-router-dom';
import LogoutButton from '../LogoutButton';

const DashboardPage = () => {
    return (
        <div className="content-container">
            <h1>Dashboard</h1>
            <LogoutButton />

            <Link to="/admin/addPost"><p>Add Post</p></Link>

            <PostList from={"admin"}/>

        </div>
    )
}

export { DashboardPage as default }