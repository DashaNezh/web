const { isObjectHasProps } = require("./utils/validators");

const isCtaDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["button", "callToAction"]);

  const { button, callToAction } = data;

  // проверяем внутренний объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "title"]);

  // проверяем объект callToAction на наличие полей и соответствие типу "объект"
  isObjectHasProps(callToAction, ["href", "text", "mainText"]);
};

module.exports = isCtaDataValid;
