import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';
import './Temprature.css';

const Temprature = () => {
    const [temp, setTemp] = useState([])
    const [desc, setDesc] = useState([])
    const [icon, setIcon] = useState([])
    // const [url, setUrl] = useState([])


    useEffect(() => {
        const getTemp = async () => {
            const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=11.51&lon=38.01&appid=4c533ea85c6b8a63feb1948408ee7316&units=metric`)
           setTemp(res.data.main.temp)
           setDesc(res.data.weather[0].description)
           setIcon(res.data.weather[0].icon)

        }

        getTemp()
    }, [])
    return (
        // <div style={{paddind:0, margin:0}}>
          
        //    Temp = {temp} 20c <br/>
        //    {desc} Very hot <br/>
        //    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />

        // </div>
<React.Fragment>
<div className='t'>
<h3>Debre Tabor</h3>
        <Grid style={{marginTop:"-25px"}} divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column width={8}>
            <p style={{marginLeft:"40px", marginTop:'25px'}} >{temp}°C</p> 
        </Grid.Column>
        <Grid.Column width={8}>
        <img style={{marginTop:'-10px'}} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
<p style={{marginTop:'-35px', marginBottom:"10px"}}>{desc}</p>
</div>
    </React.Fragment>
    )
}

export default Temprature
