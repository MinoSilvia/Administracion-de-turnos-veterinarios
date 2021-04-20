import React, { Fragment, useState } from "react";
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';


const Formulario = ({ crearCita }) => {

  // Crear State de Citas
  const [cita, setCita] = useState({

    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  const [error, setError] = useState(false)

  //Funcion que se ejecuta cada que el usuario escribe en el input
  const actualizarState = (event) => {
    setCita({
      ...cita,
      [event.target.name]: event.target.value

    })
  }

  //Extraer los valores de cita con destructuring
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el usuario presiona agregar cita
  const submitCita = (event) => {
    event.preventDefault();

    /*Acciones a realizar cuando enviamos un cita, es decir agregamos una cita.*/

    // Validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError(true);
      return;
    }

    //Eliminar el mensaje previo de error
    setError(false);

    //Asignar un ID
    cita.id = uuid();

    //Crear la cita, colocarla en el state principal -> Esta en  App.js const [citas, setCitas] = useState([]);
    crearCita(cita);

    //Reiniciar el form
    setCita({

      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''

    })
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      {error ? <p className='alerta-error'>Todos los campos son obligatorios.</p> : null}
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}>
        </textarea>

        <button type="submit" className="button agregar u-full-width">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;

