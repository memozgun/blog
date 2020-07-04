import React from 'react';
import Footer from './Footer'
import PostList from './PostList'
import { Header } from './Header';
const BlogPage = () => {
    return (
        <div className="content-container">
                <div className="content-container__secondary">

            <Header />
            </div>
            <PostList from={"posts"}/>

        </div>
    )
}

export { BlogPage as default }