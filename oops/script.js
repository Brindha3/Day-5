//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// a) Write a constructor for the class Movie, 
//which takes a String representing the title of the movie,
// a String representing the studio, and a String representing the rating as its arguments,
 //and sets the respective class properties to these values.

class movie1{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const flim1 = new movie1("Action","Avm","PG12");
console.log(flim1);

// b) The constructor for the class Movie will set the 
//class property rating to "PG" as default when no rating is provided.

class movie2{
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const flim2 = new movie2("Action","Avm");
console.log(flim2);


//c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those moviesin the input array with a rating 
//of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Flim{
    constructor(title, studio, rating){
        this.title = title
        this.studio = studio
        this.rating = rating
}
     getdetails(){
        return(`the title of ${this.tile} with the studio of ${this.studio}
        with the rating of ${this.rating="PG"}`)}

     }

const moviesin = new Flim("Tangled", "Avm", "PG11")
const moviesin1= new Flim("Alien","Brindha", "PG12")
console.log(moviesin.getdetails()) 
console.log(moviesin1.getdetails())



//d) Write a piece of code that creates an instance of the class Movie with the
 //title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 
 class movie{
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}
const flim = new movie("Casino Royale","Eon Productions","PG13");
console.log(flim);


//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle{
    constructor(radius,color){
        this.radius = radius 
        this.color = color
        
    }
     getRadius(){
        return(`the radius ${this.radius} with the color of ${this.color}`)
    }
    setRadius(radi){
        this.radius = radi;
    }
    setColor(col){
        this.color = col;
     }

     // Area of the circle = πr^2
     getArea(){
        const area = (Math.PI*this.radius*this.radius)
        return area;
    }

    // Circumference of the circle = 2πr
     getCircumference(){
        const circumference = (2 * Math.PI * this.radius)
        return circumference
     }
    }
const radius = new Circle(1,"red")

radius.setRadius(2)
radius.setColor("pink")

console.log(radius.getRadius());

console.log(radius.getArea());

console.log(radius.getCircumference())


//3. Write a “person” class to hold all the details.

class Person{
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
}
     getdetails(){
        return(`the name of ${this.name} with the age of ${this.age}
        with the address of ${ this.address}`)}

     }

person1 = new Person("John Doe", 30, "1234 Elm St, Apt 101, Cityville")
person2 = new Person("Jane Smith", 25, "5678 Oak St, Apt 202, Townsville")
console.log(person1.getdetails()) 
console.log(person2.getdetails())


//4. write a class to calculate the uber price.

class Uber{

    constructor(distance,rate,waitingtime){
        this.distance = distance;
        this.rate = rate;
        this.waitingtime = waitingtime;
    }
    getRideDetails(){
      
        return(`the distance of the ride is ${this.distance} km with the rate of ${this.rate}rs
         with a waiting time  of ${ this.waitingtime} min`)
     }
     getPrice(){
        const price = (this.distance * this.rate) + (5 * this.waitingtime)

        return price;
     }
     setDistance(dist){
        this.distance = dist;
    }
      }
const uber = new Uber(50,30,15);
uber.setDistance(30)

console.log(uber.getRideDetails());
console.log(uber.getPrice());