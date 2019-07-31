// ## Question 1
//
// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
//
class Person {
  constructor (firstName, lastName, middleName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  };

  fullName() {
    return `${this.firstName} ${this.lastName} ${this.middleName}`
  }
}

let owen = new Person ('Owen', 'Jones', 'Riley')

let matt = new Person ('Matt', 'Kurahara', 'Akira')

// console.log(matt.firstName)
//
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
//

console.log(owen.fullName())
console.log(matt.fullName())
//
// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
//
class Book {
  constructor(title, author, rating){
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
  isGood(){
    if (this.rating >= 7){
      return true
    } else {
      return false
    }
  }
}

let wildThings = new Book ('Where the Wild Things Are', 'Maurice Sendak', '6')
let readyPlayerOne = new Book('Ready Player One', 'Ernest Kline', 6)
let atlasShrugged = new Book('Atlas Shrugged', 'Ayn Rand', 1)
let theSoundAndTheFury = new Book('The Sound and The Fury', 'William Faulkner', 9)

//
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
//
console.log(theSoundAndTheFury.isGood())

// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
//
class Dog {
  constructor(name, breed, mood, hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }
  playFetch(){
    this.hungry === true;
    this.mood = 'playful'
    console.log('Ruff')
  }
  feed(){
    this.hungry === false;
    console.log('Woof')
  }
  toString(){
    if (this.hungry === true){
      return `This dog's name is ${this.name}. He is a ${this.breed} that is usually ${this.mood}. Right now he is hungry`
    } else if (this.hungry === false){
      return `This dog's name is ${this.name}. He is a ${this.breed} that is usually ${this.mood}. Right not he is not hungry`
    }
  }
}

let ripFlippyBoi = new Dog ('Flip', 'cockapoo', 'calm', false)
// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
//
ripFlippyBoi.playFetch();
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
//
ripFlippyBoi.feed();
// d. Add a method called `toString` that returns a description of the dog:
console.log(ripFlippyBoi.toString());


// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
//
let freezingpoint = {
  celsius : 0,
  fahrenheit : 32,
  kelvin : 273.15
}
//
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
class Celsius {
  constructor(celsius){
    this.celsius = celsius
  }
  getFahrenheitTemp(){
    return 1.8 * this.celsius + 32 + (' degrees Fahrenheit')
  }
  getKelvinTemp(){
    return this.celsius + 273 + (' degrees Kelvin')
  }
  isBelowFreezing(){
    if (this.celsius <= 0){
      return true
    } else {
      return false
    }
  }
}

let outsideTempt = new Celsius (2)
console.log(outsideTempt.getFahrenheitTemp());
console.log(outsideTempt.getKelvinTemp());
//
// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
//
// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
class Movie {
  constructor(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
  blurb(){
    return `${this.name} came out in ${this.year}. It was a ${this.genre} film starring ${this.cast}.${this.description}`
  }
}
let childrenOfMen = new Movie ('Childern Of Men', 2006, 'dystopian thriller', 'Clive Owen, Julianne Moore, Chiwetel Ejiofor', 'In the near future no one in the world is able to reproduce. The consequences of that change are far reaching and affects everyone. All hope is lost or so they thought')


// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
console.log(childrenOfMen.blurb());
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
class Vector {
  constructor (x,y){
    this.x = x
    this.y = y
  }
  plus(vector){
    return new Vector (this.x + vector.x, this.y + vector.y )
  }
  minus(vector){
    return new Vector (this.x - vector.x, this.y - vector.y )
  }
  getLength(){
    return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
}
let vec1 = new Vector(2,4)
let vec2 = new Vector(1,2)
let vec3 = new Vector(5,6)

console.log(vec1.plus(vec2))
console.log(vec1.minus(vec2))

console.log(vec3.getLength());
//
// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
//
class Car {
  constructor(make, model){
    this.make = make;
    this.model = model;
  }
  static numberOfWheels(){
      return 4
    }
}
class Bike {
  constructor(gears, hasBell){
    this.gears = gears
    this.hasBell = hasBell
  }
  static numberOfWheels(){
    return 2
  }
}
let hamvan = new Car ('Honda', 'Odyssey')
console.log(hamvan.model)
console.log(Car.numberOfWheels())

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
//
let canondale = new Bike ('fixed', true)
console.log(canondale.gears)
console.log(Bike.numberOfWheels());

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

//The number of wheels for Car should always be 4 and for Bike should always be 2. The behavior is true about the class as a whole

// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
//
class Vehicle {
  constructor (color, name){
    this.color = color
    this.name = name
  }
  makeSound(){
    console.log('WHHOOSSSH')
  }
}

let myVehicle = new Vehicle ('green', 'Doris')
myVehicle.makeSound();

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
//
class Car2 extends Vehicle {
  constructor(color, name, make, model){
    super(color, name);
    this.make = make;
    this.model = model;
  }
  static numberOfWheels (){
    return 4
  }
}

class Bike2 extends Vehicle {
  constructor(color, name, gears, hasBell){
    super(color, name);
    this.gears = gears;
    this.hasBell = hasBell
  }
  static numberOfWheels(){
    return 2
  }
}
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
//
let huffy = new Bike2('green','Bikey McBikeface','fixed', false)
console.log(huffy.name)

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
let newHotness = new Car2('red', 'CarryMcCarface','Dodge', 'Charger')
console.log(newHotness.color)
