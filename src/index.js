import dotenv  from 'dotenv';
dotenv.config({path:'./.env'})
/* dotenv is a popular npm package that 
automatically loads environment variables
 from a .env file into the process.env object,
  making these variables accessible throughout 
  your application.
  */

import mongoose from "mongoose"  //This is required to interact with MongoDB using Mongoose
import { DB_NAME } from "./constants.js" // here the db name import from constants file

import express from "express" // it imports the express framework which
//  is used to create the server and used to handle HTTP requests and responses
import connectDB from './db/index.js';

const app = express()  
// it creates the instance of the  express application . it is used to configure 
//our server and eventually listen to incoming request. (middleware, routes)

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("Server running at",process.env.PORT);
    })
})
.catch(error=>{
    console.log("mongodb coonection failed: ",error);
})

/*

// ()() --> IIFE (Immediately invoked function expression) that run as soon as oit defined
// async and await used to handle the asynchronous operation
// bsically db is in anothr continent  so we need to wait for it to be connected



( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // await keyword is used to pause the execution until the connection is either successful or fails  
        .then(()=>{ // here is the chaining happened  oso it is chained to the mongodb connection promise 
            // if proccess is successful it procced
            app.listen(`${process.env.PORT}`,()=>{
                console.log(`Server started on port ${process.env.PORT}`);
            })
        })
        .catch(err=>{ //  If there is an error during the database connection
            console.log(err);
        })
    }

    // This catch block of the async IIFE captures any unhandled errors that may have
    //  occurred during the connection process or while setting up the Express server. 
    catch(error){
        console.log(error);
        throw error
    }
} )()

*/
