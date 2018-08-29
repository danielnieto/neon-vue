require("../css/styles.scss");
require("./vuetify");
require("./widget");

window.wm1 = new NeonWidget({
    element: $("#wm1")
});

window.wm1.render();

// window.wm2 = new NeonWidget();

// window.wm2.render(document.body);


wm1.customValue = "solo";