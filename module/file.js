import { appendFileSync } from 'fs';
import fs from 'fs/promises';
// const data =fs.readFileSync("./data.txt","utf-8");
// console.log(data);
// fs.writeFileSync("./data.txt","Hello Sujan");
// console.log(data);
// const data2 =fs.appendFileSync("./data.txt","Don");
// console.log(data);

//callback-Async-Promise
//callback
// fs.readFile("./data.txt","utf-8",(error,data)=>{
//     if(error) return console.log(error);
    
//     const result1= data;
//     fs.readFile(result1,"utf-8",(error1,data1)=>{
//         if(error1) return console.log(error1);
    
//         const result2 = data1;
  
//     fs.readFile(result2,"utf-8",(error2,data2)=>{
//         if(error2) return console.log(error2);
    
//        console.log(data2);
//      })
//     })
// })

//Promise(preferred)
// fs.readFile("./data.txt","utf-8").then(
//     (data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// fs.readFile("./data.txt","utf-8")
// .then( (data)=> fs.readFile(data, "utf-8") )
// .then( (data1)=> fs.readFile(data1, "utf-8"))
// .then((data2)=> console.log(data2))
// .catch((error)=>{
//         console.log(error);
//     })

//asyn-await

// async function readmyfile(){
//     try{ 
//  const data = await fs.readFile("./data.txt","utf8");
//  const data1 = await fs.readFile(data,"utf8");
//  const data2 = await  fs.readFile(data1,"utf-8");
//  console.log(data2);
//   }
//   catch(err){
//     console.log(err);
//   }

// }
// readmyfile();

// async function writemyfile(){
//     const data = await fs.writeFile("./data2.txt","File is written");
//     console.log(data);
// }
// writemyfile();

// appendFileSync("./data2.txt","\nThis is don");

//Path moudule

