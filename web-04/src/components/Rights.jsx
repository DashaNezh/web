import rightsData from "../mockData/rightsData";

export const Rights = () => {
    const {mainText} = rightsData

    return (
        <>
            <p className="footer_rights">{mainText}</p>
        </>
    );
};

export default Rights;
