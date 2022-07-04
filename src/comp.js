import React from 'react'
import { useState } from 'react';

//Counter BUTTON

// function Comp() {

//     const [count, setcount] = useState(0)

//     function increase() {
//         setcount(count + 1);
//     }

//     function decrease() {
//         setcount(count - 1);
//     }

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increase}>+</button>
//             <button onClick={decrease}>-</button>
//         </div>
//     )
// }

// export default Comp;

//GET TIME BUTTON

function Comp() {

    // const [time, settime] = useState(new Date().toLocaleTimeString());

    // function showTime() {
    //     settime(new Date().toLocaleTimeString());
    // }

    // return (
    //     <div>
    //         <h1>{time}</h1>
    //         <button onClick={showTime} >GET TIME</button>
    //     </div>
    // )

    const [text, settext] = useState("Hello")

    function mouse() {
        
    }

    function leave() {

        
    }

    return (
        <div>
            <p>{text}</p>
            <form>
                <input type="text"></input>
                <button onMouseOver={mouse} onMouseLeave={leave}>Submit</button>
            </form>
        </div>
    )
}

export default Comp;