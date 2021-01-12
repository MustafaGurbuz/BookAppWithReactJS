import React, { Component } from 'react';
import './App.css';
import ExercisesTwo from './ExercisesTwo/ExercisesTwo';
import ExercisesTwoBox from './ExercisesTwo/ExercisesTwoBox';

class App extends Component {

    state = {
        textContent: [
            { id: 'tklj154', text: "" }
        ]
    };

    userNameChangeHandlerTwo = (event) => {
        this.setState({
            textContent: [
                { text: event.target.value }
            ]
        });
    };

    textLength() {
        const valueLength = this.state.textContent.map(textContent => {
            return textContent.text.length;
        });
        return valueLength;
    };

    deleteTextHandler = (textIndex) => {
        const texts = this.state.textContent.map(textContent => {
            return textContent.text.split('');
        });
        const a = texts.map(t => t.splice(textIndex, 1));
        const textDelete = a.map(s => s.join(''));
        console.log(textDelete);
        this.setState({ textContent: textDelete });
    };

    render() {
        const style = {
            margin: 20,
            backgroundColor: 'lightgray',
            font: 'inherit',
            color: 'red',
            border: '1px solid blue',
            padding: '8px',
        };

        let texts = <h3>Hoşgeldiniz!!!</h3>;

        texts = (
            <div>
                {this.state.textContent.map((textContent) => {
                    return <ExercisesTwo
                        text={textContent.text}
                        key={textContent.id}
                        changed={this.userNameChangeHandlerTwo}
                        validationShort={this.textLength()}
                    />
                })}
            </div>
        );

        const valueAdd = this.state.textContent.map(textContent => {
            return textContent.text.split('').map((txt, index) => {
                return <ExercisesTwoBox
                    text={txt}
                    key={index}
                    click={() => this.deleteTextHandler(index)}
                />
            });
        });

        return (
            <div className="App">
                <input
                    style={style}
                    onChange={this.userNameChangeHandlerTwo}
                />
                {texts}
                {valueAdd}
            </div>
        );
    }
}

export default App;
