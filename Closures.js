const person = {
    name:"Jane Doe",
    age: 18,
    isAdult: true,
};

function createGreeting(individual){
    return (salutation) => `${salutation}, ${individual.name}!`;
}

const greetJane = createGreeting(person);
console.log(greetJane("Hello"));
console.log(greetJane("Good Morning"));

//__________________

const people = {
    name:"John Doe",
    age: 18,
    isAdult: true,
};

function createGreeting(individual){
    return (salutation) => `${salutation}, ${individual.name}!`;
}

const greetJohn= createGreeting(person);
console.log(greetJane("Hello"));
console.log(greetJane("Good Morning"));

//_______________

function createMultiplier(factor){
    return function (number){
        return number * factor;
    }
}

const double = createMultipier(2);
console.log(double(5));
console.log(double(10));

const triple = createMultiplier(3);
console.log(triple(5));
console.log(triple(10));
