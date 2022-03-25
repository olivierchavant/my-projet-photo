

import {Link} from 'react-router-dom'
import React from "react";
import usefetch from "./useFetch.js"


function Test1fetch() {

  const {loading, error, data} = usefetch("http://localhost:1337/api/posts")

  
  const tab = [JSON.stringify(data)]
  if (loading) return <p> je charge  </p>
  if (error) return <p>Error de chargement .....</p>
  return (
    <div >
      <div >
      
      {tab.map(post => ( 
        <div key={post.id} className='post-card'>
          <div>{ post.title} </div>
          <small> console list </small>
          <h2> {post.title} </h2>
          <Link to={`/details/${post.id}`} > lire Plus </Link>
           </div>


      ))}
    </div>
     
    </div>
  );
}

export default Test1fetch;
