// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
}
  
const newMail = new Mail(process.argv[2],process.argv[3])
  
  // Type your code above this line!
function printMail(newMail) {
  console.log(newMail.subject + ": " + newMail.message)
}

printMail(newMail);