import React from "react";
import { FindUsWrapper, FindUsTitle, FindUsDesc, FindUsMap } from "../../styles/FindUsStyles.jsx";

const FindUs = () => {
  return (
    <FindUsWrapper>
      <FindUsTitle>Visita nuestra tienda</FindUsTitle>
      <FindUsDesc>Todas tenemos un vínculo con la lana.</FindUsDesc>
      <FindUsDesc>
        El conocimiento es poder, y queremos compartirlo contigo. Ven a vernos y te contaremos todo lo que hay detrás de nuestros productos… y quién sabe, quizá también te lleves nuevas ideas para tus proyectos.
      </FindUsDesc>

      <FindUsMap>
        <iframe
          title="Mapa de ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7564566277715!2d-4.150785415604298!3d40.591130897700225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd410a28eae0b1f9%3A0xdc6b7a5896c1105b!2sdLana!5e0!3m2!1sen!2ses!4v1756380529029!5m2!1sen!2ses"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </FindUsMap>
    </FindUsWrapper>
  );
};

export { FindUs };
