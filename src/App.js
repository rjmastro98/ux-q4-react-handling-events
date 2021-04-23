import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {
    dogs: [
      {
        name: "Scruffles",
      },
      {
        name: "Snarf",
      },
      {
        name: "Wookie",
      },
    ],
    newDogName: "",
  };

  onAddNewDog = () => {
    let newDog = {
      name: this.state.newDogName,
    };

    this.setState((state) => {
      return {
        dogs: [...state.dogs, newDog],
        newDogName: "",
      };
    });
  };

  handleChangeDogName = (event) => {
    this.setState({
      newDogName: event.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <ul className="dogList">
          {this.state.dogs.map((dog) => (
            <li>
              <Dog dog={dog} />
            </li>
          ))}
        </ul>
        <br />
        <div>
          <input
            onChange={this.handleChangeDogName}
            type="text"
            value={this.state.newDogName}
          ></input>
          <button onClick={this.onAddNewDog}>Adopt Dog!</button>
        </div>
      </div>
    );
  }
}

export default App;
