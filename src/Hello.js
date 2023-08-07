import { useState } from "react";

function Hello() {
    const [name, setName] = useState("")
    const [clickName, setClickName] = useState("")
    const handleChange = ({ target }) => {
        setName(target.value);
    }
    const handleClick = () => {
        setClickName(name)
    }
    return(
        <>
            <h2>Enter your name: {clickName}</h2>
            <input type="text" onChange={handleChange}/>
            <input type="submit" value="Submit" onClick={handleClick}/>
        </>
    )
}
export default Hello;