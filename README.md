WorkoutProgram

- schedule
  - date or 1 off 1 on
-

- add workouts
- remove workouts
-

## Setup

use node.js instead

```
tsc filename
```

Spits out a .js file for the .ts file.

For Compiling Code:
There should be a src and build directory

Create ts-config

```
tsc --init
```

Set the rootDir and outDir.

Then tsc -w

Now we can compile the JS code with:

```
node build/index.js
```
