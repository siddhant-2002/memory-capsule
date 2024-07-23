const mongoose = require('mongoose');
require('dotenv').config(); // import dotenv and configure it to use .env file environment variables

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL,{     // connect to MongoDB process.env.MONGO_URL is the MongoDB connection string
        // useNewUrlParser: true,
        
    })
    .then(()=>{
        console.log('Database connected');
    })
    .catch((err)=>{
        console.log("error occured")
        console.log(err);
        process.exit(1); // exit the process if an error occurs while connecting to the database and pass 1 as an argument to indicate that an error occurred and the process should exit 
    });
    
} 

module.exports = dbConnect; // export the dbConnect function to be used in other files