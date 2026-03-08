let user = localStorage.getItem("user");

if(user){

document.getElementById("welcomeUser").innerText =
"Welcome, " + user;

}

let token=localStorage.getItem("token");

if(!token){
window.location="login.html";
}

function showToast(message,type){

let toast=document.getElementById("toast");

toast.innerText=message;

toast.className="toast show "+type;

setTimeout(()=>{
toast.className="toast";
},1200);

}

function saveProfile(){

$.ajax({

url:"php/profile.php",
type:"POST",

data:{
token:token,
age:$("#age").val(),
dob:$("#dob").val(),
contact:$("#contact").val()
},

success:function(res){

showToast("Profile saved successfully","success");

}

});

}

function logout(){

localStorage.removeItem("token");

window.location="login.html";

}