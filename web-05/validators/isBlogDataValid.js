const { isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // проверяем объект на наличие полей и соответствие типу "объект"
  isObjectHasProps(data, ["header", "info", "mainArticle", "articleMiniOne", "articleMiniTwo", "articleMiniThree", "articlesMiniFour"]);

  const { info, mainArticle, articleMiniOne, articleMiniTwo, articleMiniThree, articlesMiniFour } = data;

  // проверяем внутренний объект info на наличие полей и соответствие типу "объект"
  isObjectHasProps(info, ["date", "title", "link", "moreInfo"]);

  // проверяем внутренний объект mainArticle на наличие полей и соответствие типу "объект"
  isObjectHasProps(mainArticle, ["src", "alt"]);

  // проверяем мини-статьи на наличие полей и соответствие типу "объект"
  isObjectHasProps(articleMiniOne, ["src", "alt"]);
  isObjectHasProps(articleMiniTwo, ["src", "alt"]);
  isObjectHasProps(articleMiniThree, ["src", "alt"]);
  isObjectHasProps(articlesMiniFour, ["src", "atl"]); // исправляем опечатку в "atl"
};

module.exports = isBlogDataValid;
