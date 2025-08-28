import React from "react";
import { FaInstagram } from "react-icons/fa";
import {InstagramBlock, InstagramContent, InstagramTitle, InstagramLink} from "../../styles/InstagramStyles.jsx";

const Instagram = () => {
  return (
    <section className="instagram-block">
      <InstagramBlock>
        <InstagramContent>
          <InstagramTitle>
            Últimas publicaciones en Instagram <FaInstagram />
          </InstagramTitle>
          <InstagramLink
            href="https://www.instagram.com/gisela_scarel/?hl=af"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Descubre más
          </InstagramLink>
        </InstagramContent>
      </InstagramBlock>
    </section>
  );
};

export { Instagram };
