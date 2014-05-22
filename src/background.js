popup = chrome.extension.getViews({"type": 'tab'});
popup.show("message from background");

