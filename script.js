"use strict";

const bellCurve = () =>
  Math.trunc(Math.random() * 6 + 1) +
  Math.trunc(Math.random() * 6 + 1) +
  Math.trunc(Math.random() * 6 + 1);
const clickedBtn = document.querySelector(".btn-start");
const hideHeader = document.querySelector(".header");
const generatorContainer = document.getElementById("generator");
const infoContainer = document.getElementById("info");
// infoContainer.setAttribute("class", "info-large");

document.querySelector(".btn-start").addEventListener("click", function () {
  
  // clears the created element upon each "click"
  generatorContainer.innerHTML = "";
  const startRemove = document.getElementById("start-nav");
  startRemove.remove();
  let containerGen = document.createElement("form");
  containerGen.setAttribute("class", "attributes");
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
  buttonDiv.id="confirm";
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
    
    const confirmRemove = document.getElementById("confirm");
    confirmRemove.remove();
    let containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    let nameBox = document.createElement("div");
    nameBox.id = "name-box";
    nameBox.setAttribute("class", "uniform");
    let inputBox = document.createElement("div");
    inputBox.id = "input-box";
    nameBox.append(inputBox);
    let nameInput = document.createElement("input");
    nameInput.setAttribute("class", "name-input");
    nameInput.type = "text";
    nameInput.id = "name-input";
    nameInput.placeholder = "Name";
    nameInput.name = "name-input";
    inputBox.appendChild(nameInput);
    let nameBtn = document.createElement("button");
    nameBtn.setAttribute("class", "btn-dynamic");
    nameBtn.innerHTML = "Confirm";
    nameBtn.id = "name-submit";
    inputBox.append(nameBtn);
    containerInfo.append(nameBox);

    let classBox = document.createElement("div");
    // classBox.id = "#info-box";
    classBox.setAttribute("class", "uniform");
    let inputBox2 = document.createElement("div");
    inputBox2.id = "input-box2";
    classBox.append(inputBox2);
    let values = ["Fighter", "Palladin", "Ranger", "Cleric", 'Druid', 'Magic-user', 'Illusionist', 'Thief', 'Assassin'];
    let classInput = document.createElement("select");
    classInput.setAttribute("class", "class-input");
    // classInput.type = "text";
    classInput.id = "class-input";
    // classInput.placeholder = "Class";
    classInput.name = "class-input";

    for (const val of values){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        classInput.appendChild(option);
    }
    const classLabel = document.createElement("label");
    classLabel.innerHTML = "Choose your Class: "
    classLabel.htmlFor = "class";
    inputBox2.append(classLabel)
    inputBox2.append(classInput);
    let classBtn = document.createElement("button");
    classBtn.setAttribute("class", "btn-dynamic");
    classBtn.type = "submit";
    classBtn.id = "class-submit";
    classBtn.innerHTML = "Confirm";
    inputBox2.append(classBtn);
    containerInfo.append(classBox);
    
    let raceBox = document.createElement("div");
    // raceBox.id = "#info-box";
    raceBox.setAttribute("class", "uniform");
    let inputBox3 = document.createElement("div");
    inputBox3.id = "input-box3";
    raceBox.append(inputBox3);
    let races = ["Human", "Elf", "Dwarf", "Halfling", 'Half-Elf', 'Half-Orc'];
    let raceInput = document.createElement("select");
    raceInput.setAttribute("class", "race-input");
    // classInput.type = "text";
    raceInput.id = "race-input";
    // classInput.placeholder = "Class";
    raceInput.name = "race-input";

    for (const val of races){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        raceInput.appendChild(option);
    }
    const raceLabel = document.createElement("label");
    raceLabel.innerHTML = "Choose your Race: "
    raceLabel.htmlFor = "Race";
    inputBox3.append(raceLabel)
    inputBox3.append(raceInput);
    let raceBtn = document.createElement("button");
    raceBtn.setAttribute("class", "btn-dynamic");
    raceBtn.type = "submit";
    raceBtn.id = "race-submit";
    raceBtn.innerHTML = "Confirm";
    inputBox3.append(raceBtn);
    containerInfo.append(raceBox);

    let sexBox = document.createElement("div");
    // sexBox.id = "#info-box";
    sexBox.setAttribute("class", "uniform");
    let inputBox4 = document.createElement("div");
    inputBox4.id = "input-box4";
    sexBox.append(inputBox4);
    let sex = ["Male", "Female"];
    let sexInput = document.createElement("select");
    sexInput.setAttribute("class", "sex-input");
    // classInput.type = "text";
    sexInput.id = "sex-input";
    // classInput.placeholder = "Class";
    sexInput.name = "sex-input";

    for (const val of sex){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        sexInput.appendChild(option);
    }
    const sexLabel = document.createElement("label");
    sexLabel.innerHTML = "Choose your Sex: "
    sexLabel.htmlFor = "Race";
    inputBox4.append(sexLabel)
    inputBox4.append(sexInput);
    let sexBtn = document.createElement("button");
    sexBtn.setAttribute("class", "btn-dynamic");
    sexBtn.type = "submit";
    sexBtn.id = "sex-submit";
    sexBtn.innerHTML = "Confirm";
    inputBox4.append(sexBtn);
    containerInfo.append(sexBox);

    let alignmentBox = document.createElement("div");
    // alignmentBox.id = "#info-box";
    alignmentBox.setAttribute("class", "uniform");
    let inputBox5 = document.createElement("div");
    inputBox5.id = "input-box5";
    alignmentBox.append(inputBox5);
    let alignment = ["Lawful-Good", "Neutral-Good", "Chaotic-Good", "Lawful-Neutral", "Neutral", "Chaotic-Neutral", "Lawful-Evil", "Neutral-Evil", "Chaotic-Evil"];
    let alignmentInput = document.createElement("select");
    alignmentInput.setAttribute("class", "alignment-input");
    // classInput.type = "text";
    alignmentInput.id = "alignment-input";
    // classInput.placeholder = "Class";
    alignmentInput.name = "alignment-input";

    for (const val of alignment){
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        alignmentInput.appendChild(option);
    }
    const alignmentLabel = document.createElement("label");
    alignmentLabel.innerHTML = "Choose your Alignment: "
    alignmentLabel.htmlFor = "Race";
    inputBox5.append(alignmentLabel)
    inputBox5.append(alignmentInput);
    let alignmentBtn = document.createElement("button");
    alignmentBtn.setAttribute("class", "btn-dynamic");
    alignmentBtn.type = "submit";
    alignmentBtn.id = "alignment-submit";
    alignmentBtn.innerHTML = "Confirm";
    inputBox5.append(alignmentBtn);
    containerInfo.append(alignmentBox);

    infoContainer.append(containerInfo);

    document.querySelector("#name-submit").addEventListener("click", function () {
        let nameVar = document.getElementById("name-input").value;
        let charName = document.createElement("h2");
        charName.setAttribute("class", "name-title");
        if (nameVar == "") return alert("You must enter a name.");
        hideHeader.setAttribute("class", "header-after");
        const removeBanner = document.getElementById("header-title");
        removeBanner.remove();
        hideHeader.classList.add("header-after");
        charName.innerHTML = `${nameVar}`;
        hideHeader.append(charName);
        const moveName = document.getElementById("name-box");
        moveName.remove();
      });

      document.querySelector("#class-submit").addEventListener("click", function () {
        let classVar = document.getElementById("class-input").value;
        let charClass = document.createElement("h2");
        charClass.setAttribute("class", "class-title");
        
        charClass.innerHTML = `Class: ${classVar}`;
        classBox.append(charClass);
        const inputTwo = document.getElementById("input-box2");
        inputTwo.remove();
      });

      document.querySelector("#race-submit").addEventListener("click", function () {
        let raceVar = document.getElementById("race-input").value;
        let charRace = document.createElement("h2");
        charRace.setAttribute("class", "race-title");
        
        charRace.innerHTML = `Race: ${raceVar}`;
        raceBox.append(charRace);
        const inputThree = document.getElementById("input-box3");
        inputThree.remove();
      });

      document.querySelector("#sex-submit").addEventListener("click", function () {
        let sexVar = document.getElementById("sex-input").value;
        let charSex = document.createElement("h2");
        charSex.setAttribute("class", "sex-title");
        
        charSex.innerHTML = `Sex: ${sexVar}`;
        sexBox.append(charSex);
        const inputFour = document.getElementById("input-box4");
        inputFour.remove();
      });

      document.querySelector("#alignment-submit").addEventListener("click", function () {
        let alignmentVar = document.getElementById("alignment-input").value;
        let charAlignment = document.createElement("h2");
        charAlignment.setAttribute("class", "alignment-title");
        
        charAlignment.innerHTML = `Alignment: ${alignmentVar}`;
        alignmentBox.append(charAlignment);
        const inputFive = document.getElementById("input-box5");
        inputFive.remove();
        
      });

    });
});



// add classes like fighter/Magic-user push changes

// restrict alignments, race etc such as palladin is lawful good etc.

// refactor a "refresh page" feature instead of telling the user to refresh the page if they get a fuckTard. push changes

// 

// Add Level, XP, HP and Currency to Div above attributes

// 
