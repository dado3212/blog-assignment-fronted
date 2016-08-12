import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};

    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut(event) {
    event.preventDefault();
    this.props.signoutUser();
  }

  auth() {
    if (this.props.authenticated) {
      return (
        <div className="item signOut">
          <button onClick={this.onSignOut}>Sign Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <div className="item signIn">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="item signUp">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="item">
          <Link to="/">Alex's Blog</Link>
        </div>
        <div className="item newPost">
          <Link to="/posts/new">New Post</Link>
        </div>

        {this.auth()}
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapDispatchToProps, actions)(NavBar);
