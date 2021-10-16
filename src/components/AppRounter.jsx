import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Page404 from '../pages/Page404';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/about'>
        <About />
      </Route>
      <Route exact path='/posts'>
        <Posts />
      </Route>
      <Route exact path='/posts/:id'>
        <PostIdPage />
      </Route>
      <Route path='/page404'>
        <Page404 />
      </Route>
      <Redirect to='/page404' />
    </Switch>
  );
};

export default AppRouter;
