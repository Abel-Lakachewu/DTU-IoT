// import axios from "axios";
import React, { useState, useEffect } from "react";

import './conversations.css'

// import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../../shared/hooks/http-hook";

export default function Conversation({conversation, currentUser}) {
    const[user, setUser] = useState({});
const { sendRequest } = useHttpClient();

// const [name, setName] = useState(null);
// const [img, setImg] = useState(null);

useEffect(() => {
 var friendId = conversation.members.find((m)=> m !== currentUser.userId);

  const fetchUsers = async () => {
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/users'
      );

let u = responseData.users.find(u => u._id === friendId);
// console.log(u);

// console.log(u.name);

     setUser(u);
    //  setName(u.name);
    //  setImg(u.image);
    
    } catch (err) {}
  };
  fetchUsers();
}, [sendRequest, conversation.members, currentUser.userId]);


// console.log(user);
// console.log(user.name);  

    return (
        <div className="conversation">
             <img className="conversationImg" src={`http://localhost:5000/${user?.image}`}  alt=""/>
             {/* <img className="conversationImg" src="https://www.w3schools.com/howto/img_avatar.png"  alt=""/> */}

             <span className="conversationName">{user?.name}</span>
        </div>
    )
} 