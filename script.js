
const chatbox = document.querySelector('.terminal-chat');
const input = document.querySelector('input');
const textArr = [
    {
        message:"/hello",
        response:"Hi, My name is Tanarak!"
    },
    {
        message:"/whatsup",
        response:"I always be fine on this static website LOL!"
    },
    {
        message:"/github",
        response:`<a target="_blank" href="https://www.github.com/tanachuns">My Github.</a>`
    },
    {
        message:"/nickname",
        response:"You can call me Tana or Ton :D"
    },
    {
        message:"/resources",
        response:`I used <a target="_blank" href="https://www.gradient-animator.com">gradient-animator.com</a> to generate cool background.<br>
        I used icon from <a target="_blank" href="https://icons8.com/icons/">icons8.</a> <br>
        Link to this <a target="_blank" href="https://github.com/Tanachuns/portfolio">Repository</a>`
        
    },
    {
        message:"/info",
        response:`<p>
        ===========================================================<br><br>
        <strong>TANARAK CHUNSANIT</strong> aka.TON<br>
        Software Engineer.
        <br><br>
        <u>EXPERIENCES</u> <br>
        Soft Square International Co,Ltd | Intern | May 2021 - July 2021.
        <br><br>
        <u>EDUCATION</u><br>
        Rangsit University | Computer Engineering.
        <br><br>
        <u>CONTACT</u><br>
        (+66)81-947-8436<br>
        tanarak.chuns@gmail.com
        <br><br>
        ===========================================================<br>
    </p>`
    },
    {
        message:"/mail",
        response:"Say Hi to me on email."
    },
    {
        message:"/clear",
        response:"just refresh this page! this message wont show."
    },
]



function textBack(reciveMessage){
    let response = "";
    for(let i=0;i<textArr.length;i++){
        if(reciveMessage.toLowerCase()==="/helpmepapa"){
            response = response+" "+textArr[i].message+" ";
        }
        else if(reciveMessage.toLowerCase()==="/clear"){
            location.reload();
        }
        else if(reciveMessage.toLowerCase()==="/mail"){
            window.open("mailto:tanarak.chuns@gmail.com", '_blank');
            
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
        reciveMessage.innerHTML = "> "+inp;
        message.innerHTML = textBack(inp);
        chatbox.appendChild(reciveMessage);
        chatbox.appendChild(message);
        input.value ="";
    }
    
}





input.addEventListener("keyup",(e)=> sendMessage(e));

