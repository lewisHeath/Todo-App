import { Fragment } from 'react';
//import routing
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

//components
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import SignIn from './components/SignIn';

function App() {
  return (
    <Fragment>
        <Router>
            <Switch>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route path="/to-do-list">
                    <InputTodo />
                    <ListTodos />
                </Route>
            </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
