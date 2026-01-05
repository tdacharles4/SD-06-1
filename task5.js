// Constructor
function friendsList(newFriend){
    this.newFriend = newFriend
}

const friendLimit = process.argv[2]
const friendArray = []

for (i=0;i<friendLimit;i++) {
    Friendly = new friendsList(process.argv[i+3]),
    friendArray.push(Friendly.newFriend)
}

console.log(friendArray)