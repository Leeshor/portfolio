const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const server = require('http').createServer(app);
const { Server } = require('socket.io');
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.post("/send_mail", cors(), async (req, res)  => {
 
  let {textName, textEmail, textMessage} = req.body

  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

    await transport.sendMail({
       from: process.env.EMAIL_EMAIL,
       to: 'test@lee.com',
       html: `${textName} ${textEmail} ${textMessage}`
     });
    

})

const io = new Server (server, { 
  cors: { 
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  }})
    
io.on("connection", (socket) => {
   console.log(`User connected: ${socket.id}`);

socket.on("join_room", (data) => {
  socket.join(data);
  console.log(`User with ID: ${socket.id} joined room: ${data}`);
})

socket.on("send_message", (data) => {
  socket.to(data.room).emit("receive_message", data);
})

socket.on("disconnect", () => {
  console.log(`User Disconnected: ${socket.id}`);
})
})

const PORT = process.env.PORT||4000;

server.listen(PORT, () => {
        console.log("Server has started on port 4000");
});