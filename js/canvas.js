var demo = demo || {};
(function () {

    demo.trigger = function () {
        console.log("Triggered");
    };

    demo.draw = function (context) {
        var link = document.getElementById("inside-link");

        $(link).focus(function () {
            context.drawFocusIfNeeded(link);
        });

        $(link).click(demo.trigger);

        context.beginPath();
        context.rect(10, 10, 30, 30);

        context.addHitRegion({
            id: "link",
            control: link
        });

        canvas.addEventListener("mouseup", function(event){
          if(event.region) {
            $(link).focus();
            demo.trigger();
          }
        });
    };

    demo.init = function () {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        demo.draw(ctx);
    };


})();
