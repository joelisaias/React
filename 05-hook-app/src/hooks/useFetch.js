import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted= useRef(true);

    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    useEffect(() => {
      return () => {
        isMounted.current=false;
      }
    }, [])
    

    useEffect(() => {
       fetch(url)
            .then(resp=>resp.json())
            .then(data=>{
                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data
                    })
                }
            })
       ;
       return(()=>{
        setState({
            loading:true,
            error:null,
            data:null
        })

       })
    }, [url])
    


    return state


}
