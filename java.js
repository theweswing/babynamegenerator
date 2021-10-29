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
const result = document.querySelector("#displayName");
const resultStats = document.getElementById("displayNameStatistics")
const resultRanking = document.getElementById("displayNameRank")
const girlButton = document.getElementById("girlButton");
const boyButton = document.getElementById("boyButton");
const clearButton = document.querySelector("#clearForm");
const form = document.querySelector("#submissionForm");

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

clearButton.addEventListener("click", (e) => {
    form.reset()
    arrayOfNames=[]
    result.textContent=""
    resultStats.textContent=""
    resultRanking.textContent=""
})

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
        const currentDecadeArray=[...namesArr]
        namesArr.forEach((namesObject) => {
            let currentName = namesObject.name;
            if (
                namesObject.sex === sexChosen &&
                currentName.startsWith(startsWithInput) &&
                currentName.length >= minNameLength &&
                currentName.length <= maxNameLength
            ) {
                arrayOfNames.push(currentName);
            }
            
        });
        min = Math.ceil(0);
        max = Math.floor(arrayOfNames.length);
        result.textContent = arrayOfNames[Math.floor(Math.random() * (max - min) + min)]
        currentDecadeArray.forEach((nameObject) => {
            if (result.textContent === nameObject.name){
                resultStats.textContent=`In the ${decadeInput}, there were ${nameObject.population} babies born with the name ${nameObject.name}. That’s a lot of ${nameObject.name}s!`
                let girlsOfDecade=currentDecadeArray.slice(0,100)
                let boysOfDecade=currentDecadeArray.slice(100)
                console.log(girlsOfDecade)
                console.log(boysOfDecade)
                if (nameObject.sex==="F"){
                    let indexRanking=(girlsOfDecade.findIndex(girlname => girlname.name===result.textContent))
                    let realRank=(indexRanking+1)
                    resultRanking.textContent=`${nameObject.name} was ranked #${realRank} in the Social Security Administration record of the ${decadeInput}' most common girl names.`
                }
                if (nameObject.sex==="M"){
                    let indexRanking=(boysOfDecade.findIndex(boyname => boyname.name===result.textContent))
                    let realRank=(indexRanking+1)
                    resultRanking.textContent=`${nameObject.name} was ranked #${realRank} in the Social Security Administration record of the ${decadeInput}' most common boy names.`
                }
            }
        })
        if (arrayOfNames.length<1){
            result.textContent = "Sorry, no name found that fits your search. Clear and try again!"
        }
        })
        
});

// function pullNameStats(){
//     savedNamesArray.forEach((namesObject) => {
//         if (result.textContent === namesObject.name){
//             resultStats.textContent = `In ${decadeInput}, ${namesObject.population} were named ${namesObject.name}`
//         }
//     })
// }





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


