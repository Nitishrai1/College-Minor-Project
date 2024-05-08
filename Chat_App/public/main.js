const socket=io();
socket.on('clients-total',(data)=>{
    console.log(data);
})
const clientst=document.getElementById('clients-total');
const messagecontainr=document.getElementById('message-container');
const nameinp=document.getElementById('name-input');
const messageform=document.getElementById('message-form');
const messageinp=document.getElementById('message-input');

messageform.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMessage();
});

function sendMessage(){
    console.log(messageinp.value);
    const data={
        name:nameinp.value,
        message:messageinp.value,
        dateTime:new Date()
    }
    socket.emit('message',data)
    addMessagetoUi(true,data)
    messageinp.value=''
}

socket.on('chat-message',(data)=>{
    console.log(data);
})

socket.on('clients-total',(data)=>{
    clientst.innerText=`Total clients: ${data}`;
})

function addMessagetoUi(isOwnMessage,data){
    const element=`${isOwnMessage?"message-right":"message-left"}>
    <p class="message">
        ${data.message} 
        <span>${data.name}->${moment(data.dateTime).fromNow()}</span>
    </p>
  
</l1>`
messagecontainr.innerHTML+=element

}