import React from "react";
import { PrivacyPolicyContainer, PolicySection, PolicyTitle, PolicyContent, LastUpdated } from "../../styles/PrivacyPolicyStyles.jsx";

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <PolicyTitle>Política de Privacidad</PolicyTitle>
      <LastUpdated>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</LastUpdated>

      <PolicySection>
        <h2>1. Información que recopilamos</h2>
        <PolicyContent>
          <p>En Bendita Pausa recopilamos la siguiente información:</p>
          <ul>
            <li><strong>Información de contacto:</strong> Tu dirección de email cuando te suscribes a nuestra newsletter para mantenerte informado sobre nuevos productos, talleres y novedades.</li>
            <li><strong>Información de pedidos:</strong> Datos personales necesarios para procesar tu compra, incluyendo nombre, dirección de envío, información de facturación y detalles del pedido.</li>
            <li><strong>Información técnica:</strong> Datos sobre tu navegación en nuestro sitio web, como dirección IP, tipo de navegador y páginas visitadas para mejorar tu experiencia de usuario.</li>
          </ul>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>2. Cómo utilizamos tu información</h2>
        <PolicyContent>
          <p>Utilizamos tu información personal para:</p>
          <ul>
            <li><strong>Newsletter:</strong> Enviarte información sobre nuevos productos, talleres, eventos y contenido relacionado con el mundo de la lana y las agujas.</li>
            <li><strong>Procesamiento de pedidos:</strong> Gestionar tus compras, procesar pagos, coordinar envíos y proporcionarte atención al cliente.</li>
            <li><strong>Comunicación:</strong> Responder a tus consultas, resolver problemas técnicos y proporcionarte soporte.</li>
            <li><strong>Mejora del servicio:</strong> Analizar el uso del sitio web para mejorar nuestros productos y servicios.</li>
          </ul>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>3. Base legal para el procesamiento</h2>
        <PolicyContent>
          <p>Procesamos tus datos personales basándonos en:</p>
          <ul>
            <li><strong>Consentimiento:</strong> Para el envío de newsletters y comunicaciones promocionales.</li>
            <li><strong>Ejecución de contrato:</strong> Para procesar y cumplir con tus pedidos.</li>
            <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web.</li>
          </ul>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>4. Compartir información</h2>
        <PolicyContent>
          <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:</p>
          <ul>
            <li><strong>Proveedores de servicios:</strong> Compartimos información con proveedores que nos ayudan a operar nuestro negocio (servicios de pago, envío, hosting).</li>
            <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales.</li>
            <li><strong>Transferencia de negocio:</strong> En caso de fusión, adquisición o venta de activos de la empresa.</li>
          </ul>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>5. Tus derechos</h2>
        <PolicyContent>
          <p>Tienes derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> Solicitar una copia de la información personal que tenemos sobre ti.</li>
            <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta.</li>
            <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información personal.</li>
            <li><strong>Portabilidad:</strong> Obtener tus datos en un formato estructurado y legible por máquina.</li>
            <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos para marketing directo.</li>
            <li><strong>Limitación:</strong> Solicitar la restricción del procesamiento de tus datos.</li>
            <li><strong>Revocación del consentimiento:</strong> Retirar tu consentimiento en cualquier momento.</li>
          </ul>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>6. Retención de datos</h2>
        <PolicyContent>
          <p>Conservamos tu información personal durante:</p>
          <ul>
            <li><strong>Newsletter:</strong> Hasta que te des de baja o solicites la eliminación.</li>
            <li><strong>Información de pedidos:</strong> Durante el tiempo necesario para cumplir con obligaciones legales y contables (generalmente 6 años).</li>
            <li><strong>Datos técnicos:</strong> Por un período no superior a 2 años para análisis estadísticos.</li>
          </ul>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>7. Seguridad</h2>
        <PolicyContent>
          <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Esto incluye el uso de cifrado SSL para transacciones y comunicaciones sensibles.</p>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>8. Cookies</h2>
        <PolicyContent>
          <p>Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos que se almacenan en tu dispositivo y nos permiten recordar tus preferencias y analizar el uso del sitio web. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>9. Transferencias internacionales</h2>
        <PolicyContent>
          <p>En caso de que transfiramos tu información personal fuera del Espacio Económico Europeo, nos aseguraremos de que se apliquen las salvaguardas adecuadas para proteger tu información de acuerdo con las leyes de protección de datos aplicables.</p>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>10. Menores de edad</h2>
        <PolicyContent>
          <p>Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos intencionadamente información personal de menores de esta edad. Si tienes conocimiento de que un menor ha proporcionado información personal, por favor contáctanos para que podamos eliminar dicha información.</p>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>11. Cambios en esta política</h2>
        <PolicyContent>
          <p>Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "última actualización" en la parte superior de esta página.</p>
        </PolicyContent>
      </PolicySection>

      <PolicySection>
        <h2>12. Contacto</h2>
        <PolicyContent>
          <p>Si tienes preguntas sobre esta política de privacidad o deseas ejercer alguno de tus derechos, puedes contactarnos en:</p>
          <ul>
            <li><strong>Email:</strong> contacto@benditapausa.com</li>
            <li><strong>Dirección:</strong> C. del Rey, 32, 28200 San Lorenzo de El Escorial, Madrid</li>
            <li><strong>Teléfono:</strong> +34 123 456 789</li>
          </ul>
          <p>También puedes presentar una reclamación ante la Autoridad de Control competente si consideras que el tratamiento de tus datos personales no se ajusta a la normativa aplicable.</p>
        </PolicyContent>
      </PolicySection>
    </PrivacyPolicyContainer>
  );
};

export { PrivacyPolicy };