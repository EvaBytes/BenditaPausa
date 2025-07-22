import React, { useState } from "react";
import { HeroSection } from "../../styles/HeroSectionStyles.jsx";
import { AboutUsSection, BoxesContainer, Box } from "../../styles/AboutUsStyles.jsx";
import NewsletterForm from "./NewsletterForm.jsx";

const Home = () => {
  return (
    <div className="home">
      <HeroSection>
      <h1>
        Descubre <br /> el arte de <br />la pausa
      </h1>
        <h5>del campo <br />a tus agujas</h5>
        <button onClick={() => window.location.href = "/tienda"}>Explorar tienda</button>
      </HeroSection>

      <section className="about-us">
        <h2>Conócenos</h2>
        <p>
          Hola, somos <strong>Esther y Javi</strong> esto es Bendita Pausa
        </p>
        <p>
          Nosotras trabajamos, de principio a fin, para que la lana con la que tejas
          sea realmente de la oveja a la madeja.
        </p>
        <p>
          Conocemos a todos los ganaderos, rebaños, lavaderos, hilanderos, y todos con los
          que cooperamos mano a mano, desde hace años, para conseguir un producto de
          calidad, lana de verdad.
        </p>

        <BoxesContainer>
        <Box>
          <img src="" alt="Nosotros" />
          <p>NOSOTROS</p>
        </Box>
        <Box>
          <img src="" alt="Comunidad" />
          <p>COMUNIDAD</p>
        </Box>
        <Box>
          <img src="" alt="Blog" />
          <p>BLOG</p>
        </Box>
      </BoxesContainer>

      </section>


      <section className="values">
        <h2>Nuestros valores</h2>
        <ul>
          <li>Sostenibilidad</li>
          <li>Artesanía</li>
          <li>Origen natural</li>
        </ul>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter-block">
        <h2>Suscríbete a nuestra newsletter</h2>
        <NewsletterForm />
      </section>

      {/* BLOG */}
      <section className="blog-block">
        <h2>Visita nuestro blog</h2>
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


// Componente Instagram hardcodeado
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
