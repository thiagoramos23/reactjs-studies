import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Ana", age: 25 },
      { name: "Stephanie", age: 23 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Ana", age: 25 },
        { name: "Stephanie", age: 23 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "sMax", age: 28 },
        { name: event.target.value, age: 25 },
        { name: "Stephanie", age: 23 }
      ]
    })
  }

  tooglePersonsHandler = () => {
    const willShow = !this.state.showPersons;
    this.setState({showPersons: willShow});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
                    name={person.name}
                    age={person.age}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <p>Hi I am a developer</p>
        <button onClick={() => this.tooglePersonsHandler()}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;