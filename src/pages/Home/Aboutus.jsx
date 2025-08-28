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
        En Bendita Puasa trabajamos de principio a fin, para que la lana con la que tejas
        sea realmente de la oveja a la madeja.
        <br/>
        Conocemos a todos los ganaderos, rebaños, lavaderos, hilanderos, y todos con los
        que cooperamos mano a mano, desde hace años, para conseguir un producto de
        calidad, lana de verdad.
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
