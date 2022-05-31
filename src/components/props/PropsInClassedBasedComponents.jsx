import { Component } from "react";
// const collect = require("collect.js");
export default class Propss extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      name: this.props.name,
      class: this.props.classss,
      mind: this.props.mind
    };
  }

  handleClick(e) {
    // console.log(e);
    if (
      e.name === `"Sukanta"` &&
      e.class === `"2nd Year"` &&
      e.mind === `"Halkat"`
    ) {
      this.setState({
        name: `"Ramit"`,
        class: `"Class e asena"`,
        mind: `"Happy"`
      });
    } else {
      this.setState({
        name: `"Sukanta"`,
        class: `"2nd Year"`,
        mind: `"Halkat"`
      });
    }
  }
  render() {
    /*
    console.log(this.props);
    //Converting Object to Array
    const propertyNames = Object.keys(this.props);
    console.log(propertyNames);
    const propertyNames1 = Object.values(this.props);
    console.log(propertyNames1);
    const propertyNames2 = Object.entries(this.props);
    console.log(propertyNames2);

    const collection = collect(this.props);
    const newObject = collection.toArray();
    console.log(newObject);
    */
    return (
      // <>
      //   <h1>Hello {this.props.name}</h1>
      //   <span>
      //     <button onClick={() => this.handleClick(this.props.name)}>
      //       Click
      //     </button>
      //   </span>
      //   <h1>Hello {this.props.classss}</h1>
      //   <h1>Hello {this.props.mind}</h1>
      // </>
      <>
        <h1>Hello {this.state.name}</h1>
        <h1>Class: {this.state.class}</h1>
        <h1>Mind: {this.state.mind}</h1>
        <span>
          <button onClick={() => this.handleClick(this.state)}>Click</button>
        </span>
      </>
    );
  }
}
