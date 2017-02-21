
var getPoliticians = function(politicalObj) {
	var politicianString = ''
	politicianString +=  '<div class="politician">' + '<h1 class="fullName">' + politicalObj.first_name + ' ' + politicalObj.last_name + '</h1>'
	politicianString += '<h2 id="chamber">' + politicalObj.title + '</h2>' + '<h2 class="party">' + politicalObj.party + '</h2>' + '<h2 id="state">' + politicalObj.state_name + '</h2>'
	politicianString += '<ul class="social">' + '<li id="email">' + 'email: ' + politicalObj.oc_email + '</li>'
	politicianString += '<li id="website">' + 'website: ' + politicalObj.website + '</li>'
	politicianString += '<li id="facebook">' + 'facebook: ' + politicalObj.facebook_id + '</li>'
	politicianString += '<li id="twitter">' + 'twitter: ' + politicalObj.twitter_id + '</li>' + '</ul>'
	politicianString += '<h5 class="termEnd">' + 'term ends: ' + politicalObj.term_end + '</h5>' + '</div>'
	return politicianString
}

 	var handleResponse = function(apiResponse){
 	var stringHTML = ''
 	getPoliticians(apiResponse.results[0]) //handle response should build a HTML string and write to the DOM
 	var politicianNode = document.querySelector('.politicianList')
 	for(var index = 0; index < apiResponse.results.length; index = index + 1) {
 		stringHTML = stringHTML + getPoliticians(apiResponse.results[index])
 		// console.log(stringHTML)
 	}
 	politicianNode.innerHTML = stringHTML

 	var partys = document.querySelectorAll(".party")
 	for (var index = 0; index < partys.length; index = index + 1) {
 		var party = partys[index]
 		if (party.textContent === "R") {
 			party.style.color = "red"
 		} else {
 			party.style.color = "blue"
 		}
 	}
}

var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?per_page=all')

promise.then(handleResponse)


