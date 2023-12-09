import React, {useContext, useEffect, useState, useRef } from "react";

import './messenger.css'
import Conversation from "../components/conversations/Conversations";
import Message from "../components/message/Message";
import ChatOnline from "../components/chatOnline/ChatOnline";
import axios from "axios";

import { AuthContext } from "../../shared/context/auth-context";

import {io} from "socket.io-client";


export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const socket = useRef()
  const user = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(()=> {
    socket.current =io("ws://localhost:8900");
    socket.current.on("getMessage", data => {
         setArrivalMessage({
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
         })
      })
     
  },[])

  useEffect(() => {
     arrivalMessage &&
     currentChat?.members.includes(arrivalMessage.sender) &&
     setMessages((prev) =>  [...prev, arrivalMessage]);
  },[arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.userId);
    socket.current.on("getUsers", users => {
    setOnlineUsers(users);
      
    })
  },[user]);
 

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/conversations/"+ user.userId);
        setConversations(res.data);
        // console.log(res.data);
        
      } catch (err) {
        console.log(err);
      }
    }
    getConversations();
  }, [user.userId])

  useEffect(() => {
    const getMessages = async () => {
      try{
        const res = await axios.get("http://localhost:5000/api/messages/"+ currentChat?._id);
        setMessages(res.data);
      } catch(err){
        console.log(err);
      }
    }
    getMessages();
  },[currentChat]);

   const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.userId,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(member => member !== user.userId);

    socket.current.emit("sendMessage", {
      senderId: user.userId,
      receiverId,
      text: newMessage,
    })

    try{
       const res = await axios.post("http://localhost:5000/api/messages/", message);
       setMessages([...messages, res.data])
       setNewMessage("");
    }catch(err){
      console.log(err);
    }
   }


   useEffect(() => {
    if(scrollRef.current){
      scrollRef.current.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});

    }
   }, [messages])
  

  // on 1:14:10


    return (
      <div className="messenger ">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
          <h1>Chats</h1>

            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                         <div ref={scrollRef}>
                         <Message message={m} own={m.sender === user.userId}  />
                         </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="write something..."
                    className="chatMessageInput"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                </div>
              </>
            ) : (
              <span className="noConversationText">Open contact ...</span>
            )}
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline onlineUsers={onlineUsers} currentId={user.userId} setCurrentChat={setCurrentChat} />
          </div>
        </div>
      </div>
    );
}