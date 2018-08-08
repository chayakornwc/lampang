import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import { createStore, applyMiddleware } from 'redux'
import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.1.0";
import {Provider} from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
var hist = createBrowserHistory();


const store = createStore(
  reducers,
  applyMiddleware(thunk,promiseMiddleware())
)

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
