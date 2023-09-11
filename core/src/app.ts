import {
  Exercise,
  WorkoutComponent,
  Workout,
  WorkoutProgram,
  Progression,
} from "./models";

console.log("we runnin'");

const benchPress = new Exercise(
  "Incline Bench Press",
  "compound",
  new Progression("linear", 185)
);

const lunge = new Exercise("Squat", "compound", new Progression("linear", 70));

const deadlift = new Exercise(
  "Romanian Deadlift",
  "compound",
  new Progression("linear", 225)
);

const overheadPress = new Exercise(
  "Overhead Press",
  "compound",
  new Progression("linear", 135)
);

const chinUps = new Exercise(
  "Chin Ups",
  "compound",
  new Progression("linear", 25)
);

const bicepAccessory = new Exercise(
  "Bicep Curl",
  "accessory",
  new Progression("linear", 45)
);

const bicepAccessory2 = new Exercise(
  "Pinned Hammer Curl",
  "accessory",
  new Progression("linear", 45)
);

const tricepAccessory = new Exercise(
  "1 Arm Tricep Extension",
  "accessory",
  new Progression("linear", 30)
);

const shoulderAccessory = new Exercise(
  "Leaning Lateral Raise",
  "accessory",
  new Progression("linear", 35)
);

const backAccessory = new Exercise(
  "Bent Over Fly",
  "accessory",
  new Progression("linear", 40)
);
const trapsAccessory = new Exercise(
  "Shrugs",
  "accessory",
  new Progression("linear", 100)
);
const legAccessory = new Exercise(
  "Single Leg Hip Thrust",
  "accessory",
  new Progression("linear", 0)
);
const absAccessory = new Exercise(
  "Hanging Knee Raise",
  "accessory",
  new Progression("linear", 0)
);

const ohpWC = new WorkoutComponent([overheadPress, chinUps], "Shouldies");
const legsWC = new WorkoutComponent([lunge, deadlift], "Leggies");
const chestWC = new WorkoutComponent([benchPress, bicepAccessory], "Chest");

const day1Accessories = new WorkoutComponent(
  [shoulderAccessory, tricepAccessory],
  "Accessories"
);
const day2Accessories = new WorkoutComponent(
  [legAccessory, trapsAccessory],
  "Accessories"
);
const day3Accessories = new WorkoutComponent(
  [bicepAccessory2, backAccessory, absAccessory],
  "Accessories"
);

const day1 = new Workout("Shoulder Focus"); // Workouts defualt to linear progression
day1.addWorkoutComponent(ohpWC);
day1.addWorkoutComponent(day1Accessories);

const day2 = new Workout("Leg Focus");
day2.addWorkoutComponent(legsWC);
day2.addWorkoutComponent(day2Accessories);

const day3 = new Workout("Upper Chest Focus");
day3.addWorkoutComponent(chestWC);
day3.addWorkoutComponent(day3Accessories);

const program = new WorkoutProgram("3 Day Split", [day1, day2, day3]);

console.dir(program.generateWorkoutProgram(1), { depth: 30 });
