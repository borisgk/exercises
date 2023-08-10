
import {useState } from 'react';

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");
/*
    useEffect(() => {
        console.log(`${name} selected ${fruit}`)
    }, [fruit]) // Getting a complaint here - why?
*/
    return (
        <div>
            <input id="name-input" onChange={(e) => setName(e.target.value)} value={name} />
            <select id="select-input" onChange={(e) => {
                setFruit(e.target.value)
                console.log(`${name} selected ${e.target.value}`)
            }} value={fruit}>
                <option value="apple">Apple</option>
                <option value="pear">Pear</option>
                <option value="etrog">Etrog</option>
                <option value="beer">Beer</option>
                <option value="sausage">Sausage</option>
            </select>
        </div>
    );
}
export default Exercise2;
