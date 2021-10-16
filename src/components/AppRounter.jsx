import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { publicRoutes, privateRoutes } from '../router/routes';

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route path={route.path} component={route.component} exact={route.exact} />
      ))}
      <Redirect to='/posts' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => (
        <Route path={route.path} component={route.component} exact={route.exact} />
      ))}
      <Redirect to='/login' />
    </Switch>
  );
};

export default AppRouter;
