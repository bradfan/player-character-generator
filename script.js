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
    nameBtn.setAttribute("class", "btn-name");
    nameBtn.innerHTML = "Submit";
    nameBtn.id = "name-submit";
    nameBox.append(nameBtn);

    infoContainer.append(containerInfo);

    document.querySelector(".btn-name").addEventListener("click", function () {
      let nameVar = document.getElementById("name-input").value;
      let charName = document.createElement("h2");
      charName.setAttribute("class", "name-title");
      if (nameVar == "") return alert("You must enter a name.");
      charName.innerHTML = `Name: ${nameVar}`;
      nameBox.append(charName);
      const clickedName = document.querySelector(".btn-name");
      clickedName.classList.add("btn-name-after");
      const clickedInput = document.querySelector(".name-input");
      clickedInput.classList.add("name-input-after");
      let classForm = document.createElement("form");
      classForm.id = "#info-box";
      classForm.setAttribute("class", "uniform");
      let classPrompt = document.querySelector("h3");
      classPrompt.setAttribute("class", "class-title");
      classPrompt.innerHTML = "Choose which class your character is";
      classForm.append(classPrompt);

      let fighterBtn = document.createElement("input");
      let fighterBtnLbl = document.createElement("label");
      fighterBtnLbl.for = "fighterBtn";
      fighterBtnLbl.innerHTML = "Fighter  ";
      classForm.append(fighterBtnLbl);
      fighterBtn.type = "radio";
      fighterBtn.name = "profession";
      fighterBtn.onclick = "formFunction(this.value)";
      fighterBtn.value = "Fighter";

      classForm.append(fighterBtn);

      let palladinBtn = document.createElement("input");
      let palladinBtnLbl = document.createElement("label");
      palladinBtnLbl.for = "palladinBtn";
      palladinBtnLbl.innerHTML = "Palladin  ";
      classForm.append(palladinBtnLbl);
      palladinBtn.type = "radio";
      palladinBtn.name = "profession";
      palladinBtn.onclick = "formFunction(this.value)";
      palladinBtn.value = "Palladin";

      classForm.append(palladinBtn);

      let rangerBtn = document.createElement("input");
      let rangerBtnLbl = document.createElement("label");
      rangerBtnLbl.for = "rangerBtn";
      rangerBtnLbl.innerHTML = "Ranger  ";
      classForm.append(rangerBtnLbl);
      rangerBtn.type = "radio";
      rangerBtn.name = "profession";
      rangerBtn.onclick = "formFunction(this.value)";
      rangerBtn.value = "Ranger";

      classForm.append(rangerBtn);

      let clericBtn = document.createElement("input");
      let clericBtnLbl = document.createElement("label");
      clericBtnLbl.for = "clericBtn";
      clericBtnLbl.innerHTML = "Cleric  ";
      classForm.append(clericBtnLbl);
      clericBtn.type = "radio";
      clericBtn.name = "profession";
      clericBtn.onclick = "formFunction(this.value)";
      clericBtn.value = "Cleric";

      classForm.append(clericBtn);

      let druidBtn = document.createElement("input");
      let druidBtnLbl = document.createElement("label");
      druidBtnLbl.for = "druidBtn";
      druidBtnLbl.innerHTML = "Druid  ";
      classForm.append(druidBtnLbl);
      druidBtn.type = "radio";
      druidBtn.name = "profession";
      druidBtn.onclick = "formFunction(this.value)";
      druidBtn.value = "druid";

      classForm.append(druidBtn);

      let magicUserBtn = document.createElement("input");
      let magicUserBtnLbl = document.createElement("label");
      magicUserBtnLbl.for = "magicUserBtn";
      magicUserBtnLbl.innerHTML = "Magic-User  ";
      classForm.append(magicUserBtnLbl);
      magicUserBtn.type = "radio";
      magicUserBtn.name = "profession";
      magicUserBtn.onclick = "formFunction(this.value)";
      magicUserBtn.value = "MagicUser";

      classForm.append(magicUserBtn);

      let illusionistBtn = document.createElement("input");
      let illusionistBtnLbl = document.createElement("label");
      illusionistBtnLbl.for = "illusionistBtn";
      illusionistBtnLbl.innerHTML = "Illusionist  ";
      classForm.append(illusionistBtnLbl);
      illusionistBtn.type = "radio";
      illusionistBtn.name = "profession";
      illusionistBtn.onclick = "formFunction(this.value)";
      illusionistBtn.value = "Illusionist";

      classForm.append(illusionistBtn);

      let thiefBtn = document.createElement("input");
      let thiefBtnLbl = document.createElement("label");
      thiefBtnLbl.for = "thiefBtn";
      thiefBtnLbl.innerHTML = "Thief  ";
      classForm.append(thiefBtnLbl);
      thiefBtn.type = "radio";
      thiefBtn.name = "profession";
      thiefBtn.onclick = "formFunction(this.value)";
      thiefBtn.value = "Thief";

      classForm.append(thiefBtn);

      let assasinBtn = document.createElement("input");
      let assasinBtnLbl = document.createElement("label");
      assasinBtnLbl.for = "assasinBtn";
      assasinBtnLbl.innerHTML = "Assasin  ";
      classForm.append(assasinBtnLbl);
      assasinBtn.type = "radio";
      assasinBtn.name = "profession";
      assasinBtn.onclick = formFunction(this.value);
      assasinBtn.value = "Assasin";

      classForm.append(assasinBtn);

      let submitClass = document.createElement("input");
      submitClass.type = "text";
      submitClass.id = "result";
      submitClass.placeholder = "Your selection.";
      classForm.append(submitClass);
      let submitClass2 = document.createElement("input");
      submitClass2.type = "submit";
      submitClass2.value = "Submit class";

      classForm.append(submitClass2);

      // this function (also saved in sandbox) returns cannot read properties of null. It works in standard html/js but not dynamically. It may be out of place.
      // function formFunction(profession) {
      //   console.log("Profession", profession);
      //   document.getElementById("result").value = profession;
      // }

      infoContainer.append(classForm);

      // document.querySelector('.class').addEventListener('submit', function() {
      //   let classVar = document.getElementsByName("class").value;
      //   let charClass = document.createElement("h2");
      //   charClass.setAttribute("class", "class-title");

      //   charClass.innerHTML = `Name: ${classVar}`;
      //   nameBox.append(charClass);
      // })
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
