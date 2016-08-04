import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

// example class based component (smart component)
class Index extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => {
            return (
              <li>
                <Link to={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapDispatchToProps, actions)(Index);
