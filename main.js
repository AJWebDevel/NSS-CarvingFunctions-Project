/* 
   below function will return object with properties of 
   type: "wood block", 
   length: 10, 
   material: "pine", 
   and purpose: "flute"
   */
const createWoodBlock = () => {
    const woodObject = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return woodObject
}
/*Below function will return string that says, 
"The 10-inch, pine woodblock was carved into a wooden flute"
*/
const createBeautifulCarving = (woodObject) => {
    const woodString = `The ${woodObject.length}-inch, ${woodObject.material} woodblock was carved into a wooden ${woodObject.purpose}.`
    return woodString
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)
