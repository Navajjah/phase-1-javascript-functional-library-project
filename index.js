function myEach(collection, callback) {
    const isArray = Array.isArray(collection);
    const values = isArray ? collection : Object.values(collection);
    
    for (let i = 0; i < values.length; i++) {
        callback(values[i], isArray ? i : Object.keys(collection)[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const isArray = Array.isArray(collection);
    const values = isArray ? collection : Object.values(collection);
    const result = [];

    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], isArray ? i : Object.keys(collection)[i]));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const isArray = Array.isArray(collection);
    const values = isArray ? collection : Object.values(collection);
    let startIdx = 0;

    if (acc === undefined) {
        acc = values[0];
        startIdx = 1; // Start from second item if no initial accumulator
    }

    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const isArray = Array.isArray(collection);
    const values = isArray ? collection : Object.values(collection);
    
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], isArray ? i : Object.keys(collection)[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const isArray = Array.isArray(collection);
    const values = isArray ? collection : Object.values(collection);
    const result = [];

    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], isArray ? i : Object.keys(collection)[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    if (n === undefined) return array[0];
    return array.slice(0, n);
}

function myLast(array, n) {
    if (n === undefined) return array[array.length - 1];
    return array.slice(-n);
}

function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
        const aValue = callback(a);
        const bValue = callback(b);
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    });
 }

 function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
        if (Array.isArray(item)) {
            if (shallow) {
                newArr.push(...item);
            } else {
                myFlatten(item, shallow, newArr);
            }
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}
