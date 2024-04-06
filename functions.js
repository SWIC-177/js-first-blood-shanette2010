function greet(name){
    return 'Hi, ${name}!' ;
}

// Define another function that takes a function as an argument
function processPerson(name, func){
    //Call the passed in function
    return func(name);
}

//Call the processPerson function, passing in a name and the greet function
console.log(processPerson('Jamie', greet)); //Outputs: Hello, Jamie