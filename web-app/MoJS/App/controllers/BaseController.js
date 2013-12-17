define([], function(M) {

        function BaseController() {
                console.log("BaseController", arguments)

                var that = this;
                that.filters = {
                        before: [

                                {
                                        exclude : [
                                        ],
                                        include : [
                                        ],
                                        filter  : function(args, params) {
                                                console.log("a) Before filter 1 should be invoked every time! ", "this:", this, "args:", args, "arguments:", arguments)
                                                return ["1", "3"];
                                        }
                                },

                                {
                                        exclude : [
                                                '*'
                                        ],
                                        include : [
                                                {
                                                        controller: 'test',
                                                        action    : 'one'
                                                }
                                        ],
                                        filter  : function(args, params) {
                                                console.log("b) Before filter 2 should only be invoked from test/one! ", "this:", this, "args:", args, "arguments:", arguments)
                                        }
                                }
                        ],

                        beforeView : [
                                {
                                        exclude : [
                                        ],
                                        include : [
                                        ],
                                        filter  : function(args, params) {

                                        }
                                }
                        ],

                        after : [
                                {
                                        exclude : [
                                        ],
                                        include : [
                                        ],
                                        filter  : function(params) {
                                                document.title = "MoJS Framework - " + App.Util.Misc.upperCaseFirstLetter(this.action);
                                        }
                                }
                        ]
                };

        }

        return BaseController;
});