// Search Engine id =a57fe5aa741866cb8

import {useState,useEffect} from "react";
import API_KEY from "./keys";

const CONTEXT_KEY="a57fe5aa741866cb8";


function useGoogleSearch(searchTerm) {
    const [data,setData]=useState(null);

    useEffect(()=>{

        const fetchData=async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=
                ${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
            ).then(response=>response.json())
            .then(result=>{
                setData(result);
            }) 
            

        }

    fetchData();

    },[searchTerm]);

return {data};

}

export default useGoogleSearch
