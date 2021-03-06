
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


/**  Mongoose - CONNECT */
mongoose.connect(process.env.DB_URL || process.env.DB_LOCAL, { useNewUrlParser: true },  function(err){
    if(err){
        console.log('DB CONNECTION ERROR! -- users model')
    }
}, { useNewUrlParser: true });


//SCHEMA
var userSchema = new mongoose.Schema({    
    username: String,
    password: String,
    displayName: String,      
});

// PLUGIN PASSPORT to mount passport methods on to the USER model for use by User objects
userSchema.plugin(passportLocalMongoose); 

// MODEL
const User = mongoose.model("User", userSchema);  

module.exports = User;
