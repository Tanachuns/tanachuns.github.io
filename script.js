
const chatbox = document.querySelector('.terminal-chat');
const input = document.querySelector('input');
const textArr = [
    {
        message:"/hello",
        response:"Hi, My name is Tanarak!"
    },
    {
        message:"/whatsup",
        response:"I always be fine with this static website LOL!"
    },
    {
        message:"/github",
        response:"github.com/tanachuns"
    },
    {
        message:"/nickname",
        response:"You can call me Tana or Ton :D"
    },
    
    {
        message:"/clear",
        response:"just refresh this page!"
    },
    {
        message:"/gradient-anime",
        response:"I used gradient-animator.com to generate cool background."
    },
    {
        message:"/icon",
        response:"https://www.flaticon.com/free-icon/terminal_7544562"
    },
    {
        message:"/test",
        response:"this command is for new line test and character limit of the box ill try to add more char to this until it breake to nw line thanks. It works!"
    }
]



function textBack(reciveMessage){
    let response = "";
    for(let i=0;i<textArr.length;i++){
        if(reciveMessage.toLowerCase()==="/helpmepapa"){
            response = response+" "+textArr[i].message+" ";
        }
        else if(reciveMessage.toLowerCase()===textArr[i].message){
            response = textArr[i].response;
        }
    }
    return response;
}

function sendMessage(e){
    if (e.key === "Enter") {
        const reciveMessage = document.createElement('p');
        const message = document.createElement('p');
        const inp = input.value;
        reciveMessage.innerText = "> "+inp;
        message.innerText = textBack(inp);
        chatbox.appendChild(reciveMessage);
        chatbox.appendChild(message);
        input.value ="";
      }
}





input.addEventListener("keyup",(e)=> sendMessage(e));

