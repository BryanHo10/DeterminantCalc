var problemMatrix=[];
var row;
var column;
var matrixGrid;



function setup(){
    //noCanvas();
    var rowButton=select('#rowSubmit');
    var rowInput=select('#rowInput');
    
    var colButton=select('#colSubmit');
    var colInput=select('#colInput');
    
    var elementButton=select('#elSubmit');
    var elementInput=select('#elInput');
    
    
    rowButton.mousePressed(setRow);
    colButton.mousePressed(setCol);
    elementButton.mousePressed(setElem);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    function setRow(){
        var r=parseInt(rowInput.value());
        if(r>0&&r<=50)
            row=r;
    }
    function setCol(){
        var c=parseInt(colInput.value());
        if(c>0&&c<=50)
            col=c;
    }
    function setElem(){
        
        row=4;
        col=6;
        
        
        
        createCanvas(64*col,64*row);
        background(255);
        for(var i=0;i<elementInput.value().length;i++){
            problemMatrix[i]=parseFloat(elementInput.value()[i]);
        }
        console.log(problemMatrix);
        matrixGrid=new Matrix(row,col,problemMatrix);
        matrixGrid.show();
        
        
    }
    
    
    
    
    
}
