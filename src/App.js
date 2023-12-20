import React from "react";
import "./App.css";
import New from "./components/new.jsx";

const fields = [
  { name: "field_name", label: "Name", type: "text" },
  { name: "field_username", label: "User", type: "text" },
  { name: "field_date", label: "Date", type: "date" },
];

class App extends React.Component {
  // Constructor method to initialize the component state and bind the event handler.
  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  //Method to handle input query change
  handleInputChange(event, fieldName) {
    this.setState({
      [fieldName]: event.target.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Webtrends Optimize Software Engineer exam</h1>
        <form>
          {fields.map((item) => (
            <div key={item.name}>
              <label htmlFor={item.name}>{item.label}</label>
              <input
                onChange={(e) => this.handleInputChange(e, item.name)}
                type={item.type}
                name={item.name}
                id={item.name}
              />
            </div>
          ))}
        </form>
        <New text="hello" />
      </div>
    );
  }
}

export default App;
