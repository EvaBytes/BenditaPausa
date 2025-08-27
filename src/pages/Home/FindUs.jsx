import React from "react";
import { FindUsWrapper, FindUsTitle, FindUsDesc, FindUsButton } from "../../styles/FindUsStyles.jsx";

const FindUs = () => {
  return (
    <FindUsWrapper>
      <FindUsTitle>Visita nuestra tienda</FindUsTitle>
      <FindUsDesc>Todas tenemos un vínculo con la lana.</FindUsDesc>
      <FindUsDesc>
        El conocimiento es poder, y queremos compartirlo contigo. Ven a vernos y te contaremos todo lo que hay detrás de nuestros productos… y quién sabe, quizá también te lleves nuevas ideas para tus proyectos.
      </FindUsDesc>
      <FindUsButton onClick={() => window.location.href = "/blog"}>
        Dónde encontrarnos
      </FindUsButton>
    </FindUsWrapper>
  );
};

export { FindUs };
