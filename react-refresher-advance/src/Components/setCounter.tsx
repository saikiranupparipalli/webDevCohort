import * as React from "react"


export function SetScore(){

    const [score, setScore ] = React.useState<number>(0)


    function Increment(){
     score!== 10 ? setScore(score + 1) : setScore(score)
    }
    function Decrement(){
     score!== 0 ? setScore(score - 1) : setScore(score)
    }
    return (
       
         <div>
            <button onClick={Increment}>Icrement</button>
            <h2>score {score}</h2>
            <button onClick={Decrement}>Decrement</button>
          </div>

       
    )
}