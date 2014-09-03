js-timer
========

Simple JS countdown timer that counts down given period of time and plays alert sound when time's up.

Usage
-----
* Deploy somewhere accessible by webserver
* Give countdown time as 1st parameter, eg. http://example.com/timer/1min
* (Optional) Give countdown message as 2nd parameter, eg. http://example.com/timer/1min/dinner

Supported formats for time
--------------------------
It should support the following:
* sec(s)
 * 1sec
 * 60secs
* min(s)
 * 1min
 * 45mins
* day(s)
 * 1day
 * 10days

Built with
----
* Bootstrap 3
* jQuery
* php.js
* Ion.Sound
* grunt

For developers
--------------
Default grunt tasks:
* JS uglify
* CSS minifying

Custom JS goes to main.js and custom CSS to main.css. 

