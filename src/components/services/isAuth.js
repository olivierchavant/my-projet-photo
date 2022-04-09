
import jwtDecode from "jwt-decode";


export default function isAuthentificate() { 
    const token = window.localStorage.getItem("authToken")

    if(token) { 
        const {exp}  = jwtDecode(token)
        if ( exp * 1000 > new Date().getTime()) { 
            return true
        } 
        return false 
    }
    return false 
}

