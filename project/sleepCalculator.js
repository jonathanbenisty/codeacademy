// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

// The program will determine the actual and ideal hours of sleep for each night of the last week.

// Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

const getSleepHours = day => {
    if (day === 'monday') {
     return 8;
   } else if (day === 'tuesday') { 
     return 6;
   } else if (day === 'wednesday') { 
     return 8;
   } else if (day === 'thursday') { 
     return 3;
   } else if (day === 'friday') { 
     return 8;
   } else if (day === 'saturday') { 
     return 8;
   } else if (day === 'sunday') { 
     return 12;
   }
 };
 
 const getActualSleepHours = () =>
 getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
 
 
 const getIdealSleepHours = () => {
   let idealHours = 8;
   return idealHours * 7;
 };
 
 const calculateSleepDebt = () => {
   let actualSleepHours = getActualSleepHours();
   let idealSleepHours = getIdealSleepHours();
 
   if (actualSleepHours === idealSleepHours) {
     return 'You slept enough, no need more, no need less'
   }
 
   if (actualSleepHours > idealSleepHours) {
     return 'you are a life enjoyer, you slept' + (actualSleepHours - idealSleepHours) + 'H more than needed'
   }
 
   if (actualSleepHours < idealSleepHours) {
     return 'you need to sleep more. You miss '+ (actualSleepHours - idealSleepHours) +'H to get a complete rest!'
   };
 }
 
 console.log(calculateSleepDebt());