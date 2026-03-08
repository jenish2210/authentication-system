let user = localStorage.getItem("user");

if(user){
document.getElementById("welcomeUser").innerText =
"Welcome, " + user;
}

let token = localStorage.getItem("token");

if(!token){
window.location="login.html";
}

/* LOAD PROFILE DATA */

$(document).ready(function(){

$.ajax({

url:"php/get_profile.php",
type:"GET",
data:{token:token},

success:function(res){

let data = typeof res === "string" ? JSON.parse(res) : res;

if(data.status === "success"){

$("#age").val(data.data.age);
$("#dob").val(data.data.dob);
$("#contact").val(data.data.contact);

}

}

});

});

/* SAVE PROFILE */

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
localStorage.removeItem("user");

window.location="login.html";

}