module.exports= reqFilter=(req,resp,next) =>{
    // console.log('reqFilter');
    if(!req.query.age){
        resp.send("Please provide age");
    }
    else if(req.query.send>18)
    {
        resp.send("you cannot acces the page");
    }
    else{
    next();
    }

}
// app.use(reqFilter)