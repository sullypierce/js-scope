//CONJUNCTION FUNCTION

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`;
//     console.log(conjoinedWord);
// }

// conjunction("Master", "Card");


//MOD SQUAD

//     const ModSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         series: {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     let HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//     HTMLRepresentation += `<div>${member}</div>`
//     })


// document.querySelector(".show-info").innerHTML = HTMLRepresentation




//SIMON SAYS
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]
let invNum = 0;
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    const invalidLocation = false;
    if (currentLocation[0] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
        invNum ++;
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
console.log(`There were ${invNum} invalid locations`)