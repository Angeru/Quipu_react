import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState(null);

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

  return (
    <div className="App">
      <header className="App-header">
         <button type="button" className="myButton" onClick={() => today_image()} >
            Carga imagen
         </button>

         {url ? <p> <img src={url} /> </p> : <p>Imagen no cargada</p>}
      </header>
    </div>
  );
}

export default App;
