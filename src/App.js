//import logo from './logo.svg';
//import './App.css';
import React, { useState , useEffect, Fragment} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'

function App() {

  //State principal
  const[ciudad, guardarCiudad] = useState('')
  const[pais, guardarPais] = useState('')
  const[error, guardarError] = useState(false)
  const[resultado, guardarResultado] = useState({})


  useEffect(() => {

    if(ciudad=== '') return

    const consultarAPI = async () => {

      const appId= 'cb1575c248e3cb5733c783418bccb327'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
  
      const respuesta = await fetch(url)
      const resultado = await respuesta.json() 
      guardarResultado(resultado)
    }

    consultarAPI()

  }, [ciudad, pais])



  const datosConsulta = datos => {
    //console.log(datos);
    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true)
      return
    }
    guardarCiudad(datos.ciudad)
    guardarPais(datos.pais)
    guardarError(false)
  }

  

  //Cargar un componente condicionalmente
  let componente
  if(error){
    componente = <Error mensaje="Ambos campos son obligatorios"/>
  }else if(resultado.cod === '404'){
    componente = <Error mensaje = "Ciudad no existe en este pais" />
  }else{
    componente = <Clima resultado={resultado}/>
  }

  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario
                datosConsulta={datosConsulta}
              />

            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
