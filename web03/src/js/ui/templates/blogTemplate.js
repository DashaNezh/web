export const blogTemplate = (data) => {
  const { header, mainArticle, articlesMiniOne, articlesMiniTwo, articlesMiniThree, articlesMiniFour} = data;

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
              <div class="blog-item news">
                <img src="${articlesMiniOne.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${articlesMiniOne.date}</p>
                  <h3 class="name_news">${articlesMiniOne.title}</h3>
                  <a href="${articlesMiniOne.link}"class="continue_news">${articlesMiniOne.moreInfo}</a>
                </div>
              </div>
              <div class="blog-item news">
                <img src="${articlesMiniTwo.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${articlesMiniTwo.date}</p>
                  <h3 class="name_news">${articlesMiniTwo.title}</h3>
                  <a href="${articlesMiniTwo.link}" class="continue_news">${articlesMiniTwo.moreInfo}</a>
                </div>
              </div>
            </div>
            <div class="blog-row">
              <div class="blog-item news">
                <img src="${articlesMiniThree.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${articlesMiniThree.date}</p>
                  <h3 class="name_news">${articlesMiniThree.title}</h3>
                  <a href="${articlesMiniThree.link}" class="continue_news">${articlesMiniThree.moreInfo}</a>
                </div>
              </div>
              <div class="blog-item news">
                <img src="${articlesMiniFour.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${articlesMiniFour.date}</p>
                  <h3 class="name_news">${articlesMiniFour.title}</h3>
                  <a href="${articlesMiniFour.link}" class="continue_news">${articlesMiniFour.moreInfo}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  return template;
};
