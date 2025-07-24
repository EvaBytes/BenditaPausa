import React, { useState } from "react";
import { NewsletterSectionWrapper, NewsletterTitle, NewsletterDesc, NewsletterFormBlock, CheckboxLabel, CheckboxInput, PrivacyLink, Button, Input } from "../../styles/NewsletterFormStyles.jsx";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Por favor acepta el consentimiento para continuar.");
      return;
    }
    alert(`Gracias por suscribirte, ${email}!`);
    setEmail("");
    setConsent(false);
  };

  return (
    <NewsletterSectionWrapper>
      <NewsletterTitle>SUSCRÍBETE A NUESTRA NEWSLETTER</NewsletterTitle>
      <NewsletterDesc>
        Cada semana enviamos un mail en el que compartir contigo nuestras novedades, pensamientos y proyectos que inpirán a vivir la lana desde sus orígenes.
      </NewsletterDesc>
      <NewsletterFormBlock onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="escribetuemail@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </NewsletterFormBlock>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={consent}
          onChange={() => setConsent(!consent)}
          required
        />
        <span>
          <b>Bendita Pausa</b> necesita la información de contacto que nos proporciona para poder contactar de vuelta indicando información sobre nuestros productos y servicios. Puede darse de baja de estas comunicaciones en cualquier momento. Para obtener información sobre cómo darse de baja, así como nuestras prácticas de privacidad y el compromiso de proteger su privacidad, consulte nuestra
          <PrivacyLink
            href="/politica-privacidad"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de privacidad.
          </PrivacyLink>
        </span>
      </CheckboxLabel>
    </NewsletterSectionWrapper>
  );
};

export {NewsletterForm};