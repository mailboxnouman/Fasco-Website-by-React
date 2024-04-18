import React, { useState } from 'react';
import './carousel.css'; 
import model1 from '../assets/model1.png'
import model2 from '../assets/model2.png'
import model3 from '../assets/model3.png'
import model4 from '../assets/model4.png'
import model5 from '../assets/model5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy, faShirt, faPersonDress,  faUserTie, faHatCowboySide } from '@fortawesome/free-solid-svg-icons';

function Carrosel() {
  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

  const options = [
    {
      backgroundUrl: model1,
      icon: faHatCowboy,
      main: 'Rounded Red Hat',
      sub: 'Al Karam'
    },
    {
      backgroundUrl: model2,
      icon: faShirt,
      main: 'Linen-blend Shirt',
      sub: 'Outfitters'
    },
    {
      backgroundUrl: model3,
      icon: faPersonDress,
      main: 'Linen Plain Top',
      sub: 'Khadi'
    },
    {
      backgroundUrl: model4,
      icon: faUserTie,
      main: 'Dotted Black Dress',
      sub: 'Bonanza'
    },
    {
      backgroundUrl: model5,
      icon: faHatCowboySide,
      main: 'Boxy Denim Hat',
      sub: 'Elegant Apparel'
    }
  ];

  return (
    <div className="options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${activeOption === index ? 'active' : ''}`}
          style={{ '--optionBackground': `url(${option.backgroundUrl})` }}
          onClick={() => handleOptionClick(index)}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <FontAwesomeIcon icon={option.icon} />
            </div>
            <div className="info">
              <div className="main">{option.main}</div>
              <div className="sub">{option.sub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carrosel;
