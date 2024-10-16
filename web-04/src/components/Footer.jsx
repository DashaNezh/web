import footerData from "../mockData/footerData";

const FooterLinks = ({ title, links }) => (
    <div className="footer__links">
        <h3 className="links__title">{title}</h3>
        {links.map((link, index) => (
            <a href={link.url} className="item__links__footer" key={index}>
                {link.text}
            </a>
        ))}
    </div>
);

const FooterContact = ({ address, phoneNumber, email }) => (
    <div className="footer__get__in__touch">
        <h3 className="links__title">Контакты</h3>
        <p className="logo__text__1" >{address}</p>
        <p className="logo__text__1">{phoneNumber}</p>
        <a href={`mailto:${email}`} className="item__links__footer">
            {email}
        </a>
    </div>
);

const Footer = () => {
    const { title, src, address, rights, links, contactInfo, button } = footerData;

    return (
        <>
            <div className="footer__title__and__btn">
                <h1 className="footer__title">{title}</h1>
                <a href={button.link} className="button__link">
                    <button className="button__demo">{button.text}</button>
                </a>
            </div>

            <div className="footer__content">
                    <div className="footer__logo">
                        <img className="logo__gpt3" src={src} alt="GPT-3 Logo" />
                        <p className="logo__text__1" >{address}</p>
                        <p className="logo__text__1">{rights}</p>
                    </div>

                    <FooterLinks title="Ссылки" links={links.mainLinks} />
                    <FooterLinks title="Компания" links={links.companyLinks} />
                    <FooterContact {...contactInfo} address={address} />
            </div>
        </>
    );
};

export default Footer;
