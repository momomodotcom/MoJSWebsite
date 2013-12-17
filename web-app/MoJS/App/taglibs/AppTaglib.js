(function () {
        window.define ? define([], callback) : window.AppTaglib = callback();

        function callback() {
                return AppTaglib;
        }

        function AppTaglib() {
                var that = this;

                that.clearfloat = function(M, out) {
                        out("<div class='clearfloat'><!--clearfloat--></div>");
                };
        }

})();