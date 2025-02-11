function square(num:number){
    return num*num;
}

// function greet(person:string){
//     return `Hi there, ${person}!`;
// }

const doSomething= (person:string,age:number,isFunny:boolean) => {};

doSomething("John",32,true);
square(3);


function greet(person:string = "stranger"):string{ //Return value annotation
        return `Hi there, ${person}!`;
    }

greet("John");
greet();

function rando(num:number){ //Example of functions returning multiple types
    if(Math.random()<0.5){
        return num.toString();
    }
    return num;
}