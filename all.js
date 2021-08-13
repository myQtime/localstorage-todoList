let send =document.querySelector(".sendBtn");
let text =document.getElementById("textID");
let list = document.querySelector(".list");
const data = JSON.parse(localStorage.getItem("datastring")) || [];


function init(){
    let str ="";
    if(data.length==0){return}
    else if(data.length!=0){
        data.forEach(function(item,index){
        str+=`<li><button type="button" class="nes-btn is-error" data-num="${index}">Delete</button><span>  ${item}</span></li>`;
    })}

list.innerHTML= str;
}


function AddTodo(){
if(text.value===""){
    alert("Please write something")
    return};
data.push(text.value);
text.value = "";
saveLocal();
init();
}

//新增
send.addEventListener("click",AddTodo,false);

//刪除Todo
list.addEventListener("click",function(e){
    if(e.target.nodeName==="BUTTON"){
        let num = e.target.getAttribute("data-num");
        data.splice(num,1);
        saveLocal();
        init();
    }
    
})

//save to localstorage
function saveLocal(){
let datastring = JSON.stringify(data)
localStorage.setItem("datastring",datastring)
}

init();