class Instruction {
    constructor(direction, amount) {
        this.direction = direction;
        this.amount = parseInt(amount);
    }
}

module.exports = {
    Instruction,
}