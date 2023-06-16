             // section a
             let engineIndicatorLight = "red blinking";
             let spaceSuitsOn = true;
             let shuttleCabinReady = true;
             let crewStatus = spaceSuitsOn && shuttleCabinReady;
             let computerStatusCode = 200;
             let shuttleSpeed = 15000;
             console.log(shuttleCabinReady)
             
                       // section b
             if (engineIndicatorLight === "green") {
                console.log("engines have started");
             } else if (engineIndicatorLight === "green blinking") {
                console.log("engines are preparing to start");
             } else {
                console.log("engines are off");
             }
                   // section c
                   if (crewStatus === true) {
                     console.log("crew is ready");
                   } else {
                     console.log("crew not ready");
                   }
                   
                   if (computerStatusCode === 200) {
                     console.log("please stand by. computer is rebooting")
                   } else if (computerStatusCode === 400) {
                     console.log("Success! Computer online.")
                   } else {
                     console.log("ALERT: Computer offline!")
                   }
                   
                   if (shuttleSpeed > 17500) {
                     console.log("ALERT: Escape velocity reached!")
                   } else if (shuttleSpeed < 8000) {
                     console.log("ALERT: Cannot maintain orbit") 
                   } else {
                     console.log("Stable speed")
                   }
                   
                   
                             //  section d 
               if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
                console.log("all systems go");
             } else {
                console.log("WARNING. Not ready");
             }
             
             if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
                console.log("WARNING. Not ready");
             } else {
                console.log("all systems go");
             }
             
             //section e 
             
             let fuelLevel = 18000;
             let engineTemperature=2500;
             
             if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight == "red blinking") { 
             console.log ("ENGINE FAILURE IMMINENT!");
             } 
             else if (fuelLevel > 20000 && engineTemperature <= 2500) {
               console.log("Full tank. Engines good.")
             }
             else if (fuelLevel > 10000 && engineTemperature <= 2500) {
               console.log("Fuel level above 50%.  Engines good.")
             }
             else if (fuelLevel <= 5000 ||  engineTemperature > 2500) {
               console.log("Check fuel level. Engines running hot.")
             }
             else if (fuelLevel > 5000 ||  engineTemperature <= 2500) {
               console.log("Fuel level above 25%. Engines good.")
             }
             else {
               console.log("Fuel and engine status pending...")
             }
               
             
             
             
                     // section e
             let  commandOverride = true || false;
             
             if (fuelLevel > 20000 && engineIndicatorLight === !"red blinking" || commandOverride === true) {
               console.log("Cleared to launch!")
             } else {
               console.log("Launch scrubbed!")
             }