import blogData from "../mockData/blogData";

export const ContainerRight = ({ item }) => {
    const { info, articleMiniOne, articleMiniTwo, articleMiniThree, articlesMiniFour } = item;

    return (
        <div className="blog-container-mini">
            <div className="blog-row">
                {/* Первый мини-статья */}
                <div className="blog-item news">
                    <img src={articleMiniOne.src} alt={articleMiniOne.alt} />
                    <div className="container__text text_news">
                        <p className="date">{info.date}</p>
                        <h3 className="name_news">{info.title}</h3>
                        <a href={info.link} className="continue_news">{info.moreInfo}</a>
                    </div>
                </div>
                
                {/* Второй мини-статья */}
                <div className="blog-item news">
                    <img src={articleMiniTwo.src} alt={articleMiniTwo.alt} />
                    <div className="container__text text_news">
                        <p className="date">{info.date}</p>
                        <h3 className="name_news">{info.title}</h3>
                        <a href={info.link} className="continue_news">{info.moreInfo}</a>
                    </div>
                </div>
            </div>
            <div className="blog-row">
                {/* Третий мини-статья */}
                <div className="blog-item news">
                    <img src={articleMiniThree.src} alt={articleMiniThree.alt} />
                    <div className="container__text text_news">
                        <p className="date">{info.date}</p>
                        <h3 className="name_news">{info.title}</h3>
                        <a href={info.link} className="continue_news">{info.moreInfo}</a>
                    </div>
                </div>
                
                {/* Четвертый мини-статья */}
                <div className="blog-item news">
                    <img src={articlesMiniFour.src} alt={articlesMiniFour.alt} />
                    <div className="container__text text_news">
                        <p className="date">{info.date}</p>
                        <h3 className="name_news">{info.title}</h3>
                        <a href={info.link} className="continue_news">{info.moreInfo}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Blog = () => {
    const { header, mainArticle, info } = blogData;

    return (
        <>
            <h1 className="top__header">
                {header}
            </h1>
            <div className="news">
                <div className="blog-container">
                    <div className="blog-row">
                        {/* Главная статья */}
                        <div className="blog-item news_1">
                            <img src={mainArticle.src} alt={mainArticle.alt} />
                            <div className="container__text text_news_1">
                                <p className="date">{info.date}</p>
                                <h3 className="name_news_1">{info.title}</h3>
                                <a href={info.link} className="continue_news">{info.moreInfo}</a>
                            </div>
                        </div>
                    </div>
                    <ContainerRight item={blogData} />
                </div>
            </div>
        </>
    );
};

export default Blog;