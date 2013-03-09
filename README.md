Fresh.js Alpha
========

A JavaScript REST API.

Features
========

* GET
* POST

Usage
========

There are a number of ways you can use Fresh. I've made public all of Fresh's methods for your convience (at least I hope).

Basic:

<pre>
Fresh.get(url,callback)
Fresh.post(url,data,callback)
</pre>

Specific:

<pre>
Fresh.get("http://www.google.com/",function(data){
	console.log(data)
});

Fresh.post(
	"http://www.mysite.com/createNewUser.php",
	new Fresh.Data("fname=braun&lname=goodson"),
	(function(data){
		console.log(data)
	})
);
</pre>

If you want, Posting can aquire a bit more detail. I chose this route because I really like objects. You'll just define your object, and then inherit from the `Fresh.Data` object. This is really just so Fresh can write URLs based off a user define procedure.
<pre>
var User = function (fname,lname) {
	this.fname = fname
	this.lname = lname
	this.url = "fname="+this.fname+"&lname="+this.lname
}
User.prototype = new Fresh.Data()
Fresh.post(
	"http://www.mysite.com/createNewUser.php",
	new User("braun","goodson"),
	(function(data){
		console.log(data)
	})
);
</pre>
