//load express
import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import Router from "./ApiRoutes.js"

const app = express()
app.use(bodyParser.json())
app.use(express.json());
app.use(cors())


app.use(express.json())

try {
    mongoose.connect("mongodb+srv://Procurement:mongoaws@cluster.4dq7x2u.mongodb.net/BookStore");
    console.log("Conneted to The MongoDB DataBase");
} catch (error) {
    console.log(error);
}


app.get("/", (req, res) => {
    res.send("<h1>Welcome To Your Node Server</h1>");
});


app.use("/test", Router)


//listen port
app.listen(8002, () => {
    console.log("Running......!, This is our Book Store port: 8002")
})