import { useEffect, useState } from "react";

export function CustomHook(){
    const [error, setError] = useState(null)
    const [chai, setChai] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/all-chai`)
        .then((re)=> re.json())
        .then((data)=> setChai(data), setLoading((e)=> !e))
        .catch((err)=> console.log('FETCH-ERROR', err))
    }, [])

    return [error, chai, loading]

    
}