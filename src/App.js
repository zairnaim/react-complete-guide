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
    ]
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

  render() {
    return (
      <div className="App">
        <h1>
          Hi I'm a react app
        </h1>
        <p>This is really working</p>
        <button onClick={() => this.buttonPressHandler("Maximillionsss")}>I am a button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name=
          {this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.buttonPressHandler.bind(this, "wwwwwwwwwwwwwwwwuuuuuuuuuuuut")} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
            changed = {this.nameChangedHandler}
            >My Hobbies: Riding a bike</Person>
          
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
