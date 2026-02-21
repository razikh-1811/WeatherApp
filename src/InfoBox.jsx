import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Brightness7Icon from '@mui/icons-material/Brightness7';
export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1667578398694-9d1226dbc515?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";


    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL:info.temp>20 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity>80 ? <ThunderstormIcon />:info.temp>20 ? <Brightness7Icon/>: <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                       <div style={{fontWeight:'bolder'}}>
                       <div>Temperature={info.temp}&deg;C</div>
                       <div>Humidity={info.humidity}</div>
                       <div>Min Temp={info.tempmin}&deg;C</div>
                       <div>Max Temp={info.tempmax}&deg;C</div>
                       <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </div>
                    </Typography>
                </CardContent>
              
            </Card>

        </div>
    )
}