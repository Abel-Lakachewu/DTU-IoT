import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import InternItem from "./internItem/internItem";

import './internItem/internItem.css'

function InternReq() {

    const [interns, setInterns] = useState([]);

    useEffect(() => {
        const getInterns = async () => {
            try{
                const res = await axios.get("http://localhost:5000/api/intern/");
                setInterns(res.data);
            }catch (err) {
                console.log(err);
              }
        }
        getInterns();
    }, [])

    const placeDeletedHandler = deletedPlaceId => {
        setInterns(prevInterns =>
          prevInterns.filter(intern => intern._id !== deletedPlaceId)
        );
      };

    return (
        <React.Fragment>
            <Link to="/internacc" >
            <button className="b" style={{ "cursor":"pointer", "backgroundColor":"#66B2FF","padding":"10px", "marginTop":"20px", "border": "black 2px solid"}} > <i class="fa-sharp fa-solid fa-eye fa-2xl">  Accepted Interns</i></button>
            </Link>

        <div className="container">
        <div style={{'minHeight':'60vh', 'textAlign':'center'}}>
            <h1>List of Internship requests</h1>
            <br/>
             {
                interns.map((intern) => (
                    <InternItem intern = {intern} onDeletePlace={placeDeletedHandler} />
                ))
             }
        
        </div>
        </div>
        </React.Fragment>
    )
}

export default InternReq