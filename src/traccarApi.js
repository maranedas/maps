const axios = require('axios');

// URL base de la API de Traccar y token de autenticación
const baseUrl = 'https://demo2.traccar.org/api';
const token = 'SDBGAiEA8f8P-2d-L4FzFbRKo2uPs4560zNTxKJuXymmqnu01fQCIQDQcSKxmMAWWzlfyBeP15-fnnUWlOS0iC5ToifVDphauXsidSI6NDMwNiwiZSI6IjIwMzAtMTItMzFUMDM6MDA6MDAuMDAwKzAwOjAwIn0';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 200000, // 200 segundos
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

axiosInstance.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    const config = err.config;
    if (!config || !config.retry) return Promise.reject(err);

    config.__retryCount = config.__retryCount || 0;

    if (config.__retryCount >= config.retry) {
        return Promise.reject(err);
    }

    config.__retryCount += 1;

    const backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    return backoff.then(function() {
        return axiosInstance(config);
    });
});


// Función para obtener la lista de dispositivos
async function getDevices() {
    try {
        const response = await axiosInstance.get('/devices');
        return response.data;
    } catch (error) {
        console.error('Error al obtener dispositivos de Traccar:', error);
        throw error;
    }
}

// Función para obtener la posición actual de un dispositivo por ID
async function getPosition(deviceId) {
    try {
        const response = await axiosInstance.get('/positions', {
            params: {
                deviceId: deviceId
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error al obtener posición del dispositivo:', error);
        throw error;
    }
}

// Función para verificar el estado del dispositivo
async function setDeviceConnected(deviceId) {
    try {
        const devices = await getDevices();
        const device = devices.find(d => d.id === deviceId);
        if (device) {
            return device.status === 'online';
        }
        return false;
    } catch (error) {
        console.error('Error al verificar el estado del dispositivo:', error);
        throw error;
    }
}


// Exportar las funciones y la función para establecer el estado de conexión
module.exports = {
    getDevices,
    getPosition,
    setDeviceConnected
};
