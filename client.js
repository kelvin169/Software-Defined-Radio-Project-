const socket = io();

socket.on('sdr-data', (data) => {
  // Process SDR data on the client side
  console.log('Received SDR data:', data);
});