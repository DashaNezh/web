import featureRightNowData from "../mockData/featureRightNowData";

const ContainerRight = ({ item }) => {
    const { header, mainText, button } = item;

    return(
        <div class="container__content__right">
            <a href={button.href} className="container__content__feature">{button.title}</a>
            <h2 class="container__header__feature">{header}</h2>
            <p class="container__content__feature__main">{mainText}</p>
            <a href={button.href} className="container__content__feature">{button.title}</a>
        </div>
    );
};

const featureRightNow = () => {
    const { image } = featureRightNowData;

    return (
        <>
            <div className="future__info">
                <div className="container__feature__image">
                    <img className="img__girl__feature" src={image.src} alt={image.alt} />
                </div>
                <div className="container__content__right">
                    <ContainerRight item={featureRightNowData} />
                </div>
            </div>
        </>
    );
};

export default featureRightNow;