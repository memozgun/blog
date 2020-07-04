import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import Footer from '../Footer'
import Interweave from 'interweave';
import { Header } from '../Header';

export class PostPage extends React.Component {
    
    render(){
        return (
            <div className="content-container">
            <div className="content-container__secondary">

            <Header />
            <h1 className="post-header">{this.props.post.title}</h1>
                <h3>{this.props.post.createdAt}</h3>
                <Interweave content={this.props.post.html} />

                <Footer />
            
               
            </div>
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