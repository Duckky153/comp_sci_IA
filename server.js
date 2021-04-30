import express from "express";
import session from "express-session";

const port = 80;
const app = express();

app.use("/", express.static("static"));

app.use(session({
    "secret": "n456n6v6g45-v-56g5-g4-g-g5-g64-6g45--64-v6-d6-d56-jd-5-6",
    "resave": false,
    "saveUninitialized": false
}));

app.listen(port, function () {
    console.log("listening");
});