//Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects( Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.). All the constructors are capitalized.

function Icecream(flavor) {
	    this.flavor = flavor;
	    this.meltIt = function() {
		            console.log(`The ${this.flavor} icecream has melted`);
		        }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
