// Task 1

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
for (sweets of dairy ) {
    console.log(sweets)
  }

}


// Task 2
const animal = {

    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan()
{
    for (key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}



// Task 3
const animal1 = {
    canJump: true
};
const bird2= Object.create(animal1);
bird2.canFly = true;
bird2.hasFeathers = true;

function animalCan()
{
    for (prop in bird2) {
        console.log(`${prop}: ${bird2[prop]}`);
    }
}



