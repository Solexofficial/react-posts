import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router/routes';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  return isAuth ? (
    <Switch>
      {privateRoutes.map(route => (
        <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
      ))}
      <Redirect to='/posts' />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(route => (
        <Route path={route.path} component={route.component} exact={route.exact} key={route.path} />
      ))}
      <Redirect to='/login' />
    </Switch>
  );
};

export default AppRouter;
