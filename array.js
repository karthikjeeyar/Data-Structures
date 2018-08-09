class myArray {
    constructor() {
        this.array = [];
    }
    add(data) {
        this.array.push(data);
    }
    remove(data) {
        this.array = this.array.filter(function (current) {
            return current !== data;
        });
    }
    search(data) {
        var foundIndex = this.array.indexOf(data);
        if (foundIndex) {
            return foundIndex;
        }
        return null;
    }
    getIndexAt(index) {
        return this.array[index];
    }
    length() {
        return this.array.length;
    }
    print() {
        console.log(this.array.join(" "));
    }
}

var array = new myArray();
array.add(10);
array.add(20);
array.add(30);

console.log('Index at 1 is:'+ array.getIndexAt(1));

array.print();