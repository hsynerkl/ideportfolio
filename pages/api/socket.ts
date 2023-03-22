import { Server } from "Socket.IO";

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("room", ({ data }) => {
        socket.join(data.roomId);
      });

      socket.on("message", ({ data }) => {
        io.to(data.roomId).emit("returnMessage", data);
      });
    });
  }
  res.end();
};

export default SocketHandler;
