import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';
import * as actions from '../actions/posts_actions';

class DisplayPosts extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }



  renderPosts() {
    const {posts} = this.props;
    console.log(this.props.posts);
    console.log(this.props.posts);
    return posts && posts.map( todos => {
      return (
        <li className="list-group-item" key={todos._id}>
          <div className="post-title">{todos.title}</div>
          <div className="post-content">{todos.content}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/create/post">
            Add a Post!
          </Link>
        </div>
        <h2 className="display-title">Posts</h2>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.activePosts};
}

export default connect(mapStateToProps, actions)(DisplayPosts);
