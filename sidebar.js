document.addEventListener("DOMContentLoaded", function(event) {
  document.title = chrome.i18n.getMessage("extensionName");
  iframe = document.createElement("iframe");
  iframe.src = chrome.i18n.getMessage("extensionPanelURL");
  document.body.appendChild(iframe);
  iframe.contentWindow.focus();
});
