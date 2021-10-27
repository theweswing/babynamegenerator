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

let girlButton = document.getElementById("girlButton");
let boyButton = document.getElementById("boyButton");

let arrayOfNames = [];
let sexChosen = "";
let decadeChosen = "";

girlButton.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "pink";
    sexChosen = "F"
});

boyButton.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "rgb(92, 195, 255)";
    sexChosen = "M"
});




// fetch is interpolated to take in whatever is entered into selectedDecade

fetch(`http://localhost:3000/${selectedDecade}`)
.then((response) => response.json())
.then((namesArr) => {
    namesArr.forEach((namesObject) => {
        if (sexChosen === "M") {
            maleNamesOnly(namesObject)
        }
        else if(sexChosen === "F") {
            femaleNamesOnly(namesObject);
        }


    });
});


function maleNamesOnly(namesObject) {
    if (namesObject.sex === "M") {
        arrayOfNames.push(namesObject.name)
        console.log(arrayOfNames)
    }
}

function femaleNamesOnly(namesObject) {
    if (namesObject.sex === "F") {
        arrayOfNames.push(namesObject.name);
        console.log(arrayOfNames)
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
        longerThanArray.push(currentName)
        
        
        console.log(longerThanArray)
    }
}

function nameByShorterThen(lengthInput, namesObject) {
    const currentName = namesObject.name
    if (currentName.length <= length) {
        shorterThanArray.push(currentName)
        console.log(shorterThanArray)
    }
}


