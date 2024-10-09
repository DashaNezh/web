export const footerTemplate = (data) => {
    const { title, buttonText, logoSrc, address, rights, linksTitleOne, itemOneForTheFirstContainer, itemTwoForTheFirstContainer, 
        itemThreeForTheFirstContainer, itemFourForTheFirstContainer, itemOneForTheSecondContainer, itemTwoForTheSecondContainer,
        itemThreeForTheSecondContainer, linksTitleTwo, phoneNumber, linkSite  } = data;

    const template = `
        <div class="footer__title__and__btn">
          <h1 class="footer__title">
            ${title}
          </h1>
          <a href="">
            <button class="button__demo">
              ${buttonText}
            </button>
          </a>
        </div>
        <div class="footer__content">
          <div class="footer__logo">
            <img class="logo__gpt3" src="${logoSrc}"/>
            <p class="logo__text__1">${address}</p>
            <p class="logo__text__1">${rights}</p>
          </div>
          <div class="footer__links">
            <h3 class="links__title">${linksTitleOne}</h3>
            <a href="" class="item__links__footer">${itemOneForTheFirstContainer}</a>
            <a href="" class="item__links__footer">${itemTwoForTheFirstContainer}</a>
            <a href="" class="item__links__footer">${itemThreeForTheFirstContainer}</a>
            <a href="" class="item__links__footer">${itemFourForTheFirstContainer}</a>
          </div>
          <div class="footer__company">
            <h3 class="links__title">${linksTitleTwo}</h3>
            <a href="" class="item__links__footer">${itemOneForTheSecondContainer}</a>
            <a href="" class="item__links__footer">${itemTwoForTheSecondContainer}</a>
            <a href="" class="item__links__footer">${itemThreeForTheSecondContainer}</a>
          </div>
          <div class="footer__get__in__touch">
            <h3 class="links__title">${itemThreeForTheSecondContainer}</h3>
            <p class="item__links__footer__get__in__touch">${address}</p>
            <p class="item__links__footer__get__in__touch">${phoneNumber}</p>
            <a href="" class="item__links__footer">${linkSite}</a>
          </div>
        </div>
    `;

    return template;
};