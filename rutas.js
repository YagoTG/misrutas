window.onload = function() {
    window.router.init([{
        path: "/list",
        view: "<h1>NOListado</h1>"
    }, {
        path: "/edit",
        view: "<h1>NOEdición</h1>"
    }, {
        path: "/templateA",
        view: "#list"
    }, {
        path: "/templateB",
        view: "#edit"
    },{
        path: "/pru",
        view: "#pru"
    }]);
};