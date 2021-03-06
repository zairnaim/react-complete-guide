import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Abba", age: 8 },
      { name: "Zebra", age: 48 },
      { name: "Jen", age: 22 }
    ],
    showpersons: true
  }

  buttonPressHandler = (newName) => {
    console.log("hiii");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Jabba", age: 8 },
        { name: "Lebra", age: 48 },
        { name: "Jenty", age: 22 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Jabba", age: 8 },
        { name: event.target.value, age: 48 },
        { name: "Jenty", age: 22 }
      ]
    })
  }

  togglePersonsList = () => {
    const b = this.state.showpersons;
    this.setState({
      showpersons: !b
    })
  }

  render() {
    const mybuttonstyle = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    let personslist = null;

    if (this.state.showpersons) {
      personslist = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.buttonPressHandler.bind(this, "wwwwwwwwwwwwwwwwuuuuuuuuuuuut")} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}>
            My Hobbies: Riding a bike
              </Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age} />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>
          Hi I'm a react app
        </h1>
        <p>This is really working</p>
        <button
          style={mybuttonstyle}
          onClick={this.togglePersonsList}>
          Switch name
        </button>
        {personslist}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
