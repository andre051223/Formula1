document.addEventListener('DOMContentLoaded', () => {
  const clasificacion = [
    { posicion: 1, equipo: 'Red Bull', piloto: 'Max Verstappen', puntos: 0 },
    { posicion: 2, equipo:'Red Bull', piloto: 'Liam Lawson', puntos: 0 },
    { posicion: 3, equipo:'Ferrari',piloto: 'Lewis Hamilton', puntos: 0 },
    { posicion: 4, equipo:'Ferrari',piloto: 'Charles Leclerc', puntos: 0 },
    { posicion: 5, equipo:'Mercedes',piloto: 'George Russell', puntos: 0 },
    { posicion: 6, equipo:'Mercedes',piloto: 'Kimi Antonelli', puntos: 0 },
    { posicion: 7, equipo:'Mclaren',piloto: 'Oscar Piastri', puntos: 0 },
    { posicion: 8, equipo:'Mclaren',piloto: 'Lando Norris', puntos: 0 },
    { posicion: 9, equipo:'Visa RB',piloto: 'Yuki Tsunoda', puntos: 0 },
    { posicion: 10, equipo:'Visa RB',piloto: 'Isack Hadjar', puntos: 0 },
    { posicion: 11, equipo:'Aston Martin',piloto: 'Fernando Alonso', puntos: 0 },
    { posicion: 12, equipo:'Aston Martin',piloto: 'Lance Stroll', puntos: 0 },
    { posicion: 13, equipo:'Alpine',piloto: 'Pierre Gasly', puntos: 0 },
    { posicion: 14, equipo:'Alpine',piloto: 'Jack Doohan', puntos: 0 },
    { posicion: 15, equipo:'Williams',piloto: 'Carlos Sainz', puntos: 0 },
    { posicion: 16, equipo:'Williams',piloto: 'Alex Albon', puntos: 0 },
    { posicion: 17, equipo:'Kick Sauber',piloto: 'Gabriel Bortoleto', puntos: 0 },
    { posicion: 18, equipo:'Kick Sauber',piloto: 'Nico Hulkenberg', puntos: 0 },
    { posicion: 19, equipo:'Haas',piloto: 'Oliver Bearman', puntos: 0 },
    { posicion: 20, equipo:'Haas',piloto: 'Esteban Ocon', puntos: 0 },
    // Añade más pilotos según sea necesario
  ];

  const tablaClasificacion = document.getElementById('tabla-clasificacion').getElementsByTagName('tbody')[0];

  clasificacion.forEach(piloto => {
    const fila = tablaClasificacion.insertRow();
    const celdaPosicion = fila.insertCell(0);
    const celdaEquipo = fila.insertCell(1);
    const celdaPiloto = fila.insertCell(2);
    const celdaPuntos = fila.insertCell(3);

    celdaPosicion.textContent = piloto.posicion;
    celdaEquipo.textContent = piloto.equipo;
    celdaPiloto.textContent = piloto.piloto;
    celdaPuntos.textContent = piloto.puntos;
  });
});