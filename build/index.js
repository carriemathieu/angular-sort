"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10,3,-5,0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort();
// console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
