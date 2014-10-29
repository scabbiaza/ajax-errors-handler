# $.ajaxError() Tests (jQuery)

Repo contains ajaxError handler (in `app.js` file) that is actually about 10 rows.<br/>
The other code is used for errors's emulation and for testing (using simple flask application for server side).

In current tests errors are pushed in console, but in real application the best place could be the alert.
Such errors are rare and use alert to inform the user about the error is ok in this case.

## How tests looks like:
<img src="http://puu.sh/cv7CT.png"/>


## TODO
At this moment only one test doesn't work – test on Parser Error.
I created an issue about this in jQuery repo: 
https://github.com/jquery/jquery/issues/1819
