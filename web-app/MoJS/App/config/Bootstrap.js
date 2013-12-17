(function() {
        // ======================= Config =======================
        require.all = {
                jQuery                : "App/libs/jquery.min",
                less                  : "App/libs/less-1.1.4",

                MoEV                  : "MoEV/src/MoEV",
                MoVC                  : "MoVC/src/MoVC",
                MoCP                  : "MoCP/src/MoCP",
                MTaglib               : "MoCP/taglibs/MTaglib",
                MoVC_MoCP_Integration : "MoVC_MoCP_Integration/src/MoVC_MoCP_Integration",

                App                   : "App/src/App",
                Util                  : "App/src/Util",
                logo                  : "App/ui/views/_/logo/logo"
        };

        require.config({
                baseUrl: "/MoJS/",
                paths : {
                        "text" : "App/libs/text"
                }
        });
        // ------------------------------------------------------

        require([
                require.all.jQuery,
                require.all.less,
                require.all.MoEV,
                require.all.MoVC,
                require.all.MoCP,
                require.all.MTaglib,
                require.all.MoVC_MoCP_Integration,
                require.all.App
        ], function(a, b, c, d, e, f, g, App) {

                !function configureApp() {
                        window.App = App;
                }();

                !function configureMoVC_MoCP_Integration() {
                        MoJS.MoVC_MoCP_Integration();
                }();

                !function configureMoCP() {
                        MoJS.MoCP.renderText("<m:preload/>");   // Just makes sure that MTaglib is loaded
                }();

                !function configureMoVC() {
                        MoJS.MoVC.options.route["/"] = "start";
                        MoJS.MoVC.start();
                }();


        });

})();













