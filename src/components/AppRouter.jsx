import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }

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
