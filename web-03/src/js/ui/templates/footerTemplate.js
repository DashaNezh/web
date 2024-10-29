export const footerTemplate = (data) => {
  const { title, button, src, address, rights, links, contactInfo } = data;

  const mainLinksTemplate = links.mainLinks.map(link => `
      <a href="${link.url}" class="item__links__footer">${link.text}</a>
  `).join("");

  const companyLinksTemplate = links.companyLinks.map(link => `
      <a href="${link.url}" class="item__links__footer">${link.text}</a>
  `).join("");

  const template = `
      <div class="footer__title__and__btn">
        <h1 class="footer__title">
          ${title}
        </h1>
        <a href="${button.link}">
          <button class="button__demo">
            ${button.text}
          </button>
        </a>
      </div>
      <div class="footer__content">
        <div class="footer__logo">
          <img class="logo__gpt3" src="${src}"/>
          <p class="logo__text__1">${address}</p>
          <p class="logo__text__1">${rights}</p>
        </div>
        <div class="footer__links">
          <h3 class="links__title">Полезные ссылки</h3>
          ${mainLinksTemplate}
        </div>
        <div class="footer__company">
          <h3 class="links__title">Компания</h3>
          ${companyLinksTemplate}
        </div>
        <div class="footer__get__in__touch">
          <h3 class="links__title">Свяжитесь с нами</h3>
          <p class="item__links__footer__get__in__touch">${address}</p>
          <p class="item__links__footer__get__in__touch">${contactInfo.phoneNumber}</p>
          <p class="item__links__footer__get__in__touch">${contactInfo.email}</p>
        </div>
      </div>
  `;

  return template;
};
