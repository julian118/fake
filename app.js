let e = {
    username : document.getElementById("user"),
    password : document.getElementById("pass"),
    button : document.getElementById("login")
}
e.password.value = ""
e.username.value = ""

e.password.addEventListener("input", function() {
    console.log("test")
    if (e.password.value != "" && e.username.value != "") {
        e.button.style.background = "#0095f6"
        e.button.addEventListener("click", function() {
            window.location = "https://www.instagram.com/doagez/"
        })
    }
})
alert("this is a fake login screen dont fill in your actual information")