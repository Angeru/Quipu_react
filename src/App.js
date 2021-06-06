import React, { useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
 //useState imagen_url
 const [url, setUrl] = useState(null);
 const [url2, setUrl2] = useState(null);
 const [id, setId] = useState(null);

  function today_image(){
   console.log("enviando")
    
    var url = 'https://thingproxy.freeboard.io/fetch/http://xkcd.com/info.0.json';
    fetch(url, {
      method: 'GET',
      headers:{
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(res => res.json())
    .then(response => setUrl(response.img))
    .catch(error => console.error('Error:', error));
  }



  function other_image(){
   console.log("enviando")
    
   if(id)
   {
      var url = 'https://thingproxy.freeboard.io/fetch/http://xkcd.com/'+id+'/info.0.json';
      fetch(url, {
        method: 'GET',
        headers:{
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(res => res.json())
      .then(response => setUrl(response.img))
      .catch(error => alert("Id no válido"));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ejemplo de acceso a API
        </h1>
        <p>
          Carga la ultima imagen
        </p>
        
        <button type="button" className="myButton" onClick={() => today_image()} >
          Carga imagen
        </button>

        {url ? <p> <img src={url} /> </p> : <p>Imagen no cargada</p>}




        Carga una imagen anterior
        <p><input type="text" name="name" onChange={(e)=>setId(e.target.value)}/></p>
        <button type="button" className="myButton" onClick={() => other_image()} >
          Carga imagen
        </button>

        {id}
        
        {url2 ? <p> <img src={url2} /> </p> : <p>Imagen no cargada</p>}
      </header>
    </div>
  );
}

export default App;
