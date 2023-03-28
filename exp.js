
// *************************************** Node with express  *****************************************//
// const express = require ('express');
// const app=express();
// const port=5500;

// app.get("",(req,resp)=>{ //1 is route two are paramenters req and response
//     resp.send("Welcome this is home page");
// })
// app.get("/about",(req,resp)=>{
//     resp.send("hello this is about page");
// })
// app.get("/help",(req,resp)=>{
//     resp.send("hello this is help page");
// })
// app.listen(5500);


// *************************************** Node with express request and response params *****************************************//


// const express = require ('express');
// const app=express();
// const port=5500;

// app.get("",(req,resp)=>{ 
//     //1 is route two are paramenters req and response
//     console.log("data sent by browser",req.query.name);
//     resp.send("Welcome this is home page"+req.query.name);
// })
// app.get("/about",(req,resp)=>{
//     resp.send("hello this is about page");
// })
// app.get("/help",(req,resp)=>{
//     resp.send("hello this is help page");
// })
// app.listen(5500)


// *************************************** Render HTml and json *****************************************//

// const express = require ('express');
// const app=express();
// const port=5500;

// app.get("",(req,resp)=>{ //1 is route two are paramenters req and response
//     resp.send(`<h1>Welcome this is home page</h1>
//     <a href="/about">Go to About page</a>
    
//     `);
// })
// app.get("/about",(req,resp)=>{
//     resp.send(`
//     <input type="text" placeholder="username" value="${req.query.name}"/>
//     <button>Click<button>
//     <a href="/">Go to Home page</a>

    
    
//     `);
// })
// app.get("/help",(req,resp)=>{
//     //json data 
//     resp.send([
//         {
//             name:"sandya",
//             email:"abc@gmail.com"
//         },
//         {
//             name:"sandya",
//             email:"abc@gmail.com"
//         }
//     ]);
// })
// app.listen(5500);


