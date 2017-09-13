function Matrix(r,c,arr){
    this.row=r;
    this.col=c;
    this.elem=arr;
    
    this.show=function(){
        push();
        strokeWeight(4);
        line(3,3,3,height-3);
        line(width-3,3,width-3,height-3);
        line(3,3,10,3);
        line(width-3,3,width-10,3);
        line(3,height-3,10,height-3);
        line(width-3,height-3,width-10,height-3);
        pop();
        
        
        
        for(var m=0;m<this.row;m++){
            for(var n=0;n<this.col;n++){
                fill(0);
                stroke(0);
                textSize(35);
                console.log(m*this.col+n);
                text(this.elem[m*this.col+n],64*n+20,64*m+40);
            }
        }
    }
    
    
    this.deterCalc=function(){
        
    }
    this.coFactor=function(){
        
    }
    this.minorCalc=function(){
        
    }
}