import React from 'react';
import moment from 'moment';
import MdEditor from 'react-markdown-editor-lite'
import slugify from 'slugify';
import MarkdownIt from 'markdown-it';
import ReactMarkdown from 'react-markdown'

const mdParser = new MarkdownIt(/* Markdown-it options */);


export default class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
			text: props.post ? props.post.text : '',
			html:  props.post ? props.post.html :'',
			title:  props.post ? props.post.title : '',
			slug:  props.post ? props.post.slug : '',
			createdAt:  props.post ? props.post.createdAt : moment(),
		}
    }

    onSubmit = (e) => {
        
        this.props.onSubmit({
            text: this.state.text,
            html: this.state.html,
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
      
      handleEditorChange = ({html, text}) => {    	
		this.setState(() => ({ html }))
		this.setState(() => ({ text }))
        this.setState(() => ({ createdAt: moment().format('MMMM Do, YYYY') }))
	}


    render(){
        return (
            <>
            <form onSubmit={this.onSubmit}>
					
					<input
						type="text"
						className="text-input"

						placeholder="Title"
						value={this.state.title}
						onChange={this.onSlugChange}
					/>

					<MdEditor
						value={this.state.text}
						style={{ height: "500px" }}
						renderHTML={(text) => mdParser.render(text)}
						onChange={this.handleEditorChange}
						/>
						<input type="submit" value="Submit"></input>

					</form>
                    <div className="content-container">
                    <ReactMarkdown source={this.state.text} />
                    </div>
                </>
        )
    }
}
