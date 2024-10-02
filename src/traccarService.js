// src/traccarService.js
const { getDevices, getPosition, setDeviceConnected } = require('./traccarApi');

class TraccarService {
    constructor() {
        this.lastCoords = {};
    }

    async initializeDevice(socket) {
        try {
            const devices = await getDevices();
            if (devices.length === 0) {
                throw new Error('No se encontraron dispositivos.');
            }

            const deviceIds = devices.map(device => device.id);
            this.startEmittingData(socket, deviceIds);
        } catch (error) {
            console.error('Error al inicializar dispositivo:', error);
        }
    }

    async startEmittingData(socket, deviceIds) {
        try {
            await this.emitData(socket, deviceIds);

            const intervalId = setInterval(async () => {
                await this.emitData(socket, deviceIds);
            }, 10000);

            socket.on('disconnect', () => {
                console.log('Usuario Desconectado');
                clearInterval(intervalId);
            });
        } catch (error) {
            console.error('Error al emitir datos:', error);
        }
    }

    async emitData(socket, deviceIds) {
        try {
            // Verificar estado de conexión de todos los dispositivos
            const connectedPromises = deviceIds.map(id => setDeviceConnected(id));
            const connectedStatuses = await Promise.all(connectedPromises);

            // Filtrar dispositivos que están desconectados
            const connectedDeviceIds = deviceIds.filter((id, index) => connectedStatuses[index]);

            if (connectedDeviceIds.length === 0) {
                console.log('No hay dispositivos conectados.');
                return;
            }

            // Obtener posiciones de los dispositivos en paralelo
            const positionPromises = connectedDeviceIds.map(id => getPosition(id));
            const positions = await Promise.all(positionPromises);

            positions.forEach((positionData, index) => {
                const deviceId = connectedDeviceIds[index];
                if (positionData && positionData.length > 0) {
                    const { latitude, longitude } = positionData[0];

                    if (this.lastCoords[deviceId] && 
                        this.lastCoords[deviceId].lat === latitude && 
                        this.lastCoords[deviceId].lng === longitude) {
                        console.log(`Las coordenadas del dispositivo ${deviceId} no han cambiado.`);
                        return;
                    }

                    this.lastCoords[deviceId] = { lat: latitude, lng: longitude };
                    console.log(`Nuevas coordenadas del dispositivo ${deviceId}: lat=${latitude}, lng=${longitude}`);
                    socket.emit('position', { deviceId, lat: latitude, lng: longitude });
                } else {
                    console.log(`No se encontraron datos de posición para el dispositivo ${deviceId}.`);
                }
            });
        } catch (error) {
            console.error('Error al emitir datos de Traccar:', error);
        }
    }
}

module.exports = TraccarService;

