import io from "socket.io-client";

const options = {
    "force new connection": true,
    reconnectionAttamps: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
}

const socket = io("http://localhost:4000", options);

export default socket;