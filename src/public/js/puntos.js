import { map } from './main.js';

var puntosTolva = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "properties": {
        "Sector": "El Verdín",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.02855722771825,
            -45.56645356760196
        ],
        "type": "Point"
        },
        "id": 17
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "Coyhaique Alto KM 4",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.01360041630385,
            -45.5700493689218
        ],
        "type": "Point"
        },
        "id": 18
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "Cerro Negro",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.02176161755287,
            -45.58589502762003
        ],
        "type": "Point"
        },
        "id": 19
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "El Salto Chico",
        "Dias": "Martes - Jueves",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.05852501113293,
            -45.68266842059015
        ],
        "type": "Point"
        },
        "id": 20
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "El Claro",
        "Dias": "Martes - Jueves",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.09883455954234,
            -45.587808795615004
        ],
        "type": "Point"
        },
        "id": 21
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": "Lago Atravesado",
        "Dias": "Martes - Jueves",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.21263132758824,
            -45.592931957898365
        ],
        "type": "Point"
        },
        "id": 22
    },
    {
        "type": "Feature",
        "properties": {
        "Sector": " Baquedano salida norte camino Aysen",
        "Dias": "Martes - Jueves",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
        "coordinates": [
            -72.06653405331757,
            -45.562943357495996
        ],
        "type": "Point"
        },
        "id": 23
    }
    ]
    }

var puntosVerdesMovil = {
"type": "FeatureCollection",
"features": [
    {
    "type": "Feature",
    "properties": {
        "name": "Ejercito / Puyuhuapi",
        "Dias": "Lunes - Miércoles - Viernes",   
        "llegar": "https://maps.app.goo.gl/bbsg6jstPEXhUwVD7"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
        -72.07091433855793,
        -45.56571413495142,
        0
        ]
    },
    "id": "06060DE8DA32E85A724D"
    },
    {
    "type": "Feature",
    "properties": {
        "name": "Socovesa",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/fx4gFZ9jR32Efehk8"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
        -72.0756096023696,
        -45.59042731543666,
        0
        ]
    },
    "id": "0FDBF6BDE432E85A724F"
    },
    {
    "type": "Feature",
    "properties": {
        "name": "El Claro",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/ghpkNkNtQDgCZVVM7"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
        -72.09871671932484,
        -45.58803370471103,
        0
        ]
    },
    "id": "09F95676DA32E85A7250"
    },
    {
    "type": "Feature",
    "properties": {
        "name": "Plaza Angol",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/aLUgQqPtMuoTvoCYA"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
        -72.07537449783894,
        -45.57314192165812,
        0
        ]
    },
    "id": "1F638C06B032E85A7250"
    },
    {
    "type": "Feature",
    "properties": {
        "name": "Av. Divisadero / Peatonal",
        "Dias": "Lunes - Miércoles - Viernes",
        "llegar": "https://maps.app.goo.gl/gcJog5qsW6WNkE659"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [
        -72.07002717767864,
        -45.58595720965695,
        0
        ]
    },
    "id": "2E473358FA32E85A7250"
    }
]
    }  

