
// Task 1: Code a Person class
class Person{
    constructor(name = 'Tom', age = 20, energy = 100)
    {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep()
    {
         
            this.energy += 10;
            console.log('Energy is increasing, currently at:', this.energy)
        
    
    }
    doSomethingFun()
    {
        
            this.energy -= 10;
            console.log('Energy is decreasing, currently at:', this.energy)
        
    }
}

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy,xp = 0, hourlywage = 0, )
    {
        super(name, age, energy);
        this.xp = xp;
        this.hourlywage = hourlywage;
    }
    goToWork() {
       
        this.xp += 10;
        console.log("experience points increases by:", this.xp)
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    var intern1 = new Worker('Bob', 21, 110, 0, 10);
    intern1.goToWork();
    return intern1;
  

}
intern();

// Task 4: Code a manager object, methods
function manager() {
    var manager1 = new Worker('Alice', 30, 120, 100, 30);
    manager1.doSomethingFun();
    return manager1;
    
}
manager();
