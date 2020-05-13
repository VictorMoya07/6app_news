import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
    const consultarApi = async()=>{

     
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=c927fa138ba64f2d92b8731f6752bd13`

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
