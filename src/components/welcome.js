import React, {Component} from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <h4 className="welcome-title">Welcome to the Tasks Agenda</h4>
        <p className="welcome-text">Login, or Sign up to start!</p>
        <p className="welcome-text">
          On the inside start adding tasks you want to complete. When youre done
          with one just go ahead and delete it!
        </p>
      </div>
    );
  }
}


export default Welcome;
