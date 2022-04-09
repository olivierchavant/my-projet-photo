import React,  { useContext, } from 'react'; 
import { useHistory, Redirect,Route } from 'react-router-dom'; 
import authContext from '../../contexts/authContext'

const  PrivateRoute = ({path, component}) =>  {

    const {isAuthenticated} = useContext(authContext) 
    const {location} = useHistory()   

    if (isAuthenticated) {
      return <Route path={path} component={component}/> 
     } else if (!isAuthenticated && location.pathname === "/contact") {
      return <Redirect to='/login'/> 
     }
     else { 
       return <Redirect to='/'/> 
     }


}

export default PrivateRoute 