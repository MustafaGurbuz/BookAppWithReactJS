import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { name: 'A', age: 30 },
            { name: 'B', age: 40 },
            { name: 'C', age: 20 }
        ]
    };

    switchNameHandler = (newName, newAge) => {
        // console.log("this button clicked!!!");
        // DON'T DO THIS this.state.persons[0].name = 'D';
        this.setState({
            persons: [
                { name: newName, age: 30 },
                { name: 'B', age: 40 },
                { name: 'C', age: newAge }
            ]
        });
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: "A", age: 30 },
                { name: event.target.value, age: 40 },
                { name: 'C', age: 20 }
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
            backgroundColor: 'dodgerblue',
            font: 'inherit',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>This is a React Application</h1>
                <p>This part is really working...</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("AAA", 200)}>Switch the name you want</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "BBB", 100)}
                    changed={this.nameChangeHandler}>
                    Some info: Reading A Book
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
