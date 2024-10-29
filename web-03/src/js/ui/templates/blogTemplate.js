export const blogTemplate = (data) => {
  const { header, mainArticle, articlesMini } = data;

  // Берем первые две статьи для первой строки и следующие две для второй строки
  const firstRowArticles = articlesMini.slice(0, 2);
  const secondRowArticles = articlesMini.slice(2, 4);

  const createMiniArticle = (article) => `
    <div class="blog-item news">
      <img src="${article.image}" alt="gpt3" />
      <div class="container__text text_news">
        <p class="date">${article.date}</p>
        <h3 class="name_news">${article.title}</h3>
        <a href="${article.link}" class="continue_news">${article.moreInfo}</a>
      </div>
    </div>
  `;

  const template = `
    <h1 class="top__header">
      ${header}
    </h1>
    <div class="news">
      <div class="blog-container">
        <div class="blog-row">
          <div class="blog-item news_1">
            <img src="${mainArticle.image}" alt="gpt3" />
            <div class="container__text text_news_1">
              <p class="date">${mainArticle.date}</p>
              <h3 class="name_news_1">${mainArticle.title}</h3>
              <a href="${mainArticle.link}" class="continue_news">${mainArticle.moreInfo}</a>
            </div>
          </div>
        </div>
        <div class="blog-container-mini">
          <div class="blog-row">
            ${firstRowArticles.map(createMiniArticle).join('')}
          </div>
          <div class="blog-row">
            ${secondRowArticles.map(createMiniArticle).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  return template;
};
