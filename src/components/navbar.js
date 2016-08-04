import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <div className="nav">
      <Link to="/">Alex's Blog</Link>
      <Link to="/posts/new">New Post</Link>
    </div>
    );
};

export default NavBar;
