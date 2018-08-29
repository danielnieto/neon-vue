Class("NeonWidget").inherits(Widget).includes(Vuetify)({
    prototype: {
        visible: true,
        customValue: "data bound data",
        todos: [
            { text: "Learn JavaScript" },
            { text: "Learn Vue" },
            { text: "Build something awesome" }
        ],
        init: function(config) {
            Widget.prototype.init.call(this, config);

            var widget = this;

            widget.vuetify();
        },
        sayHi: function() {
            alert(this.customValue);
        },
        toggle: function() {
            this.visible = !this.visible;
            this.customValue = this.customValue.split('').reverse().join('')
        }
    }
});
