'use strict'

class Field {
    constructor(n, m) {
        this.n = n || 500;
        this.m  = m || 500;
        this.tableSet();
    }
    
    tableSet() {
        this.table = new Array();
        for(var i = 0; i < this.n; i++){
            this.table[i] = new Array();
            for(var j = 0; j < this.m; j++){
                this.table[i][j] = 0;
            }
        }
    }
    
    randomTable() {
        for(var i = 0; i < this.n; i++){
            for(var j = 0; j < this.m; j++){
                this.table[i][j] = Math.round(Math.random());
            }
        }
    }
    
    clockTable() {
        for(var i = 0; i < this.n; i++){
            for(var j = 0; j < this.m; j++){
                if(i == 10 && (j == 20 || j == 21)||
                   i == 11 && (j == 20 || j == 21)||
                   i == 13 && (j == 20 || j == 21 || j == 22 || j == 23) ||
                   i == 14 && (j == 19 || j == 22 || j == 24 || j == 26 || j == 27) ||
                   i == 15 && (j == 19 || j == 21 || j == 24 || j == 26 || j == 27) ||
                   i == 16 && (j == 16 || j == 17 || j == 19 || j == 21 || j == 24) || 
                   i == 17 && (j == 16 || j == 17 || j == 19 || j == 24) ||
                   i == 18 && (j == 20 || j == 21 || j == 22 || j == 23) ||
                   i == 20 && (j == 22 || j == 23)||
                   i == 21 && (j == 22 || j == 23)
                   ) {
                   this.table[i][j] = 1;
                } else {
                    this.table[i][j] = 0;
                }
            }
        }    
    }
    
    
    clearTable() {
        for(var i = 0; i < this.n; i++){
            for(var j = 0; j < this.m; j++){
                this.table[i][j] = 0;
            }
        }
    }
    
    step() {
        var aliveCounter = 0; 
        var dy = [0, 1, 1, 1, 0, -1, -1, -1];
        var dx = [-1, -1, 0, 1, 1, 1, 0, -1];
        var tempMatrix = new Array();
        for(var i = 0; i < this.n; i++){
            tempMatrix[i] = new Array();
            for(var j = 0; j < this.m; j++){
                tempMatrix[i][j] = 0;
            }
        }
        for(var i = 0; i < this.n; i++){
            for(var j = 0; j < this.m; j++) {
                for (var k = 0; k < 8; k++) {
                    var ni = i + dy[k];
                    var nj = j + dx[k];

                    if(ni === -1) {
                        ni = this.n-1;
                    }
                    if(ni === this.n) {
                        ni = 0;
                    }
                    if(nj === -1) {
                        nj = this.m - 1;
                    }
                    if(nj === this.m) {
                        nj = 0;
                    }
                    if(this.table[ni][nj] === 1) {
                        aliveCounter++;
                    }
                }
                if((this.table[i][j] === 0 && aliveCounter === 3) || 
                   (this.table[i][j] === 1 && (aliveCounter === 2 || aliveCounter === 3)) ) {
                    tempMatrix[i][j] = 1;
                } 
                else {
                    tempMatrix[i][j] = 0;
                }
                aliveCounter = 0;
            }
        }
        this.table = tempMatrix;
    }
    
    toggle(x, y) {
        if(this.table[y][x] === 1) {
            this.table[y][x] = 0; 
            return 0;
        }
        else {
            this.table[y][x] = 1;
            return 1;
        }
    }
    
    transposition() {
        var tempMatrix = new Array();
        for(var i = 0; i < this.m; i++){
            tempMatrix[i] = new Array();
            for(var j = 0; j < this.n; j++){
                tempMatrix[i][j] = this.table[j][i];
            }
        }
        
        var temp;
        temp = this.n;
        this.n = this.m;
        this.m = temp;
        this.table = tempMatrix;
    }
}
