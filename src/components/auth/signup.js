import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import * as actions from '../../actions/auth_actions';
import {connect} from 'react-redux';

class Signup extends Component {
  componentWillUnmount() {
    if (this.props.errorMessage) {
      this.props.authError(null)
    }
  }

  handleFormSubmit(formProps) {
    //Call action creator to sign up the user
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, confirmPassword }} = this.props;

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} placeholder={label} type={type} />
          {touched && error && <span>{error}</span>}
        </div>
      </div>
    )

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" component={renderField} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field name="password" type="password" component={renderField} />
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <Field name="confirmPassword" type="Password" component={renderField} />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function validate(formProps) {
  const errors = {};
  if (!formProps.email) { errors.email = 'Please enter an email'; }
  if (!formProps.password) { errors.password = 'Please enter a password'; }
  if (!formProps.confirmPassword) { errors.password = 'Please enter password again'; }
  if (formProps.password !== formProps.confirmPassword) { errors.password = "Passwords must match"; }

  return errors
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

Signup =  reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);

Signup = connect(mapStateToProps, actions)(Signup);

export default Signup;
