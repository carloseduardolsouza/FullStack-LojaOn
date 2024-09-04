import "./Banner.css"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState , useEffect } from "react";

const imagesPc = [
    'http://localhost:3311/imagens/banner1.png',
    'https://via.placeholder.com/600x400?text=Image+2',
];

const imagesMobile = [
  'https://via.placeholder.com/600x400?text=Image+5',
  'https://via.placeholder.com/600x400?text=Image+10',
];

function Banner() {
  const [imageSrc, setImageSrc] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,         // Ativa a rotação automática
        autoplaySpeed: 3000,    // Intervalo de 3000 ms (3 segundos)
      };

    // Função para determinar o tamanho da tela e alterar a imagem
  const updateImageSrc = () => {
    if (window.innerWidth >= 1024) {
      setImageSrc(imagesPc);
    } else if (window.innerWidth >= 600) {
      setImageSrc(imagesMobile);
    } else {
      setImageSrc(imagesMobile);
    }
  };

  useEffect(() => {
    updateImageSrc(); // Atualiza a imagem quando o componente monta
    window.addEventListener('resize', updateImageSrc);
    return () => window.removeEventListener('resize', updateImageSrc); // Remove o event listener ao desmontar o componente
  }, []);

    return ( 
        <div className="image-slider">
      <Slider {...settings}>
        {imageSrc.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
     );
}

export default Banner;