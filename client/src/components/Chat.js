import React, {useState, useEffect} from 'react'
import ScrollToBottom from "react-scroll-to-bottom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'


export default function Chat({socket, username, room}) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() +
                ":" + new Date(Date.now()).getMinutes(),
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    }  

    useEffect(() => {
        socket.on("receive_message", (data) => {
         setMessageList((list) => [...list, data]);
        })
        }
    , [socket])

    return (
        <div className="chat_app">
        <Link to="/">
        <div className="return_to_homePage_chat">
        <FontAwesomeIcon icon={['fas', 'reply']} size="2x" color="rgb(249, 249, 249)"/>
        <h2>Return to home page</h2>
        </div>
        </Link>
        <div className="chat_container">
            <div className="chat_header">
             <span className="chat_light"></span><p>Online</p>
            </div>
            <div className="chat_body">
            <ScrollToBottom className="message_container">
            {messageList.map((messageContent) => {
                return (
                <div className="message"
                id={username === messageContent.author ? "you" : "other"}
                >
                <div>
                <div className="message_content">
                <p>{messageContent.message}</p>
                </div>
                <div className="message_meta">
                <p>{messageContent.time}</p> <span className="meta_span">From : </span>
                <p className="meta_author">{messageContent.author}</p>
                </div>
                </div>
                </div>
                )
            })} </ScrollToBottom>
            </div>
            <div className="chat_footer">
            <input type="text"
            value={currentMessage}  
            onChange={(e) => {
               setCurrentMessage(e.target.value)}}
            
            onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
            } } />
            <button onClick={sendMessage}><FontAwesomeIcon icon={['fas', 'paper-plane']} color="#fff"/></button>
        </div>
        </div>
        </div>
    )
}
