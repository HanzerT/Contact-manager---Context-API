import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Fragment>
            <Header branding={"Contact Manager"} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/About" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
