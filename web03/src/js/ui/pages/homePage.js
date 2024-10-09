import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initBurger from "./../components/initBurger.js";
import initFeatureRightNow from "./../components/initFeatureRightNow.js";
import initCta from "./../components/initCta.js";
import initBlog from "../components/initBlog.js";
import initFooter from "../components/initFooter.js";
import initRight from "../components/initRight.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="feature__right__now"></section>
    <section class="container__cta"></section>
    <section class="section blog"></section>
    <footer class="footer"></footer>
    <section class="rights"></section>

  `;

  rootNode.insertAdjacentHTML("beforeend", template); 
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация хиро раздела
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация хиро раздела
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация секции "Превосходя все ожидания"
  const featureRightNowNode = rootNode.querySelector(".feature__right__now");
  initFeatureRightNow(featureRightNowNode); 

  // инициализация раздела CTA
  const ctaNode = rootNode.querySelector(".container__cta");
  initCta(ctaNode);

  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  const footerNode = rootNode.querySelector(".footer");
  initFooter(footerNode);

  const rightNode = rootNode.querySelector(".rights");
  initRight(rightNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
