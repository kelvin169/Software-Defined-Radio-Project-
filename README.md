# Software-Defined-Radio-Project-
## Initial Project involves the concept of a software defined Radio Platform for Nanosatellite communication. 
## The goal is to come up with a functioning platform 
### Successful intergration of hardware and software components will be the end goal and the capture and processing of satellite signals
#### I will be breating a series of approaches and outlining the various Documents used in the implementation 
#### System design will be broken down to the software and hardware aspects 

### Today we submit the Freamework for which we will assemble the project, Modular design always beats monolithic design any day. 

####  Hardware:
1. Raspberry Pi Zero W (Wireless) - As it has built in WiFi, Bluetooth, GPIO pins, can run Linux OS, and supports USB
1. Raspberry Pi Zero W (WiFi) - As it's small, cheap, and has built in Bluetooth capabilities. It can also run Linux which simplifies things
1. Raspberry Pi Zero W (WiFi) - Acts as the main computer for controlling the radio system, receiving data from sensors, sending commands to devices etc.
1. Raspberry Pi Zero W (WiFi) - as the main onboard computer for controlling radio devices, managing network connections, and running OS/software.
1. Raspberry Pi Zero W (Wireless) - As it has WiFi  
    2. Adafruit FONA 808 or similar module for cellular connectivity
    3. SDR USB Dongle/Module (e.g., USRP1, LimeSDR Mini, HackRF One)
    4. Microcontroller board (Arduino, etc.) for signal processing and control functions
    5. Breadboard jumper wires, resistors, capacitors, diodes, and other necessary components for connecting electronic components
5. Power supply for all devices
6. Enclosure for housing everything     
7. PoE switch if you want power over Ethernet connection between devices

#### Software Design:
The software will consist of three main components:
1. **Server**: This component will run on your computer and serve as the central hub for communication and data exchange among connected devices. It
1. **Server**: This component will run on your computer and act as the central hub for communication between devices. It should support multiple protocol
1. **Server**: This component will   run on your computer and act as the central hub for communication between all devices. It should support multiple
1. **Server**: This component will run on your computer and act as the central hub for communication between all devices. It should support multiple

**Server Component:** This component runs on your server machine and serves as the central hub for communication and data exchange among all connected clients.1. **Server**: This component will run1. **Server**: This component will run
**Server Component:** This component will run on your computer and act as the central hub for communication and data management. It should support multiple protocol1. **Server**: This component will run
**Server Component:** This component will run on your computer and serve as the central hub for communication and data management. It should support multiple connections1. **Server**: This component will run
**Server Component**
This component runs on your computer and serves as the central hub for communication between clients and the server
This component will run on your computer and act as the central hub for communication between all devices. It should support both TCP and UDP protocols
This component will run on your computer and act as the central hub for communication and data management. It should have the following functionalities:
This component will run on your computer and act as the central hub for communication between devices. It should support both TCP and UDP protocols for
This component will run on your computer and act     as the central server for communication between the client(s)
This component will run on the server device which can be any computer capable of running NodeJS.        It should support real-time data streaming via Web
This component will run on your server machine and handle communication with the client device(s). It should provide an API that allows clients to send commands
This component will run on the server device which can be any computer that supports Python 3. It should support real-time data streaming via web
This component runs on your computer and serves as the central hub for communication and data exchange among connected
This component runs on your server machine and serves as the central hub for communication between clients and the
This component will run on your computer and act as the central server for communication between the client device
This component will run on your server machine and handle communication with clients, as well as provide data storage for incoming radio signals. It should support multiple
This component will run on your computer and act as the central hub for communication between the client(s), server, and any external systems that need
This component will run on your server machine and handle incoming data from the client device(s).
