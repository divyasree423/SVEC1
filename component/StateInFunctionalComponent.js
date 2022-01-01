import React,{useState} from 'react'

export default function StateInFunctionalComponent() {
    let [name,updateName] = useState("Akshitha");
    let [count,updateCount]=useState(0);
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Akshitha t")}}
            onMouseLeave={()=>{updateName("Divya")}}>
                {name}
            </h1>
            <h2 onMouseOver={()=>{updateCount(count+1)}}
                onMouseLeave={()=>{updateCount(count-1)}}
                onMouseDown={()=>{updateCount(count+1)}}>
                    
                {count}
            </h2>
        </div>
    )
}
