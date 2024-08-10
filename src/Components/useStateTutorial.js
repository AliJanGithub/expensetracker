import React, {useState} from 'react';

function useStateTutorial(props) {
    const [txt, setText] = useState("pedro")

    let onChange = (event) => {
        setText(event.target.value)
    }

    return (<>
        <div>Hello</div>
        {/* <input placeholder='Enter the text' onChange={onChange}/>{txt} */}
        </>
    );
}

export default useStateTutorial;