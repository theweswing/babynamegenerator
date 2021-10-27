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
let sexChosen = "M";

girlButton.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "pink";
    sexChosen = "F"
    console.log(sexChosen)
});

boyButton.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "rgb(92, 195, 255)";
    sexChosen = "M"
    console.log(sexChosen)
});

submissionForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const decadeInput = e.target.decade.value;;
    const startsWithInput = e.target.startsWith.value;
    // const popularityInput = e.target.currentPopularity.value;
    const minNameLength = e.target.floorLength.value;
    const maxNameLength = e.target.ceilingLength.value;
    
    fetch(`http://localhost:3000/${decadeInput}`)
        .then((response) => response.json())
        .then((namesArr) => {
        // if (sexChosen === "M") {
        //     const workingArray = namesArr.slice(100);
        //     console.log(workingArray);
        // } else if (sexChosen === "F") {
        //     const workingArray = namesArr.slice(0, 99);
        //     console.log(workingArray);
        // }
        namesArr.forEach((namesObject) => {
            let currentName = namesObject.name;
              if (
                namesObject.sex === sexChosen &&
                currentName.startsWith(startsWithInput) &&
                currentName.length >= minNameLength &&
                currentName.length <= maxNameLength
              ) {
                debugger;
                arrayOfNames.push(currentName);
                console.log(arrayOfNames);
              }
            
        });
        });
});





// function nameByFirstLetter(letterInput, namesObject) {
//     const currentName = namesObject.name
//     if (currentName.startsWith(letterInput)) {
//         startsWithArray.push(currentName)
//         console.log(startsWithArray);
//     }
// }

// function nameByLongerThen(lengthInput, namesObject) {
//     const currentName = namesObject.name
//     if (currentName.length >= lengthInput) {
//         longerThanArray.push(currentName)
        
        
//         console.log(longerThanArray)
//     }
// }

// function nameByShorterThen(lengthInput, namesObject) {
//     const currentName = namesObject.name
//     if (currentName.length <= length) {
//         shorterThanArray.push(currentName)
//         console.log(shorterThanArray)
//     }
// }


