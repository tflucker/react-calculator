import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from './KeyPadComponent';
import ResultComponent from './ResultComponent';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
  }

  onClick = button => {
    if(button === "="){
      this.calculate();
    }else if(button === "C"){
      this.reset();
    }else if(button === "CE"){
      this.backspace();
    }else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {

      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0,-1)
    })
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
