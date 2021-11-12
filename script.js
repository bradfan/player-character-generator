"use strict";

const bellCurve = () =>
  Math.trunc(Math.random() * 6 + 1) +
  Math.trunc(Math.random() * 6 + 1) +
  Math.trunc(Math.random() * 6 + 1);
const clickedBtn = document.querySelector(".btn-start");
const hideHeader = document.querySelector(".header");
const generatorContainer = document.getElementById("generator");
const infoContainer = document.getElementById("info");
infoContainer.setAttribute("class", "info-large");

document.querySelector(".btn-start").addEventListener("click", function () {
  hideHeader.classList.add("header-after");
  clickedBtn.classList.add("btn-start-after");
  // clears the created element upon each "click"
  generatorContainer.innerHTML = "";
  let containerGen = document.createElement("form");
  containerGen.setAttribute("class", "uniform");
  const description = document.createElement("h3");
  description.innerHTML = "Attributes";
  containerGen.append(description);
  let attributes = document.createElement("ul");
  containerGen.append(attributes);
  let strength = document.createElement("li");
  strength.innerHTML = `Strength: ${bellCurve()}`;
  attributes.append(strength);
  let constitution = document.createElement("li");
  constitution.innerHTML = `Constitution: ${bellCurve()}`;
  attributes.append(constitution);
  let dexterity = document.createElement("li");
  dexterity.innerHTML = `Dexterity: ${bellCurve()}`;
  attributes.append(dexterity);
  let intelligence = document.createElement("li");
  intelligence.innerHTML = `Intelligence: ${bellCurve()}`;
  attributes.append(intelligence);
  let wisdom = document.createElement("li");
  wisdom.innerHTML = `Wisdom: ${bellCurve()}`;
  attributes.append(wisdom);
  let charisma = document.createElement("li");
  charisma.innerHTML = `Charisma: ${bellCurve()}`;
  attributes.append(charisma);
  let buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "confirm");
  generatorContainer.append(buttonDiv);
  let button = document.createElement("button");
  button.setAttribute("class", "btn-confirm");
  button.innerHTML =
    "If you like this character please click here; otherwise hit refresh.";
  button.name = "confirm";
  button.id = "confirm";
  // button.setAttribute("class", "btn");
  buttonDiv.append(button);

  generatorContainer.append(containerGen);

  document.querySelector(".btn-confirm").addEventListener("click", function () {
    const clickedConfirm = document.querySelector(".btn-confirm");
    clickedConfirm.classList.add("btn-confirm-after");
    let containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");
    let nameBox = document.createElement("div");
    nameBox.id = "info-box";
    nameBox.setAttribute("class", "uniform");
    containerInfo.append(nameBox);
    let nameInput = document.createElement("input");
    nameInput.setAttribute("class", "name-input");
    nameInput.type = "text";
    nameInput.id = "name-input";
    nameInput.placeholder = "Please enter name";
    nameInput.name = "name-input";
    // nameInput.value = text;
    nameBox.append(nameInput);
    let nameBtn = document.createElement("button");
    nameBtn.setAttribute("class", "btn-dynamic");
    nameBtn.innerHTML = "Submit";
    nameBtn.id = "name-submit";
    nameBox.append(nameBtn);
    infoContainer.append(containerInfo);

    document.querySelector("#name-submit").addEventListener("click", function () {
        let nameVar = document.getElementById("name-input").value;
        let charName = document.createElement("h2");
        charName.setAttribute("class", "name-title");
        if (nameVar == "") return alert("You must enter a name.");
        charName.innerHTML = `Name: ${nameVar}`;
        nameBox.append(charName);
        const inputOne = document.getElementById("name-input");
        inputOne.remove();
        const submitOne = document.getElementById("name-submit");
        submitOne.remove();
        let classBox = document.createElement("div");
        classBox.id = "#info-box";
        classBox.setAttribute("class", "uniform");
        containerInfo.append(classBox);
        let classInput = document.createElement("input");
        classInput.setAttribute("class", "class-input");
        classInput.type = "text";
        classInput.id = "class-input";
        classInput.placeholder = "Please enter class";
        classInput.name = "class-input";
        classBox.append(classInput);
        let classBtn = document.createElement("button");
        classBtn.setAttribute("class", "btn-dynamic");
        classBtn.type = "submit";
        classBtn.id = "class-submit";
        classBtn.innerHTML = "Submit";
        classBox.append(classBtn);

        infoContainer.append(containerInfo);

        document.querySelector("#class-submit").addEventListener("click", function () {
          let classVar = document.getElementById("class-input").value;
          let charClass = document.createElement("h2");
          charClass.setAttribute("class", "class-title");
          if (classVar == "") return alert("You must enter a class.");
          charClass.innerHTML = `Class: ${classVar}`;
          classBox.append(charClass);
          const inputTwo = document.getElementById("class-input");
          inputTwo.remove();
          const submitTwo = document.getElementById("class-submit");
          submitTwo.remove();
          let raceBox = document.createElement("div");
          raceBox.id = "#info-box";
          raceBox.setAttribute("class", "uniform");
          containerInfo.append(raceBox);
          let raceInput = document.createElement("input");
          raceInput.setAttribute("class", "race-input");
          raceInput.type = "text";
          raceInput.id = "race-input";
          raceInput.placeholder = "Please enter race";
          raceInput.name = "race-input";
          raceBox.append(raceInput);
          let raceBtn = document.createElement("button");
          raceBtn.setAttribute("class", "btn-dynamic");
          raceBtn.type = "submit";
          raceBtn.id = "race-submit";
          raceBtn.innerHTML = "Submit";
          raceBox.append(raceBtn);
  
          infoContainer.append(containerInfo);
        });
      });

  });
});

// use setAttribute to set classes for buttons individually. replace "nav" with "div" and change CSS to individual classes and not element tags.  push changes 11/10

// remove classList items where neccesary. push changes 11/10

// look for where we can eliminate and simplify code. this function is getting huge. I could not get the addEventlisteners to fire when the querySelectors were not nested.

// next, build a document.querySelector off the confirm button to display the data for the "info" div. build in prompts (?) for the user to input name, class and race. push changes IN PROGRESS
// get rid of radio buttons and use input from User. too much code and the radio buttons aren't working.

// look into removing elements once they are no longer neccesary

// ATTRIBUTES IS BEING COVERED UP CONTAINERiNFO(/)

// css the info div to move laterally across the page. look at display for info-large and containerInfo. push changes

// assign background images based on chosen class. push changes

// refactor a "refresh page" feature instead of telling the user to refresh the page if they get a fuckTard. push changes
