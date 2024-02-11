import React, {useState, useEffect} from 'react';

function NumberDisplay({ numbersArray }) {
    const [localNumber, setLocalNumber] = useState(0);

    const onButtonClick = () =>{
        setLocalNumber(Math.floor(Math.random() * 100));
    }

    useEffect(() =>{
        console.log(`Props NumbersArray useEffect ran with ${Math.floor(Math.random() * 100)}`);
    }, [numbersArray])
    return (
        <div>
            <h1>
                NumberDisplay Component
            </h1>

            <button onClick={onButtonClick}>Change Local Number</button>
                <p>Local Number : {localNumber}</p>

                <p>
                    Numbers Array from Parent :
                </p>
                <ul>
                    {
                        numbersArray.map((number, idx) => (
                            <li key={idx}>{number}</li>
                        ))
                    }
                </ul>
        </div>
    )
}

export default NumberDisplay