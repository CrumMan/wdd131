function LoginOrLogout(){
    const user = localStorage.getItem("user")
    const text = document.getElementById("loginLogoutToggle")

    if(user){
        text.innerHTML= `<a id="LogoutToggle" href=./profile.html>Logout</a>`

    }
    else {
        text.innerHTML = `<a id="LoginToggle" href=./profile.html>Login</a>`
    }

    const logout = document.querySelector("#LogoutToggle")
    if (logout){

        logout.addEventListener("click", () => {
        localStorage.removeItem("user")
        location.reload()
        })
    }
}
LoginOrLogout()