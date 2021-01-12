import React, { Component } from 'react';
import './App.css';
import ExercisesOne from './ExercisesOne/ExercisesOne';

class App extends Component {

    state = {
        users: [
            { username: "Mustafa" }
        ]
    };

    switchNameHandler = (newUserName) => {
        // console.log("this button clicked!!!");
        // DON'T DO THIS this.state.persons[0].name = 'D';
        this.setState({
            users: [
                { username: newUserName }
            ]
        });
    };

    userNameChangeHandler = (event) => {
        this.setState({
            users: [
                { username: event.target.value }
            ]
        });
    };

    /* 
    This is the one way of using function. THIS VERSION COME SECOND
    <button onClick={() => this.switchNameHandler("AAA", 200)}>Switch the name you want</button> 
    
    This is the another way of using function. THIS VERSION COME FIRST
     <Person click={this.switchNameHandler.bind(this, "BBB", 100)}>
    */

    render() {
        const style = {
            backgroundColor: 'tomato',
            font: 'inherit',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
        };

        return (
            <div className="App">
                <input
                    style={style}
                    onChange={this.userNameChangeHandler} />
                <ExercisesOne
                    username={this.state.users[0].username}
                    changed={this.userNameChangeHandler}>
                    I feel amazing!!!
                </ExercisesOne>
                <ExercisesOne
                    username={this.state.users[0].username}
                    changed={this.userNameChangeHandler}>
                    I feel amazing!!!
                </ExercisesOne>
                <ExercisesOne
                    username={this.state.users[0].username}
                    changed={this.userNameChangeHandler}>
                    I feel amazing!!!
                </ExercisesOne>
            </div>
        );
    }
}

export default App;
