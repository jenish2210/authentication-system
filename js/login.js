function showToast(message,type){

    let toast = document.getElementById("toast");

    toast.innerText = message;

    toast.className = "toast show " + type;

    setTimeout(()=>{
        toast.className = "toast";
    },3000);

}


function login(){

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    /* INPUT VALIDATION */

    if(email === ""){
        showToast("Email is required","error");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        showToast("Enter a valid email","error");
        return;
    }

    if(password.length < 6){
        showToast("Password must be at least 6 characters","error");
        return;
    }

    /* SHOW LOADER */

    $("#loader").show();

    $.ajax({

        url: "php/login.php",
        type: "POST",

        data:{
            email: email,
            password: password
        },

        dataType: "json",

        success:function(data){

            $("#loader").hide();

            if(data.status === "success"){

                localStorage.setItem("token", data.token);
                localStorage.setItem("user", email);

                showToast("Login successful","success");

                setTimeout(()=>{
                    window.location = "profile.html";
                },1000);

            }else{

                showToast("Invalid email or password","error");

            }

        },

        error:function(xhr){

            $("#loader").hide();

            console.error("Server error:", xhr.responseText);

            showToast("Server error. Please try again.","error");

        }

    });

}


function togglePassword(id,icon){

    let input = document.getElementById(id);

    if(input.type === "password"){

        input.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    }else{

        input.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}