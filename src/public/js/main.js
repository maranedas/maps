
import { initializeMap, mapaCoyTest} from './mapa.js';
let userMarker, userCircle, vehicleMarker;
let userLatitude, userLongitude;
let lastCoords = {};
const map = L.map("map-template").setView([-45.57524, -72.06619], 14);
const socket = io();
const tileLayer = "https://tile.openstreetmap.org/{z}/{x}/{y}.png?";
L.tileLayer(tileLayer).addTo(map);
export { map };
const vehicleIcon = L.icon({
    iconUrl: '/icons/PuntosCamion.png',
    iconSize: [40, 60],
    iconAnchor: [15, 60],
    popupAnchor: [0, -30]
});
const userIcon = L.icon({
    iconUrl: '/icons/home.svg',
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -20]
});
const polygons = L.geoJson(mapaCoyTest, {
    style: function (feature) {
        return {
            color: feature.properties.color || "#3388ff", // Usa el color del JSON o un color por defecto
            fillOpacity: 0.5,
            opacity: 0.5
        };
    },
    onEachFeature: function (feature, layer) {
        layer._sectorId = feature.properties.id;
        layer.setStyle({ fillOpacity: 0.5, opacity: 0.5 }); 
        //layer.on('click', () => {
            // En lugar de actualizar las coordenadas del usuario,
            // simplemente oculta otros polígonos y muestra el seleccionado
        //    hideOtherPolygons(layer);
        //});
    }
}).addTo(map);
// Verificar si es la primera vez que el usuario accede a la página
if (!localStorage.getItem('hasVisited')) {
    // Mostrar un mensaje al usuario
    alert("Esta aplicación necesita acceso a su ubicación para activar todas sus funciones.");
    
    // Marcar al usuario como visitado para no mostrar el mensaje nuevamente
    localStorage.setItem('hasVisited', 'true');
}
// Verificar si la ubicación del usuario está almacenada en localStorage
if (localStorage.getItem('userLatitude') == null) {
    navigator.geolocation.getCurrentPosition(
        successLocation,
        errorLocation
    );
} else {
    userLatitude = parseFloat(localStorage.getItem('userLatitude'));
    userLongitude = parseFloat(localStorage.getItem('userLongitude'));
    showUserLocation();
    initializeMap(map); // Cargar los polígonos
}

function successLocation(position) {
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;
    localStorage.setItem('userLatitude', userLatitude);
    localStorage.setItem('userLongitude', userLongitude);
    showUserLocation();
    initializeMap(map);  
}

// Función para manejar errores en la obtención de la ubicación
function errorLocation(error) {
    console.error("Error al obtener la ubicación del usuario:", error);
    //alert("Permita el acceso a su ubicación para visualizar correctamente el sitio.");
    if (userMarker) {
        map.removeLayer(userMarker);
    }
    if (polygons) {
        map.removeLayer(polygons);
    }
}
//Mostrar la ubicación del usuario en el mapa.
async function showUserLocation() {
    try {
        const userLocation = L.latLng(userLatitude, userLongitude);
        map.setView(userLocation, 14);
        if (!userMarker) {
            userMarker = L.marker(userLocation, {
                icon: userIcon,
            }).addTo(map)            
        } else {
             // Si el marcador ya existe, actualizar su posición si cambió
            if (userMarker.getLatLng().lat !== userLatitude || userMarker.getLatLng().lng !== userLongitude) {
                userMarker.setLatLng(userLocation);
            }
        }
        if (!userCircle) {
            userCircle = L.circle(userLocation, { radius: 10, fillOpacity: 0.1 }).addTo(map);
        } else {
            userCircle.setLatLng(userLocation); 
        }
        const userPolygonLayer = isInsidePolygon(userLocation, polygons);
        if (userPolygonLayer) {
            hideOtherPolygons(userPolygonLayer);
        }
    } catch (error) {
        console.error('Error al mostrar la ubicación del usuario:', error);
    }
}
function updateUserLocation(location) {
    localStorage.setItem('userLatitude', location.lat);
    localStorage.setItem('userLongitude', location.lng);
    socket.emit('updateUserLocation', location);
}

socket.on('position', (coords) => {
    console.log('Posición inicial del vehículo desde Traccar:', coords);
    updateVehicleMarker(coords);
});

socket.on('newVehicleCoordinates', (coords) => {
    console.log('Nuevas coordenadas del vehículo:', coords);
    updateVehicleMarker(coords);
});

function updateVehicleMarker(coords) {
    if (lastCoords.lat === coords.lat && lastCoords.lng === coords.lng) {
        console.log('Las coordenadas no han cambiado. No se actualizará el marcador.');
        return;
    }
    lastCoords = coords;
    if (!vehicleMarker) {
        vehicleMarker = L.marker(coords, { icon: vehicleIcon }).addTo(map);
    } else {
        vehicleMarker.setLatLng(coords);
    }
    validateVehicleInUserSector(coords);
    
}


