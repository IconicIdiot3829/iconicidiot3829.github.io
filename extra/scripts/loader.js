chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({
    url: chrome.extension.getURL('https://julianld3829.github.io'),
    selected: true,
  })
})