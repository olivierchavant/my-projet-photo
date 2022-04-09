
import React, { useState } from "react";
import { BrowserRouter as Router , Route, Switch  } from 'react-router-dom';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Tarifs from "./components/Tarifs";
import Layout from "./UI/Layout";
import CarouselList from "./components/Galerie/CarouselList";
import { cardPost } from "./components/Galerie/cardPost";
import EnvoiOk from "./components/Contact/EnvoiOk";
import { LoginPage } from "./components/Login/LoginPage";
import AuthContext from "./contexts/authContext";
import isAuthentificate from "./components/services/isAuth";
import PrivateRoute from "./components/Login/PrivateRoute";


export default function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(isAuthentificate())
 
  return (
    <AuthContext.Provider 
    value={{
      isAuthenticated ,
      setIsAuthenticated }
    }> 

     <Router>
      <Layout>
        <Switch>
           
          <PrivateRoute exact path="/contact" component={Contact} /> 
          <Route component={EnvoiOk} exact path="/ok" />
          <Route component={cardPost} exact path="/galerie"/>
          <Route component={CarouselList} exact path="/galerie/post/:id"/>
          <Route component={Tarifs} exact path="/tarifs"/>
          <Route component={LoginPage} exact path="/login"/>
          <Route component={Home} exact path="/"/>

         
        </Switch>
      </Layout>
     </Router>
     </AuthContext.Provider>
     
  );
}



