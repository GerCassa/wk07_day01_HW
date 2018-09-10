const PubSub = require("../helpers/pub_sub.js");

const NumberChecker = function () {

};

NumberChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail
    const result = this.checkNumber(inputtedNumber);
    console.log(result);
    PubSub.publish("NumberChecker:result-calculated", result);
  });
};

NumberChecker.prototype.checkNumber = function (num) {
  if(num <= 1) return false;
    for(let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  };
  return true;
};

module.exports = NumberChecker;
