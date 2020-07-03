import React from 'react';
import MarkdownIt from 'markdown-it';
import { connect } from 'react-redux';
import 'react-markdown-editor-lite/lib/index.css';
import Interweave from 'interweave'
import ReactMarkdown from 'react-markdown'
import { startAddPost } from '../../actions/posts'
import moment from 'moment';
import PostForm from './PostForm'

class AddPostPage extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			shortHtml: '',
			html: '',
			title: '',
			slug: '',
			createdAt: 0
		}
	}

	
	onSubmit = (post) => {
		console.log(post);
		this.props.startAddPost(post);
		this.props.history.push(`/admin/dashboard`);

    	console.log(this.state.html);
	};

	

	
  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1>Add Post</h1>
		  <PostForm
          onSubmit={this.onSubmit}
        />

        </div>
      </div>
        <div className="content-container">
		<Interweave content={this.state.html} />

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
	startAddPost: (post) => dispatch(startAddPost(post))
  });

export default connect(undefined, mapDispatchToProps)(AddPostPage)

// const mapDispatchToProps = (dispatch) => ({
//   startAddExpense: (expense) => dispatch(startAddExpense(expense))
// });

// export default connect(undefined, mapDispatchToProps)(AddPostPage);

