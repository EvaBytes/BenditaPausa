import React from "react";
import { AboutUsSection, BoxesContainer, Box } from "../../styles/AboutUsStyles.jsx";

const AboutUs = () => {
  return (
    <AboutUsSection>
      <h2>Conócenos</h2>
      <p>
        Hola, somos <strong>Esther y Javi</strong>, esto es Bendita Pausa.
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
    </AboutUsSection>
  );
};

export { AboutUs };
