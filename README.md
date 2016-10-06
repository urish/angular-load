angular-load
============

Dynamically load scripts and css stylesheets in your Angular.JS app.

Copyright (C) 2014, 2015, Uri Shaked <uri@urish.org>

[![Build Status](https://travis-ci.org/urish/angular-load.png?branch=master)](https://travis-ci.org/urish/angular-load)
[![Coverage Status](https://coveralls.io/repos/urish/angular-load/badge.png)](https://coveralls.io/r/urish/angular-load)

Installation
------------

You can choose your preferred method of installation:
* Through bower: `bower install angular-load --save`
* Through npm: `npm install angular-load --save`
* Download from github: [angular-load.min.js](https://raw.github.com/urish/angular-load/master/angular-load.min.js)

Usage
-----
Include angular-load.js in your application.

```html
<script src="bower_components/angular-load/angular-load.js"></script>
```

Add the module `angularLoad` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['angularLoad']);
```

### angularLoad service directive
The angularLoad service provides three methods: `loadScript()`, `loadCSS()` and `unloadCss()`. 

Call the `loadScript()` and `loadCSS()` methods to load a script
or a CSS stylesheet asynchronously into the current page. Both methods return a promise that will be resolved
once the resource (script or stylesheet) has been loaded. In case of an error (e.g. HTTP 404) the promise will be
rejected.

Call the `unloadCss()` method to unload a CSS stylesheet from the current page. This method return boolean value, specifying whether the given stylesheet URL could be located in the page and has been unloaded. In case of trying to remove non-existent resource the function will return false

Usage example:

```js
angularLoad.loadScript('https://mysite.com/someplugin.js').then(function() {
	// Script loaded succesfully.
	// We can now start using the functions from someplugin.js
}).catch(function() {
    // There was some error loading the script. Meh
});
```

License
----

Released under the terms of MIT License:

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
