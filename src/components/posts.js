import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions/posts_actions';

class NewPost extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const {meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  onSubmit(values) {
    this.props.postTodo(values, () => {
      this.props.history.push('/display');
    });
  }

  render() {
    const { handleSubmit, fields: { title, content }} = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link className="back-button" to="/display">
          Back
        </Link>
      </div>
    );
  }
}

NewPost = reduxForm({
  form: 'NewPost',
  fields: ['title', 'content']

})(NewPost);

NewPost = connect(null, actions)(NewPost);

export default NewPost;
