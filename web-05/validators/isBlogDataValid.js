const { isObjectHasProps } = require("./utils/validators");

const isBlogDataValid = (data) => {
  // Проверяем наличие основных полей в объекте data
  isObjectHasProps(data, ["header", "mainArticle", "articlesMini"]);

  const { mainArticle, articlesMini } = data;

  // Проверяем объект mainArticle на наличие полей и соответствие типу "объект"
  isObjectHasProps(mainArticle, ["date", "title", "link", "moreInfo"]);
  isObjectHasProps(mainArticle.image, ["src", "alt"]);

  // Проверяем, что articlesMini является массивом и каждую статью в нем
  if (!Array.isArray(articlesMini) || articlesMini.length !== 4) {
    throw new Error("articlesMini должен быть массивом с четырьмя элементами.");
  }

  // Проверяем каждую мини-статью на наличие полей и соответствие типу "объект"
  articlesMini.forEach((miniArticle, index) => {
    isObjectHasProps(miniArticle, ["date", "title", "link", "moreInfo"]);
    isObjectHasProps(miniArticle.image, ["src", "alt"]);
  });
};

module.exports = isBlogDataValid;
