import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone, faCamera} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Options from './Options';
import Footer from './Footer';


class App extends React.Component {
   state = {
      showPopup: false,
      showCirclePopup: false,
    };

    componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  
    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
    }

    handleIconClick = (event) => {
      event.stopPropagation(); // Evitar que el clic se propague al documento
      const opcionesElement = document.querySelector('.options');
      opcionesElement.classList.toggle('active');
    };
  

    handleClickOutside = (event) => {
      const opcionesElement = document.querySelector('.options');
      if (opcionesElement && opcionesElement.classList.contains('active')) {
        // Verifica si el clic ocurrió fuera del menú de opciones
        if (!opcionesElement.contains(event.target)) {
          opcionesElement.classList.remove('active');
        }
      }
    };
  

    handleMouseEnter = () => {
      this.setState({ showPopup: true });
    };
  
    handleMouseLeave = () => {
      this.setState({ showPopup: false });
    };

    handleIconMouseEnter = () => {
      this.setState({ showIconPopup: true });
    };
  
    handleIconMouseLeave = () => {
      this.setState({ showIconPopup: false });
    };

   render(){
    return (
      <div>
      <div className="busqueda">
      <Header 
          showPopup={this.state.showPopup}
          showIconPopup={this.state.showIconPopup}
          handleIconClick={this.handleIconClick}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
          handleIconMouseEnter={this.handleIconMouseEnter}
          handleIconMouseLeave={this.handleIconMouseLeave}
        />
      <Options />
      <Footer />
        
        <img className='img-google' 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          alt="google-foto" 
        />   
        <div className='input-icon'>
          <input className='google-busqueda' id="google" type="text" />
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <FontAwesomeIcon icon={faMicrophone} className='iconos-input microfono' />
          <FontAwesomeIcon icon={faCamera} className='iconos-input camara'/>
        </div>     
        <div className="botones-letra">
          <button type='submit'>Buscar con Google</button>
          <button type='submit'>Voy a tener suerte</button>
        </div>
        <p className="ofrecimiento">
          Ofrecido por Google en: <a href="klk" target="_blank" rel="noopener noreferrer">Español (Latinoamérica)</a>
        </p>
        
        </div>
      </div>
    );
  }
}


export default App;


