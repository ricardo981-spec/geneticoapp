import './App.css';
import React, {userEffect,useState} from 'react';
import axios from 'axios';

function App() {
  const [mensagemAPI,setMensagemAPI] = useState('')
  userEffect(() =>{
    axios.get('http:localhost:3001/api/exemplo')
    .then(Response =>{
      setMensagemAPI(Response.data.mensagem);
    })
  }
  )
  return (
    <div>
      <h1>{mensagemAPI}</h1>
      
    </div>
  );
}

export default App;
