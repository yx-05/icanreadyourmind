var ip = '';

$.get("https://ipinfo.io", function(response) {
            ip = response.ip;
        }, "json")

var XMLHttp = new XMLHttpRequest();

XMLHttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText);
		document.querySelector('.country').innerHTML = json.country;
		document.querySelector('.region').innerHTML = json.region;
		document.querySelector('.city').innerHTML = "near "+json.city;
	}
};
XMLHttp.open("GET", "http://ipwhois.app/json/" + ip, true);
XMLHttp.send();