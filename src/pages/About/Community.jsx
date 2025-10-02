import React from "react";
import { CommunityWrapper } from "../../styles/Community.jsx";

const Community = () => {
  return (
    <CommunityWrapper>
      <h1>Nuestra Comunidad</h1>
      <p>
        Bendita Pausa no sería lo mismo sin las personas que nos acompañan en este camino.
        Conoce a nuestros colaboradores, artesanos y creadores que hacen posible esta comunidad
        dedicada a la lana, la creatividad y el slow living.
      </p>

      <div className="collaborator-list">
        <div className="collaborator">
          <h3>Artesanos Locales</h3>
          <p>Trabajamos con tejedores y artesanos de la zona que comparten nuestra pasión por la lana natural.</p>
        </div>
        <div className="collaborator">
          <h3>Granjas Sostenibles</h3>
          <p>Colaboramos con granjas cercanas que garantizan una crianza responsable y respetuosa hacia cada uno de sus animales.</p>
        </div>
        <div className="collaborator">
          <h3>Creadores Invitados</h3>
          <p>Diseñadores y makers que aportan su visión única en proyectos especiales y colaboraciones.</p>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export { Community };