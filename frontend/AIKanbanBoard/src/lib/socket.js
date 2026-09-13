import { io } from "socket.io-client";
import { getToken } from "./api";

const PRIMARY_SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:5050";
const FALLBACK_SOCKET_URL = import.meta.env.VITE_FALLBACK_SOCKET_URL || null;

let currentSocketUrl = PRIMARY_SOCKET_URL;
let socket = null;

const createSocketInstance = (url) => {
  const s = io(url, {
    autoConnect: false,
    auth: { token: getToken() },
    transports: ["websocket", "polling"],
    timeout: 12000,
  });

  s.on("connect_error", () => {
    if (FALLBACK_SOCKET_URL && currentSocketUrl !== FALLBACK_SOCKET_URL) {
      console.warn("Primary socket connection failed. Switching to fallback socket:", FALLBACK_SOCKET_URL);
      currentSocketUrl = FALLBACK_SOCKET_URL;
      s.disconnect();
      socket = createSocketInstance(FALLBACK_SOCKET_URL);
      socket.connect();
    }
  });

  return s;
};

// Lazily create (and authenticate) the shared socket connection.
export const getSocket = () => {
  if (!socket) {
    socket = createSocketInstance(currentSocketUrl);
  }
  return socket;
};

export const connectSocket = () => {
  const s = getSocket();
  s.auth = { token: getToken() };
  if (!s.connected) s.connect();
  return s;
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};


