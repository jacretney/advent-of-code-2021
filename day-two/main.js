const { rawInstructions } = require('./instructions');
const { Instruction } = require('./Instruction');

const instructions = rawInstructions.map((instruction) => {
    let parts = instruction.split(' ');
    return new Instruction(parts[0], parts[1]);
})

// Part one
let horizontalPosition = 0;
let depth = 0;

instructions.forEach((instruction) => {
    if (instruction.direction === 'forward') {
        horizontalPosition += instruction.amount;
        return;
    }

    if (instruction.direction === 'up') {
        depth -= instruction.amount;
        return;
    }

    // Default: If instruction direction is down...
    depth += instruction.amount;
});

console.log({
    horizontalPosition,
    depth,
    product: horizontalPosition * depth,
});

// Part two
let aim = 0;
horizontalPosition = 0;
depth = 0;

instructions.forEach((instruction) => {
    if (instruction.direction === 'forward') {
        horizontalPosition += instruction.amount;
        depth = depth + (instruction.amount * aim);
        return;
    }

    if (instruction.direction === 'up') {
        aim -= instruction.amount;
        return;
    }

    // Default: If instruction direction is down...
    aim += instruction.amount;
});

console.log({
    horizontalPosition,
    depth,
    product: horizontalPosition * depth,
});