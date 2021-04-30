import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      item: "",
      items: [], //
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sumbitItem = this.sumbitItem.bind(this);
  }

  sumbitItem() {
    let item = this.state.item;
    let items = this.state.items;

    items.push(item);

    this.setState({ items: items });
  }

  handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App">
        <h2>TO DO LIST</h2>

        <input
          type="text"
          name="item"
          onChange={this.handleInputChange}
        ></input>

        <button onClick={this.sumbitItem}>Sumbit it!</button>

        {this.state.items.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    );
  }
}

export default App;
