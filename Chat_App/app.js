const express=require("express");
const app=express();
const path=require('path');
const { Socket } = require("socket.io");
const port=process.env.PORT || 4000
const server=app.listen(port,()=>{
    console.log("App listing at port",port);

    
})
const io=require('socket.io')(server)


app.use(express.static(path.join(__dirname,'public')));
io.on('connection',onconnected)

let socketconected=new Set()
function onconnected(socket){
    console.log(Socket.id)
    socketconected.add(socket.id);

    io.emit('clients-total',socketconected.size);

    socket.on('disconnect',()=>{
        console.log("socket disconnected",socket.id);
        socketconected.delete(socket.id)
        io.emit('clients-total',socketconected.size)
    })
}