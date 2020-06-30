import React from 'react';
import Footer from './Footer'
import PostList from './PostList'
const BlogPage = () => {
    return (
        <div className="content-container">
            <PostList from={"blog"}/>
            <Footer />
        </div>
    )
}

export { BlogPage as default }