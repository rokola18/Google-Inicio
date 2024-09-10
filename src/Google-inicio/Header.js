import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ showPopup, showIconPopup, handleIconClick, handleMouseEnter, handleMouseLeave, handleIconMouseEnter, handleIconMouseLeave }) => {
  return (
    <div className='encabezado'>
      <a href='l' target='blank'>Gmail</a>
      <a href='lo' target='blank'>Imágenes</a>
      <div className="google-icon" 
        onClick={handleIconClick}
        onMouseEnter={handleIconMouseEnter}
        onMouseLeave={handleIconMouseLeave}>
        <FontAwesomeIcon className='icono-bars' icon={faBars} />
        {showIconPopup && (
          <div className="popup ventana-img">Aplicaciones de Google</div>
        )}
      </div>
      <a href='lol'>
        <div className='circulo'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          J
          {showPopup && (
            <div className="popup">
              Cuenta de Google <span>Jonas Berry</span>
              <span>jonasberry19@gmail.com</span>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default Header;
