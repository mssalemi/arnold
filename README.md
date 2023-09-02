# WorkoutProgram

#### Setup Instructions

This setup uses node.js to easily run and test out TS code.

To Compile Individual Files:

```
tsc filename
```

- This will generate a `.js` for each `.ts` file

For Compiling Code:

- Create `src` and `build` directory

Create ts-config:

```
tsc --init
```

- Set the `rootDir` and `outDir` to the `src` and `build` directories.

Then to use the `tsc` - typescript compiler in `watch` mode, use the command with the flag:

```
tsc - w
```

Now we can compile the JS code with:

```
node build/index.js
```

To make things easy, we can add the following script to our package.json:

```
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*",
```

Will build `TS` code and then watch for code for changes with nodemon.

Test
