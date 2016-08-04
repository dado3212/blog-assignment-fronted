import React, { Component } from 'react';
import * as actions from '../actions';

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

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default New;
