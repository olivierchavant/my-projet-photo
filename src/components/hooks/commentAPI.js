
import { API_COMMENT} from '../../Config'
import axios from 'axios'



export default function commentAPI(comment,form) {

  return (
    axios.post(API_COMMENT,comment)
    .then(function (res) { 
        console.log(res.status)
        if (res.status === 200) { 
          console.log ("yes 200"); 
          form.reset() ;
        }}) 
  )
}



