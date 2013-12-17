define([], function () {

        function MoX() {
                var that = this;


                function isArray(o) {
                        return o.splice;
                }

                function isString(o) {
                        return o.substring;
                }

                function isAbsolutePath(path) {
                        if (!isAbsolutePath.regexp) {
                                isAbsolutePath.regexp = new RegExp("^(?:/|.*://)");
                        }

                        return isAbsolutePath.regexp.test(path);
                }

                function getFilename(path, ignoreFileEnding) {
                        if (!getFilename.regexp) {
                                getFilename.regexp = new RegExp("^[/\\\\]?(?:.+[/\\\\]+?)?(.+?)[/\\\\]?$");
                        }

                        var filename = path.match(getFilename.regexp)[1];
                        if (ignoreFileEnding == true) {
                                var i = filename.lastIndexOf(".");
                                filename = filename.substring(0, ~i ? i : filename.length);
                        }
                        return filename;
                }

                function $Promise() {
                        var stack  = [];
                        var lastfn = undefined;
                        var args   = undefined;

                        var that = {
                                isPromise : true,

                                lock      : 0,

                                done : function(fn) {
                                        if ( args != undefined ) {
                                                call(fn);
                                        } else {
                                                stack.push(fn);
                                        }

                                        return that;
                                },

                                last : function(fn) {
                                        if ( lastfn != undefined ) {
                                                throw "There can only be one last!";
                                        } else if ( args != undefined ) {
                                                call(fn);
                                        } else {
                                                lastfn = fn;
                                        }
                                },

                                resolve : function() {
                                        if ( stack != null ) {
                                                args = arguments;

                                                if ( lastfn ) {
                                                        stack.push(lastfn);
                                                }

                                                for ( var i = 0; i < stack.length; i++ ) {
                                                        call(stack[i]);
                                                }
                                        }

                                        lastfn = null;
                                        stack        = null;
                                        that.isResolved = true;
                                },

                                isResolved : false
                        };

                        function call(fn) {
                                fn.apply(that, args);
                        }

                        return that;
                }

                function endsWith(str, s) {
                        return str.indexOf(s, str.length - s.length) !== -1;
                }

                function startsWith(str, s) {
                        return str.lastIndexOf(s, 0) === 0;
                }

                function isValid(o) {
                        return !(o == undefined || o == null);
                }

                var hasOwnProperty = Object.prototype.hasOwnProperty;  // If somebody adds a property hasOwnProperty to our object we call the prototype one instead

                function $O(o) {
                        return {
                                o: o
                        };
                }


                function exceptionHeader(library) {
                        var lineArray = xChars(30, '=').split("");
                        lineArray.splice(parseInt(lineArray.length - 1) / 2 + 1, 0, " " + library + " Exception! "); // Push in the word ERROR in the middle
                        var line = lineArray.join("");
                        return line;
                }

                function str() {
                        return Array.prototype.join.call(arguments, "");
                }

                function xChars(i, iChar) {
                        var chars = "";
                        for (; i--;)  chars += iChar;
                        return chars;
                }

                function merge(a, b) {
                        if ( a ) {
                                for ( var property in b ) {
                                        if ( !hasOwnProperty.call(a, property) ) {
                                                a[property] = b[property];
                                        }
                                }
                        } else {
                                return merge({}, b);
                        }

                        return a;
                }


        }

        return new MoX();
});