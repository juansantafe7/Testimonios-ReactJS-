import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>

          <h1>Estos son nuestros testimonios</h1>

          <Testimonio 
            nombre= 'Doggy'
            pais='Suecia'
            imagen='perro'
            cargo='Jugador de Futbol'
            empresa='Manchester'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec metus non nisi cursus aliquam non et leo. Sed vel mollis justo. Aenean ornare sed mi sollicitudin sagittis. Proin euismod lacinia nulla id rutrum. Vivamus sed ligula sapien. Phasellus vestibulum diam ac elit tincidunt convallis. Nunc eget nibh nec orci lobortis interdum. Suspendisse in lorem commodo, ornare lorem in, maximus ante. Suspendisse convallis augue eros, id congue turpis varius et. Morbi dui enim, egestas ut purus ut, lobortis pretium arcu. Duis maximus ante suscipit dignissim vestibulum. Etiam quis ligula dui. Curabitur fringilla aliquam viverra.'
          />
                    <Testimonio 
            nombre= 'Wolfy'
            pais='Italia'
            imagen='lobo'
            cargo='Desarrollador Front End'
            empresa='Oracle'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec metus non nisi cursus aliquam non et leo. Sed vel mollis justo. Aenean ornare sed mi sollicitudin sagittis. Proin euismod lacinia nulla id rutrum. Vivamus sed ligula sapien. Phasellus vestibulum diam ac elit tincidunt convallis. Nunc eget nibh nec orci lobortis interdum. Suspendisse in lorem commodo, ornare lorem in, maximus ante. Suspendisse convallis augue eros, id congue turpis varius et. Morbi dui enim, egestas ut purus ut, lobortis pretium arcu. Duis maximus ante suscipit dignissim vestibulum. Etiam quis ligula dui. Curabitur fringilla aliquam viverra.'
          />

          <Testimonio 
            nombre= 'Leo'
            pais='Canada'
            imagen='leon'
            cargo='Ejecutivo de ventas'
            empresa='Claro'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec metus non nisi cursus aliquam non et leo. Sed vel mollis justo. Aenean ornare sed mi sollicitudin sagittis. Proin euismod lacinia nulla id rutrum. Vivamus sed ligula sapien. Phasellus vestibulum diam ac elit tincidunt convallis. Nunc eget nibh nec orci lobortis interdum. Suspendisse in lorem commodo, ornare lorem in, maximus ante. Suspendisse convallis augue eros, id congue turpis varius et. Morbi dui enim, egestas ut purus ut, lobortis pretium arcu. Duis maximus ante suscipit dignissim vestibulum. Etiam quis ligula dui. Curabitur fringilla aliquam viverra.'
          />

      </div>
    </div>
  );
}

export default App;
