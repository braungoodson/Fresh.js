/*
*	Fresh.js - A JavaScript library for RESTful APIs.
*	Author: Braun Goodson <braungoodson@gmail.com>
*/
(function(){
	// Global
	var Fresh = this.Fresh = {
		// We'll inherit from the proper object.
		prototype : (function(){
			return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
		}).call()
	}
	// We'll use this to define our state change handler.
	var Callback = this.Fresh.Callback = function (callback) {
		return function () {
			if (this.readyState != 4) return
			else return callback(this.responseText)
		}
	}
	// We'll declare/define a useful and inheritable `Fresh.Data` object for URLs.
	var Data = this.Fresh.Data = function (url) {
		this.url = url
	}
	// You'll want all your objects to inehrit this if you wanna use simple/custom url mapping.
	Data.prototype.toUrl = function () {
		return this.url
	}
	// We'll use this to submit all our requests.
	var Request = this.Fresh.Request = function (method,url,data,callback) {
		this.prototype.onreadystatechange = Fresh.Callback(callback)
		this.prototype.open(method,url,true)
		this.prototype.send(data ? data.toUrl() : null)
	}
	/*
	* Our `Fresh.get()` method.
	* 
	* e.g.,
	*
	*	Fresh.get("http://www.google.com/",function(data){
	*		console.log(data)
	*	});
	*/
	Fresh.get = function (url,callback) {
		Fresh.Request("get",url,null,callback)
	}
	/*
	* Our `Fresh.post()` method.
	* 
	* e.g.,
	*
	*	Fresh.post(
	*		"http://www.mysite.com/createNewUser.php",
	*		new User("braun","goodson"),
	*		(function(data){
	*			console.log(data)
	*		})
	*	);
	*/
	Fresh.post = function (url,data,callback) {
		Fresh.Request("post",url,data,callback)
	}
}).call()
