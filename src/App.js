import React from 'react';
import logo from './logo.svg';
import './App.css';

// Ini adalah component yang berupa fungsi
//Kita implementasikan props -> properties
function Biodata(props) {
  return <p>Usia kamu{props.umur}</p>
}

function Greetings(props) {
  return <h1>Selamat malam {props.nama}, <Biodata umur = {props.umur}/></h1>
}

//Ini adalah component yang berupa class
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greetings nama="Umar Fadil" umur="26"/>
        </header>
      </div>
    );
  }

}

export default App;
