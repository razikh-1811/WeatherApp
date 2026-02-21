import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function Searchbox({updateInfo}) {
    let [City,setCity]=useState("");
    let [error,seterror]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="56f610c137a13ffe0c7def9f9328ca6e";
    let getWeatherInfo=async ()=>{

      let response =  await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
      let jsonresponse=await response.json();
        if (jsonresponse.cod !== 200) {
      throw new Error(jsonresponse.message);
    }
        let result={
        city:City,
        temp:  jsonresponse.main.temp,
        tempmin: jsonresponse.main.temp_min,
        tempmax: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feelslike: jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description

      }
      return result;
    }
    
    let Citychange=(event)=>
    {
       
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>
    {
        try{  
        event.preventDefault();
        console.log(City);
        
        let newinfo =await getWeatherInfo();
        updateInfo(newinfo);
        setCity("");
        seterror(false);
       }
       catch(err){
           seterror(true);
       }
      
       
    };
    return (
        <div className="SearchBox">
            <h3>Weather App</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={City} onChange={Citychange}required/>
                <br></br><br></br>
                
                <Button variant="contained" type="submit">Search</Button>
                {error ? <p style={{color:"red"}}>NO SUCH AREA IN OUR API</p> :""}
                
              
            </form>


        </div>
    )
}