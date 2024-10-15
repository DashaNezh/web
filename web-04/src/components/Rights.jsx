import rightsData from "../mockData/rightsData";

export const rights = () => {
    const {mainText} = rightsData

    return (
        <>
            <p className="footer_rights">{mainText}</p>
        </>
    );
};

export default rights;
