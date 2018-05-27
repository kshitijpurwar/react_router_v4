import React, { Component } from 'react';
import { Header, Home, Sidebar, Post, PageNotFound, Color, Person, Redirect as Stash, Nested } from "./components";
import { BrowserRouter as Router, Route, Switch, Redirect  } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="body">  
            <Sidebar />
            <div className="container">
                  <Switch>
                    <Route path='/post/:id' component={Post} />
                    <Route path='/blue' render={() => {
                      return <Color color="blue" text="blue" />
                    }} />

                    <Route path='/red' render={() => {
                      return <Color color="red" text="red" />
                    }} />

                    <Route path='/green' render={() => {
                      return <Color color="green" text="green" />
                    }} />

                    <Route path='/color/:hex' render={ () => <Color/>  } />

                    <Route path='/colorbox/:textColor/:bgColor' render={ () => <Color/>  } />
                    
                    <Route path='/person' component={Person} />

                    <Redirect to='/redirect' from="/legacy" />
                    
                    <Route path='/redirect' component={Stash} />

                    <Route path='/nested' component={Nested} />

                    <Route path='/' component={Home} exact={true} />

                    <Route component={PageNotFound} />
                  </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
