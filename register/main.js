// declaring variables
userName = document.querySelector("#userName");
emial = document.querySelector("#email");
Password = document.querySelector("#Password");
confirmPassword = document.querySelector("#Confirm");

// array to store all users
allUsers = [];

// Registering the user
function Register(){
    var obj = {
        User_name: userName.value,
        User_email: emial.value,
        User_Password: Password.value,
        User_Confirm: confirmPassword.value
    }

    if(userName.value === "" && emial.value === "" && Password.value === "" && confirmPassword.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill in all fields",
        });
        }
    
    else if(userName.value === "" || userName.value == null){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Name is required",
        });
        }
        
    else if(emial.value === "" || emial.value == null){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email is required",
        });
    }
        
    else if(Password.value === "" || Password.value == null){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password is required",
        });
    }
        
    else if(Password.value != confirmPassword.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password does not match",
        });
    }

    else if(Password.value.length < 8){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password must be atleast 8 characters",
        });
    }

        else {
            allUsers.push(obj);
            localStorage.setItem("Users", JSON.stringify(allUsers));
            clearUsers();
            location.href = "../login/login.html";
        }
} 

 // Clearing the fields after successful registration 15 seconds after page loads
function clearUsers(){
    userName.value = "";
    emial.value = ""; 
    Password.value = "";
    confirmPassword.value = "";
}

// Registering the user when the enter key is pressed
document.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        Register();
    }
})
