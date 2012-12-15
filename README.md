cookie-wrapper.js
=================

A simple and powerful JavaScript lib for cookie management. And oh, it is tiny - 481 bytes gzipped.

Install:
--------

Include the minified script in your html with the proper path:

`<script src='path/to/cookie-wrapper.min.js'></script>`


API (Usage):
------------

`Cookie.set(name, value)` - set value of the cookie: `name`. (`value` can be a JSON object. No need to call JSON.stringify)

`Cookie.get(name)` - get value of the cookie: `name`. (No need to call JSON.parse if you expect `value` to be a JSON object)

`Cookie.clear(name)` - delete the cookie: `name`

**JSON operaions:**

`Cookie.hset(name, key, value)` - set value of the `key` in the cookie: `name` (cookie will be created if not already present)

`Cookie.hget(name, key)` - get value of the `key` in the cookie: `name`

`Cookie.hclear(name, key)` - delete the key` in cookie: `name`

**Setting TTL (Expires):**

TTL (or Expires) denotes the time after which the cookie will be deleted automatically. In the `Cookie.set` method you can pass the TTL of the cookie:

`Cookie.set(name, value, seconds)` - set the cookie to expire after the given number of seconds.



