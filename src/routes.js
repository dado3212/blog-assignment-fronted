import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import New from './components/new';
import Show from './components/show';

import Signin from './components/singin';
import Signup from './components/singup';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={New} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
  </Route>
);
