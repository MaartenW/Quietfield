// this code will be executed when the extension's button is clicked
(function() {
  if(document.body.classList.contains("quietfield")) {
    document.body.classList.remove("quietfield");
    document.body.classList.add("loudfield");
  } else if(document.body.classList.contains("loudfield")) {
    document.body.classList.add("quietfield");
    document.body.classList.remove("loudfield");
  } else {
    document.location.reload(true);
  }
})();