// Verificar si la ubicación del usuario está dentro de un polígono específico.
function isInsidePolygon(userLocation, polygonLayer) {
    let insidePolygon = null;
    
    const userPoint = turf.point([userLocation.lng, userLocation.lat]);
    polygonLayer.eachLayer(function (layer) {
        if (layer instanceof L.Polygon || layer instanceof L.MultiPolygon) {
            const polygonCoords = layer.toGeoJSON().geometry.coordinates;
            const polygon = turf.polygon(polygonCoords);
            // Verificar si el punto está dentro del polígono
            if (turf.booleanPointInPolygon(userPoint, polygon)) {
                if (!insidePolygon) {
                    insidePolygon = layer;
                    layer.setStyle({ fillOpacity: 0.5, opacity: 1 });
                    console.log(`Usuario está en el polígono: ${layer.feature.properties.Name}`);
                } else {
                    layer.setStyle({ fillOpacity: 0, opacity: 0 });
                }
            } else {
                layer.setStyle({ fillOpacity: 0, opacity: 0 });
            }
        }
    });
    const outsideMessage = document.getElementById('info-poligono');
    if (!insidePolygon) {
        console.log('El usuario está fuera de los polígonos.');
        if (outsideMessage) {
            outsideMessage.style.display = 'block'; // Muestra el mensaje
        }
    } else {
        if (outsideMessage) {
            outsideMessage.style.display = 'none'; // Oculta el mensaje
        }
    }

    return insidePolygon;
}
export function hideOtherPolygons(selectedPolygon) {
    polygons.eachLayer(function (layer) {
        if (layer !== selectedPolygon) {
            map.removeLayer(layer);
        }
    });
}
function getSectorDays(day) {
    const diaPoligonos = {
        "Lunes": [1, 2, 3, 4, 6, 8, 9],
        "Martes": [1, 2, 5, 7, 10, 11, 12, 13, 14],
        "Miercoles": [3, 5, 7, 15, 16, 17, 18],
        "Jueves": [1, 2, 3, 4, 6, 8, 9],
        "Viernes": [10, 11, 12, 13, 14],
        "Sabado": [15, 16, 17, 18]
    };
    
    return diaPoligonos[day] || [];
}

function validateVehicleInUserSector(vehicleCoords) {
    const userLocation = L.latLng(userLatitude, userLongitude);
    const userPolygonLayer = isInsidePolygon(userLocation, polygons);
    const vehiclePolygonLayer = isInsidePolygon(L.latLng(vehicleCoords.lat, vehicleCoords.lng), polygons);
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const today = new Date().getDay();
    const todayName = daysOfWeek[today];

    // Restablecer todos los indicadores a rojo
    daysOfWeek.forEach(day => {
        const indicator = document.querySelector(`#sector-${day}-indicator`);
        if (indicator) {
            indicator.classList.remove('indicator-green');
            indicator.classList.add('indicator-red');
        }
    });


    // Si el usuario está dentro de un polígono
    if (userPolygonLayer) {
        const bounds = userPolygonLayer.getBounds();
        const sectorNumber = userPolygonLayer.feature.properties.id;
        const polygonColor = userPolygonLayer.feature.properties.color
        const sectorDays = getSectorDays(todayName);
        

        userPolygonLayer.setStyle({ fillOpacity: 0.5, color: polygonColor }); // Ajusta el estilo según sea necesario

        // Validar si el sector está programado para hoy y si el camión está en el mismo polígono
        if (sectorDays.includes(sectorNumber) && bounds.contains(L.latLng(vehicleCoords.lat, vehicleCoords.lng))) {
            console.log(`El camión está en el sector ${sectorNumber} en uno de los días de recolección (${todayName}).`);
            vehicleMarker.setOpacity(1); // Mostrar el camión

            // Actualizar el indicador del día correspondiente
            const indicator = document.getElementById(`sector-${todayName}-indicator`);
            if (indicator) {
                indicator.classList.remove('indicator-red');
                indicator.classList.add('indicator-green');
            }
        } else {
            console.log(`El camión no está en el sector ${sectorNumber} o no es un día de recolección.`);
            clearInterval(this);
            vehicleMarker.setOpacity(0); // Ocultar el camión si no está en el sector del usuario
        }
    } else {
        console.log('El usuario no está en ningún polígono.');
        clearInterval(this);
        vehicleMarker.setOpacity(0); // Ocultar el camión si el usuario no está en un polígono
    }

    // Verificar si el camión está en un polígono distinto al del usuario
    if (vehiclePolygonLayer && userPolygonLayer && vehiclePolygonLayer.feature.properties.id !== userPolygonLayer.feature.properties.id) {
        console.log('El camión está en un polígono distinto al del usuario. Ocultándolo.');
        vehicleMarker.setOpacity(0); // Ocultar solo el marcador del vehículo
    }
}

