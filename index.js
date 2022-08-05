#!/usr/bin/env node

const program = require("commander");
const readline = require("readline");
const config = require("./config.json");
const chalk = require("chalk");
const letters = config.morse_letters;
const numbers = config.morse_numbers;
const mark = config.marks;

program
  .version("1.0.0")
  .name("morse-create")
  .description("A program that converts any text to morse code");

const main = () => {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "Enter the string you want to convert to morse code: ",
      function (answer) {
        var result;
        for (var i = 0; i < answer.length; i++) {
          result = answer.split("");
        }

        const upper = result.map((element) => {
          return element.toUpperCase();
        });

        console.log(chalk.bgGreen("1. Array form of Text"));
        console.log(upper);

        var morse = [];

        for (const element of upper) {
          morse.push(letters[element]);
          morse.push(numbers[element]);
          morse.push(mark[element]);
        }

        const morse_string = morse.toString();
        const final = morse_string.replace(/,/g, " ");

        console.log(chalk.bgRed("2. Morse code of the text"));
        console.log(final);
      }
    );
    rl.on("close", function () {
      console.log("\nExisting Panel. Bye!");
      process.exit(0);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
