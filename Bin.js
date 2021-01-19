class Bin{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 200;
        this.height = 213;
        this.thickness = 20;
        this.image = loadImage("sprites/dustbingreen.png")


        this.botttomBody  = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true});
        this.leftwallBody = Bodies.rectangle(this.x, this.width/2, this.height/2, this.thickness, this.height, {isStatic:true});
        this.rightwallBody = Bodies.rectangle(this.x, this.width/2, this.y, this.height/2, this.thickness, this.height, {isStatic:true});
        World.add(world,this.botttomBody);
        World.add(world,this.leftwallBody);
        World.add(world,this.rightwallBody);
    }
    display(){
        var posBottom = this.botttomBody.position;
        var posLeft = this.leftwallBody.position;
        var posRight = this.rightwallBody.position;
      
       push();
       translate(posLeft.x, posLeft.y);
        imageMode(CENTER);
        //fill("white");
        image(this.image,this.width,this.height);
        pop();
    }
}