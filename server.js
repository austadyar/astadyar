const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("یک کاربر وصل شد ✅");

  socket.on("chatMessage", (msg) => {
    // ارسال پیام برای همه کاربران (شامل استاد و دانش‌آموز)
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("یک کاربر خارج شد ❌");
  });
});

server.listen(3000, () => {
  console.log("سرور روی پورت 3000 اجرا شد 🚀");
});
