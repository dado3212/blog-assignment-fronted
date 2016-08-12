import { connect } from 'react-redux';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends Component {

    constructor(props) {
      super(props);

      // init component state here
      this.state = {};
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }


  const mapStateToProps = (state) => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  // react-redux glue -- outputs Container that know state in props
  return connect(mapStateToProps, null)(RequireAuth);
}
