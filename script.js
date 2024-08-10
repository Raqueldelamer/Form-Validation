function tooShort(firstName) {
    if(firstName.length < 5) {
        return true;
    } else {
        return false;
    }
}
function hasM(firstName) {
    if(firstName.includes("m")) {
        return true;
    } else {
        return false;
    }
}

let marrySoonElm = document.getElementById("marry-soon");

let marryFarElm = document.getElementById("marry-far");

let firstNameInput = document.getElementById("firstname");

function handleChangeInMarrySoon() {
    console.log("Bonjour Monde");

    let input = firstNameInput.value;
    let isShort = tooShort(input);

    if(isShort) {
        marrySoonElm.style.color = "pink";
        console.log("You will marry sooner than later!"); 
    } else {
        marryFarElm.style.color = "blue";
        console.log("You will have luck in a foreign country!")
    }
}

    function handleChangeInM() {
        let input = firstNameInput.value;
        let m =hasM(input);
        if(m) {
            marrySoonElm.style.color = "red";
        
        } 
    }

    firstNameInput.addEventListener("input" , handleChangeInMarrySoon)

    firstNameInput.addEventListener("input" , handleChangeInM)