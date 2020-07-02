import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';


export const PostItem = ({ from, text, slug, title, createdAt }) => (
  
           
    <div>
            <Link to={`/${from}/${slug}`}>

                <h1>{title}</h1>
            </Link>
            <h3>{createdAt}</h3>
            <ReactMarkdown source={text} />
    </div>
    

);


export default PostItem;
