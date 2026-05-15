// Declaración de elementos del DOM
const accion = document.getElementById('accion');
const quien = document.getElementById('quien');
const cuando = document.getElementById('cuando');
const donde = document.getElementById('donde');
const btnGenerar = document.getElementById('btn-generar');
const envValue = document.getElementById('env-value');

// Obtener variable de entorno desde JavaScript

// Arrays con opciones aleatorias
const acciones = [
  'viendo una película',
  'jugando videojuegos',
  'estudiando para el examen',
  'limpiando mi habitación',
  'cocinando la cena',
  'haciendo ejercicio',
  'leyendo un libro',
  'tomando café',
  'revisando mi teléfono',
  'organizando mi escritorio'
];

const personas = [
  'mi mejor amigo',
  'mis padres',
  'mi hermano',
  'mi abuela',
  'mis compañeros de clase',
  'mi jefe',
  'mi mascota',
  'mi vecino',
  'mi profesor',
  'mi pareja'
];

const tiempos = [
  'a las 3 de la mañana',
  'el lunes pasado',
  'el fin de semana',
  'por la mañana',
  'por la tarde',
  'durante la lluvia',
  'hace una semana',
  'ayer',
  'hace dos meses',
  'la noche anterior'
];

const lugares = [
  'en casa',
  'en el parque',
  'en la playa',
  'en la biblioteca',
  'en el cine',
  'en el supermercado',
  'en la escuela',
  'en el restaurante',
  'en la montaña',
  'en la estación de tren'
];

// Función para obtener un elemento aleatorio de un array
function obtenerAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

// Función para generar una nueva excusa
function generarExcusa() {
  accion.innerHTML = obtenerAleatorio(acciones);
  quien.innerHTML = obtenerAleatorio(personas);
  cuando.innerHTML = obtenerAleatorio(tiempos);
  donde.innerHTML = obtenerAleatorio(lugares);
}

// Generar excusa al cargar la página
generarExcusa();

// Event listener para el botón
btnGenerar.addEventListener('click', generarExcusa);
