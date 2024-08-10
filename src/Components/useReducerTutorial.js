import React, { useReducer } from 'react';

function useReducerTutorial(props) {
    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT":
                return {count: state.count + 1 , txt: state.txt}
            case "toggleShowText":
                return {count: state.count, txt: !state.txt}
            default:
                return state
        }
    }

const [state, dispatch] = useReducer(reducer ,{count: 0, txt:true}) 

    return (
    <>
    <div>
        <h1>{state.count}</h1>
        <button
            onClick={() => {
                dispatch( { type: "INCREMENT" } )
                dispatch({type:"toggleShowText"})
            }}
        >Click Here</button>
        {state.txt && <p>here am i</p>}
    </div>
    </>
        );
}

export default useReducerTutorial;