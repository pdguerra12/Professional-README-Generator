// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadME = require("./utils/generateMarkdown.js");

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "What is the name of your project? (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter the name of your project!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "description",
				message: "Provide a description of the project (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please provide a description of the project!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "installation",
				message: "Provide installation instructions (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please provide installation instructions!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "usage",
				message: "Provide the usage information (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please provide the usage information!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "contributing",
				message: "Provide contribution guidelines (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please provide contribution guidelines!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "tests",
				message: "Provide test instructions (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please provide test instructions!");
						return false;
					}
				},
			},
			{
				type: "checkbox",
				name: "license",
				message: "Which license will you be using? (Check all that apply)",
				default: "MIT License",
				choices: [
					"Apache License 2.0",
					"Boost Software License 1.0",
					"GNU AGPLv3",
					"GNU GPLv3",
					"GNU LGPLv3",
					"MIT License",
					"Mozilla Public License 2.0",
					"The Unlicense",
				],
			},
			{
				type: "input",
				name: "username",
				message: "Enter your GitHub Username (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Please enter your Github Username!");
						return false;
					}
				},
			},
			{
				type: "input",
				name: "email",
				message: "What is your email address? (Required)",
				validate: (nameInput) => {
					if (nameInput) {
						return true;
					} else {
						console.log("Invalid Entry!");
						return false;
					}
				},
			},
		])
		.then((answers) => {
			writeToFile(answers);
		});
}

// TODO: Create a function to write README file
function writeToFile(data) {
	fs.writeFile("./utils/README.md", generate(data), (err) =>
		err ? console.log(err) : console.log("ReadME created!")
	);
}

// Function call to initialize app
init();
