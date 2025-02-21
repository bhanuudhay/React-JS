import {useEffect , useState} from "react";

function useCurrencyInfo(currency)
{
    const [data,setData] = useState({})
    useEffect(()=>{
        try{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then( (res)=> res.json())
        .then((res)=> setData(res[currency]));
        console.log(data);
        }
        catch(error)
        {
            console.log(error);
        }
    } ,  [currency])
    
}