$(document).ready(function() {
  for (var i = 0; i < window.tweets.length; i++) {
    var newSite = buildContent(window.tweets[i]);
    $(".row").append(newSite);
  }

  function buildContent(tweetInfo) {   
    var newDiv = $("<div>").addClass("col-md-6");
    var newH1 = $("<h1>").append("Tweet ID:" + tweetInfo.id);
    var  retweets = $("<p>").append(tweetInfo.retweet_count + " is a lot of retweets!");
    var indices = $("<p>").append("Who knows what this is indexing: " + tweetInfo.entities.urls[0].indices[0] + "," +tweetInfo.entities.urls[0].indices[1] +"?");
    // need new div with usrimg, h2 with user id and location, usr url, text retweet count
    newDiv.append(retweets);
    newDiv.append(newH1);
    newDiv.append(indices);

    return newDiv;
  }
});