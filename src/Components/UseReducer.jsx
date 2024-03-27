import React from 'react'
import '../App.css'
import { useReducer } from 'react'
const reducer = (state, action) => {
    if (action.type === "INC") {
        return state + 1
    }
    if (action.type === "DIC") {
        return state - 1
    }
    if (action.type === "MUL") {
        return state * 2
    }
    if (action.type === "RES") {
        return state = 0
    }
    return (state);
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0)
    return (
            <div className='box'>
                <h2 style={{fontSize:"2rem", marginBottom:"10px"}}>Use Reducer</h2>
                <h1>{state}</h1>
                <div className='btn'>
                    <button
                        onClick={() => dispatch({ type: "INC" })}
                        className="increment">
                        increment
                    </button>

                    <button
                        onClick={() => dispatch({ type: "DIC" })}
                        className="decrement">
                        decrement
                    </button>

                    <div className='btn'>
                        <button
                            onClick={() => dispatch({ type: "MUL" })}
                            className="multuply">
                            multuply
                        </button>

                        <button
                            onClick={() => dispatch({ type: "RES" })}
                            className="reset">
                            "reset
                        </button>
                    </div>

                </div>
            </div>
    )
}

export default UseReducer