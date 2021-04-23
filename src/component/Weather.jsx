import React, { useState, useEffect } from "react";
import "./weatheer.css";
import tempimg from "./tempimg.jpg";
import temp from "./temp.svg";
import temp1 from "./temp1.svg";



export default function Weather() {
  const [city, setcity] = useState(null);
  const [savecity, setsavecity] = useState();

  useEffect(() => {
    // const fetchapi = async () => {
    //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0c9cd51e833867535bc069be025e9b30`;
    //   const response = await fetch(url);
    //   const resdata = await response.json();
    //   console.log(resdata.main, resdata);
    //   setsavecity(resdata.main, resdata.weather);

      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0c9cd51e833867535bc069be025e9b30`, requestOptions)
      .then(response => response.json())
      .then(result => setsavecity(result.main))
      .catch(error => console.log('error', error));
    // };
    // fetchapi();
  }, [city]);

  return (
    <div>
      <div className="glass">
        <div className="drop">
          <select
            className="citi"
            name="citi"
            id="5city"
            onChange={(e) => setcity(e.target.value)}
          >
            <option value="">select city</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="DELHI">DELHI</option>
            <option value="london">london</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
        <div>
          <label htmlFor="text"> OR ..sreach city here </label>
          <br />
          <input
            className="inputciti"
            type="text"
            placeholder="Enter cities ..."
            onChange={(e) => setcity(e.target.value)}
          />
        </div>
        <div>
            <img className="svg" src={temp} alt="svg"/>
            <img className="svg1" src={temp1} alt="svg"/>

        </div>
        <div className="city">
          <h3>{city}</h3>
        </div>
        {!savecity ? (
          <p> no city</p>
        ) : (
          <div>
            <div>
              <img className="cityicon" src={tempimg} alt="icon" />
            </div>
            <div>
              <h1 className="citytemp">Temperature : <b>{savecity.temp}°C</b></h1>
            </div>
            <div>
              <p className="citytext">feels_like: {savecity.feels_like}°C</p>
            </div>
            <div>
              <p> min tem: {savecity.temp_min}°C</p>
              <p> max tem: {savecity.temp_max}°C</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
