// properties a data structure must have to be sorted
interface Sortable {
    length: number;
    compare(leftIndex: number, rightIndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}

// abstract class so we can call collection.sort()
// we'll never create an instance of sorter
export abstract class Sorter {
    // "abstract" - method exists in the future or implemented by some child class
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;

    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++ ){
            for (let j = 0; j < length - i - 1; j++) {
                // if collection is array of numbers - type guard
                // if(this.collection instanceof Array) {
                    if (this.compare(j, j+1)) {
                        this.swap(j, j+1)
                    }

                // // if collection is string (typeof only functions as type guard for number, string, & boolean... everything else, use instanceOf)
                // if (typeof this.collection === 'string') {

                // }
            }
        }
    }
}