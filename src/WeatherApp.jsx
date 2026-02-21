import Searchbox from "./Searchbox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";
export default function WeatherApp()
{
    const [WeatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempmin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>
    {
        setWeatherInfo(newInfo);
    };
    return(
        <>
             <Searchbox updateInfo={updateInfo}/><br></br>
             <InfoBox info={WeatherInfo}/>
        </>
    )
}

