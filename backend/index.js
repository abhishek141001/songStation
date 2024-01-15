
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const session = require('express-session')
const uri = "mongodb+srv://ojhaabhishekraj14:NM4doMvsTTjcdUFV@cluster0.rc38qeo.mongodb.net/?retryWrites=true&w=majority"
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const cors = require("cors");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: "littlesecret",
    resave: false,
    saveUninitialized: false

}));
app.use(passport.initialize());

app.use(passport.session());
app.use(cors())

mongoose.connect(uri)

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema)
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());






app.post("/register", (req, res) => {
    // console.log(req.body.name)
    const name = req.body.name
    const username = req.body.username
    const password = req.body.password
    // console.log(name,username,password)
    User.register({ name,username }, password, function (err, user) {
        if (err) {
            console.log(err)
        } else {
            console.log("level 3")
            passport.authenticate("local")(req, res, function () {
                console.log("sent")
                res.status(200).json({ message: "success", user: req.user })
            })
        }
    }
    )
})
app.get("/", (req, res) => {
    res.render("index.ejs")
})
app.post("/login", passport.authenticate("local"), (req, res,err) => {
    // This code will execute after successful login authentication
    console.log(err);
    res.status(200).json({ message: "success", user: req.user });
});
app.get("/hello",(req,res)=>{
    res.send("hello")
})
app.get("/data", async (req, res) => {
    try {
        const data = await User.find({});
        res.json(data); // Send the retrieved data as JSON
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
});
app.delete("/delete", async (req, res) => {
    const username = "khushi123"
    try {
        const deletedUser = await User.findOneAndDelete({ username: username });
        if (deletedUser) {
            console.log("Deleted User: ", deletedUser);
            res.redirect("/data");
        } else {
            console.log("User not found");
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
})

app.listen(port, () => {
    console.log(`app is running on port ${port}.`);
})