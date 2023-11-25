import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";


const basicAuth = require('express-basic-auth');
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(basicAuth({
    users:{'admin':'admin123'},
    challenge:true,
    unauthorizedResponse:'unauthorized acces'
}));
const basicAuth=
require('express-basic-auth');

app.listen(5000, ()=> console.log('server up and running...'));
