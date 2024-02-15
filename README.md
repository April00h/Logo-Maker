# LOGO MAKER 

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

This Node.js command-line application prompts users to select a color, shape, and provide text for a logo. It generates an SVG graphic based on the user's choices and saves it as a `.svg` file. Additionally, it includes documentation and a video walkthrough demonstrating its functionality and validation.

[Movie]()  

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```



## Installation
To run open index.js in the terminal and enter the following.

`npm init`

`npm install inquirer@8.2.4`

To test open shape.testing.js in the terminal and enter the following command:

`npx jest`

## Usage
To use the application, navigate to the terminal and open `index.js`, then input the command `node index.js`. Follow the prompts provided thereafter to interact with the application and generate your desired logo.

## Contributors
[April Hunt](https://github.com/April00h)

## Questions
Please reach out with any questions or concerns: [E-mail](mailto:aprilhunt00.ah@gmail.com) , [GitHub](https://github.com/April00h)


