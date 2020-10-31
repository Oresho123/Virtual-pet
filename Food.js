class Food{
    constructor(bodyA, pointB){
        var  foodStock
        var lastfed
        getFoodStock;
        updateFoodStock;
        deductFood;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    }

    display(){
      this.image('Milk.png')
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            pop();
        }
    }
    
}