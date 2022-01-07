// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateReadME = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
	"What is the title of your project?",
	"Please provide a description of your project.",
	"Please provide installation instructions.",
	"Please provide the usage information.",
	"Please provide contribution guidelines.",
	"Please provide test instructions.",
	"Which license ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
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
			name: "description",
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
			type: "checkbox",
			name: "languages",
			message: "What did you build this project with? (Check all that apply)",
			choices: [
				"JavaScript",
				"HTML",
				"CSS",
				"ES6",
				"jQuery",
				"Bootstrap",
				"Node",
			],
		},
		{
			type: "input",
			name: "link",
			message: "Enter the GitHub link to your project. (Required)",
			validate: (nameInput) => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter the GitHub link to your project!");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "link",
			message: "Enter the GitHub link to your project. (Required)",
		},
		{
			type: "confirm",
			name: "feature",
			message: "Would you like to feature this project?",
			default: false,
		},
		{
			type: "confirm",
			name: "confirmAddProject",
			message: "Would you like to enter another project?",
			default: false,
		},
	]);
}

// Function call to initialize app
init();
