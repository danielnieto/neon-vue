Module("Vuetify")({
    prototype: {
        vuetify: function () {

            var widget = this;

            this.bind("render", function () {

                var methods = {};

                for (var prop in widget.constructor.prototype) {
                    if (typeof widget.constructor.prototype[prop] === 'function') {
                        methods[prop] = widget.constructor.prototype[prop].bind(widget);
                    } else if (typeof widget.constructor.prototype[prop] !== 'function') {
                        widget[prop] = JSON.parse(JSON.stringify(widget.constructor.prototype[prop]))
                    }
                }

            widget.component = new Vue({
                el: widget.element[0],
                data: widget,
                methods: methods
            });


            });
        }
    }
})