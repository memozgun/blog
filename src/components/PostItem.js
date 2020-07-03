import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom';
import Interweave from 'interweave';


export const PostItem = ({ from, shortHtml, html, slug, title, createdAt }) => (
  
           
    <div className="list-item">
            <Link className="list-item__short" to={`/${from}/${slug}`}>
            <div>
                <h3 className="list-item__title">{title}</h3>
            </div>
            <div>
                <span className="list-item__date">{createdAt}</span>
            </div>
            <div className="list-item--message">
                <Interweave content={shortHtml} />

            </div>
            </Link>


    </div>
    

);


export default PostItem;
