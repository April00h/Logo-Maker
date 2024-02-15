const { Circle, Square, Triangle } = require("./shapes");

describe('Circle', () => {
    it('Renders', () => {
        const shape = new Circle();
        const color = 'orange';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

describe('Square', () => {
    it('Renders', () => {
        const shape = new Square();
        const color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});

describe('Triangle', () => {
    it('Renders', () => {
        const shape = new Triangle();
        const color = 'purple';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
});
