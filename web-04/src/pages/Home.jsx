import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import FeatureRightNow from "../components/FeatureRightNow";
import Cta from "../components/Cta";
import Blog  from "../components/Blog";
import Footer from "../components/Footer";
import Rights from "../components/Rights";

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="feature__right__now">
        <FeatureRightNow />
      </section>
      <section className="container__cta">
        <Cta />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
      <section className="rights">
        <Rights />
      </section>
    </>
  );
};

export default Home;