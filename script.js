"use strict";

const bellCurve = () => Math.trunc(Math.random() * 6 + 1) * 3;
const clickedBtn = document.querySelector(".btn-start");

const generatorContainer = document.getElementById("generator");
const infoContainer = document.getElementById("info");

document.querySelector(".btn-start").addEventListener("click", function () {
  clickedBtn.classList.add("btn-start-after");
  // clears the created element upon each "click"
  generatorContainer.innerHTML = "";
  let containerGen = document.createElement("form");
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
    nameBox.setAttribute("class", "name-box");

    containerInfo.append(nameBox);
    let nameInput = document.createElement("input");
    nameInput.setAttribute("class", "name-input");
    nameInput.type = "text";
    nameInput.id = "nameInput";
    nameInput.placeholder = "Please enter name";
    nameInput.name = "nameInput";
    nameInput.value = "";
    nameBox.append(nameInput);
    let nameBtn = document.createElement("button");
    nameBtn.setAttribute("class", "btn-name");
    nameBtn.innerHTML = "Submit";
    nameBtn.name = "nameSubmit";
    nameBtn.id = "nameSubmit";
    nameBox.append(nameBtn);
    
    

    infoContainer.append(containerInfo);
  });
});

// use setAttribute to set classes for buttons individually. replace "nav" with "div" and change CSS to individual classes and not element tags.  push changes

// remove classList items where neccesary. push changes

// next, build a document.querySelector off the confirm button to display the data for the "info" div. build in prompts (?) for the user to input name, class and race. push changes

// css the info div to move laterally across the page. push changes

// assign background images based on chosen class. push changes

// refactor a "refresh page" feature instead of telling the user to refresh the page if they get a fuckTard. push changes
