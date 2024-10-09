export const featureRightNowTemplate = (data) => {
    const { header, mainText, button, image } = data;

    const buttonLink = `
        <a href="${button.href}" class="container__content__feature">${button.title}</a>
    `;

    const template = `
        <section class="feature__right__now">
            <div class="future__info">
                <div class="container__feature__image">
                    <img class="img__girl__feature" src="${image.src}" alt="${image.alt}" />
                </div>
                <div class="container__content__right">
                    ${buttonLink} <!-- Вставляем ссылку -->
                    <h2 class="container__header__feature">${header}</h2>
                    <p class="container__content__feature__main">${mainText}</p>
                    ${buttonLink} <!-- Вставляем ссылку снова -->
                </div>
            </div>
        </section>
    `;

    return template;
};
