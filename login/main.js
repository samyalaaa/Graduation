// declaring variables
emial = document.querySelector("#email");
Password = document.querySelector("#password");

// Array to store users
allUsers = JSON.parse(localStorage.getItem("Users")) || [];

// Login the user
function Login(){
    var obj = {
        User_email: emial.value,
        User_Password: Password.value,
    }
    for(var i = 0; i < allUsers.length; i++){
        if(obj.User_email == allUsers[i].User_email && obj.User_Password == allUsers[i].User_Password){
            clearUsers();
            location.href = "../shop/shop.html";
            localStorage.setItem("Active User",
                JSON.stringify({
                    User_email: allUsers[i].User_email,
                    User_Password: allUsers[i].User_Password
                })
            );
            break;
        }else if(obj.User_email === "" || obj.User_email == null){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email is required",
            });
            break;
        }else if(obj.User_Password === "" || obj.User_Password == null){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password is required",
            });
            break;
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Email or Password",
            });
            break;
        }
    }

}

// Clear the input fields
function clearUsers(){
    emial.value = ""; 
    Password.value = "";
}

// forgot password
function forgot(){
    window.location.href = "../forget pass/forget.html";
}