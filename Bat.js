class Bat {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadAnimation("bat1.png");
        this.radius = 10;
        this.bat = Bodies.circle(x,y,this.radius,options);
        World.add(world, this.bat)
    }

    display(){
        var pos = this.bat.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}