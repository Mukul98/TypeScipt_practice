let movieTitle: string = "Maveric";
movieTitle = "Arrival";
// movieTitle = 9; Not allowed
movieTitle.toUpperCase()//Will let you know if wrong spelling of functions or is function does not exist

let numCatLives: number = 9;
numCatLives+=1;
// numCatLives = "Zero" will not be allowed as declared as number

let gameOver: boolean = false;
gameOver=true;
// gameOver="true" is not allowed since it was declared as boolean and the value provided is a string.

//Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false; Not allowed similar to when providing type

//the "any" type
let thing:any = "hello";
thing = 1;
thing()
thing = false;
thing.toUpperCase();
// if any is used in type it does not provide corrections in terms of using incorrect function or any other modification of type done after declaration

//Delayed initialization
const movies = ["Arrival", "Aliens", "The thing", "Amadeus"];
let foundMovie: string;

for (let movie of movies){
    if (movie === "Amadeus"){
        foundMovie = "Amadeus";
    }
}
//Any turns off type checking and should be avoided whenever possible