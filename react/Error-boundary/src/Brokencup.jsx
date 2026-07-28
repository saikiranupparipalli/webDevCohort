import {useState} from "react";

export default function Brokencup(){
    const [Broken, isBroken] = useState(false)
    if(Broken){
        throw new Error('Cup is broken')
    }
    return (
        <div>
    <button onClick={()=> isBroken(true)}>Break the cup</button>
        </div>
    
    )
}