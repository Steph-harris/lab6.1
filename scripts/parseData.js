$(document).ready(function() {
  for (var i = 0; i < window.tweets.length; i++) {
    var newSite = buildContent(window.tweets[i]);
    $(".row-fluid").append(newSite);
  }

  function buildContent(tweetInfo) {
    var newDiv = $("<div>").addClass("col-md-6");
    // need new div with usrimg, h2 with user id and location, usr url, text retweet count
  }
})