import logo from './logo.svg';
import './App.css';
import React, {useInsertionEffect,useState} from 'react';
import axios from 'axios';

function App() {
  axios[mensagemAPI,setMensagemAPI] = useState
  userEffect(() =>{
    axios.get('hhtps')
    .then(Response =>{
      setMensagemAPI(Response.data.mensagem);
    })
    .catch(error =>{
      console.error(`erro ao obter da API:`),error
    })
  }
  )
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
