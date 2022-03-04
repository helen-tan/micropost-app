// ES2015 Module syntax

// putting 'export' infront means this can be 
// accessed from other files
export const person = {
    name: 'John',
    age: 30
}

// We can export as many things as we want
export function sayHello() {
    return `Hello ${person.name}`;
}

// If we use 'default', 
// we won't have to use the {} when importing in other files
const greeting = 'Hello World';

export default greeting;