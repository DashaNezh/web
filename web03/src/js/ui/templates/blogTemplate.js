export const blogTemplate = (data) => {
  const { header, mainArticle, articlesMiniOne, articlesMiniTwo, articlesMiniThree, articlesMiniFour, mainInfo} = data;

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
                  <p class="date">${mainInfo.date}</p>
                  <h3 class="name_news_1">${mainInfo.title}</h3>
                  <a href="${mainInfo.link}" class="continue_news">${mainInfo.moreInfo}</a>
                </div>
              </div>
            </div>
          <div class="blog-container-mini">
            <div class="blog-row">
              <div class="blog-item news">
                <img src="${articlesMiniOne.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${mainInfo.date}</p>
                  <h3 class="name_news">${mainInfo.title}</h3>
                  <a href="${mainInfo.link}"class="continue_news">${mainInfo.moreInfo}</a>
                </div>
              </div>
              <div class="blog-item news">
                <img src="${articlesMiniTwo.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${mainInfo.date}</p>
                  <h3 class="name_news">${mainInfo.title}</h3>
                  <a href="${mainInfo.link}" class="continue_news">${mainInfo.moreInfo}</a>
                </div>
              </div>
            </div>
            <div class="blog-row">
              <div class="blog-item news">
                <img src="${articlesMiniThree.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${mainInfo.date}</p>
                  <h3 class="name_news">${mainInfo.title}</h3>
                  <a href="${mainInfo.link}" class="continue_news">${mainInfo.moreInfo}</a>
                </div>
              </div>
              <div class="blog-item news">
                <img src="${articlesMiniFour.image}" alt="gpt3" />
                <div class="container__text text_news">
                  <p class="date">${mainInfo.date}</p>
                  <h3 class="name_news">${mainInfo.title}</h3>
                  <a href="${mainInfo.link}" class="continue_news">${mainInfo.moreInfo}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  return template;
};
