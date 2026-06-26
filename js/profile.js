// Show logged in user
let user = localStorage.getItem("user");

if (user) {
    document.getElementById("welcomeUser").innerText =
        "Welcome, " + user;
}

// Get token
let token = localStorage.getItem("token");

// Redirect if not logged in
if (!token) {
    window.location.href = "login.html";
}

// Toast function
function showToast(message, type) {

    let toast = document.getElementById("toast");

    toast.innerText = message;

    toast.className = "toast show " + type;

    setTimeout(function () {
        toast.className = "toast";
    }, 3000);

}

// Save profile
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

            } else {

                showToast(data.message, "error");

            }

        },

        error: function () {

            showToast("Server Error!", "error");

        }

    });

}

// Logout
function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login.html";

}
