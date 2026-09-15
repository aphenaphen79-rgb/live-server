import { WebSocketServer } from "ws";

const port = process.env.PORT || 3000;
const wss = new WebSocketServer({ port });

console.log(`Server jalan di port ${port}`);

wss.on("connection", (ws) => {
  console.log("Client konek");
  ws.on("message", (data) => {
    // Kirim pesan ke semua client yang konek
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(data.toString());
      }
    });
  });
});