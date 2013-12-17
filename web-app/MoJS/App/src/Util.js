define([], function() {

        function Util () {
                var that = this;

                that.Misc = {
                        upperCaseFirstLetter : function(name) {
                                return name.substring(0, 1).toUpperCase() + name.substring(1);
                        }
                };

                that.Less = {
                        reless : function () {
                                less.sheets = [];
                                jQuery('link[type="text/less"]').each(function(i, e){
                                        less.sheets.push (e)
                                });

                                less.refresh()
                        },
                        lessthis : function (array) {
                                less.sheets = [];
                                var body = jQuery('body');

                                jQuery(array).each(function(i, href){
                                        var link = jQuery('<link type="text/less" rel="stylesheet" href="'+href+'"></link>');

                                        less.sheets.push ( link.get(0) );
                                });

                                less.refresh();
                        }
                }
        }

        return new Util();
});