// server.js
//Initialize and configure the RTL-SDR dongle. You may need to adjust the 
// frequency, gain, and other parameters based on your requirements.
const rtlsdr = require('rtl-sdr');

const deviceIndex = 0; // Adjust this based on your RTL-SDR device
const frequency = 100000000; // Example: 100 MHz
const sampleRate = 2.048e6; // Example: 2.048 MS/s
const gain = 10; // Example: Gain value

const sdr = rtlsdr.open(deviceIndex);
rtlsdr.setCenterFreq(sdr, frequency);
rtlsdr.setSampleRate(sdr, sampleRate);
rtlsdr.setTunerGainMode(sdr, 0);
rtlsdr.setTunerGain(sdr, gain);


//Set up an Express server to handle HTTP requests.


const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Use Socket.IO for real-time communication between the server and clients.
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Implement communication logic here

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Stream the SDR data to the connected clients using WebSocket.

const rtlsdr = require('rtl-sdr');

// ... (RTL-SDR configuration)

io.on('connection', (socket) => {
  console.log('A user connected');

  // Start streaming data to the client
  const onData = (data) => {
    socket.emit('sdr-data', data);
  };

  const bufferSize = 1024; // Adjust based on your needs
  const buffer = Buffer.alloc(bufferSize * 2);

  const readSamples = () => {
    rtlsdr.readSync(sdr, buffer, bufferSize);
    onData(buffer);
    setImmediate(readSamples);
  };

  readSamples();

  socket.on('disconnect', () => {
    console.log('User disconnected');
    rtlsdr.close(sdr);
  });
});
