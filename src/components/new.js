import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.createPost({
      title: this.state.title,
      tags: this.state.tags,
      content: this.state.content,
    });
  }

  render() {
    return (
      <div>
        <h3>Create A New Post</h3>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <input onChange={this.onTitleChange} type="text" id="title" placeholder="title" value={this.state.title} />

          <label htmlFor="tags">Tags</label>
          <input onChange={this.onTagsChange} type="text" id="tags" placeholder="tags" value={this.state.tags} />

          <label htmlFor="content">Content</label>
          <input onChange={this.onContentChange} type="text" id="content" placeholder="content" value={this.state.content} />

          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapDispatchToProps, actions)(New);
