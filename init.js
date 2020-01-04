import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

import "./model/video";
import "./model/urlVideo";
import "./model/embeddedVideo";
import "./model/user";

const PORT = process.env.PORT;

const handleListening = () => {
    console.log(`Listening on : ${PORT}`);
}
app.listen(PORT, handleListening);
