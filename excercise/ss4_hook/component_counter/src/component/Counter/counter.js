import {useState} from "react";

export function Counter() {
    const [count1, setCount1] = useState(0)
    const handleAddCount1 = () => {
        setCount1(prevState => prevState + 1)
    }
    const [count2, setCount2] = useState(0)
    const handleAddCount2 = () => {
        setCount2(prevState => prevState + 2)
    }
    return (
        <>
            <h1>Count : {count1}</h1>
            <button onClick={() => handleAddCount1()}>Add1</button>
            <h1>Count : {count2}</h1>
            <button onClick={() => handleAddCount2()}>Add2</button>
        </>
    )
}