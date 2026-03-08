function showToast(message,type){

let toast=document.getElementById("toast");

toast.innerText=message;

toast.className="toast show "+type;


toast.className="toast";


}

function register(){

let name=$("#name").val().trim();
let email=$("#email").val().trim();
let password=$("#password").val().trim();

/* validation */

if(name===""){
showToast("Name is required","error");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
showToast("Enter valid email","error");
return;
}

if(password.length < 6){
showToast("Password must be at least 6 characters","error");
return;
}

/* ajax request */

$.ajax({

url:"php/register.php",
type:"POST",

data:{
name:name,
email:email,
password:password
},

beforeSend:function(){
$("#loader").show();
},

success:function(res){

$("#loader").hide();

showToast("Registration successful","success");

setTimeout(()=>{
window.location.href="login.html";
},120);

},

error:function(){

$("#loader").hide();

showToast("Registration failed","error");

},

complete:function(){
$("#loader").hide();
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
