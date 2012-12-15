cookie-wrapper.js
=================

A simple and powerful JavaScript lib for cookie management.

Install:
--------

Include the minified script in your html with the proper path:

`<script src='path/to/cookie-wrapper.min.js'></script>`


API (Usage):
------------

`Cookie.set(name, value)` - set value of the cookie: `name`

`Cookie.get(name)` - get value of the cookie: `name`

`Cookie.clear(name)` - delete the cookie: `name`

JSON operaions:

`Cookie.hset(name, key, value)` - set value of the `key` in the cookie: `name` (cookie will be created if not already present)

`Cookie.hget(name, key)` - get value of the `key` in the cookie: `name`

`Cookie.hclear(name, key)` - delete the key` in cookie: `name`


