const password = document.getElementById("password")
const confpass = document.getElementById("confpass")
const div = document.getElementById("validate")
let validation = document.createElement("p")
validation.classList.add("red")
validation.textContent = "*Passwords do not match"

function validate () {
    if(password.value !== confpass.value){
        password.style.border = "";
        confpass.style.border = "";
        password.style.border = "red solid 2px";
        confpass.style.border = "red solid 2px";
        console.log(password.value, confpass.value)
       div.appendChild(validation)
    }
    else if(password.value === confpass.value){
        password.style.border = "";
        confpass.style.border = "";
        password.style.border = "cornflowerblue solid 2px;";
        confpass.style.border = "cornflowerblue solid 2px;";
        div.removeChild(validation)
        console.log("hi")
    }
}

password.addEventListener("click", validate)
confpass.addEventListener("click", validate)