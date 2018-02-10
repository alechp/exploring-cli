(function inq() {
  const inquirer = require("inquirer");
  let stdChoices = ["A", "B", "C", "D", "E"];
  let prompt = inquirer.createPromptModule();
  let questions = [
    {
      name: "A",
      type: "list",
      message: "Select one option & press Enter",
      choices: stdChoices
    },
    {
      name: "B",
      type: "rawlist",
      message: "Select one option & press Enter",
      choices: stdChoices
    },
    {
      name: "D",
      type: "checkbox",
      message: "Select one or more options & press Enter",
      choices: stdChoices
    },
    {
      name: "E",
      type: "confirm",
      message: "Yes or no?"
    },
    {
      name: "F",
      type: "input",
      message: "Input?"
    },
    {
      name: "G",
      type: "password",
      message: "Password?"
    },
    {
      name: "H",
      type: "editor",
      message: "Editor"
    }
  ];
  prompt(questions)
    .then(answers => log(`answers: ${JSON.stringify(answers, null, 2)}`))
    .catch(err => err);
})();
