export const ctaTemplate = (data) => {
    const { mainText, button, callToAction } = data;

    const template = `
        <div class="container__cta__main">
            <a href="${callToAction.href}" class="text__cta__1">
                ${callToAction.text}
            </a>
            <h3 class="text__cta__2">
                ${mainText}
            </h3>
        </div>
        <div class="container__button__cta">
            <a href="${button.href}">
                <button class="cta__button">
                    ${button.title}
                </button>
            </a>
        </div>
    `;

    return template;
};
