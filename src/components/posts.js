import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions';

class NewPost extends Component {
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
    this.props.postTodo(values);
  }

  render() {
    const { handleSubmit, fields: { title, content }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
    );
  }
}

NewPost = reduxForm({
  form: 'NewPost',
  fields: ['title', 'content']

})(NewPost);

NewPost = connect(null, actions)(NewPost);

export default NewPost;
