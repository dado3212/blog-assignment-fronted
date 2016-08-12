import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';

import SignIn from './components/signin';
import SignUp from './components/signup';

import RequireAuth from './components/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={SignIn} />
    <Route path="signup" component={SignUp} />
  </Route>
);
