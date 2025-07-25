document.addEventListener('DOMContentLoaded', () => {
  // CONTADOR REGRESIVO PARA LA PRÓXIMA CARRERA
  function initCountdown() {
    // Fecha del GP de Bélgica: 25 de julio 2025, 15:00 (hora europea típica de carrera)
    const nextRaceDate = new Date('2025-07-25T15:00:00').getTime();
    
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = nextRaceDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
      } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
      }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // FILTROS PARA EL CALENDARIO
  function initCalendarFilters() {
    const filterButtons = document.querySelectorAll('.calendar-filters .filter-btn');
    const raceCards = document.querySelectorAll('.calendario section');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-month');
        
        raceCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-month') === filterValue) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // FILTROS PARA LOS PILOTOS
  function initDriverFilters() {
    const filterButtons = document.querySelectorAll('.driver-filters .filter-btn');
    const teamCards = document.querySelectorAll('.pilotos section[data-team]');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-team');
        
        teamCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-team') === filterValue) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }

  // EFECTOS DE HOVER MEJORADOS PARA IMÁGENES DE PILOTOS
  function initDriverHoverEffects() {
    const driverImages = document.querySelectorAll('.pilotos img');
    
    driverImages.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1) rotate(5deg)';
        img.style.filter = 'brightness(1.2) contrast(1.1)';
        img.style.transition = 'all 0.3s ease';
      });
      
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0deg)';
        img.style.filter = 'brightness(1) contrast(1)';
      });
    });
  }

  // ANIMACIÓN DE SCROLL SUAVE PARA LA NAVEGACIÓN
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // INICIALIZAR TODAS LAS FUNCIONES
  initCountdown();
  initCalendarFilters();
  initDriverFilters();
  initDriverHoverEffects();
  initSmoothScroll();

  // Datos de la clasificación - sin posiciones predeterminadas
  let clasificacion = [
    { equipo: 'Red Bull', piloto: 'Max Verstappen', puntos: 165, nacionalidad: '🇳🇱' },
    { equipo:'Visa RB', piloto: 'Liam Lawson', puntos: 12, nacionalidad: '🇳🇿' },
    { equipo:'Ferrari',piloto: 'Lewis Hamilton', puntos: 103, nacionalidad: '🇬🇧' },
    { equipo:'Ferrari',piloto: 'Charles Leclerc', puntos: 119, nacionalidad: '🇲🇨' },
    { equipo:'Mercedes',piloto: 'George Russell', puntos: 147, nacionalidad: '🇬🇧' },
    { equipo:'Mercedes',piloto: 'Kimi Antonelli', puntos: 63, nacionalidad: '🇮🇹' },
    { equipo:'McLaren',piloto: 'Oscar Piastri', puntos: 234, nacionalidad: '🇦🇺' },
    { equipo:'McLaren',piloto: 'Lando Norris', puntos: 226, nacionalidad: '🇬🇧' },
    { equipo:'Red Bull',piloto: 'Yuki Tsunoda', puntos: 10, nacionalidad: '🇯🇵' },
    { equipo:'Visa RB',piloto: 'Isack Hadjar', puntos: 21, nacionalidad: '🇫🇷' },
    { equipo:'Aston Martin',piloto: 'Fernando Alonso', puntos: 16, nacionalidad: '🇪🇸' },
    { equipo:'Aston Martin',piloto: 'Lance Stroll', puntos: 20, nacionalidad: '🇨🇦' },
    { equipo:'Alpine',piloto: 'Pierre Gasly', puntos: 19, nacionalidad: '🇫🇷' },
    { equipo:'Alpine',piloto: 'Franco Colapinto', puntos: 0, nacionalidad: '🇦🇷' },
    { equipo:'Williams',piloto: 'Carlos Sainz', puntos: 13, nacionalidad: '🇪🇸' },
    { equipo:'Williams',piloto: 'Alex Albon', puntos: 46, nacionalidad: '🇹🇭' },
    { equipo:'Kick Sauber',piloto: 'Gabriel Bortoleto', puntos: 4, nacionalidad: '🇧🇷' },
    { equipo:'Kick Sauber',piloto: 'Nico Hulkenberg', puntos: 37, nacionalidad: '🇩🇪' },
    { equipo:'Haas',piloto: 'Oliver Bearman', puntos: 6, nacionalidad: '🇬🇧' },
    { equipo:'Haas',piloto: 'Esteban Ocon', puntos: 23, nacionalidad: '🇫🇷' },
  ];

  // Colores por equipo
  const coloresEquipo = {
    'Red Bull': '#1E40AF',
    'Ferrari': '#DC2626',
    'Mercedes': '#06B6D4',
    'McLaren': '#FF8C00',
    'Visa RB': '#4338CA',
    'Aston Martin': '#059669',
    'Alpine': '#EC4899',
    'Williams': '#3B82F6',
    'Kick Sauber': '#10B981',
    'Haas': '#EF4444'
  };

  let datosOriginales = [...clasificacion];
  let ordenActual = { columna: null, ascendente: true };

  // Elementos DOM
  const tablaClasificacion = document.getElementById('tabla-clasificacion').getElementsByTagName('tbody')[0];
  const tablaCabecera = document.getElementById('tabla-clasificacion').getElementsByTagName('thead')[0];
  const tablaEquipos = document.getElementById('tabla-equipos').getElementsByTagName('tbody')[0];
  const tablaEquiposCabecera = document.getElementById('tabla-equipos').getElementsByTagName('thead')[0];

  // Ordenar inicialmente por puntos (mayor a menor)
  actualizarPosiciones();

  // Crear controles de filtro y búsqueda
  crearControles();
  
  // Hacer las cabeceras clickeables para ordenar
  configurarOrdenamiento();
  
  // Renderizar tabla inicial
  renderizarTabla(clasificacion);
  renderizarTablaEquipos();

  function crearControles() {
    const sectionClasificacion = document.querySelector('#clasificacion');
    
    // Crear contenedor de controles
    const controlesDiv = document.createElement('div');
    controlesDiv.className = 'controles-tabla';
    controlesDiv.style.cssText = `
      display: flex;
      gap: 20px;
      margin: 20px auto;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
    `;

    // Buscador
    const buscadorDiv = document.createElement('div');
    buscadorDiv.innerHTML = `
      <label for="buscador" style="margin-right: 10px; font-weight: bold;">🔍 Buscar piloto:</label>
      <input type="text" id="buscador" placeholder="Nombre del piloto..." 
      style="padding: 8px; border: 2px solid #ddd; border-radius: 5px; width: 200px;">
    `;

    // Filtro por equipo
    const filtroDiv = document.createElement('div');
    const equipos = [...new Set(clasificacion.map(p => p.equipo))];
    filtroDiv.innerHTML = `
      <label for="filtro-equipo" style="margin-right: 10px; font-weight: bold;">🏎️ Filtrar por equipo:</label>
      <select id="filtro-equipo" style="padding: 8px; border: 2px solid #ddd; border-radius: 5px;">
        <option value="">Todos los equipos</option>
        ${equipos.map(equipo => `<option value="${equipo}">${equipo}</option>`).join('')}
      </select>
    `;

    // Botón reset
    const resetDiv = document.createElement('div');
    resetDiv.innerHTML = `
      <button id="reset-filtros" style="
        padding: 8px 16px; 
        background: #EF4444; 
        color: white; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
        font-weight: bold;
        margin-right: 10px;
      ">🔄 Reset</button>
    `;
    
    // Botón simular carrera
    const simularDiv = document.createElement('div');
    simularDiv.innerHTML = `
      <button id="simular-carrera" style="
        padding: 8px 16px; 
        background: #10B981; 
        color: white; 
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
        font-weight: bold;
        margin-right: 10px;
      ">🏁 Simular Carrera</button>
    `;

    // Botones para cambiar vista
    const vistasDiv = document.createElement('div');
    vistasDiv.innerHTML = `
      <button id="vista-pilotos" style="
        padding: 8px 16px; 
        background: #3B82F6; 
        color: white; 
        border: none; 
        border-radius: 5px 0 0 5px; 
        cursor: pointer;
        font-weight: bold;
      ">👤 Pilotos</button>
      <button id="vista-equipos" style="
        padding: 8px 16px; 
        background: #6B7280; 
        color: white; 
        border: none; 
        border-radius: 0 5px 5px 0; 
        cursor: pointer;
        font-weight: bold;
      ">🏎️ Equipos</button>
    `;

    controlesDiv.appendChild(buscadorDiv);
    controlesDiv.appendChild(filtroDiv);
    controlesDiv.appendChild(resetDiv);
    controlesDiv.appendChild(simularDiv);
    controlesDiv.appendChild(vistasDiv);
    
    // Insertar los controles antes de la sección de clasificación, no dentro de ella
    sectionClasificacion.insertBefore(controlesDiv, sectionClasificacion.firstChild);

    // Event listeners
    document.getElementById('buscador').addEventListener('input', filtrarTabla);
    document.getElementById('filtro-equipo').addEventListener('change', filtrarTabla);
    document.getElementById('reset-filtros').addEventListener('click', resetFiltros);
    document.getElementById('simular-carrera').addEventListener('click', simularCarrera);
    document.getElementById('vista-pilotos').addEventListener('click', () => cambiarVista('pilotos'));
    document.getElementById('vista-equipos').addEventListener('click', () => cambiarVista('equipos'));
  }

  function simularCarrera() {
    mostrarNotificacion('🏁 ¡Simulando carrera! Actualizando puntos...');
    
    // Puntos por posición en F1
    const puntosF1 = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    // Crear posiciones aleatorias para simular resultados de carrera
    const posicionesCarrera = [...Array(20)].map((_, i) => i).sort(() => Math.random() - 0.5);
    
    // Asignar puntos basados en posiciones aleatorias
    clasificacion.forEach((piloto, index) => {
      const posicionEnCarrera = posicionesCarrera[index];
      const puntosGanados = puntosF1[posicionEnCarrera] || 0;
      piloto.puntos += puntosGanados;
    });
    
    // Actualizar posiciones y renderizar
    actualizarPosiciones();
    renderizarTabla(clasificacion);
    renderizarTablaEquipos(); // Actualizar también tabla de equipos
    
    setTimeout(() => {
      mostrarNotificacion('🏆 ¡Carrera completada! Puntos actualizados');
    }, 1000);
  }

  function cambiarVista(vista) {
    const tablaClasificacionDiv = document.querySelector('.clasificacion');
    const tablaEquiposDiv = document.querySelector('.clasificacion-equipos');
    const btnPilotos = document.getElementById('vista-pilotos');
    const btnEquipos = document.getElementById('vista-equipos');
    
    if (vista === 'pilotos') {
      tablaClasificacionDiv.style.display = 'flex';
      tablaEquiposDiv.style.display = 'none';
      btnPilotos.style.background = '#3B82F6';
      btnEquipos.style.background = '#6B7280';
    } else {
      tablaClasificacionDiv.style.display = 'none';
      tablaEquiposDiv.style.display = 'flex';
      btnPilotos.style.background = '#6B7280';
      btnEquipos.style.background = '#3B82F6';
      renderizarTablaEquipos(); // Actualizar tabla de equipos
    }
  }

  function calcularPuntosEquipos() {
    const equiposMap = new Map();
    
    // Agrupar pilotos por equipo y sumar puntos
    clasificacion.forEach(piloto => {
      if (!equiposMap.has(piloto.equipo)) {
        equiposMap.set(piloto.equipo, {
          equipo: piloto.equipo,
          pilotos: [],
          puntos: 0
        });
      }
      
      const equipoData = equiposMap.get(piloto.equipo);
      equipoData.pilotos.push(piloto.piloto);
      equipoData.puntos += piloto.puntos;
    });
    
    // Convertir a array y ordenar por puntos
    return Array.from(equiposMap.values()).sort((a, b) => b.puntos - a.puntos);
  }

  function renderizarTablaEquipos() {
    const equiposClasificacion = calcularPuntosEquipos();
    
    // Limpiar tabla
    tablaEquipos.innerHTML = '';
    
    equiposClasificacion.forEach((equipo, index) => {
      const fila = tablaEquipos.insertRow();
      fila.style.cssText = `
        transition: all 0.3s ease;
        animation: fadeIn 0.5s ease-in-out ${index * 0.1}s both;
      `;
      
      // Hover effect
      fila.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      });
      
      fila.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
      });

      const celdaPosicion = fila.insertCell(0);
      const celdaEquipo = fila.insertCell(1);
      const celdaPilotos = fila.insertCell(2);
      const celdaPuntos = fila.insertCell(3);

      // Posición con trofeos para top 3
      const posicion = index + 1;
      let posicionTexto = posicion;
      if (posicion === 1) posicionTexto = '🏆 1';
      else if (posicion === 2) posicionTexto = '🥈 2';
      else if (posicion === 3) posicionTexto = '🥉 3';
      
      celdaPosicion.textContent = posicionTexto;
      celdaPosicion.style.fontWeight = 'bold';

      // Equipo con color
      celdaEquipo.textContent = equipo.equipo;
      celdaEquipo.style.cssText = `
        color: ${coloresEquipo[equipo.equipo] || '#000'};
        font-weight: bold;
        border-left: 6px solid ${coloresEquipo[equipo.equipo] || '#000'};
        padding-left: 12px;
        font-size: 1.1em;
      `;

      // Pilotos del equipo
      celdaPilotos.innerHTML = equipo.pilotos.join(' & ');
      celdaPilotos.style.cssText = 'font-weight: 500; font-style: italic;';

      // Puntos totales del equipo
      celdaPuntos.textContent = equipo.puntos;
      celdaPuntos.style.cssText = `
        font-weight: bold;
        font-size: 1.2em;
        color: ${equipo.puntos > 400 ? '#059669' : equipo.puntos > 200 ? '#D97706' : '#6B7280'};
      `;
    });
  }

  function configurarOrdenamiento() {
    const cabeceras = tablaCabecera.querySelectorAll('th');
    cabeceras.forEach((cabecera, index) => {
      cabecera.style.cursor = 'pointer';
      cabecera.style.userSelect = 'none';
      cabecera.style.position = 'relative';
      cabecera.addEventListener('click', () => ordenarPorColumna(index));
      
      // Añadir indicador de ordenamiento
      const indicador = document.createElement('span');
      indicador.className = 'indicador-orden';
      indicador.style.cssText = 'position: absolute; right: 5px; opacity: 0.5;';
      cabecera.appendChild(indicador);
    });
  }

  function ordenarPorColumna(columnaIndex) {
    const columnas = ['index', 'equipo', 'piloto', 'puntos']; // 'index' para posición calculada
    const columna = columnas[columnaIndex];
    
    if (ordenActual.columna === columna) {
      ordenActual.ascendente = !ordenActual.ascendente;
    } else {
      ordenActual.columna = columna;
      ordenActual.ascendente = true;
    }

    // Para posición (index), ordenamos por puntos inverso
    if (columna === 'index') {
      clasificacion.sort((a, b) => {
        return ordenActual.ascendente ? (a.puntos - b.puntos) : (b.puntos - a.puntos);
      });
    } else {
      clasificacion.sort((a, b) => {
        let valorA = a[columna];
        let valorB = b[columna];
        
        if (typeof valorA === 'string') {
          valorA = valorA.toLowerCase();
          valorB = valorB.toLowerCase();
        }
        
        if (valorA < valorB) return ordenActual.ascendente ? -1 : 1;
        if (valorA > valorB) return ordenActual.ascendente ? 1 : -1;
        return 0;
      });
    }

    // Si se ordena por puntos o posición, actualizar el orden
    if (columna === 'puntos' || columna === 'index') {
      actualizarPosiciones();
    }

    actualizarIndicadoresOrden(columnaIndex);
    renderizarTabla(clasificacion);
  }

  function actualizarIndicadoresOrden(columnaActiva) {
    const indicadores = tablaCabecera.querySelectorAll('.indicador-orden');
    indicadores.forEach((indicador, index) => {
      if (index === columnaActiva) {
        indicador.textContent = ordenActual.ascendente ? '▲' : '▼';
        indicador.style.opacity = '1';
      } else {
        indicador.textContent = '';
        indicador.style.opacity = '0.5';
      }
    });
  }

  function filtrarTabla() {
    const textoBusqueda = document.getElementById('buscador').value.toLowerCase();
    const equipoSeleccionado = document.getElementById('filtro-equipo').value;
    
    let datosFiltrados = datosOriginales.filter(piloto => {
      const coincidePiloto = piloto.piloto.toLowerCase().includes(textoBusqueda);
      const coincideEquipo = !equipoSeleccionado || piloto.equipo === equipoSeleccionado;
      return coincidePiloto && coincideEquipo;
    });
    
    clasificacion = datosFiltrados;
    renderizarTabla(clasificacion);
  }

  function resetFiltros() {
    document.getElementById('buscador').value = '';
    document.getElementById('filtro-equipo').value = '';
    clasificacion = [...datosOriginales];
    ordenActual = { columna: null, ascendente: true };
    
    const indicadores = tablaCabecera.querySelectorAll('.indicador-orden');
    indicadores.forEach(indicador => {
      indicador.textContent = '';
      indicador.style.opacity = '0.5';
    });
    
    renderizarTabla(clasificacion);
  }

  function actualizarPosiciones() {
    // Ordenar por puntos de mayor a menor
    clasificacion.sort((a, b) => b.puntos - a.puntos);
    
    // Actualizar también los datos originales para mantener sincronización
    datosOriginales.sort((a, b) => b.puntos - a.puntos);
  }

  function renderizarTabla(datos) {
    // Limpiar tabla
    tablaClasificacion.innerHTML = '';
    
    datos.forEach((piloto, index) => {
      const fila = tablaClasificacion.insertRow();
      fila.style.cssText = `
        transition: all 0.3s ease;
        animation: fadeIn 0.5s ease-in-out ${index * 0.05}s both;
      `;
      
      // Hover effect
      fila.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      });
      
      fila.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
      });

      const celdaPosicion = fila.insertCell(0);
      const celdaEquipo = fila.insertCell(1);
      const celdaPiloto = fila.insertCell(2);
      const celdaPuntos = fila.insertCell(3);

      // Posición calculada dinámicamente (index + 1)
      const posicion = index + 1;
      let posicionTexto = posicion;
      if (posicion === 1) posicionTexto = '🏆 1';
      else if (posicion === 2) posicionTexto = '🥈 2';
      else if (posicion === 3) posicionTexto = '🥉 3';
      
      celdaPosicion.textContent = posicionTexto;
      celdaPosicion.style.fontWeight = 'bold';

      // Equipo con color
      celdaEquipo.textContent = piloto.equipo;
      celdaEquipo.style.cssText = `
        color: ${coloresEquipo[piloto.equipo] || '#000'};
        font-weight: bold;
        border-left: 4px solid ${coloresEquipo[piloto.equipo] || '#000'};
        padding-left: 8px;
      `;

      // Piloto con bandera
      celdaPiloto.innerHTML = `${piloto.nacionalidad} ${piloto.piloto}`;
      celdaPiloto.style.fontWeight = '500';

      // Puntos - EDITABLE
      const inputPuntos = document.createElement('input');
      inputPuntos.type = 'number';
      inputPuntos.value = piloto.puntos;
      inputPuntos.min = '0';
      inputPuntos.max = '1000';
      inputPuntos.style.cssText = `
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: ${piloto.puntos > 200 ? '#059669' : piloto.puntos > 100 ? '#D97706' : '#6B7280'};
        font-weight: bold;
        text-align: center;
        width: 80px;
        padding: 5px;
        border-radius: 4px;
        transition: all 0.3s ease;
      `;
      
      // Event listener para cambios en puntos
      inputPuntos.addEventListener('input', function() {
        const nuevosPuntos = parseInt(this.value) || 0;
        piloto.puntos = nuevosPuntos;
        
        // Actualizar color del input
        this.style.color = nuevosPuntos > 200 ? '#059669' : nuevosPuntos > 100 ? '#D97706' : '#6B7280';
        
        // Actualizar posiciones y re-renderizar después de un pequeño delay
        clearTimeout(window.actualizacionTimeout);
        window.actualizacionTimeout = setTimeout(() => {
          actualizarPosiciones();
          renderizarTabla(clasificacion);
          renderizarTablaEquipos(); // Actualizar también tabla de equipos
          mostrarNotificacion(`¡Puntos actualizados! ${piloto.piloto} ahora tiene ${nuevosPuntos} puntos`);
        }, 500);
      });
      
      // Efectos hover para el input
      inputPuntos.addEventListener('focus', function() {
        this.style.borderColor = '#3B82F6';
        this.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.2)';
      });
      
      inputPuntos.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        this.style.boxShadow = 'none';
      });
      
      celdaPuntos.appendChild(inputPuntos);
    });
  }

  function mostrarNotificacion(mensaje) {
    // Crear notificación
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4CAF50, #45a049);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
      font-weight: bold;
    `;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
      notificacion.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => {
        if (notificacion.parentNode) {
          notificacion.parentNode.removeChild(notificacion);
        }
      }, 300);
    }, 3000);
  }

  // Añadir estilos CSS para animaciones
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    
    #tabla-clasificacion th {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 12px;
      text-align: center;
    }
    
    #tabla-clasificacion td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    #tabla-clasificacion tr:nth-child(even) {
      background-color: transparent;
    }
    
    #tabla-clasificacion tr:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    #tabla-clasificacion {
      background-color: transparent;
      margin: 0 auto;
      width: 100%;
      max-width: 1000px;
    }
    
    #tabla-equipos {
      background-color: transparent;
      margin: 20px auto 0 auto;
      width: 100%;
      max-width: 1000px;
    }
    
    .clasificacion,
    .clasificacion-equipos {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
    }
    
    .clasificacion h2,
    .clasificacion-equipos h2 {
      margin-bottom: 20px;
      margin-top: 0;
    }
    
    .controles-tabla {
      position: relative;
      z-index: 10;
    }
    
    #tabla-equipos th {
      background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
      color: white;
      padding: 12px;
      text-align: center;
    }
    
    #tabla-equipos td {
      padding: 12px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    #tabla-equipos tr:nth-child(even) {
      background-color: transparent;
    }
    
    #tabla-equipos tr:hover {
      background-color: rgba(255, 107, 53, 0.1);
    }
    
    .clasificacion-equipos {
      display: none;
      margin-top: 20px;
    }
    
    #clasificacion {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
    }
    
    .controles-tabla input:focus,
    .controles-tabla select:focus {
      outline: none;
      border-color: #3B82F6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    #reset-filtros:hover {
      background: #DC2626 !important;
      transform: translateY(-1px);
    }
    
    #simular-carrera:hover {
      background: #059669 !important;
      transform: translateY(-1px);
    }
    
    #vista-pilotos:hover,
    #vista-equipos:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
});