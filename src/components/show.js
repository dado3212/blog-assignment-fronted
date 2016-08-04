import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import marked from 'marked';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here (based on if post)
    if (this.props.post) {
      this.state = {
        isEditing: false,
        title: this.props.post.title,
        tags: this.props.post.tags,
        content: this.props.post.content,
      };
    } else {
      this.state = {
        isEditing: false,
      };
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  // Pull in appropriate post
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
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
    this.props.updatePost(
      this.props.params.id,
      {
        title: this.state.title,
        tags: this.state.tags,
        content: this.state.content,
      },
    );
  }

  deletePost() {
    this.props.deletePost(this.props.params.id);
  }

  render() {
    if (!this.props.post) { // No set post (initially)
      return (
        <h3>Loading...</h3>
      );
    } else if (this.state.isEditing) { // Editing mode
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="title">Title</label>
            <input onChange={this.onTitleChange} type="text" id="title" placeholder="title" value={this.state.title} />

            <label htmlFor="tags">Tags</label>
            <input onChange={this.onTagsChange} type="text" id="tags" placeholder="tags" value={this.state.tags} />

            <label htmlFor="content">Content</label>
            <input onChange={this.onContentChange} type="text" id="content" placeholder="content" value={this.state.content} />

            <button type="submit">Done Editing</button>
          </form>
          <button onClick={this.deletePost}>Delete</button>
        </div>
      );
    } else { // Normal post
      return (
        <div>
          <h3>{this.props.post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: marked(this.props.post.content) }} />
          <button onClick={() => {
            this.setState({
              isEditing: true,
              title: this.props.post.title,
              tags: this.props.post.tags,
              content: this.props.post.content,
            });
          }}>Edit Post</button>
          <button onClick={this.deletePost}>Delete</button>
        </div>
      );
    }
  }
}

const mapDispatchToProps = (state) => (
  {
    post: state.posts.currentPost,
  }
);

export default connect(mapDispatchToProps, actions)(Show);
