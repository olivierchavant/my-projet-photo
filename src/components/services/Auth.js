import { API_AUTH } from "../../Config";
import axios from 'axios';
import jwtDecode from "jwt-decode";
import isAuthentificate from "./isAuth";

export default function authentificate(credential){ 
    axios.post(API_AUTH,credential)
    .then(res => res.data)
    .then(data => { 
        window.localStorage.setItem("authToken", data.jwt)
        window.localStorage.setItem("username", data.user.username)
        axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
        console.log(jwtDecode(data.jwt))
        console.log(isAuthentificate())
       
    })

}

