import React from 'react';
import Footer from '../Footer'
import PostList from '../PostList'
import CardTitle from './CardTitle'
import { Link } from 'react-router-dom';

const PostsCard = () => {
    return (
        <div className="card card--blog">
            <CardTitle title="Blog" />
            <PostList from={"posts"} showItems="3"/>
            <Link to={"/blog"}>
                <p className="showmore__link">Show more posts...</p>
            </Link>
        </div>
    )
}

export { PostsCard as default }