var recoleccionSegregada = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
        "Sector": "JJVV Vista Hermosa",
        "Dias": "Martes - Jueves",
        "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.02820201722773,
                -45.58058178070936,
                0
              ],
              [
                -72.02836989977952,
                -45.5802650622844,
                0
              ],
              [
                -72.02860271827606,
                -45.57989666512058,
                0
              ],
              [
                -72.02946253030873,
                -45.57945014146772,
                0
              ],
              [
                -72.02951268279367,
                -45.57943796755063,
                0
              ],
              [
                -72.03037031346281,
                -45.57925468589715,
                0
              ],
              [
                -72.03162293959765,
                -45.57936470262579,
                0
              ],
              [
                -72.03324765727791,
                -45.57975238680388,
                0
              ],
              [
                -72.03460561981706,
                -45.58061627787056,
                0
              ],
              [
                -72.0346296770887,
                -45.58115786455755,
                0
              ],
              [
                -72.02820201722773,
                -45.58058178070936,
                0
              ]
            ]
          ]
        },
        "id": "053A84C07E33307D36BE"
      },
      {
        "type": "Feature",
        "properties": {
          "Sector": "JJ.VV. Chile Nuevo",
          "Dias": "Martes - Jueves",
          "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
          },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.06334912804033,
                -45.57087938668966,
                0
              ],
              [
                -72.0675714623348,
                -45.57785059358565,
                0
              ],
              [
                -72.05757539885236,
                -45.58084040607237,
                0
              ],
              [
                -72.05321300766644,
                -45.57373288478998,
                0
              ],
              [
                -72.06334912804033,
                -45.57087938668966,
                0
              ]
            ]
          ]
        },
        "id": "0FE837EB1033307D36C1"
      },
      {
        "type": "Feature",
        "properties": {
          "Sector": "JJ.VV. Clotario Blest",
          "Dias": "Martes - Jueves",
          "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
          },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.03291387123464,
                -45.57933284729541,
                0
              ],
              [
                -72.02891863451354,
                -45.57824310489217,
                0
              ],
              [
                -72.02981762030983,
                -45.57729845434472,
                0
              ],
              [
                -72.03209017256384,
                -45.57775763161491,
                0
              ],
              [
                -72.03350138556073,
                -45.57798115704867,
                0
              ],
              [
                -72.03331544493761,
                -45.57847135445032,
                0
              ],
              [
                -72.03291387123464,
                -45.57933284729541,
                0
              ]
            ]
          ]
        },
        "id": "1A6DE44B8733307D36C1"
      },
      {
        "type": "Feature",
        "properties": {
          "Sector": "JJ.VV. Padre Antonio Rochi",
          "Dias": "Martes - Jueves",
          "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
          },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.02890812824947,
                -45.57824800877285,
                0
              ],
              [
                -72.02987102797297,
                -45.57851063894257,
                0
              ],
              [
                -72.0308199169846,
                -45.57879041432794,
                0
              ],
              [
                -72.03052032473241,
                -45.57900969941942,
                0
              ],
              [
                -72.03018762696047,
                -45.5789948757249,
                0
              ],
              [
                -72.02959210790091,
                -45.57919812085728,
                0
              ],
              [
                -72.02939779761671,
                -45.57911348289062,
                0
              ],
              [
                -72.02880203780613,
                -45.57963538978348,
                0
              ],
              [
                -72.02742208828579,
                -45.57971577717139,
                0
              ],
              [
                -72.02890812824947,
                -45.57824800877285,
                0
              ]
            ]
          ]
        },
        "id": "2A20F7447C33307D36C1"
      },
      {
        "type": "Feature",
        "properties": {
          "Sector": "JJ.VV. Santiago Vera Cartes",
          "Dias": "Martes - Jueves",
          "llegar": "https://maps.app.goo.gl/p2foMqx5Uogy45ov5"
          },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                -72.03558115645565,
                -45.58120343196483,
                0
              ],
              [
                -72.03550528134205,
                -45.58545872302042,
                0
              ],
              [
                -72.02608164557908,
                -45.58587645495837,
                0
              ],
              [
                -72.02606616622134,
                -45.58110299610146,
                0
              ],
              [
                -72.02716157419263,
                -45.5804989839334,
                0
              ],
              [
                -72.03558115645565,
                -45.58120343196483,
                0
              ]
            ]
          ]
        },
        "id": "0863D6891F33307D36C2"
      }
    ]
    }

var puntosVerdesFijos = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Circ. Oriente Poniente / Las Américas",
          "Dias": "Lunes - Miércoles - Viernes",   
          "llegar": "https://maps.app.goo.gl/YzpJGuX2qMcFxVqV9"      
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.03872067317526,
            -45.58851686962594,
            0
          ]
        },
        "id": "0B037B9CEE33308680ED"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Los Cipreses / Los Liles",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/q8UU7cADR61pnUFPA"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.05586987128676,
            -45.58344700242411,
            0
          ]
        },
        "id": "07C5B2036B33308680EF"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Max Casas / Bilbao",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/KrDW5Ea6e223K5Wa9"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.05430424400676,
            -45.57700326543775,
            0
          ]
        },
        "id": "062B9A45FC33308680F0"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Plazoleta Aysen / Ejercito",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/G5wtT31wQqXNcRsT6"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.07304144032516,
            -45.5655829916814,
            0
          ]
        },
        "id": "112D735DB533308680F0"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "El Verdín",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/XVwiQrnsSK8bmo3F7"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.02791955501304,
            -45.56675545562988,
            0
          ]
        },
        "id": "2E6CD52C1533308680F0"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Socovesa",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/JVtEByJshYuzVEEY9"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.07589158503104,
            -45.59059486827348,
            0
          ]
        },
        "id": "0C6C9D5F0233308680F1"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Lillo / Los Coigues",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/NCauVEEWoxAGZ8fv9"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.07065506471388,
            -45.57874800234074,
            0
          ]
        },
        "id": "181F1DFD9F33308680F1"
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Av. Norte Sur/ Las Rosas - Terminal de Buses",
          "Dias": "Lunes - Miércoles - Viernes",
          "llegar": "https://maps.app.goo.gl/WymBtKiXDr4jpZ7h9"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -72.07804626583781,
            -45.5816513322897,
            0
          ]
        },
        "id": "2A44F24EDF33308680F1"
      }
    ]
    }

