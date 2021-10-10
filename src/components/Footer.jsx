import React from 'react'
import '@styles/Footer.scss'
import logo from '@logos/logo_miveci_black.svg'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
      <img src={logo} alt="logo" />
        <div className="Footer__links">
          <a href="#" className="Footer__link">
            Condiciones de servicio
          </a>
          <a href="#" className="Footer__link">
          Política de Privacidad
          </a>
          <a href="#" className="Footer__link">
          Política de cookies
          </a>
          <a href="#" className="Footer__link">
          Soporte
          </a>
        </div>
        <p className="Footer__copyright">© Mi veci. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
