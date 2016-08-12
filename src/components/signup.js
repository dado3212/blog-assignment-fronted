import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

// example class based component (smart component)
class SignUp extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      password: '',
      name: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.signupUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="new">
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={this.onNameChange} type="text" id="name" placeholder="name" value={this.state.name} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.onEmailChange} type="email" id="email" placeholder="email" value={this.state.email} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input onChange={this.onPasswordChange} type="password" id="password" placeholder="password" value={this.state.password} />
          </div>

          <button type="submit">Sign Up</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapDispatchToProps, actions)(SignUp);
