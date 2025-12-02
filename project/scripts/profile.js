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

            window.location.href = "mockbook.html"
        })
    }
}
createUser()