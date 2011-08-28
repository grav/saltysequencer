/**
 * Created by IntelliJ IDEA.
 * User: grav
 * Date: 28/08/11
 * Time: 16.38
 * To change this template use File | Settings | File Templates.
 */

function init(){
    var margin = 5;
    var n=8;
    var width = 50;
    var canvas = document.getElementById("sequencer");
    canvas.width=(margin+width)*n+margin;
    var ctx = canvas.getContext("2d");
    var buttons=[];
    for(var i=0;i<n;i++){
        var x = (width+margin)*i;
        var y = margin;
        var b = new Button(ctx,x,y,width);
        b.draw(ctx.strokeRect);
        buttons[i]=b;
    }

    canvas.addEventListener('click',function(eventObj){
        var mouseX = eventObj.pageX - canvas.offsetLeft;
        var mouseY = eventObj.pageY - canvas.offsetTop;
        for(var i=0;i<n;i++){
            if(buttons[i].isClicked(mouseX,mouseY)){
                buttons[i].click();
            }
        }
    });
}

function Button(ctx,x,y,w){
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=50;
    this.onState = false;

    this.draw = function(){
//        fn(this.x,this.y,this.w,this.h);
        this.ctx.clearRect(this.x,this.y,this.w,this.h);
        if (this.onState){
            this.ctx.fillRect(this.x,this.y,this.w,this.h);
        } else {
            this.ctx.strokeRect(this.x,this.y,this.w,this.h);
        }
    };

    this.click=function(){
        this.onState=!this.onState;
        this.draw();
    };

    this.isClicked=function(x,y){
        return (x>=this.x && x<this.x+this.w &&
            y>=this.y && y<this.y+this.h);
    };

}






