var painter, timer;

function start() {
    timer = setInterval(function() {
        painter.step();
    }, 500);
}
    
function stop() {
    clearInterval(timer);
}

$(document).ready(function() {
    
    var canvas = $('#canvas').get(0);
    var ctx = canvas.getContext("2d");
    painter = new Painter(canvas.height, canvas.width);
    
    $('#canvas').on('click', function(event){
        painter.drawUserImage(event);
    })  
    
    $('#run').on('click', function() {
        stop();
        start();
    })
    
    $('#stop').on('click', function() {
        stop();
    })
    
    $('#random').on('click', function() {
        painter.torus.randomTable();
        painter.draw();
    })
    
    $('#clear').on('click', function() {
        painter.torus.clearTable();
        painter.draw();
    })
    
    $('#clock').on('click', function() {
        painter.torus.clockTable();
        painter.draw();
    })
    
    $(window).on("orientationchange",function(){
        stop();
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = "rebeccapurple";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        painter.flipScreen();
        start();
    });
})
