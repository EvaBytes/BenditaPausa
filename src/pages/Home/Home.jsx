import React, { useState } from "react";
import { HeroSection } from "../../styles/HeroSectionStyles.jsx";
import { AboutUs } from "../../pages/Home/Aboutus.jsx";
import {NewsletterForm} from "./NewsletterForm.jsx";
import { ShopCategoriesSection } from "../../pages/Home/ShopCategories.jsx";

const Home = () => {
  return (
    <div className="home">
      <HeroSection>
      <h1>
        Descubre <br /> el arte de <br />la pausa.
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

      {/* BLOG */}
      <section className="blog-block">
        <h2>Visita nuestro blog</h2>
        <p>Todas tenemos un vínculo con la lana </p>
        <p>El conocimiento es poder, nuestro blog recoge artículos en los que te hablamos de procesos, investigación, pero también inspiración a la hora de tejer.</p>
        <button onClick={() => window.location.href = "/blog"}>Ir al blog</button>
      </section>

      {/* INSTAGRAM */}
      <section className="instagram-block">
        <h2>Últimas publicaciones en Instagram</h2>
        <InstagramPosts />
      </section>
    </div>
  );
};


// Componente Instagram a sustituir por uno real más adelante.
const InstagramPosts = () => {
  const posts = [
    "https://via.placeholder.com/150?text=Post+1",
    "https://via.placeholder.com/150?text=Post+2",
    "https://via.placeholder.com/150?text=Post+3",
    "https://via.placeholder.com/150?text=Post+4",
  ];

  return (
    <div className="instagram-posts">
      {posts.map((url, i) => (
        <img key={i} src={url} alt={`Instagram post ${i + 1}`} />
      ))}
    </div>
  );
};

export { Home };
