import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            { id: 'jklfdg1', name: 'A', age: 30 },
            { id: '454fghg', name: 'B', age: 40 },
            { id: 'fghfg87', name: 'C', age: 20 }
        ],
        showPersons: false
    };

    /* switchNameHandler = (newName, newAge) => {
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
   */

    deleteNameHandler = (personIndex) => {
        //Alternatively...
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };


    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        //Alternatively...
        //const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => {
        const isAppear = this.state.showPersons;
        this.setState({ showPersons: !isAppear });
    }

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

        let persons = <h3>Hoşgeldiniz!!!</h3>;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deleteNameHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })}
                    {/*  <Person
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
            age={this.state.persons[2].age} /> */}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>This is a React Application</h1>
                <p>This part is really working...</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>CLICK FOR CHANGE</button>
                {persons}
                {
                    //  { this.state.showPersons ? <div></div> : null}
                }
            </div>
        );
    }
}

export default App;
