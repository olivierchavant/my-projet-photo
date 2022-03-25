
import React from "react";
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Tarifs from "./components/Tarifs";
import Layout from "./UI/Layout";
import CarouselList from "./components/Galerie/CarouselList";
import { cardPost } from "./components/Galerie/cardPost";
import EnvoiOk from "./components/Contact/EnvoiOk";


export default function App() {
  return (
     <Router>
      <Layout>
        <Switch>
          <Route component={Contact} path="/contact"/>  
          <Route component={EnvoiOk} exact path="/ok" />
          <Route component={cardPost} exact path="/galerie"/>
          <Route component={CarouselList} exact path="/galerie/post/:id"/>
          <Route component={Tarifs} exact path="/tarifs"/>
          <Route component={Home} exact path="/"/>
         
        </Switch>
      </Layout>
     </Router>
  );
}



