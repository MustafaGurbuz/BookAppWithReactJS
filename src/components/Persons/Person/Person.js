import React, { Component } from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    //using this version without <AuthContext.Consumer>
    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElementRef.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        return (
            <Aux className="Person">
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? 
                    <p>Authenticated!</p> : 
                    <p>Please log in...</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ?
                    <p>Authenticated!</p> :
                    <p>Please log in...</p>}
                <p onClick={this.props.click}>Hello there!!!
                I am {this.props.name} and
                I am {this.props.age} years old...</p>
                <p>{this.props.children}</p>
                <input
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }

};

export default Person;