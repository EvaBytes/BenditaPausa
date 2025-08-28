import React, { useState } from "react";
import { HeroSection } from "../../styles/HeroSectionStyles.jsx";
import { AboutUs } from "../../pages/Home/Aboutus.jsx";
import {NewsletterForm} from "./NewsletterForm.jsx";
import { ShopCategoriesSection } from "../../pages/Home/ShopCategories.jsx";
import { FindUs } from "../../pages/Home/FindUs.jsx";
import { Instagram } from "../../pages/Home/Instagram.jsx";


const Home = () => {
  return (
    <div className="home">
      <HeroSection>
      <h1 className="mainline">
        Descubre <br /> el arte de <br />la pausa
      </h1>
        <h5 className="subheadline">del campo <br />a tus agujas</h5>
        <button onClick={() => window.location.href = "/tienda"}>Explorar tienda</button>
      </HeroSection>

      <ShopCategoriesSection />
      <AboutUs />



      {/* NEWSLETTER */}
      <section className="newsletter-block">
        <NewsletterForm />
      </section>

      {/* FINDUS */}
      <section className="findus-block">
        <FindUs />
      </section>

  {/* INSTAGRAM */}
      <section className="instagram-block">
        <Instagram />
      </section>
  </div>


  );
};




export { Home };
