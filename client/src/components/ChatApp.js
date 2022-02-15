import React, {useState} from 'react'
import './ChatApp.css'
import Chat from './Chat';
import io from "socket.io-client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

const socket = io.connect("http://localhost:4000");

export default function ChatApp() {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
      if (username !== "" && room !== "") {
          socket.emit("join_room", room);
          setShowChat(true);
      }
    }

    return (
        <div className="chat_app">
         <Link to="/">
        <div className="return_to_homePage_chat">
        <FontAwesomeIcon icon={['fas', 'reply']} size="2x" color=" rgb(249, 249, 249)"/>
        <h2>Return to home page</h2>
        </div>
        </Link>
           {!showChat ? ( 
            <div className="joinChatContainer">
            <div className="chat_title">
           <h1>Room Chat</h1>
           </div>
           <h5 className="chat_title_text">Enter you name and create/join a room.<br/>
           If creating a room, please make a note of the room ID and pass it to<br/> the 
           person(s) you would like to chat with, so they can join your room!</h5>
           <div className="join_chat_input">
           <input type="text" placeholder="Your name....." onChange={(e) => {
               setUsername(e.target.value);
           }}/>
           <input type="text" placeholder="Room ID....." onChange={(e) => {
               setRoom(e.target.value);
           }}/>
           <button onClick={joinRoom}>Chat..</button>
           </div>
           </div>
           ):(
           <Chat socket={socket} username={username} room={room}/>
           )}
        </div> 
      

    )
}
