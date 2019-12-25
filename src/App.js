import React from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";
import SerachBox from "./components/search-box/SearchBox";
class App extends React.Component {
  state = {
    monsters: [],
    searchField: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onChange = e => {
    this.setState({ searchField: e.target.value }, () =>
      console.log("state", this.state.searchField)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SerachBox placeholder="Search monsters" handleChange={this.onChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
