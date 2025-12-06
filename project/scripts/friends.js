function createRightAction(){
const friends = ["John Murphy", "Larry the Cable Guy", "Old Saint Nick", "Richard Hughes", "Denzel Washington"]
const suggestedFriends = ["Fabio Lounges", "Jason Vorhees", "Vicky Beans", "Pablo Escobar", "Hakeem Jeffries", "Lana Del Ray"]

const friendDoc = document.querySelector(".friends")
const suggestedFriendsDoc = document.querySelector(".suggested_friends ul")

makeFriendList(friends,friendDoc)
makeFriendList(suggestedFriends, suggestedFriendsDoc)

}
function makeFriendList(friendArray, content){
    const html = friendArray.map(friend => {
        const filename = friend.trim().toLowerCase().replace(/ /g, "")
        return `<li class="friendEl">${friend}<br><img class="friendElImg loading="lazy" alt="${friend}" src="./images/${filename}.webp" width="125" maxHeight="175"></li>`;
    }).join('')
    content.innerHTML = html
}
createRightAction()