import React from "react";
import { AboutUsSection, BoxesContainer, Box } from "../../styles/AboutUsStyles.jsx";

const aboutLinks = [
  { title: "NOSOTROS", image: "src/assets/About.png", link: "/nosotros" },
  { title: "COMUNIDAD", image: "src/assets/Community.png", link: "/comunidad" },
  { title: "TALLERES", image: "src/assets/Workshops.png", link: "/talleres" },
];

const AboutUs = () => {
  return (
    <AboutUsSection>
      <h2>Conócenos</h2>
      <h3>
        Hola, soy <strong>Gisela</strong>. Bienvenida a Bendita Pausa.
        <br/>
        En Bendita Puasa acompañamos cada paso del proceso para que la lana con la que tejes sea auténtica, desde la oveja hasta la madeja.
        <br/>
        Conocemos personalmente a ganaderos, rebaños, lavaderos e hilanderos, y colaboramos mano a mano con ellos desde hace años para ofrecerte un producto de calidad: lana genuina.
      </h3>


      <BoxesContainer>
        {aboutLinks.map((item) => (
          <Box as="a" href={item.link} key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="overlay"></div>
            <p>{item.title}</p>
          </Box>
        ))}
      </BoxesContainer>

    </AboutUsSection>
  );
};

export { AboutUs };
