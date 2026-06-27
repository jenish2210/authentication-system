function showToast(message, type) {

    let toast = document.getElementById("toast");

    toast.innerText = message;

    toast.className = "toast show " + type;

    setTimeout(function () {
        toast.className = "toast";
    }, 3000);

}

function register() {

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();

    if (name === "") {
        showToast("Name is required", "error");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showToast("Enter a valid email", "error");
        return;
    }

    if (password.length < 6) {
        showToast("Password must be at least 6 characters", "error");
        return;
    }

    $("#loader").show();

    $.ajax({

        url: "php/register.php",

        type: "POST",

        data: {
            name: name,
            email: email,
            password: password
        },

        dataType: "json",

        success: function (data) {

            $("#loader").hide();

            if (data.status === "success") {

                showToast("Registration successful", "success");

                setTimeout(function () {
                    window.location.href = "login.html";
                }, 1000);

            } else {

                showToast(data.message || "Registration failed", "error");

            }

        },

        error: function (xhr) {

            $("#loader").hide();

            console.log(xhr.responseText);

            showToast("Server error. Please try again.", "error");

        }

    });

}

function togglePassword(id, icon) {

    let input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");

    }

}

