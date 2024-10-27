import {createServer} from "http";
const server = createServer((request,response)=>{
    // response.write("Hello World");
    // response.end();
    response.writeHead(200,"Content-Type","text/html");
    response.end("Hello World");
});
server.listen(8000,()=>{
    console.log("Server run at 8000 port");
});