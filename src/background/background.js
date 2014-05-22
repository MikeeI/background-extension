var settings = new Store("settings", {
    "sample_setting": "This is how you use Store.js to remember values"
});


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("background received a message");
    // chrome.pageAction.show(sender.tab.id);
    sendResponse();
    console.log("background sent a response");
  }
);
