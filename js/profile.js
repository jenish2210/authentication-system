let user = localStorage.getItem("user");

if(user){
document.getElementById("welcomeUser").innerText =
"Welcome, " + user;
}

let token = localStorage.getItem("token");

if(!token){
window.location="login.html";
}

function showToast(message,type){

let toast=document.getElementById("toast");

toast.innerText=message;

toast.className="toast show "+type;

setTimeout(()=>{
toast.className="toast";
},3000);

}

function saveProfile(){

let age=$("#age").val().trim();
let dob=$("#dob").val().trim();
let contact=$("#contact").val().trim();

/* validation */

if(age==="" || dob==="" || contact===""){
showToast("All fields are required","error");
return;
}

$("#loader").show();

$.ajax({

url:"php/profile.php",
type:"POST",

data:{
token:token,
age:age,
dob:dob,
contact:contact
},

success:function(res){

$("#loader").hide();

showToast("Profile saved successfully","success");

},

error:function(){

$("#loader").hide();

showToast("Failed to save profile","error");

}

});

}

function logout(){

localStorage.removeItem("token");
localStorage.removeItem("user");

window.location="login.html";

}