let user = localStorage.getItem("user");

if (user) {
    document.getElementById("welcomeUser").innerText = "Welcome, " + user;

    if (document.getElementById("dashboardName")) {
        document.getElementById("dashboardName").innerText =
            "Welcome, " + user + " 👋";
    }
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

function updateDashboard(data) {

    $("#summaryName").text(data.name || user);
    $("#summaryAge").text(data.age || "-");
    $("#summaryDob").text(data.dob || "-");
    $("#summaryContact").text(data.contact || "-");

    let completed = 0;

    if (data.age) completed++;
    if (data.dob) completed++;
    if (data.contact) completed++;

    let percent = Math.round((completed / 3) * 100);

    $("#progressBar").css("width", percent + "%");
    $("#progressText").text(percent + "% Completed");

    if (percent === 100) {

        $("#profileStatus")
            .removeClass("bg-warning")
            .addClass("bg-success")
            .text("Profile Completed");

        $("#summaryStatus")
            .removeClass("bg-warning")
            .addClass("bg-success")
            .text("Completed");

    } else {

        $("#profileStatus")
            .removeClass("bg-success")
            .addClass("bg-warning")
            .text("Profile Incomplete");

        $("#summaryStatus")
            .removeClass("bg-success")
            .addClass("bg-warning")
            .text("Incomplete");

    }

    $("#lastUpdated").text(new Date().toLocaleString());

}

function loadProfile() {
    console.log(data);

    $.ajax({

        url: "php/getProfile.php",

        type: "POST",

        data: {
            token: token
        },

        dataType: "json",

        success: function (data) {

            if (data.status === "success") {

                $("#age").val(data.age);
                $("#dob").val(data.dob);
                $("#contact").val(data.contact);

                updateDashboard(data);

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

        dataType: "json",

        success: function (data) {

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

