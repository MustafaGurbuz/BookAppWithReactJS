import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

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
        showPersons: false,
        showCockpit: true,
        authenticated: false
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

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
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

    loginHandler = () => {
        this.setState({ authenticated: true })
    };

    render() {
        let persons = <h3>Hoşgeldiniz!!!</h3>;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deleteNameHandler}
                changed={this.nameChangeHandler}
                isAuthenticated={this.state.authenticated}
            />;
        }

        return (
            <div className="App">
                <button
                    onClick={() => {
                        this.setState({ showCockpit: false })
                    }}>Remove Cockpit</button>
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    {this.state.showCockpit ? <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                    /> : null}

                    {persons}
                </AuthContext.Provider>

            </div>
        );
    }
}

export default App;
