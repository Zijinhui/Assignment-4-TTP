const username = document.getElementById("input-username")
const email = document.getElementById("input-email")
const password = document.getElementById("input-password")
const submitBtn = document.getElementById("submit-btn")
const notifyEl = document.getElementById("notification")
let user_arr = []
let email_arr = []
let password_arr = [] 
//localStorage.clear()

submitBtn.addEventListener("click", function() {
   
    /*localStorage.setItem("user", JSON.stringify({
        Username: username,
        Email: email,
        Password: password,
    }))*/
    user_arr.push(username.value)
    email_arr.push(email.value)
    password_arr.push(password.value)
 
    if (password.value != "12345678") {
        alert("Password is incorrect!")
    }else{
        notifyEl.textContent = "Correct Infom!"

        username.value = ""
        email.value = ""
        password.value = ""
    
        localStorage.setItem("user_arr", JSON.stringify(user_arr))
        localStorage.setItem("email_arr", JSON.stringify(email_arr))
        localStorage.setItem("password_arr", JSON.stringify(password_arr)) 
        
    }


 
})
