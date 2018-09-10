const PubSub = require("../helpers/pub_sub.js");

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("NumberChecker:result-calculated", (event) => {
    const numberIsPrime = event.detail;
    this.displayResult(numberIsPrime);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector("#result");
  if(result === true) {
    resultElement.textContent = `The number is Prime!`;
    const newPhoto = new Image(150, 100);
    newPhoto.src = "https://i.kym-cdn.com/photos/images/original/000/785/351/eeb.jpg";
    resultElement.appendChild(newPhoto);
  }

  if(result === false) {
    resultElement.textContent = `The number is NOT  Prime!`
    const newPhoto = new Image(150, 100);
    newPhoto.src = "https://memegenerator.net/img/instances/51381906/megatron-approves.jpg";
    resultElement.appendChild(newPhoto);
  }
};

module.exports = ResultView;
