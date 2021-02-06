import React from 'react';
import RequestUsers from './components/RequestUsers';
import Posts from './components/RequestPosts';
import Todos from './components/RequestTodos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={ RequestUsers } exact/>
          <Route path='/posts' component={ Posts } />
          <Route path='/todos' component={ Todos } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
