import React from 'react';
import moment from 'moment';
import MdEditor from 'react-markdown-editor-lite'
import slugify from 'slugify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Interweave from 'interweave';
import { editPost } from '../../actions/posts';



export default class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
			text: props.post ? props.post.text : '',
			html:  props.post ? props.post.html :'',
			shortHtml:  props.post ? props.post.shortHtml :'',
			title:  props.post ? props.post.title : '',
			slug:  props.post ? props.post.slug : '',
			createdAt:  props.post ? props.post.createdAt : '',
		}
	}
	
	modules = {
		toolbar: [
		  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
		  [{size: []}],
		  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
		  [{'list': 'ordered'}, {'list': 'bullet'}, 
		   {'indent': '-1'}, {'indent': '+1'}],
		  ['link', 'image', 'video'],
		  ['clean']
		],
		clipboard: {
		  // toggle to add extra line breaks when pasting HTML:
		  matchVisual: false,
		}
	  }

    onSubmit = (e) => {
		e.preventDefault()
        console.log(this.state.shortHtml);
        this.props.onSubmit({
            text: this.state.text,
			html: this.state.html,
			shortHtml: this.state.shortHtml,
            title: this.state.title,
            slug: this.state.slug,
            createdAt: this.state.createdAt
          });
    }


    onSlugChange = (e) => {
		const title = e.target.value;
		const slug = slugify(title, '-')
		this.setState(() => ({ title }));
		this.setState(() => ({ slug }));

      };
      
	  handleHtmlChange = (html) => {
		console.log(html);

		this.setState({ html });
	}

	handleShortHtmlChange = (shortHtml) => {
		console.log(shortHtml);
		this.setState({ shortHtml });
		this.setState(() => ({ createdAt: moment().format('MMMM Do, YYYY') }))

	}

    render(){
        return (
            <>
            <form onSubmit={this.onSubmit}>
					<p>Title</p>
					<input
						type="text"
						className="text-input"

						placeholder="Title"
						value={this.state.title}
						onChange={this.onSlugChange}
					/>
					<hr />

					<p>Short Description</p>
					<ReactQuill theme="snow" value={this.state.shortHtml} modules={this.modules} onChange={this.handleShortHtmlChange}/>
					<hr />


					<p>Post</p>
					<ReactQuill theme="snow" value={this.state.html} modules={this.modules} onChange={this.handleHtmlChange}/>
					{/* <MdEditor
						value={this.state.text}
						style={{ height: "500px" }}
						renderHTML={(text) => mdParser.render(text)}
						onChange={this.handleEditorChange}
						/> */}
						<input type="submit" value="Submit"></input>

					</form>
                    <div className="content-container">
					<Interweave content={this.state.html} />

                    </div>
                </>
        )
    }
}