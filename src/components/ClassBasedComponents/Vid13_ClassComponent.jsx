import { Component } from "react";

class Vid11 extends Component {
  constructor() {
    super();
    this.state = {
      data: `Ramit`
    };
  }
  handleCLick() {
    if (
      this.state.data === `Ramit Using Click1` ||
      this.state.data === `Ramit Using Click2`
    ) {
      this.setState({ data: `Sukanta Using Click2` });
    } else {
      this.setState({ data: `Ramit Using Click2` });
    }
  }
  render() {
    const handleCLick = () => {
      console.log(`Inside handleClick inside Render`);
      if (
        this.state.data === `Ramit Using Click1` ||
        this.state.data === `Ramit Using Click2`
      ) {
        this.setState({ data: `Sukanta Using Click1` });
      } else {
        this.setState({ data: `Ramit Using Click1` });
      }
    };
    return (
      <>
        <div>Hello {this.state.data}</div>
        <hr />
        <br />
        <p>
          <button onClick={handleCLick}>Click1</button>
        </p>
        <hr />
        <br />
        <button onClick={() => this.handleCLick()}>Click2</button>
      </>
    );
  }
}

export default Vid11;
