class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.cen=Math.round((this.min+this.max)/2);
        return this.cen;
    }

    lower() {
        this.max=this.cen;
    }

    greater() {
        this.min=this.cen;
    }
}

module.exports = GuessingGame;
