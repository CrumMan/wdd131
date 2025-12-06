function createRightAction(){
const friends = ["John Murphy", "Larry the Cable Guy", "Old Saint Nick", "Richard Hughes", "Denzel Washington"]
const suggestedFriends = ["Fabio Lounges", "Jason Vorhees", "Vicky Beans", "Pablo Escobar", "Hakeem Jeffries", "Lana Del Ray"]

const friendDoc = document.querySelector(".friends")
const suggestedFriendsDoc = document.querySelector(".suggested_friends")

makeFriendList(friends,friendDoc)
makeFriendList(suggestedFriends, suggestedFriendsDoc)

friendDoc

}
function makeFriendList(friendArray, content){
    friendArray.map(friend => {
        const filename = friend.trim().toLowerCase().replace(/ /g, "")
        return `<li class="friendEl">${friend}<br><img loading="lazy" src="./images/${filename}.webp"></li>`;
    })
}
createRightAction()