// Define los iconos personalizados
var puntoTolva = L.icon({
    iconUrl: '/icons/puntoTolva.png',
    iconSize: [50, 50],
    iconAnchor: [15, 60],
    popupAnchor: [0, -30]
});

var puntoMovil = L.icon({
    iconUrl: '/icons/puntoMovil.png',
    iconSize: [50, 50],
    iconAnchor: [15, 60],
    popupAnchor: [0, -30]
});

var puntoFijo = L.icon({
  iconUrl: '/icons/puntoFijo1.png',
  iconSize: [50, 50],
  iconAnchor: [15, 60],
  popupAnchor: [0, -30]
});

// CAPA TOLVAS PERIURBANAS
var puntosTolvaLayer = L.geoJSON(puntosTolva,  {
    pointToLayer: function (feature, latlng) {
        if (feature.properties.Dias.includes("Lunes") || feature.properties.Dias.includes("Miércoles") || feature.properties.Dias.includes("Viernes")) {
            return L.marker(latlng, { icon: puntoTolva });
        } else if (feature.properties.Dias.includes("Martes") || feature.properties.Dias.includes("Jueves")) {
            return L.marker(latlng, { icon: puntoTolva });
        } else {
            return L.marker(latlng);
        }
    }
}).bindPopup(function(layer){
    return "<strong>Punto Reciclaje:</strong> " + layer.feature.properties.Sector + "<br>" +
           "<strong>Días:</strong> " + layer.feature.properties.Dias + "<br>" +
           "<strong><a href='" + layer.feature.properties["llegar"] + "' target='_blank'>Cómo llegar</a></strong>";
});

//CAPA PUNTOS VERDES MOVIL
var puntosMovilLayer = L.geoJSON(puntosVerdesMovil,  {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: puntoMovil });
    }
}).bindPopup(function(layer){
  return "<strong>Punto Verde Móvil:</strong> " + layer.feature.properties.name + "<br>" +
         "<strong>Días:</strong> " + layer.feature.properties.Dias + "<br>" +
         "<strong><a href='" + layer.feature.properties["llegar"] + "' target='_blank'>Cómo llegar</a></strong>";
});

//CAPA RECOLECCION SEGREGADA
var puntosSegregadaLayer = L.geoJSON(recoleccionSegregada,  {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: puntoMovil });
    }
}).bindPopup(function(layer){
  return "<strong>Recilección Segregada:</strong> " + layer.feature.properties.Sector + "<br>" +
         "<strong>Días:</strong> " + layer.feature.properties.Dias
});

//CAPA PUNTOS VERDE FIJOS
var puntosVerdeLayer = L.geoJSON(puntosVerdesFijos,  {
        pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: puntoFijo });
    }
}).bindPopup(function(layer){
  return "<strong>Punto Fijo:</strong> " + layer.feature.properties.name + "<br>" +
         "<strong>Días:</strong> " + layer.feature.properties.Dias + "<br>" +
         "<strong><a href='" + layer.feature.properties["llegar"] + "' target='_blank'>Cómo llegar</a></strong>";
});

// Obtener elementos del DOM
const menuPrincipal = document.getElementById('menu-principal');
const menuReciclaje = document.getElementById('menu-reciclaje');
const backToMenuPrincipal = document.getElementById('back-to-menu-principal');//VOLVER ATRAS
const togglePuntosButton = document.getElementById('toggle-puntos');//BOTON RECICLAJE
const toggleTolvaButton = document.getElementById('toggle-tolva');// BOTON TOLVAS PERIURBANAS
const toggleMovil = document.getElementById('toggle-movil');// BOTON PUNTO VERDE MOVIL
const toggleSegregada = document.getElementById('toggle-segregada');// BOTON RECOLECCION SEGREGADA
const toggleVerde = document.getElementById('toggle-verde');// BOTON PUNTOS VERDES 

