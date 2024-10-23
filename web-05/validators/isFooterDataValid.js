const { isObjectHasProps } = require("./utils/validators");

const isFooterDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["title", "button", "src", "address", "rights", "links", "contactInfo"]);

  const { button, links, contactInfo } = data;

  // проверяем объект button на наличие полей и соответствие типу "объект"
  isObjectHasProps(button, ["text", "link"]);

  // проверяем объект links на наличие полей и соответствие типу "объект"
  isObjectHasProps(links, ["mainLinks", "companyLinks"]);

  // проверяем массивы mainLinks и companyLinks на наличие объектов
  links.mainLinks.forEach((link) => {
    isObjectHasProps(link, ["text", "url"]);
  });

  links.companyLinks.forEach((link) => {
    isObjectHasProps(link, ["text", "url"]);
  });

  // проверяем объект contactInfo на наличие полей и соответствие типу "объект"
  isObjectHasProps(contactInfo, ["phoneNumber", "email"]);
};

module.exports = isFooterDataValid;
