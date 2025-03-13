const submitButton = document.getElementById("submitButtonId");

const selectedShowcaser = document.getElementById("selectedShowcaserId");

const sections = Array.from(document.querySelectorAll("section"));

const buttonsList = sections[0].querySelector("nav");

const buttons = Array.from(buttonsList.querySelectorAll("button"));

let rate = -1;



function pressButton(param) {

    rate = param;
    
     buttons.forEach(Button => {

        Button.classList.remove("active");

        Button.setAttribute("aria-pressed", "false");
    });
    
     buttons[param - 1].classList.add("active");
    
     buttons[param - 1].setAttribute("aria-pressed", "true");

     buttonsList.setAttribute("aria-valuenow", param);
}


buttons.forEach(Button => {

    Button.addEventListener("click", function() {

        pressButton(Number(this.textContent)); // Convert to number before passing
    });
});



function submit() {

    if(0 > rate){

        alert("Press one of those number buttons to define your rate: the given rate is the number that is in the button.");

        return;
    }

     selectedShowcaser.textContent = `You selected ${rate} out of 5`;

     sections.forEach(Section => {

        Section.classList.toggle("active");
    });
}

submitButton.addEventListener("click", submit);