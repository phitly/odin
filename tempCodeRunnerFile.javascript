function Hero(name,level){
    this.name=name;
    this.level=level;
}
// add greet method
Hero.prototype.greet=function(){
    return `Hello, ${this.name}`
}

function warrior(name,level,weapon){
    //this.name=name;
    //this.level=level;
    //this.weapon=weapon;
        //instead of doing this we use chain constructor w call
        // call()sets up the new object w heros properties
    Hero.call(this,name,level);
    // add new property
    this.weapon=weapon;

    
}
// add attack method to warrior
warrior.prototype.attack=function(){
        return `${this.name} attacks with the ${this.weapon}.`;
    }
    


function healer(name,level,spell){
    //this.name=name;
    //this.level=level;
    //this.spell=spell;
        //instead of doing this we use chain constructor w call
        // call()sets up the new object w heros properties
    Hero.call(this,name,level);
    // add new property
    this.spell=spell;
}

//heal method 
healer.prototype.heal=function(){
    return `${this.name} cast with this ${this.spell}.`;
}

let hero1=new warrior('mike',1,'axe');

let hero2=new healer('jain',1,'axcuree');


console.log(hero2.heal())
console.log(hero1.greet())





