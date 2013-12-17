define([require.all.Util], function(Util) {

        function App() {
                var that  = this;

                that.Util = Util;

                that.selector = selector;
                function selector(request) {
                        return ".body[controller='"+request.controller+"'][action='"+request.action+"'][plugin='"+request.plugin+"']"
                }

                that.show = show;
                function show(request, template) {
                        var body = jQuery(selector(request));

                        if ( !body.length ) {
                                body = jQuery(template).hide();
                                jQuery("body").append(body);
                        }

                        if ( show.last && show.last != body ) {
                                show.last.hide();
                        }
                        show.last = body.show();
                }
        }

        return new App();
});