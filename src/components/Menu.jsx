import React from 'react'
import '@styles/Menu.scss'

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/profile">Mi perfil</a>
        </li>
        <li>
          <a href="/message">Mensajes</a>
        </li>
        <li>
          <a href="/groups">Grupos</a>
        </li>
        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
