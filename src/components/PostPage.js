import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import Footer from './Footer'

export class PostPage extends React.Component {
    
    render(){
        return (
            <div className="content-container">
                <h1>{this.props.post.title}</h1>
                <h3>{this.props.post.createdAt}</h3>
                <ReactMarkdown source={this.props.post.text} />
                <Footer />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.slug === props.match.params.slug)
  });

  const mapDispatchToProps = (dispatch, props) => ({

  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostPage);