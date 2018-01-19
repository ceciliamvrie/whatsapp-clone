const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");

const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();

app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket => {
  console.log("New user connected")
  socket.emit("FromAPI", {message: []});
  socket.on("disconnect", () => console.log("User has disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
