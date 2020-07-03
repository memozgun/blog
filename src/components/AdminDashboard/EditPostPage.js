import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import PostForm from './PostForm'
import Footer from '../Footer'
import moment from 'moment';
import { startEditPost } from '../../actions/posts'

export class EditPostPage extends React.Component {

    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/admin/dashboard');
    }
    render(){
        return (
            <div className="content-container">
                <div className="page-header">
                    <h1>Edit Post</h1>
                    <PostForm
                        post={this.props.post}
                        onSubmit={this.onSubmit}
                    />

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.slug === props.match.params.slug)
  });

  const mapDispatchToProps = (dispatch, props) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);