throw {
        name:        "System Error",
        level:       "Show Stopper",
        message:     "Error detected. Please contact the system administrator.",
        htmlMessage: "Error detected. Please contact the <a href=\"mailto:sysadmin@acme-widgets.com\">system administrator</a>."
}


define([],
        function () {
                $.ajax({
                        url: "http://www.example.com/api/configuration.json",
                        dataType: "jsonp",
                        jsonpCallback: "config", /* Unique function name */
                        success: function(data){
                                /* Do something with data */
                                console.log(data)
                        }
                });
        }
);


window.addEventListener("hashchange", function () {
        console.log(2, window.location.hash);
} , false);


if ("onhashchange" in window) {
        window.onhashchange = function () {
                console.log(2, window.location.hash);
        }
        // Or $(window).bind( 'hashchange',function(e) {
        //       alert(window.location.hash);
        //   });
}

console.log( "onhashchange" in window )
console.log( window["onhashchange"] !== undefined )
console.log( null !== undefined )


var prevHash = window.location.hash;
window.setInterval(function () {
        if (window.location.hash != prevHash) {
                storedHash = window.location.hash;
                console.log(1, window.location.hash);
        }
}, 100);

window.location.hash

object.attachEvent("onhashchange", handler)
bject.addEventListener("hashchange", handler, useCapture)
http://msdn.microsoft.com/en-us/library/ie/cc288209(v=vs.85).aspx


if (x.hasOwnProperty('y')) {
        // ......
}

// BEST WAY
if ('y' in x) {
        // ......
}



function hasOwnProperty(obj, prop) {
        var proto = obj.__proto__ || obj.constructor.prototype;
        return (prop in obj) &&
                (!(prop in proto) || proto[prop] !== obj[prop]);
}



