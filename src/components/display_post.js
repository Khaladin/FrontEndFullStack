import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from  'react-router';
import * as actions from '../actions/posts_actions'

class PostShow extends Component {
  componentDidMount() {
    const id = this.props.params.id;
    this.props.fetchPost(id);
    console.log(this.props);

  }

// Try using _id that we alrady should have access to, might be able to link to
// post that way by plugging it in to that route a different way
  renderPost() {
    const {post} = this.props;
    console.log(this.props.posts);
    return(
      <div>
        <div className="postTitle">{post.title}</div>
        <div className="contentTitle">{post.content}</div>
        </div>
      );
    }


  render() {
    const {post} = this.props;
    console.log({post});
    if (!post) {
      return <div>Loading...</div>
    } else {


    return(
      <div>
        <Link to="/display" className="btn btn-primary">Back To Display</Link>
        <button
          className="btn btn-dnager pull-xs-right"
        >
          Delete Task
        </button>
        <div>
          {this.renderPost()}
        </div>

      </div>
    ); }
  }
}

function mapStateToProps(state) {
  return {post: state.posts.activePost};
}

export default connect(mapStateToProps, actions)(PostShow);
