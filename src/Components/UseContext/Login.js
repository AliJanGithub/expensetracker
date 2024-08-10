import React, {useContext} from 'react';
import { AppContext } from './UseContextTutorial';


function Login(props) {
    const {setUsername} = useContext(AppContext);

    return (
        <div>
            <input
                onChange={(event) => setUsername(event.target.value)}
            />
        </div>
    );
}


export default Login;