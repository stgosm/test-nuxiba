import React from 'react';
import RequestUsers from './components/RequestUsers';
import Posts from './components/RequestPosts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={ RequestUsers } exact/>
          <Route path='/posts' component={ Posts } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
