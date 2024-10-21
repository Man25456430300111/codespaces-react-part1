import { useState } from "react";
export default function Counter(){
    const[count,SetCount]=useState(0);
    const[value,setValue]=useState("Type here!");
    return (<>
        <input type="text"
        value={value}
        onChange={e=>setValue(e.target.value)}/>
        <h3>You typed {value.length}chars</h3>
    <button onClick={()=>SetCount(count+1)}>Click me baby!</button>
    <button onClick={()=>SetCount(0)}>Reset</button>
    <p>You have clicked {count} times</p>
    
    </>);
}