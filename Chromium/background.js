// event to run execute.js content when extension's button is clicked
chrome.action.onClicked.addListener(execScript);

async function execScript(tab) {
  if(tab.url.indexOf("://www.stackfield.com/") < 0) return false;
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['toggle.js']
  });
}
