import React from 'react';
import Footer from './Footer'
import PostList from './PostList'
import { Header } from './Header';
const BlogPage = () => {
    return (
        <div className="content-container">
            <Header />

            <PostList from={"posts"}/>
            <Footer />
        </div>
    )
}

export { BlogPage as default }