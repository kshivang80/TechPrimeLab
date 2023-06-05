const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userRoute } = require("./routes/user.route")
const { projectRoute } = require("./routes/Project.route")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors());


app.get("/", async (req, res) => {

    try {
        res.end("This is our Home page")

    } catch (err) {
        res.send(err)
    }
})

app.use("/" , userRoute)
app.use("/",projectRoute)


app.listen(process.env.PORT, async()=>{

    try{
        await connection
        console.log("server is connected")

    }catch(err){
        console.log(err)

    }
    console.log(`Port is Running on ${process.env.PORT}`)
})




