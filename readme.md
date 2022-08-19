# Beginner JavaScript

My notes for this Beginner JavaScript course by Wes Bos

## Gee Whiz

`cmmd opt j`, pulls up console in dev tools

`cmmd k`, clears console in both dev tools and terminal

`cntrl c` x2 exits out of node console

`! tab`, gives the basic boilerplate for an html file. This is b/c of Emmit plugin in VScode and snippets which he explains later

Installed Wes's ESLint-Prettier config package. This downloaded ESLint with a Prettier plugin locally in the begginer-javascript directory.
Here is the [REPO](https://github.com/wesbos/eslint-config-wesbos) with directions for installing.

If you want to disable ESLint for an entire file `/* eslint-disable */` or for just a line use `/* eslint-disable-line */` using a block comment instaad of a `//` line comment

## Running Scripts

Put `<script></script>` tags right bebore the HTML closing `</body>` tag. Do not put anywhere above the DOM because things run in order and if JS is looking for the DOM before it loads you will return a null.

You can also speficiy a JS file to run the script from. Just add src to script tag with a relative path, `<script src="./some.js"></script>` Once you speficiy a source file you can not write any JS inside the script tags.

You can also run JS from node in the terminal. You need to be in the directory where the .js file you want to run is located. Just type `node node-example.js` and your script will run. Had a little trouble with VS Code config because VS Code had been updated since video. The curly braces icon has been replaced by a folder with a curved arrow on it. If you hover on the icon you get a tooltip that says Open Settings (JSON). If Prettier is needed for another language like PHP or CSS then a .prettierignore file needs to be put in place to ignore javascript and javascriptreact. Cannot do this ignoring in the settings.json file in VS Code anymore.

## JS Vocabulary

`var`, `let`, and `const` are all variables. When you set the value of a variable you are declaring it

`let age = 300;` is a variable declaration

`console.log()` is a method

`console.log('Hey');` is a statement. Statments end in a `;` and tell JS to do something

Then there are code blocks, like this if statement that do not need a semicolon at the end

```
if (age > 10) {
    console.log('You are old');
}
```

**concatination**: two or more strings are combined into one using `+`

**interpolation**: when you put a variable inside of a string using `${variable}`

## 7 types in Javascript

SNOB'N'US - This is a crazy acronym that Wes came up with 😂

Sting
Number
Object
Boolean
Null
Undefined
Symbol

### Strings

Strings can be wrapped in `''` or `""` or ` `` `. I learned to use double quotes initially. The ESLint config I am using for this course uses single quotes. If you want use either single or double quotes in the actual string then you would use a forward slash `\` called an escape, eg ` 'She\'s so cool'`. I was warned by a JS developer that escaping can be very confusing so he just does back ticks for those special circumstances where quotes are needed. There are advantages to using back ticks like never having to worry about single or double quote or escape usage in the string. Also back ticks can handle line breaks in the string easily. You can also put html right into the string and have it render to the DOM.

### Numbers

Numbers are pretty straight forward. Check out line 37 an onward in the types.js file to see examples of how to round, get remainders, get random numbers, and handle money conversions. One thing to remember is that NaN stands for not a number but is a number when you check its type.

### Objects

Everything in JavaScript is an object so they are the building blocks. Objects are groups or collections of properties. They are not ordered. If you need specific order then use an array with indexing. The most common way to access the value of a specific property is with dot notation `person.first` returns 'Wes', `person.last` returns 'Bos'.
