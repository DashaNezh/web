import ctaData from "../mockData/ctaData";

export const ContainerRight = ( { item }) => {
    const { button } = item;

    return(
        <a href={button.href}>
            <button className="cta__button">
                {button.title}
            </button>
        </a>
    );
};

export const Cta = () => {
    const { callToAction } = ctaData;

    return (
        <>
            <div className="container__cta__main">
                <a href={callToAction.href} className="text__cta__1">
                    {callToAction.text}
                </a>
                <h3 className="text__cta__2">
                    {callToAction.mainText}
                </h3>
            </div>
            <div className="container__button__cta">
                <ContainerRight item={ctaData} />
            </div>
        </>
    );
};

export default Cta;
