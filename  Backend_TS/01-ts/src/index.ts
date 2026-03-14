
function add(a: number, b: number) {
  return a + b
}
console.log(add(9, 2))
 
/*  Basic setup for writing code in TypeScript (Node.js):

1. Create a `src` folder where your TypeScript source code will be written.

2. Create a `tsconfig.json` file.
   This file adjusts the settings as defined by the user and specifies where the compiled JavaScript files should be placed.

3. Run the following command in the terminal:
   `tsc -p .`
   This tells the TypeScript compiler to read the configuration(adjust settings) from `tsconfig.json` and compile `.ts` files into `.js` files. The compiled files are stored in the output directory (e.g., `dist`).

4. Generate a `.gitignore` file for Node.js:
   `npx gitignore Node`
   This prevents unnecessary files (like `node_modules`) from being pushed to Git.

5. Install TypeScript as a development dependency:
   `npm install typescript -D`

6. Install `tsc-watch` as a development dependency:
   `npm install tsc-watch -D`

7. Inside `package.json`, add the following script:

   `"dev": "tsc-watch --onSuccess \"node dist/index.js\""`
   
   This command watches for changes in TypeScript files, recompiles them automatically, and runs the compile JavaScript file and update the code inside it.

8. Run the development server:
   `npm run dev`
   this command watches ts file and compile them, on success it will run the node and update the js file inside dist. 
   */