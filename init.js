import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

import "./model/video";
import "./model/urlVideo";
import "./model/embeddedVideo";
import "./model/user";

const PORT = process.env.PORT;
const ngrok = process.env.ENABLE_TUNNEL ? require('ngrok') : false;


const handleListening = () => {
    if(ngrok) {
        ngrok.connect(process.env.PORT, (err, url) =>{
            if(err){
                return console.log(err)
            }
            console.log(`Server started. Tunnel running at url ${url}`);
        })
    }else{
    console.log(`Listening on : ${PORT}`);
    }
}

app.listen(PORT, handleListening);
