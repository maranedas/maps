const TraccarService = require('./traccarService');

module.exports = io => {
    io.on('connection',  (socket) => {
        const traccarService = new TraccarService();
        traccarService.initializeDevice(socket);
    });
};