const infoReciclaje = document.getElementById('informacion-reciclaje');
const infoPuntoVerdeMovil = document.getElementById('informacion-puntoverdemovil');
const infoSegregada = document.getElementById('informacion-segregada');
const infoPuntoVerde = document.getElementById('informacion-puntoverde');
const informacionTolva = document.getElementById('informacion-tolva');
const informacionHorario = document.getElementById('informacion-horario');



// Variables para controlar la visibilidad de las capas y el estado de navegación
let navegandoPorPuntosReciclaje = false;
let puntosVisibles = { tolva: false, movil: false, segregada: false, verde: false };

// EVENTO BOTON RECICLAJE
togglePuntosButton.addEventListener('click', function() {
    infoReciclaje.style.display = 'block';
    menuReciclaje.style.display = 'block';
    
    // Ocultar elementos adicionales
    menuPrincipal.style.display = 'none';
    informacionTolva.style.display = 'none';
    informacionHorario.style.display = 'none';
    if (puntosVisibles.tolva) {
        map.removeLayer(puntosTolvaLayer);
        puntosVisibles.tolva = false;
    }
});

// EVENTO BOTON TOLVAS PERIURBANAS
toggleTolvaButton.addEventListener('click', function() {
    informacionHorario.style.display = 'none';
    informacionTolva.style.display = 'block';
    if (map.hasLayer(puntosTolvaLayer)) {
        map.removeLayer(puntosTolvaLayer); // Oculta los puntos de tolva en el mapa
        puntosVisibles.tolva = false;
        informacionTolva.style.display = 'none';
    } else {
        map.addLayer(puntosTolvaLayer); // Muestra los puntos de tolva en el mapa
        puntosVisibles.tolva = true;
        // Oculta los puntos movil si están visibles
        if (puntosVisibles.movil) {
            map.removeLayer(puntosMovilLayer);
            puntosVisibles.movil = false;
        }
        if (puntosVisibles.segregada) {
            map.removeLayer(puntosSegregadaLayer);
            puntosVisibles.segregada = false;
        }
        if (puntosVisibles.verde) {
            map.removeLayer(puntosVerdeLayer);
            puntosVisibles.verde = false;
        }
    }
    // Controlar la visibilidad de puntos-reciclaje
    if (navegandoPorPuntosReciclaje) {
        menuReciclaje.style.visibility = 'hidden'; // Oculta el menú sin eliminarlo del DOM
    } else {
        menuReciclaje.style.visibility = 'visible'; // Muestra el menú
    }
    const bounds = puntosTolvaLayer.getBounds();
    const padding = [50, 100];
    map.fitBounds(bounds, { padding: padding });
});

// DESACTIVAR PUNTOS TOLVA
window.addEventListener('activarInformacionHorario', function() {
  if (puntosVisibles.tolva) {
      map.removeLayer(puntosTolvaLayer);
      puntosVisibles.tolva = false;
      informacionTolva.style.display = 'none';
  }
});

// EVENTO BOTON PUNTOS VERDE MOVIL
toggleMovil.addEventListener('click', function() {
    infoPuntoVerdeMovil.style.display = 'block';
    infoReciclaje.style.display = 'none';
    infoSegregada.style.display = 'none';
    infoPuntoVerde.style.display = 'none';
    if (map.hasLayer(puntosMovilLayer)) {
        map.removeLayer(puntosMovilLayer); // Oculta los puntos de MOVIL en el mapa
        puntosVisibles.movil = false;
    } else {
        map.addLayer(puntosMovilLayer); // Muestra los puntos de MOVIL en el mapa
        puntosVisibles.movil = true;
        // Oculta los puntos
        if (puntosVisibles.segregada) {
            map.removeLayer(puntosSegregadaLayer);
            puntosVisibles.segregada = false;
        }
        if (puntosVisibles.verde) {
            map.removeLayer(puntosVerdeLayer);
            puntosVisibles.verde = false;
        }
    }
     // Controlar la visibilidad de puntos-reciclaje
     if (navegandoPorPuntosReciclaje) {
        menuReciclaje.style.visibility = 'hidden'; // Oculta el menú sin eliminarlo del DOM
    } else {
        menuReciclaje.style.visibility = 'visible'; // Muestra el menú
    }
    const bounds = puntosMovilLayer.getBounds();
    const padding = [50, 50];
    map.fitBounds(bounds, { padding: padding });
});

