function showToast(message,type){

let toast=document.getElementById("toast");

toast.innerText=message;

toast.className="toast show "+type;

setTimeout(()=>{
toast.className="toast";
},3000);

}

function register(){

let name=$("#name").val();
let email=$("#email").val();
let password=$("#password").val();

$.ajax({

url:"php/register.php",
type:"POST",

data:{name,email,password},

success:function(res){

showToast("Registration successful","success");

setTimeout(()=>{
window.location="login.html";
},1200);

}

});

}

function togglePassword(id,icon){

let input=document.getElementById(id);

if(input.type==="password"){

input.type="text";

icon.classList.remove("fa-eye");

icon.classList.add("fa-eye-slash");

}else{

input.type="password";

icon.classList.remove("fa-eye-slash");

icon.classList.add("fa-eye");

}

}