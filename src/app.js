const express = require("express")
const app = express()
const mongo = require("mongoose")
const user = require("./models/User.model")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongo.connect("mongodb://localhost:27017/guiapics")
    .then(() => {
        // console.log("Database Connect")
    }).catch((err) => {
        console.log(err)
    })

const User = mongo.model("User", user)

app.get("/",(req, res) => {
    res.json({})
})

app.post("/user", async (req, res) => {
    for(let key in req.body){
        if(req.body[key] == "" || req.body[key] == undefined){
            res.sendStatus(400)
            return
        }
    }
    try{
        let newUser = new User({name: req.body.name, email: req.body.email, password: req.body.password})
        await newUser.save()
        res.json({email: req.body.email})
    }catch(err){
        res.sendStatus(500)
    }
})

module.exports = app