// EVENTO BOTON RECOLECCION SEGREGADA
toggleSegregada.addEventListener('click', function() {
    infoPuntoVerdeMovil.style.display = 'none';
    infoReciclaje.style.display = 'none';
    infoSegregada.style.display = 'block';
    infoPuntoVerde.style.display = 'none';
    if (map.hasLayer(puntosSegregadaLayer)) {
        map.removeLayer(puntosSegregadaLayer); // Oculta los puntos de MOVIL en el mapa
        puntosVisibles.segregada = false;
    } else {
        map.addLayer(puntosSegregadaLayer); // Muestra los puntos de MOVIL en el mapa
        puntosVisibles.segregada = true;
        // Oculta los puntos de tolva si están visibles
        if (puntosVisibles.tolva) {
            map.removeLayer(puntosTolvaLayer);
            puntosVisibles.tolva = false;
        }
        if (puntosVisibles.movil) {
            map.removeLayer(puntosMovilLayer);
            puntosVisibles.movil = false;
        }
        if (puntosVisibles.verde) {
            map.removeLayer(puntosVerdeLayer);
            puntosVisibles.verde = false;
        }
    }
     // Controlar la visibilidad de puntos-reciclaje
     if (navegandoPorPuntosReciclaje) {
        menuReciclaje.style.visibility = 'hidden'; // Oculta el menú sin eliminarlo del DOM
    } else {
        menuReciclaje.style.visibility = 'visible'; // Muestra el menú
    }
    const bounds = puntosSegregadaLayer.getBounds();
    const padding = [50, 100];
    map.fitBounds(bounds, { padding: padding });
});

// EVENTO BOTON RECOLECCION VERDE
toggleVerde.addEventListener('click', function() {
    infoPuntoVerdeMovil.style.display = 'none';
    infoReciclaje.style.display = 'none';
    infoSegregada.style.display = 'none';
    infoPuntoVerde.style.display = 'block';
    if (map.hasLayer(puntosVerdeLayer)) {
        map.removeLayer(puntosVerdeLayer); // Oculta los puntos de MOVIL en el mapa
        puntosVisibles.verde = false;
    } else {
        map.addLayer(puntosVerdeLayer); // Muestra los puntos de MOVIL en el mapa
        puntosVisibles.verde = true;
        // Oculta los puntos de tolva si están visibles
        if (puntosVisibles.segregada) {
            map.removeLayer(puntosSegregadaLayer);
            puntosVisibles.segregada = false;
        }
        if (puntosVisibles.movil) {
            map.removeLayer(puntosMovilLayer);
            puntosVisibles.movil = false;
        }
    }
     // Controlar la visibilidad de puntos-reciclaje
     if (navegandoPorPuntosReciclaje) {
        menuReciclaje.style.visibility = 'hidden'; // Oculta el menú sin eliminarlo del DOM
    } else {
        menuReciclaje.style.visibility = 'visible'; // Muestra el menú
    }
    const bounds = puntosVerdeLayer.getBounds();
    const padding = [50, 100];
    map.fitBounds(bounds, { padding: padding });
});

// EVENTO BOTON VOLVER ATRAS
backToMenuPrincipal.addEventListener('click', function() {
    if (menuPrincipal.style.display === 'none') {
        menuReciclaje.style.display = 'none';
        infoReciclaje.style.display = 'none';
        infoPuntoVerdeMovil.style.display = 'none';
        infoSegregada.style.display = 'none';
        infoPuntoVerde.style.display = 'none';
        menuPrincipal.style.display = 'block';
        // Ocultar todas las capas visibles
        if (puntosVisibles.movil) {
            map.removeLayer(puntosMovilLayer);
            puntosVisibles.movil = false;
        }
        if (puntosVisibles.segregada) {
            map.removeLayer(puntosSegregadaLayer);
            puntosVisibles.segregada = false;
        }
        if (puntosVisibles.verde) {
            map.removeLayer(puntosVerdeLayer);
            puntosVisibles.verde = false;
        }
    } else {
        infoReciclaje.style.display = 'block';
        menuReciclaje.style.display = 'block';
        menuPrincipal.style.display = 'none';
    }
});