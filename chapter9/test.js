// First we write a event handler. This is the handler that will be called 
// when the time event has occured.
function timerHandler() {
  alert("Hey what are you doing just sitting there staring at a blank screen?");
}
// here we are calling setTimeout, which takes two arguments: event handler 
// and time duration (in milliseconds) 
//setTimeout(timerHandler, 5000);
// this sets a interval off 500 times for every 5 seconds
setInterval(timerHandler, 500).setTimeout(timerHandler, 5000);;
