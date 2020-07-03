import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import PostItem from './PostItem';


export const PostList = (props) => (
  
    <div className="list-body">

    {
      props.posts.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No posts</span>
        </div>
      ) : (

          props.posts.slice(0, props.showItems || props.posts.length).map((post) => {
            return (
                <PostItem key={post.id}from={props.from} {...post}/>
            )
          })
        )
    }

  
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PostList);
