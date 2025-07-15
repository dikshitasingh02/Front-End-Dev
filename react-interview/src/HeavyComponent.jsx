import React, { useCallback } from 'react'

const HeavyComponent = () => {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljfGVufDB8fDB8fHww"
        },
        {
            url: "https://images.unsplash.com/photo-1546471180-335a013cb87b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWVzdGhldGljfGVufDB8fDB8fHww"
        },
        {
            url: "https://images.unsplash.com/photo-1592355591829-aaae33fcff1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVzdGhldGljfGVufDB8fDB8fHww"
        },
    ];

    const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5]);

    // recalculate the sum on every render
    const totalSum = React.useMemo(() => {
        console.log("Calculating Sum...");
        return numbers.reduce((sum, num) => sum + num, 0);
    }, [numbers]);

    //recreate the addRandomNumber function on every render
    const addRandomNumber = useCallback(() => {
        setNumbers((prevNums) => [...prevNums, Math.floor(Math.random() * 100)]);
    }, []);

  return (
    <>
    <div>
        <h2>Image Gallary</h2>
        <div style={{display: 'flex', gap: '20px'}}>
            {images.map((src, index) => (
                <img src={src.url} alt={index +1} style={{width:400, height: 400, objectFit: 'contain'}} />
            ))}
        </div>
    </div>

    <div>
        <h1>Un Optimized Parent Logic Calculaiton</h1>
        <p>Total sum : {totalSum}</p>
        <button onClick={() => console.log("hi there,", numbers)}>
            Click Me
        </button>
        <button onClick={addRandomNumber}>Add Random Number</button>
        <ChildComponent numbers={numbers} />
    </div>
    </>
  )
}

const ChildComponent = React.memo(({numbers}) => {
    return (
        <div>
            <h2>Number List</h2>
            <ul>{numbers.map((num, index) => (
                <li key={index}>{num}</li>
            ))}</ul>
        </div>
    )
})

export default HeavyComponent