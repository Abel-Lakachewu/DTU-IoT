import React, { useState, useEffect } from "react";
import axios from "axios";

import InternAccItem from "./internAccItem/internAccItem";

function InternAcc() {

    const [internsAcc, setInternsAcc] = useState([]);

    useEffect(() => {
        const getInternsAcc = async () => {
            try{
                const res = await axios.get("http://localhost:5000/api/internacc/");
                setInternsAcc(res.data);
            }catch (err) {
                console.log(err);
              }
        }
        getInternsAcc();
    }, [])

    const placeDeletedHandler = deletedPlaceId => {
        setInternsAcc(prevInterns =>
          prevInterns.filter(intern => intern._id !== deletedPlaceId)
        );
      };

    return (
        <React.Fragment>
        <div className="container">
        <div style={{'minHeight':'60vh', 'textAlign':'center'}}>
            <h1>Accepted Intern Students</h1>
            <br/>
             {
                internsAcc.map((intern) => (
                    <InternAccItem intern = {intern} onDeletePlace={placeDeletedHandler} />
                ))
             }
        
        </div>
        </div>
        </React.Fragment>
    )
}

export default InternAcc