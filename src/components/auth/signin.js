import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password);
    //Need to do something to log user in
    this.props.signinUser({email,password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong> Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const renderInput = field => (
      <div>
        <input {...field.input} type={field.type} className="form-control" />
        {field.meta.touched && field.meta.error}
        <span>{field.meta.error}</span>
      </div>
    )

    const { handleSubmit, fields: {email, password}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field
            name="email"
            component={renderInput}
            type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
            name="password"
            component={renderInput}
            type="text" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

Signin = connect(mapStateToProps, actions)(Signin);

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);
