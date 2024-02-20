const mongoose = require("mongoose");


//mongose setup
main().then(() => {
    console.log("connection sucessfully");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/personal');
}

//making new Schema 
const LoginSignup = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//making new models
const User = mongoose.model("User", LoginSignup);

module.exports = User;
