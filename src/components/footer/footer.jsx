import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
