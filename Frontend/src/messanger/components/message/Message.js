import React from "react";
import {format} from "timeago.js";

import msg from '../../../assets/msg.png'

import './message.css';

export default function Message({message,own}) {
    return (
        <div className={ own ? "message own" : "message" } >
            <div className="messageTop">
                <img className="messageImg" src={msg} alt=""/>
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}