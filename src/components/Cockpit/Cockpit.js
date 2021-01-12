import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css';
import Radium from 'radium';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    //easier way to use AuthContext with useContext() hooks..
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     alert('saved all data!');
        // }, 1000);

        toggleBtnRef.current.click();

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };

    }, []);

    //[props.persons] => if you want to use with every changes

    const style = {
        backgroundColor: 'dodgerblue',
        font: 'inherit',
        color: 'white',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightblue',
            color: 'brown'
        }
    };

    const classes = [];
    if (props.showPersons) {
        style.backgroundColor = 'green';
        style[':hover'] = {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    }
    if (props.personsLength <= 2) {
        classes.push('red'); // classes = ['red'];
    }
    if (props.personsLength <= 1) {
        classes.push('bold'); // classes = ['red','bold'];
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This part is really working...</p>
            <button
                ref={toggleBtnRef}
                style={style}
                onClick={props.clicked}>CLICK FOR CHANGE</button>
            {/*   <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>LOGIN</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>LOGIN</button>
        </div>
    );
};

export default React.memo(Radium(Cockpit));