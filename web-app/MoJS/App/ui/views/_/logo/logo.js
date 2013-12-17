define([], function() {

        function logo($element$) {
                $element$                     = jQuery($element$);
                var logo                      = $element$.closest(".logo");
                var h1                        = logo.closest("h1");
                var text                      = h1.find(".text");

                var path                      = $element$.find("path");
                var logoSizePercentDecreaseBy = 0.8;
                var logoSizeDecreasePercentTo = 6  ;
                var logoSizePixels            = 80 ;
                var rotationStopsAt           = 138; // 182, 317, 138, 230
                var resizeTimeout             = 450;
                var HEIGHT                    = "height";
                var WIDTH                     = "width";
                var SMALL                     = "small";

                !function constructor() {
                        bindOnclick();
                        rotate(true);
                        setTimeout(resize, resizeTimeout);
                }();

                function rotate(bool) {
                        rotate.code  && clearInterval(rotate.code);

                        rotate.code = setInterval(function() {
                                var transform = path.attr("transform");
                                var array     = new RegExp("rotate[(](.*?)[ ].*?[)]").exec(transform);
                                var degree    = (parseInt(array[1]) + 1)%360;

                                if ( bool && degree == rotationStopsAt ) {
                                        clearInterval(rotate.code);
                                }

                                transform = array[0].replace(array[1], degree) + transform.substring(array[0].length);

                                path.attr("transform", transform);
                        }, 30);
                }

                function resize() {
                        resize.code && clearInterval(resize.code);

                        resize.code = setInterval(function() {
                                var attr = ($element$.attr(WIDTH) || "100%");
                                var size = attr.substring(0, attr.length-1);

                                if ( size >= logoSizeDecreasePercentTo) {
                                        $element$.attr(WIDTH, size* logoSizePercentDecreaseBy + "%");
                                        $element$.attr(HEIGHT, size*logoSizePercentDecreaseBy + "%");
                                } else {
                                        clearInterval(resize.code);
                                        makeSmall();
                                }
                        }, 20);
                }

                function makeSmall() {
                        h1.removeClass("hover");
                        $element$.attr(WIDTH, logoSizePixels);
                        $element$.attr(HEIGHT, logoSizePixels);
                }

                function bindOnclick() {
                        if ( bindOnclick.called ) return; bindOnclick.called = true;

                        // On click
                        logo.click(function() {
                                if ( $element$.attr(SMALL) == "true" ) {
                                        $element$.attr(SMALL, "false");

                                        rotate(true);
                                        resize();
                                }
                                else {
                                        $element$.attr(SMALL, "true");
                                        $element$.attr(WIDTH, "100%").attr(HEIGHT, "100%");

                                        rotate(false);
                                }
                        });
                }


        }

        return logo;
});