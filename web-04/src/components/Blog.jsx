import blogData from "../mockData/blogData";

export const ContainerRight = ({ articlesMini }) => {
    // Разделяем статьи на строки по две
    const firstRowArticles = articlesMini.slice(0, 2);
    const secondRowArticles = articlesMini.slice(2, 4);
  
    const renderMiniArticle = (article) => (
      <div className="blog-item news" key={article.title}>
        <img src={article.image.src} alt={article.image.alt} />
        <div className="container__text text_news">
          <p className="date">{article.date}</p>
          <h3 className="name_news">{article.title}</h3>
          <a href={article.link} className="continue_news">{article.moreInfo}</a>
        </div>
      </div>
    );
  
    return (
      <div className="blog-container-mini">
        <div className="blog-row">
          {firstRowArticles.map(renderMiniArticle)}
        </div>
        <div className="blog-row">
          {secondRowArticles.map(renderMiniArticle)}
        </div>
      </div>
    );
  };


  export const Blog = () => {
    const { header, mainArticle, articlesMini } = blogData;
  
    return (
      <>
        <h1 className="top__header" dangerouslySetInnerHTML={{ __html: header }} />
        <div className="news">
          <div className="blog-container">
            <div className="blog-row">
              {/* Главная статья */}
              <div className="blog-item news_1">
                <img src={mainArticle.image.src} alt={mainArticle.image.alt} />
                <div className="container__text text_news_1">
                  <p className="date">{mainArticle.date}</p>
                  <h3 className="name_news_1">{mainArticle.title}</h3>
                  <a href={mainArticle.link} className="continue_news">{mainArticle.moreInfo}</a>
                </div>
              </div>
            </div>
            {/* Рендеринг мини-статей с разделением на строки */}
            <ContainerRight articlesMini={articlesMini} />
          </div>
        </div>
      </>
    );
  };
  
  export default Blog;