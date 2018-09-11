const mongoose = require('mongoose');

/**  Mongoose - CONNECT */
mongoose.connect("mongodb://localhost/UdemyWebDev", function(err){
    if(err){
        console.log('DB CONNECTION ERROR!')
    }
}, { useNewUrlParser: true });


//SCHEMA
var blogSchema = new mongoose.Schema({    //object schema created from which model class generated
    title: String,
    imageURL: {type: String, default:"www.imageurlfake.com"},
    body: String,
    author: String,
    created: {type: Date, default:Date.now},
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'    
        }
    ]
        
});

// MODEL
const Blog = mongoose.model("blogPost", blogSchema);  


module.exports = Blog;