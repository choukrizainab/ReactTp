
/*=====> TP : Incrementer et décrémenter un nombre (props et state)  class<=====
import './App.css';
import React from 'react';

 export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={num:0};
  }
  Incrementer = () => {this.setState({num:this.state.num+1});
}
  Decrementer = () => {this.setState({num:this.state.num-1})
}
 
    render(){
    return (
      <div className="App">
        <p>{this.state.num}</p>
        <button type='Button' onClick={this.Incrementer}>Incrementer</button>
        <button type='Button' onClick={this.Decrementer}>Décrementer</button>
      </div>
    );
  }
}
*/
/*=====> Seance 5 : TP2 composant Voiture données à partir d’un objet <=====
import React from "react";
import Voiture from "./TpSeance5P2/Voiture";

export default function App() {
  return(
    <div>
      <Voiture/>
    </div>
  )
}
*/
/*=====> Seance 5 : TP1 classes composants <=====
//=====> Seance 5 : TP1 fonctionnels composants <=====

import React from "react";
import Presentation from './TpSeance5P1/Presentation';
import Header from './TpSeance5P1/Header';
export default function App() {
  return(
    <div>
      <Header/><br/>
      <Presentation/>
    </div>
  )
 }
 */
/*=====> App <=====
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/