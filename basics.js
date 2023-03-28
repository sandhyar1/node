//  const http = require ('http')//it handles the request and response from the server 
// const data = require('./data');
// http.createServer((req,resp) =>{
//     resp.writeHead(500,{'Content-Type':'application/json'});//it takes response bacuse we are sending data
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4400);


// ********************************file system in input line **********************************************//


//input from commamd line//
//console.log(process.argv)//it updates various arguments in node
// const fs = require('fs');
// const input = process.argv;
//  if(input[2]=='add')
//  {
//     fs.writeFileSync(input[3],input[4])
//  }
//  else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
//  }
//  else{
//     console.log("invalid input");
//  }

// *************************************show file listing ***********************************************.//


// const fs= require ("fs");
// const path = require ('path');
// const dirPath =path.join(__dirname,"files");
// console.log(dirPath);
// // for(i=0;i<4;i++){
// //     fs.writeFileSync(`${dirPath}/Hello${i}`.txt,"some aimple");
// //     // fs.writeFileSync(`hello`+i+".txt","some simple")
// // }

// fs.readdir(dirPath,(err,files)=>{
//     // console.log(files);
//     files.forEach((item)=>{
//         console.warn("file name is:",item);
//     });
// }
// )

//****************************************CURD with file system ************************************//


// const fs = require('fs');
// const path = require('path');
// const dirPath= path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;
//  fs.writeFile("apple.text");
// fs.writeFileSync(filePath,"this is file");
// fs.readFile(filePath,'utf-8',(err,item) =>{
    // console.log(item);
// })
// fs.appendFile(filePath,'for fruits',(err) ={
//     if(!err) 
//     console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);


// ***************************************Async *****************************************//

// let a=20;
// let b=0;

// setTimeout(()=>{
//    b=30;
// },2000)


// console.log(a+b)


// *************************************** handle Async *****************************************//
// By promise we can handle async another method is async await
// let a=20;
// let b=0;


// let waitingData= new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve(30);
//    },2000)
// })

// waitingData.then((data)=>{
//    b=data;
//    console.log(a+b)
// })

// *************************************** How node js work  *****************************************//

//call stack -reguster the function then call the funaction call Main()
 //Node Api
//event loop
//callback queue
// console.log("starting up");
// //api=interface nbetween two prrogrammming languages
// //node api +callback which inherit from c and c++
// setTimeout(() =>{
//     console.log("2sec wait")
// },2000);
// setTimeout(() =>{
//     console.log("0sec wait")
// },0);
// //}
// console.log("finishing up");


// *************************************** Basics completes  *****************************************//


