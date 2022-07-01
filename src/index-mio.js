import { Tarjeta, BlogPost } from './tarea/Tarea1.js';

// ReactDOM.render(
//   <Tarjeta
//     nombre={"Julio Gagliardi"}
//     titulo="Programador Front End"
//     imagen="https://avatars.githubusercontent.com/u/93630700?s=400&u=15b5e059d8912043babef0c3ca4cc9081c7ce37b&v=4"
//   />,
//   document.getElementById('react-app')
// );
// ReactDOM.render(<Tarjeta />, document.getElementById('react-app'));

ReactDOM.render(
  <BlogPost
    titulo="Ardillas"
    parrafos={`Hoy vi una ardilla.
    La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
    Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
    autor={{
      nombre: "Julio Gagliardi",
      titulo: "Programador Front End",
      imagen: "https://avatars.githubusercontent.com/u/93630700?s=400&u=15b5e059d8912043babef0c3ca4cc9081c7ce37b&v=4"
    }}
  />,   document.getElementById('react-app')
)