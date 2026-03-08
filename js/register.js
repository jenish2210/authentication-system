function register(){

let name=$("#name").val().trim();
let email=$("#email").val().trim();
let password=$("#password").val().trim();

/* INPUT VALIDATION */

if(name.length < 3){
showToast("Name must be at least 3 characters","error");
return;
}

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
showToast("Enter a valid email address","error");
return;
}

if(password.length < 6){
showToast("Password must be at least 6 characters","error");
return;
}

/* SHOW LOADER */

$("#loader").show();

$.ajax({

url:"php/register.php",
type:"POST",

data:{name,email,password},

success:function(res){

$("#loader").hide();

showToast("Registration successful","success");

setTimeout(()=>{
window.location="login.html";
},1200);

},

error:function(){

$("#loader").hide();

showToast("Registration failed. Try again.","error");

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