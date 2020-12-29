// Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

// {speciesName: 'shark', numTeeth: 50 }
// and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .

const sortSpeciesByTeeth = speciesArray.sort((a, b) => parseFloat(a.numTeeth) - parseFloat(b.numTeeth));

console.log(sortSpeciesByTeeth);