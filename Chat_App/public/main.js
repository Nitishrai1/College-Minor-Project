const socket=io();
socket.on('clients-total',(data)=>{
    console.log(data);
})
const clientst=document.getElementById('clients-total');
socket.on('clients-total',(data)=>{
    clientst.innerText=`Total clients: ${data}`;
})