document.querySelectorAll('.sector-button').forEach(button => {
    button.addEventListener('click', function() {
        const day = this.getAttribute('data-day'); // Obtén el día desde el atributo data-day
        console.log(`Se ha hecho clic en el sector de ${day}.`);
        // Restaurar todos los polígonos (mostrar todos con su estilo original)
        polygons.eachLayer((layer) => {
            map.addLayer(layer); // Asegurarse de que todos los polígonos estén visibles
            layer.setStyle({ fillOpacity: 0.5, opacity: 1 });
        });
        // Obtener los sectores correspondientes al día seleccionado
        const sectorNumbers = getSectorDays(day);
        // Mostrar solo los polígonos que pertenecen a los sectores del día seleccionado
        polygons.eachLayer((layer) => {
            const sectorId = layer.feature.properties.id;
            const polygonColor = layer.feature.properties.color;
            if (!sectorNumbers.includes(sectorId)) {
                // Ocultar los polígonos que no pertenecen al sector del día seleccionado
                map.removeLayer(layer);
            } else {
                // Mostrar y resaltar los polígonos que sí pertenecen al sector del día seleccionado
                layer.setStyle({ fillOpacity: 0.5, opacity: 1, color: polygonColor });
            }
        });
    });
});

//Actualizar Ubicacion del Usuario
document.addEventListener('DOMContentLoaded', () => {
    const updateLocationButton = document.getElementById('update-location-button');
    const menuContainer = document.getElementById('menu-container');
    const confirmaUbicacion = document.getElementById('confirma-ubicacion');
    const confirmaPosicion = document.getElementById('confirma-posicion');
    let isUpdatingLocation = false, isLocationConfirmed = false;
    // Función para actualizar tanto el marcador como el círculo
    function updateMarkerAndCircle(latlng) {
        if (!userMarker) {
            userMarker = L.marker(latlng, {
                icon: userIcon
            }).addTo(map);
        } else {
            userMarker.setLatLng(latlng);
        }
        if (!userCircle) {
            userCircle = L.circle(latlng, { radius: 10, fillOpacity: 0.1 }).addTo(map);
        } else {
            userCircle.setLatLng(latlng);
        }
    }

    updateLocationButton.addEventListener('click', () => {
        isUpdatingLocation = true;
        isLocationConfirmed = false;
        polygons.eachLayer((layer) => {
            map.addLayer(layer);
            layer.setStyle({ fillOpacity: 0.5, opacity: 1 }); // Mostrar todos los polígonos nuevamente
        });
        const userLocation = L.latLng(userLatitude, userLongitude);
        updateMarkerAndCircle(userLocation);
        
        userMarker.bindPopup('Tu ubicación actual').openPopup();
        menuContainer.style.display = 'block';
        confirmaUbicacion.style.display = 'block';
    });
    polygons.eachLayer((layer) => {
        layer.on('click', (event) => {
            if (!isUpdatingLocation || isLocationConfirmed) return;
            const latlng = event.latlng; // Obtener las coordenadas del clic
            userLatitude = latlng.lat; // Actualizar latitud
            userLongitude = latlng.lng; // Actualizar longitud
            updateMarkerAndCircle(latlng);
            userMarker.bindPopup('Ubicación seleccionada').openPopup();
            // Mostrar solo el polígono seleccionado
            hideOtherPolygons(layer); // Ocultar otros polígonos
            menuContainer.style.display = 'block';
            confirmaUbicacion.style.display = 'block';
        });
    });
    confirmaPosicion.addEventListener('click', () => {
        if (userMarker) {
            // Guardar la ubicación en localStorage
            updateUserLocation({ lat: userLatitude, lng: userLongitude });
            // Lógica para actualizar la visualización en el main
            updateMainWithNewLocation({ lat: userLatitude, lng: userLongitude });
    
            // Mostrar el polígono donde está el usuario
            const userLocation = L.latLng(userLatitude, userLongitude);
            const userPolygonLayer = isInsidePolygon(userLocation, polygons);
            if (userPolygonLayer) {
                hideOtherPolygons(userPolygonLayer); // Ocultar otros polígonos excepto el seleccionado
            }
    
            // Ocultar el contenedor de confirmación
            confirmaUbicacion.style.display = 'none';
            isLocationConfirmed = true;
        }
    });
    function updateMainWithNewLocation(newLocation) {
        // Actualiza otros elementos en el main con la nueva ubicación
        console.log(`Nueva ubicación guardada: lat=${newLocation.lat}, lng=${newLocation.lng}`);
        // Aquí puedes agregar el código que necesites para actualizar el contenido
        // del main o de otras secciones de tu aplicación.
    }
});