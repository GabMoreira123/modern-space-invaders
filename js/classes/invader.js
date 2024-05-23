 class invader {
    constructor({position}){ 
        this.position = position;
        this.radius = 10;
        this.color = " ";
        this.opacity = 1;
        this.active = false;
        gsap.to(this, {
            radius: 30
        });
        const image = new Image();
        image.src = "./img/invader.png";
        image.onload = () => {
            const scale = 1;
            this.image = image;
            this.width = image.width *scale;
            this.height = image.height *scale;
            this.position ={
                x: this.position.x,
                y: this.position.y
            }
        }
    }
 }