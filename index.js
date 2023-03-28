// const express = require ('express');
// const app = express();//executable function is app
// const path =require('path');//help in access folder
// const publicPath =path.join(__dirname,'public')
// const port = 5500;

// app.set('view engine','ejs');//ejs is a template engine

// console.log(publicPath);
//app.use(express.static(publicPath))//it loads static files from public files



// **************remove extension*********
// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)

// });
// app.get('/profile',(_,resp)=>{
//     const user ={
//         name:'sandhya',
//         email:"abc@gmail.com",
//         country:"USA",
//         skills:['php','js','node js','java','c++']
//     }
//     resp.render('profile',{user})
// })
// app.get('/contact',(_,resp)=>{
//     resp.sendFile(`${publicPath}/contact.html`)

// })
// app.get('/login',(_,resp)=>{
//     resp.render('login')

// })
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)

// })
// app.get('/help',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)

// })
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/404.html`)
// });//error page or 404 page
// *********************************************************************************
// app.listen(5500);
//we cabnot load directly css and images becuase path is coming from node js we cannot direct 











// *******************************************MIddleware*********************************************
//Middleware is used to modify the req and response when we have to autnenticate and filter.
//Route level middleware-which is used in routing i groups ,single
//Application level middleware




////this is application level middle ware//
const express = require ('express');
const app = express();
const reqFilter =require('./Middleware');
const route= express.Router();//use for group level of middleware
const port = 5500;

// app.use(reqFilter)

route.use(reqFilter)

app.get('/',(req,resp)=>{
    resp.send('Welcome to Home Page')
})
app.get('/users',(req,resp)=>{//route level middleware
    resp.send("Welcome to user page")
})
route.get('/about',(req,resp)=>{
    resp.send("Welcome to about page")
})
app.get('/contact',(req,resp)=>{
    resp.send("Welcome to contact page")
})
app.use('/',route)



app.listen(5500);