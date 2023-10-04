require('dotenv').config();
const express = require("express")
// initialization of express application
const app = express()
app.use(express.json())
const userRouter = require("./api/User/user_router")
app.use("/api/users", userRouter)

app.listen(process.env.APP_PORT, () => {
    console.log("connected", process.env.APP_PORT)
})