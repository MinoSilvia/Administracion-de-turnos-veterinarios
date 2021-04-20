import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
import Animacion from "./components/Animacion";

function App() {

  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Arreglo de citas, arreglo donde guardo la/s cita
  //es un arreglo vacio porque voy a tener multiple cita pero por el momento el state se inicializa vacio
  const [citas, setCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  //Funcion que tome las citas actuales y aguegue la nueva
  const crearCita = (cita) => {
    setCitas([
      ...citas, cita
    ]);
  }

  //Funcion que elimina una cita por su id
  const eliminarCita = (id) => {

    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus Citas';

  return (
    <Fragment>
      <Animacion />
      <h1>Administracion de Turnos Veterinarios</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario

              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

