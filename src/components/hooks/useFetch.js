import { useEffect, useState } from "react";

const useFetch = (url) => { 

    const [isLoading, setIsLoading] = useState(true); 
    const [posts, setPosts] = useState(null); 
    const [value, setValue] = useState(null)


// GET /api/articles?populate[0]=categories


    useEffect(() => {  
        
        fetch(url) 
        .then(res => res.json())
        .then(response => {
            setPosts(response)
            setIsLoading(false)
            setValue(JSON.stringify(response))
            console.log(response)
            
           })
    }, [url] )

    return {isLoading, posts,value}
}

export default useFetch ; 
