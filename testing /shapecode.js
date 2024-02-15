// Class constructor for Shapes
class Shape {
    constructor() {
        this.color = '';
    }
    
    setColor(color) {
        this.color = color;
    }
}

// Using inheritance to create a circle class by extending shape constructor
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// Using inheritance to create a square class by extending shape constructor
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
    }
}

// Using inheritance to create a triangle class by extending shape constructor
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

module.exports = { Circle, Square, Triangle };
