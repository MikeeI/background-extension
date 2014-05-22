$(function(){
  $("button#ping").click(function(event) {
    var bgPage = chrome.extension.getBackgroundPage();
    console.log("sending message to background.");
    chrome.runtime.sendMessage({greeting: "hello"}, function(response){
      console.log("background confirmed receiving.")
    });
    console.log("Message sent to background.");
  }
  );
});
