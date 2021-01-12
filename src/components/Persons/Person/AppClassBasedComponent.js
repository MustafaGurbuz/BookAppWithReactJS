import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'jklfdg1', name: 'A', age: 30 },
            { id: '454fghg', name: 'B', age: 40 },
            { id: 'fghfg87', name: 'C', age: 20 }
        ],
        showPersons: false
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps');
        return state;
    }

    /* componentWillMount() {
      console.log('[App.js] componentWillMount');
    } */

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

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
        let persons = <h3>Hoşgeldiniz!!!</h3>;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deleteNameHandler}
                changed={this.nameChangeHandler}
            />;
        }

        return (
            <div className="App">
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;
