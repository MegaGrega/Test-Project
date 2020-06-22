function test(){
    var searchTerm = "Test"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=RgZYzTA6d5NKePvS2d7q2ZbmQtzKixL0"
    console.log(queryURL)
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      })

}

test()