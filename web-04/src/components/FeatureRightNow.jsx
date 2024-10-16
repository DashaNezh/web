import featureRightNowData from "../mockData/featureRightNowData";

const ContainerRight = ({ item }) => {
    const { header, mainText, button } = item;

    return (
        <div className="container__content__right">
            <a href={button.href} className="container__content__feature">
                {button.title}
            </a>
            <h2 className="container__header__feature">{header}</h2>
            <p className="container__content__feature__main">{mainText}</p>
            <a href={button.href} className="container__content__feature">
                {button.title}
            </a>
        </div>
    );
};

const FeatureRightNow = () => {
    const { image } = featureRightNowData;

    return (
        <>
            <div className="container__feature__image">
                <img className="img__girl__feature" src={image.src} alt={image.alt} />
            </div>
            <ContainerRight item={featureRightNowData} />
        </>
    );
};

export default FeatureRightNow;
