// Import file system, fs, and shape modules
const fs = require('fs');
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

// SVG 3 methods to render & set text in the string
class SVG {
    constructor() {
        this.elementText = '';
        this.elementShape = '';
    }
    
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.elementShape}${this.elementText}</svg>`;
    }
    
    setElementText(text, color) {
        this.elementText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    
    setElementShape(shape) {
        this.elementShape = shape.render();
    }
}

// Array of terminal prompts to create the logo
const inputs = [
    {
        type: "input",
        name: "text",
        message: "Desired image text: Choose up to 3 characters"
    },
    {
        type: "input",
        name: "text-color",
        message: "Choose your font color by entering a color keyword"
    },
    {
        type: "input",
        name: "shape-color",
        message: "Choose your shapes color by entering a color keyword or a hexadecimal"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose your shape",
        choices: ["Circle", "Square", "Triangle"]
    }
];

// write to file system
function generateLogo(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Your logo has been completed!");
    });
}

// init function
async function init() {
    console.log("Intializing");
    var svgString = "";
    var svg_file = "logo.svg";

    // prompt user input
    const answers = await inquirer.prompt(inputs);

    // user input
    var userInput = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        userInput = answers.text;
    } else {
        console.log("Your input must be 1-3 characters");
        return;
    }
    console.log("Logo Text: [" + userInput + "]");
    var fontColor = answers["text-color"];
    console.log("Font color: [" + fontColor + "]");
    var shapeColor = answers["shape-color"];
    console.log("Shape Color: [" + shapeColor + "]");
    var shape = answers["shape"];
    console.log("Shape: [" + shape + "]");

    // desired shape
    let userShape;
    if (shape === "Square") {
        userShape = new Square();
        console.log("User selected Square");
    } else if (shape === "Circle") {
        userShape = new Circle();
        console.log("User selected Circle");
    } else if (shape === "Triangle") {
        userShape = new Triangle();
        console.log("User selected Triangle");
    }
    userShape.setColor(shapeColor);

    // generate svg as a file
    var svg = new SVG();
    svg.setElementText(userInput, fontColor);
    svg.setElementShape(userShape);
    svgString = svg.render();

    // console log string once file has been completed
    console.log("Displaying Shape:\n\n" + svgString);

    // console log successful completion 
    console.log("Logo Generation Successful!");
    generateLogo(svg_file, svgString);
}

init();
