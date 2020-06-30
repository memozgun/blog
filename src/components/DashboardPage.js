import React from 'react';
import Footer from './Footer'
import PostList from './PostList'
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div className="content-container">
            <h1>Dashboard</h1>
            <Link to="/admin/addPost"><p>Add Post</p></Link>


            <PostList from={"admin"}/>

            <Footer />
        </div>
    )
}

export { DashboardPage as default }