import React, { useState } from 'react';

const Formulario = ({datosConsulta}) => {

    //state del Componente
    //busqueda = state , guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })

    //el handleChange busca actualizar el state
    const handleChange = e => {
        
        guardarBusqueda({
            ...busqueda,//se toma una copia del state actual
            [e.target.name]: e.target.value//y se le suma los nuevos datos
            //de no hacerlo asi, el state tomaria solamente las nuevas entradas
        })
    }

    const consultarClima = (e) => {
        e.preventDefault()
        datosConsulta(busqueda)
        //return (  );
    }
     
    

    return ( 
        <form
            onSubmit={consultarClima}
        > 
            <div className="input-field col s12">
                <input 
                    type="text"
                    className=""
                    placeholder="Ciudad"
                    name="ciudad"
                    id="ciudad"
                    //value={this.handleChange}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>

            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>

                </select>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
    );
}
 
export default Formulario;