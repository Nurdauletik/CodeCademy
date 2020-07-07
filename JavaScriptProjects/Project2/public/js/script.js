// Function to create an array 
const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

//Function to return array by name 
const getDrumArrayByName = (name) =>{
    switch(name){
        case 'kicks': 
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

// This function should flip the boolean value in the correct array at the specified index.
const toggleDrum = (drumArrayName, index) => {
    const drums = getDrumArrayByName(drumArrayName);
    if(!drums || index>15 || index<0){
        return;
    }
    drums[index] = !drums[index];
};

//Function that takes an array name string and sets all values in the correct array to false
const clear = (drumArrayName) => {
    const drums = getDrumArrayByName(drumArrayName);
    if(drums){
        drums.fill(false);
    }
};

//Function that takes an array name string and flips the boolean value of all elements in the correct array
const invert = (drumArrayName) => {
    const drums = getDrumArrayByName(drumArrayName);
    if(!drums) {
        return;
    }
    for (let i=0; i< drums.length; i++){
        drums[i] = !drums[i];
    }
};

/* 
Bonus:
a function called getNeighborPads that accepts 
an x, y, and a size parameter. In the application, 
these values refer to the synth grid: 
x and y zero-indexed from the bottom left of the 
grid, and size is a number representing the number 
of rows/columns in the square. getNeighborPads should 
return an array of neighbors, each in the form [xValue, yValue]. 
Neighbors are the squares immediately to the left, right, 
above, and below a grid position.
*/
const getNeighborPads = (x, y, size) => {
    const neighborPads = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
      return neighborPads;
    }
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    return neighborPads.filter((neighbor) => {
      return neighbor.every((val) => {
        return val >= 0 && val < size;
      });
    });
  };