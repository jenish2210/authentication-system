
let user = localStorage.getItem("user");

if (user) {
    document.getElementById("welcomeUser").innerText = "Welcome, " + user;
}

let token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

$(document).ready(function () {
    loadProfile();
});

function showToast(message, type) {

    let toast = document.getElementById("toast");

    toast.innerText = message;

    toast.className = "toast show " + type;

    setTimeout(function () {
        toast.className = "toast";
    }, 3000);

}

function loadProfile() {

    $.ajax({

        url: "php/getProfile.php",

        type: "POST",

        data: {
            token: token
        },

        success: function (res) {

            let data = typeof res === "string" ? JSON.parse(res) : res;

            if (data.status === "success") {

                $("#age").val(data.age);
                $("#dob").val(data.dob);
                $("#contact").val(data.contact);

            }

        }

    });

}

function saveProfile() {

    $.ajax({

        url: "php/profile.php",

        type: "POST",

        data: {
            token: token,
            age: $("#age").val(),
            dob: $("#dob").val(),
            contact: $("#contact").val()
        },

        success: function (res) {

            let data = typeof res === "string" ? JSON.parse(res) : res;

            if (data.status === "success") {

                showToast(data.message, "success");

                loadProfile();

            } else {

                showToast(data.message, "error");

            }

        },

        error: function () {

            showToast("Server Error!", "error");

        }

    });

}

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login.html";

}