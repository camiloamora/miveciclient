import React, { useState } from 'react'
import '@styles/Header.scss'
import Menu from '@components/Menu'
import logo from '@logos/logo_miveci.svg'
import menu from '@icons/icon_menu.svg'
import arrow from '@icons/arrow.svg'

const Header = () => {
  const [toggle, setToogle] = useState(false)

  const handleToogle = () => {
    setToogle(!toggle)
  }

  return (
    <nav>
      <img src={menu} alt="menu" className="menu"
      onClick={handleToogle} />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">
            mora_camilo@hotmail.com
          </li>
          <img src={arrow} alt="menu"
          className="navbar-arrow"
          onClick={handleToogle} />
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  )
}

export default Header
