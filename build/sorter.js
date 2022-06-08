"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // constructor(public collection: number[] | string) {
    // }
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // if collection is array of numbers - type guard
                // if(this.collection instanceof Array) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                // }
                // // if collection is string (typeof only functions as type guard for number, string, & boolean... everything else, use instanceOf)
                // if (typeof this.collection === 'string') {
                // }
            }
        }
    }
}
exports.Sorter = Sorter;
