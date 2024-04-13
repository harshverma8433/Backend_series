import express from "express";

// A middleware to enable Cross-Origin Resource Sharin
// g, allowing your API to accept requests from different domains
import cors from "cors";

// Middleware for parsing cookies attached to the client request object
import cookieParser from "cookie-parser";


const app = express();

// origin: Specifies the URI that may access the resource. 
// Here, it's set to the value of CORS_ORIGIN from your environment 
// variables, allowing you to dynamically set allowed origins.
// // credentials: Set to true to allow cookies to be sent back and
//  forth between client and server.
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// This middleware is used to automatically parse JSON formatted request
//  bodies and make them available under req.body

app.use(express.json({limit:"20kb"}))

// Parses URL-encoded data with the querystring library.
app.use(express.urlencoded({ extended: true , limit:"20kb"}))

// configure the server to serve static files (like images, JavaScript, CSS) 
// from a directory named 'public'.
app.use(express.static('public'))

// Parses the Cookie header on the request and exposes the cookie data on req.cookies
app.use(cookieParser());

export default app;