var app = new Vue({
    el: "#app",
    data: {
        name: "Carlos Vasquez",
        message: "Hello Vue",
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc) {
            //this.age++;
            this.age += inc;
        },
        substract: function (dec) {
            //this.age--;
            this.age -= dec;
        },
        updateXY: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})