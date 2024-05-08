const socket=io();
socket.on('clients-total',(data)=>{
    console.log(data);
})
const clientst=document.getElementById('clients-total');
const messagecontainr=document.getElementById();
const nameinp=document.getElementById();
const chatform=document.getElementById();
const messageinp=document.getElementById();

socket.on('clients-total',(data)=>{
    clientst.innerText=`Total clients: ${data}`;
})