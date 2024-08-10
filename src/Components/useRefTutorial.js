import React, {useRef} from 'react';

function useRefTutorial(props) {
    const inputRef = useRef(null);

    const onClick = () => {
        // console.log(inputRef.current.value)
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>Pedro</h1>
            <input placeholder='Ex..' type='text' ref={inputRef}/>
            <button onClick={onClick}>Change</button>
        </div>
        );
}

export default useRefTutorial;