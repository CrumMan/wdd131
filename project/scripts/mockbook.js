const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLink = document.querySelectorAll('.nav-link')


hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navLink.forEach(n => n.addEventListener("click", ()=> {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
   
}))
    

document.addEventListener("DOMContentLoaded", loadAndCreate)

function loadAndCreate(){
        const posts = document.querySelectorAll(".post")
        
        posts.forEach((post,index) => {
            const form = post.querySelector("form.comment")
            const textarea = form.querySelector("textarea")
            const commentList = post.querySelector(".comment-list")
            let savedComments

            if (localStorage.getItem("post_" + index)){
                 savedComments = JSON.parse(localStorage.getItem("post_" + index))
            } else {savedComments = []}
            savedComments.forEach(c => addCommentToList(c,commentList))
        
            form.addEventListener("submit", (event) => { 
                event.preventDefault()
                const user = localStorage.getItem("user")
                if(user){
                    const textContent = textarea.value.trim()
                    if(!textContent) return
                    const text = user + ": " + textContent
                    addCommentToList(text, commentList)
                    savedComments.push(text)
                    localStorage.setItem("post_"+index, JSON.stringify(savedComments))

                    textarea.value = ""
                }
                else{
                    textarea.value = ""
                }
            })
        })
}

function addCommentToList(text, elementList){
    const p= document.createElement("p")
    p.textContent = text
    p.classList.add("user-comment")
    elementList.appendChild(p)
}

function createUser(){
const user = localStorage.getItem("user")
if (user){
document.querySelector('.post_user').innerHTML=`<h2>Welcome ${user}!</h2>`
}
else {
       document.querySelector('.post_user').innerHTML = "<a href= \"profile.html\">Please click here to login and comment </a>"
    }
}
createUser()

function makeAvertizements(){
    const avertizements = ["./images/avertizement1.webp","./images/avertizement2.webp", "./images/avertizement3.webp", "./images/avertizement4.webp", "./images/avertizement5.webp"]
    const avertizementDoc = document.querySelector('.action-left')
    avertizements.forEach(avertizement => {
        avertizementDoc.innerHTML += `<figure class="avertizementGap"> <img src= "${avertizement}" loading="lazy"> </figure>`
    })
}
makeAvertizements()

function createRightAction(){
const friends = ["John Murphy", "Larry the Cable Guy", "Old Saint Nick", "Richard Hughes", "Denzel Washington"]
const suggestedFriends = ["Fabio Lounges", "Jason Vorhees", "Vicky Beans", "Pablo Escobar", "Careem Jeffries", "Lana Del Ray"]

const friendDoc = document.querySelector(".friends")
const suggestedFriendsDoc = document.querySelector(".suggested_friends")

makeFriendList(friends,friendDoc)
makeFriendList(suggestedFriends, suggestedFriendsDoc)

friendDoc

}
function makeFriendList(friendArray, content){
    friendArray.forEach(friend => {
        content.innerHTML += `<ul>${friend}</ul>`;
    })
}
createRightAction()
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