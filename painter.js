'use strict' 

class Painter {
    constructor(h, w) {
        var canvas = document.getElementById("canvas");
        this.torus = new Field(Math.trunc(h/10), Math.trunc(w/10));
        this.context = canvas.getContext("2d");
        this.timer = 0;
    }
    
    draw(){
        for(var i = 0; i < this.torus.n; i++){
            for(var j = 0; j < this.torus.m; j++){
                if(this.torus.table[i][j] === 1) {
                    this.context.fillStyle = "white";
                }
                else {
                    this.context.fillStyle = "rebeccapurple";
                }
                this.context.fillRect(j * 10, i * 10, 9, 9);
            }
        }
    }
    
    drawUserImage(event) {
        var x = event.clientX;
        var y = event.clientY;
        while(x % 10 !== 0 || y % 10 !== 0) {
            if(x % 10 !== 0) {
                x--;
            }
            if(y % 10 !== 0) {
                y--;
            }
        }
        if(this.torus.toggle(x/10, y/10) === 1) {
            this.context.fillStyle = "white";
        } 
        else {
            this.context.fillStyle = "rebeccapurple";
        }
    	this.context.fillRect(x, y , 9, 9);
    }
    
    step() {
        this.torus.step();
        this.draw();
    }
    
    flipScreen () {
        this.torus.transposition();
        this.draw();
    }
}