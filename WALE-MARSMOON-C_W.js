  // assigning names to variables
let nameOfSpaceShuttle = "determination";
  shuttleSpeed = 17500,
  distanceToMars = 225000000
  distanceToMoon = 384400,
  milesPerKilometer = 0.621;
  
  // printing out the datatype
  console.log(typeof nameOfSpaceShuttle)
  console.log(typeof shuttleSpeed)
  console.log(typeof distanceToMars)
  console.log(typeof milesPerKilometer)
  
  // calculating hours to reach the mars
  let milesToMars =  distanceToMars * milesPerKilometer;
  console.log(milesToMars);
  let hoursToGetToMars = milesToMars / shuttleSpeed;
  console.log(hoursToGetToMars);
  let daysToMars = hoursToGetToMars / 24;
  console.log(daysToMars);
  
  console.log(nameOfSpaceShuttle + " will take " + daysToMars + " days to reach the moon");
  
  // calculating hours to reach the moon
  let milesToMoon =  distanceToMoon * milesPerKilometer;
  console.log(milesToMoon);
  let hoursToGetToMoon = milesToMoon / shuttleSpeed;
  console.log(hoursToGetToMoon);
  let daysToMoon = hoursToGetToMoon / 24;
  console.log(daysToMoon);
  
  console.log(nameOfSpaceShuttle + " will take " + daysToMoon + " days to reach the moon");