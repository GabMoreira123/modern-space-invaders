class InvaderProjectile{
    constructor({position, velocity}){
        this.position = position;  /* position é uma instancia da classe Invader*/
        this.velocity = velocity;
        this.width =3;
        this.height = 10;
   }
   draw(){
    c.fillstyle = "white";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
   }
   update(){
    if(this.image){
       this.draw();
       this.position.x += this.velocity.x;
       this.position.y += this.velocity.y;
   }
   }
}