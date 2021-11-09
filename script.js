"use strict";

const bellCurve = () => Math.trunc(Math.random() * 6 + 1) * 3;
const clickedBtn = document.querySelector(".btn");
const showInfo = document.querySelector(".btn");
const generatorContainer = document.getElementById("generator");

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

  generatorContainer.append(containerGen);

});

