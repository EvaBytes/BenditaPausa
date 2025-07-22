import React, { useState } from 'react';
import { Form, Input, CheckboxLabel, CheckboxInput, PrivacyLink, Button} from "../../styles/NewsletterFormStyles.jsx";

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
        <>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Suscribirme</Button>
          </Form>
      
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              required
            />
            Bendita Pausa necesita la información de contacto que nos proporciona para poder contactar de vuelta indicando información sobre nuestros productos y servicios. Puede darse de baja de estas comunicaciones en cualquier momento. Para obtener información sobre cómo darse de baja, así como nuestras prácticas de privacidad y el compromiso de proteger su privacidad, consulte nuestra
            <PrivacyLink
              href="/politica-privacidad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidad.
            </PrivacyLink>
          </CheckboxLabel>
        </>
      );
}      
  
  export default NewsletterForm;