chrome.extension.sendRequest({greeting: "setting"}, function(response) {
	if(response.titleReturned == "YES") {
			chrome.extension.sendRequest({greeting: "title"}, function(response) {
	  			if(response.titleReturned == "Session Error") {
					chrome.extension.sendRequest({greeting: "fix"}, function(response) {
						if(response.titleReturned == "fixed") {
							//alert("fixed it.");
						}
					});
				}
			});
		}
});


