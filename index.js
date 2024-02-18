                     // require all path and package
const express=require("express");
const app=express();
const port=8080;
const path=require("path");

                    // setup path
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

                  // using get method
app.get("/",(req,res)=>{
    res.send("Server is working on");
});
 
app.get("/login",(req,res)=>{
    res.render("index.ejs");
});

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});
                 // listening on the port
app.listen(port,(req,res)=>{
  console.log(`Listening on the ${port}`);
});