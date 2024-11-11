import { useState } from "react"

export default function Counter(){
    const [count, settCount] = useState(50);

    const handaleAdd = () =>{
        const newCount = count + 1;
        settCount(newCount);
    }

    const handelReduce = () =>{
        const reduce = count - 1;
        settCount(reduce)
    }

    return (
        <div style={{border: '2px solid tomato'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handaleAdd}>Add</button>
            <button onClick={handelReduce}>Reduce</button>
        </div>
    )
}
