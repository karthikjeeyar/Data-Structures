/**
 * A Hash Table (Hash Map) is a data structure used to implement an associative array, a structure that can map keys to values. 
 * A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. 
 */
class HashTable { 
    constructor(size) { 
        this.values = {};
        this.totalValues = 0;
        this.size = size;
    }

    calculateHash(key) { 
        return key.toString().length % this.size;
    }

    add(key, value) { 
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) { 
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) { 
            this.totalValues++;
        }
        this.values[hash][key] = value;
    }

    remove(key, value) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) { 
            delete this.values[hash][key];
            this.totalValues--;
        }
    }

    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else { 
            return null;
        }
    }
    
    length() { 
        return this.totalValues;
    }

    print() {
        var string = "";
        for (var value in this.values) {
          for (var key in this.values[value]) {
            string += this.values[value][key] + " ";
          }
        }
        console.log(string.trim());
    }
}

var hashTable = new HashTable(3);
hashTable.add('first', 1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print(); // => 2 4 1 3 5
console.log(hashTable.search('third')); // 3
hashTable.remove('third');
hashTable.print(); // 2 4 1 5