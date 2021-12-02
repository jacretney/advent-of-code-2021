const { depths } = require('./depths');

// Part one
let depthIncreases = depths.filter((value, index) => {
    if (index === 0) {
        return false;
    }

    return value > depths[index-1];
});


console.log('Part one answer: ' + depthIncreases.length);

// Part two
depthIncreases = depths.filter((value, index) => {
    if (index < 3) {
        return false;
    }

    let previousValue = depths[index-3] + depths[index-2] + depths[index-1];
    let currentValue = depths[index-2] + depths[index-1] + value;

    return currentValue > previousValue;
});


console.log('Part two answer: ' + depthIncreases.length);
