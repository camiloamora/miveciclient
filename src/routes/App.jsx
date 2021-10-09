import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import CreateAccount from '../pages/CreateAccount';
import Profile from '@pages/Profile';
import Groups from '@pages/Groups';
import Messages from '@pages/Messages';
import '../styles/global.css';

const App = () => {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/message" component={Messages} />
              <Route exact path="/groups" component={Groups} />
              <Route exact path="/signup" component={CreateAccount} />
              <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App;
