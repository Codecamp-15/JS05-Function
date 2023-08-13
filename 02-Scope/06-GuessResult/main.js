// * = (sender , 'sarah')= sender ='Matt'
// ** = sendTo(null) = Matt = null , 'sarah' = undefined

const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
} // From "CC"  to "Max"

sendTo("Max");
sendTo("Ben", "Jay");
