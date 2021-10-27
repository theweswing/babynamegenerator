// // Sends array newArray to the json server 
// const sleep = (milliseconds) => {
// return new Promise((resolve) => setTimeout(resolve, milliseconds));
// };

// const doSomething = async () => {
// for (let x = 0; x < namesArray.length; x++) {
//     await sleep(80);
//     console.log("Iterated");
//     splitOnCommas = namesArray[x]
//     const nameData = {
//     name: splitOnCommas[0],
//     sex: splitOnCommas[1],
//     population: splitOnCommas[2],
//     };
//     function sendToPost() {
//     const sendData = {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         },
//         body: JSON.stringify(nameData),
//     };

//     fetch("http://localhost:3000/recents", sendData)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (object) {
//         console.log(object);
//       });
//     }
//     sendToPost()
// }
// };

// doSomething();

let selectedDecade = "1800s"
let arrayOfMales = []
let arrayOfFemales = []
let startsWithArray = []
let longerThenArray = []
let shorterThenArray = []

// fetch is interpolated to take in whatever is entered into selectedDecade

fetch(`http://localhost:3000/${selectedDecade}`)
.then((response) => response.json())
.then((namesArr) => {
    namesArr.forEach((namesObject) => {
        nameByFirstLetter("A", namesObject)
    });
});


function maleNamesOnly(namesObject) {
    if (namesObject.sex === "M") {
        arrayOfMales.push(namesObject.name)
        console.log(arrayOfMales)
    }
}

function femaleNamesOnly(namesObject) {
    if (namesObject.sex === "F") {
        arrayOfFemales.push(namesObject.name);
        console.log(arrayOfFemales)
    }
}

function nameByFirstLetter(letterInput, namesObject) {
    const currentName = namesObject.name
    if (currentName.startsWith(letterInput)) {
        startsWithArray.push(currentName)
        console.log(startsWithArray);
    }
}

function nameByLongerThen(lengthInput, namesObject) {
    const currentName = namesObject.name
    if (currentName.length >= lengthInput) {
        longerThenArray.push(currentName)
        console.log(longerThenArray)
    }
}

function nameByShorterThen(lengthInput, namesObject) {
    const currentName = namesObject.name
    if (currentName.length <= length) {
        shorterThenArray.push(currentName)
        console.log(shorterThenArray)
    }
}

