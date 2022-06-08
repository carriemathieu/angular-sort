import { Sorter } from "./sorter";

export class NumbersCollection extends Sorter {
    constructor(public data: number[]){
        super();
    }

    // with "get", do not have to use parenth... only .length;
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number):boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}