function createUser(){
const user = localStorage.getItem("user")
if (user){
document.querySelector('.post_user').innerHTML=`<h2>Welcome ${user}!</h2>`
}
else {
        const post_user_form = document.querySelector('.post_user')
        const form = post_user_form.querySelector('form.createUser')
        
        form.addEventListener("submit", (event) =>{
            event.preventDefault();
            
            const username = post_user_form.querySelector('#user').value.trim()
            if(!username) return
            localStorage.setItem("user", username)
            post_user_form.innerHTML = `<h2>Welcome ${username}!</h2>`
        })
    }
}
createUser()

function LoginOrLogout(){
    const user = localStorage.getItem("user")
    const text = document.getElementById("loginLogoutToggle")

    if(user){
        text.innerHTML= `<a id="LogoutToggle" href=./profile.html>Logout</a>`
        document.querySelector(".")

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