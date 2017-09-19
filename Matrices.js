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
    
    
    this.deterCalc=function(matrix){
        var temp=matrix;
        var deter=0;
        if(temp.row==2&&temp.col==2){
            return this.minimumDeter(temp);
        }
        for(var i=0;i<this.col;i+=this.col){
            deter+=matrix[i]*this.coFactor(i);
        }
        
        
        
        
        
        return 
        
        
        
        
        
        
        
    }
    this.coFactor=function(index){
        var i=index/this.col+1;
        var j=index%this.col+1;        
        
        
        return Math.pow(-1,i+j);
    }
    this.minorCalc=function(i,j,matrix){
        var temp=matrix;
        var tempElem=[];
        for(var a=0;a<matrix.elem.length;a++){
            if(a%matrix.row!=i&&a%matrix.col!=j){
                tempElem.push(matrix.elem[a]);
            }
        }
        return new Matrix(matrix.row-1,matrix.col-1,tempElem);
        
        
        
        
    }
    this.minimumDeter=function(matrix){
        var firstSet = matrix[0]*matrix[3];
        var secSet=matrix[1]*matrix[2];
        
        return firstSet-secSet;
    }
    
}