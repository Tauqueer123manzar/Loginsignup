             // require all path and package
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require("mongoose");

               // setup path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


               //mongose setup
main() .then(()=>{
    console.log("connection sucessfully");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/personal');
}


            // using get method
app.get("/", (req, res) => {
    res.send("Server is working on");
});

app.get("/login", (req, res) => {
    res.render("index.ejs");
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs");
});

           //using post method.
app.post("/login",async(req,res)=>{
    const{mail,pass}=req.body;
    const userCollection=client.db('yourdatabase').Collection('users');

    const user =await userCollection.findOne({mail,pass});
    if(user){
        res.send("Login succuessfull");
    }else{
        res.status(401).send("Invalid credentials");
    }
});     

// listening on the port
app.listen(port, (req, res) => {
    console.log(`Listening on the ${port}`);
});