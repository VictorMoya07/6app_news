import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarApi = async()=>{

     
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7682b3f2555c46ffb27eed4a6fcde6ae`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }

    consultarApi();
  },[categoria])

  return (
    <Fragment>
      <Header
      titulo="Noticias React"
      />


    <div className="container white">
        <Formulario
        guardarCategoria={guardarCategoria}
        />
    </div>

    <ListadoNoticias 
      noticias={noticias}
    />

    </Fragment>
  );
}

export default App;
