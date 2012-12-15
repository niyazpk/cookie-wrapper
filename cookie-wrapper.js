/* Cookie wrapper */


// $.cookie("test", 1, {
//    expires : 10,           //expires in 10 days

//    path    : '/',          //The value of the path attribute of the cookie
//                            //(default: path of page that created the cookie).

//    domain  : 'jquery.com',  //The value of the domain attribute of the cookie
//                            //(default: domain of page that created the cookie).

//    secure  : true          //If set to true the secure attribute of the cookie
//                            //will be set and the cookie transmission will
//                            //require a secure protocol (defaults to false).
// });


// more details about jquery cookie https://github.com/carhartl/jquery-cookie

Cookie = (function(){

    function set(name, value, seconds) {

        if(typeof value === 'object'){
            value = JSON.stringify(value);
        }

        var date = new Date();
        var expires = '; expires=';

        if(typeof seconds !== 'undefined'){
            date.setTime(date.getTime() + (seconds * 1000));
            expires += date.toGMTString();
        } else {
            expires = '';
        }
        document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
    }

    function get(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') { c = c.substring(1, c.length); }
            try {
                if (c.indexOf(nameEQ) === 0) {
                    var v = decodeURIComponent(c.substring(nameEQ.length, c.length));
                    return JSON.parse(v);
                }
            } catch (e) {
                return v;
            }
        }
        return null;
    }

    function clear(name) {
        set(name, '', -1);
    }

    // Note: hset will create the hash if it is not already present
    function hset(name, key, value) {
        var obj = get(name);
        obj = obj || {};
        obj[key] = value;
        set(name, obj, 30);
    }

    function hget(name, key) {
        var obj = get(name);
        return (obj && obj[key]) || null;
    }

    function hclear(name, key) {
        var obj = get(name);
        delete obj[key];
        set(name, obj, 30);
    }

    return {
        get: get,
        set: set,
        clear: clear,
        hget: hget,
        hset: hset,
        hclear: hclear
    };

})();