var regex = /(\S*)=(['"])(.+?)\2/mg;
function getAttrsFromString(attrsString, model) {
        var attr = {};

        if (attrsString && attrsString.length > 0) {
                var match = null;
                while ( (match = regex.exec( attrsString )) != null  ) {
                        var nodeName  = match[1];
                        var nodeValue = match[3];

                        // See if there is a dollar expression
                        if ( dollarMaybeStep1(nodeValue, 0) ) {
                                var returns = dollarMaybeStep2(nodeValue, 0, model);
                                if ( returns ) {
                                        nodeValue = returns.dollar.evaluate();
                                }
                        }

                        attr[nodeName] = nodeValue;
                }

        }

        return attr;
}




function require(o, callback) {
        base(require, o, callback);
}

function define(o, callback) {
        base(define, o, callback);
}

function base(method, o, callback) {
        var keys   = [];
        var values = [];
        for (var key in o) {
                keys  .push (key);
                values.push (o[key]);
        }

        var R = {};
        method(values, function() {
                var i = 0;
                while ( i < arguments.length ) {
                        R[ keys[i] ] = arguments[i];
                        i++;
                }

                callback(R);
        });
}






function getParams(path) {
        var options = quertyToObject( path.slice("?")[1] );
}

function quertyToObject(str) {
        var query = {};
        if ( str ) {
                var vars = str.split("&");
                for (var i = 0; i < vars.length; i++) {
                        var pair = vars[i].split("=");
                        pair[0] = decodeURIComponent(pair[0]);
                        pair[1] = decodeURIComponent(pair[1]);

                        if (typeof query[pair[0]] === "undefined") {
                                query[pair[0]] = pair[1];
                        } else if (typeof query[pair[0]] === "string") {
                                query[pair[0]] = [ query[pair[0]], pair[1] ];
                        } else {
                                query[pair[0]].push(pair[1]);
                        }
                }
        }

        return query;
}






/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 *
 */
// @win window reference
// @fn function reference
function onready(win, fn) {

        var done = false, top = true,

                doc = win.document, root = doc.documentElement,

                add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
                rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
                pre = doc.addEventListener ? '' : 'on',

                init = function(e) {
                        if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
                        (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
                        if (!done && (done = true)) fn.call(win, e.type || e);
                },

                poll = function() {
                        try { root.doScroll('left'); } catch(e) { setTimeout(poll, 50); return; }
                        init('poll');
                };

        if (doc.readyState == 'complete') fn.call(win, 'lazy');
        else {
                if (doc.createEventObject && root.doScroll) {
                        try { top = !win.frameElement; } catch(e) { }
                        if (top) poll();
                }
                doc[add](pre + 'DOMContentLoaded', init, false);
                doc[add](pre + 'readystatechange', init, false);
                win[add](pre + 'load', init, false);
        }

}



function writeOld(template) {
    document.open("text/html", "replace");
    document.write(template);
    document.close();
}

function write(template) {
    var node       = document.createElement("html");
    node.innerHTML = template;

    var title = node.getElementsByTagName("title")[0];
    var body  = node.getElementsByTagName("body") [0];

    if ( title ) {
        var head = jQuery("head");
        head.find("title").remove();
        head.append(title);
    }

    if ( body ) {
        jQuery("body").html(body.innerHTML);
    }
}




function injectServices(klass, promiseParent) {
        function injectedDone() {
                klass._inject_._injected_ = true;
        }

        if ( klass._inject_ && klass._inject_._injected_ != true ) {

                // Construct service paths
                var services      = klass._inject_;
                var thisServices  = [];
                var dependencies  = [];

                for ( var i = 0; i < services.length ; i++ ) {
                        var plugin;
                        var service = services[i];
                        var array   = pluginExtract( service );

                        if ( array ) {
                                plugin  = array[0];
                                service = array[1];
                        }
                        thisServices.push ([ plugin, service, services[i] ]);

                        var Service = upperCaseFirstLetter ( service );
                        var path    = getClasspath(optionsGlobal.path.app.services, Service);
                        dependencies.push ({
                                path   : path,
                                plugin : plugin
                        });
                }

                requireDynamic(dependencies, function () {
                        promiseLock(promiseParent);

                        for ( var i = 0; i < arguments.length ; i++ ) {
                                promiseLock(promiseParent);

                                var promiseChild = getOrCreateService( arguments[i] , services[i] );

                                var thisService = thisServices[i];
                                var p = klass.prototype;
                                p[ thisService[2] ] = promiseChild.instance;  // Full string to service

                                // If plugin is defined
                                if ( thisService[0] ) {
                                        p = p[ thisService[0] ] = {};
                                }
                                p[ thisService[1] ] = promiseChild.instance;

                                promiseChild.done(function() {
                                        promiseUnlockResolveTry (promiseParent);
                                });
                        }

                        promiseUnlockResolveTry(promiseParent);

                        promiseParent.done(injectedDone);

                }, { args: true });

        }
        else {
                promiseResolveTry(promiseParent);
        }
}













markupbuilder.div(
        markupbuilder.p('Hi! I am a paragraph!',
                markupbuilder.span('I am a span inside a paragraph')
        )
)

        with(markupbuilder){
                div(
                        p('Hi! I am a paragraph!',
                                span('I am a span inside a paragraph')
                        )
                )
        }






// Seems unnessary, not sure what a good usecase would be
that.style = function(out, attr, body) {
        attr.type || (attr.type = "text/css");
        attr.rel  || (attr.rel = "stylesheet");

        var file = attr.file;
        file && delete attr.file;

        var model = attr.model || {};
        attr.model && delete attr.model;

        var head = document.getElementsByTagName("head")[0];
        if ( head ) {
                var style = document.createElement("style");
                for ( var k in attr ){
                        style.setAttribute(k, attr[k]);
                }

                function fn(template) {
                        try {
                                style.innerHTML = template;
                        }
                        catch(error){
                                style.styleSheet.cssText = template;
                        }

                        head.appendChild(style);
                }
                if ( file ) {
                        this.render("../" + file, model).done(fn);
                }
                else {
                        body().done(fn);
                }
        }
};




function rotateColor(col, nbr) {
        var usePound = false;
        if ( col[0] == "#" ) {
                col = col.slice(1);
                usePound = true;
        }

        var max = parseInt("ffffff", 16);
        var num = parseInt(col, 16);
        var mod = (num+nbr)%max;

        var str = pad(mod.toString(16), 6);
        function pad(str, to) {
                if ( str.length < to ) {
                        return pad(str + "0", to);
                }
                return str;
        }

        return (usePound?"#":"") + str;
}




















