import{useState,useEffect} from 'react';
const useFetch = (url) => {
        //reactive value using usestate hook
    const[data,setData]= useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(null);
     useEffect(()=>{
        //  abort the fetch when cmponent unmounts
         const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                console.log(res);
                if(!res.ok){
        throw Error('could not get data');       
            }
           return res.json();
        }).then((data)=>{
    
                console.log(data);
                
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log("fetch aborted")
            }else{
                setIsPending(false);
            setError(err.message);
            }
            
        })
       },1000)
        console.log("compo rendered");
        return ()=>abortCont.abort();
       
    },[url]) 
    return {data, isPending,error};
}
 
export default useFetch;