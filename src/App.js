

import React from "react";
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom';
import Contact from "./components/Contact";
import Galerie from "./components/Galerie";
import Home from "./components/Home";
import Tarifs from "./components/Tarifs";
import LayoutG from "./components/Galerie/layoutG";
import Layout from "./UI/Layout";

export default function App() {
  return (
     <Router>
      <Layout>
        <Switch>
          <Route component={Contact} path="/contact"/>
          <Route component={Galerie} path="/galerie"/>
          <Route component={Tarifs} path="/tarifs"/>
          <Route component={Home} path="/"/>
        </Switch>
      </Layout>
     </Router>
  );
}

