# Beginner JavaScript

My notes for this Beginner JavaScript course by Wes Bos

## Gee Whiz

`cmmd opt j`, pulls up console in dev tools

`cmmd k`, clears console in both dev tools and terminal

`cntrl c` x2 exits out of node console

`! tab`, gives the basic boilerplate for an html file. This is b/c of Emmit plugin in VScode and snippets which he explains later

Installed Wes's ESLint-Prettier config package. This downloaded ESLint with a Prettier plugin locally in the begginer-javascript directory.
Here is the [REPO](https://github.com/wesbos/eslint-config-wesbos) with directions for installing.

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
