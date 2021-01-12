import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
//import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'green' : 'dodgerblue'};
font: inherit;
color: white;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${props => props.alt ? 'lightgreen' : 'lightblue'};
  color: brown;
}
`;

class App extends Component {

    state = {
        persons: [
            { id: 'jklfdg1', name: 'A', age: 30 },
            { id: '454fghg', name: 'B', age: 40 },
            { id: 'fghfg87', name: 'C', age: 20 }
        ],
        showPersons: false
    };

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
    };

    render() {
        const style = {
            backgroundColor: 'dodgerblue',
            font: 'inherit',
            color: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            //Radium Version
            /* ':hover': {
              backgroundColor: 'lightblue',
              color: 'brown'
            } */
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
                </div>
            );
            //style.backgroundColor = 'green';
            //Radium Version
            /* style[':hover'] = {
              backgroundColor: 'lightgreen',
              color: 'black'
            } */
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red'); // classes = ['red'];
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold'); // classes = ['red','bold'];
        }

        return (
            //<StyleRoot> </StyleRoot>
            <div className="App">
                <h1>This is a React Application</h1>
                <p className={classes.join(' ')}>This part is really working...</p>
                <StyledButton
                    alt={this.state.showPersons}
                    onClick={this.togglePersonsHandler}>
                    CLICK FOR CHANGE
                </StyledButton>

                {persons}
            </div>

        );
    }
}

export default App;
//export default Radium(App);
