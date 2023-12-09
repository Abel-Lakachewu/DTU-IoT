import React, { } from "react";

import './chatOnline.css'
import chat from '../../../assets/c5.jpg'
// import { useHttpClient } from "../../../shared/hooks/http-hook";
// import axios from "axios";

export default function ChatOnline({onlineUsers, currentId, setCurrentChat }) {
  // const { sendRequest } = useHttpClient();

  // const [loadedUsers, setLoadedUsers] = useState([]);
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         "http://localhost:5000/api/users/users"
  //       );

  //       // setLoadedUsers(responseData.users);
  //     } catch (err) {}
  //   };
  //   fetchUsers();
  // }, [sendRequest, currentId]);

  // console.log(loadedUsers);
  // const handleClick = async (user) => {
  //   try{
  //     const res = await axios.get(`http://localhost:5000/api/conversations/find/${currentId}/${user._id}`);
  //     setCurrentChat(res.data)
  //   }catch(err){
  //     console.log(err);
  //  }
  // }


  return (
    // <div className="chatOnline"> 
    // <h1>Contacts</h1>
    // {loadedUsers.map(o => (
    //   <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
    //     <div className="chatOnlineImgContainer">
    //       <img
    //         className="chatOnlineImg"
    //         src={`http://localhost:5000/${o?.image}`}
    //         // src="https://www.w3schools.com/howto/img_avatar.png"
    //         alt=""
    //       />
    //       <div className="chatOnlineBadge"></div>
    //     </div>
    //     <span className="chatOnlineName">{o?.name}</span>
    //   </div>
    // ))}
    // </div>
    <img src={chat} className="chatImage" alt="" />
  );
}





  // useEffect(() => {
      // setOnlineFriends(loadedUsers.filter((f) => onlineUsers.includes(f._id)));



  //     // let u = [];
  //     // u = loadedUsers.map(function(f){
  //     //   if(onlineUsers.includes(f)){
  //     //     return u.push(f);
  //     //   }
  //     // })
      // setOnlineFriends();

    // },[loadedUsers, onlineUsers])

    // console.log(onlineFriends);