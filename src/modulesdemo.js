// Bringing in modules using CommonJS syntax 
// modules installed with npm are brought in like this
//const person = require('./mymodule1'); // its a file, so we will use the path
// e.g. If you install the express framework (a node module)
// you will write:
// const express = require('express');


// ES2015 Module Syntax
// Between the braces is what we want to pull out from the module
// 'importing' what we 'export'
//import { person, sayHello } from './mymodule2'; // using Destructuring here

//console.log(person.name);

//console.log(sayHello());


// If we want to make everything that is being exported 
// from the module available without having to specify each one
//import * as mod from './mymodule2';

//console.log(mod.person.name);

//console.log(mod.sayHello());


// importing without the curly braces {}
// means to import the default export from the module
import greeting from './mymodule2';

console.log(greeting);