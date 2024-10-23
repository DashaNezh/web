const { isObjectHasProps } = require("./utils/validators");

const isFeatureRightNowDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["image", "header", "mainText", "button"]);

  const { image, button } = data;

  // проверяем объект image на наличие полей и соответствие типу "объект"
  isObjectHasProps(image, ["src", "alt"]);

  // проверяем объект button на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["href", "title"]);
};

module.exports = isFeatureRightNowDataValid;
