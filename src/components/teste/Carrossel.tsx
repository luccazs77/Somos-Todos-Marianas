'use client';
import React, { useState } from 'react';
import * as S from '../teste/CarouselStyles';

import img1 from '../../assets/PX.png';
import img2 from '../../assets/QRC.png';
import img3 from '../../assets/QRC.png';
import img4 from '../../assets/QRC.png';

export function Carousel() {
  const slides = [
    { image: img1, text: 'Ação de inclusão social e acessibilidade.' },
    { image: img2, text: 'Atividades recreativas e culturais com crianças.' },
    { image: img3, text: 'Palestras e encontros de fortalecimento feminino.' },
    { image: img4, text: 'Distribuição de cestas básicas e apoio às famílias.' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleSlides = 4;

  const nextSlide = () => {
    if (startIndex + visibleSlides < slides.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <S.Container>
      <S.Title>AÇÕES DOS SOMOS TODOS MARIANAS</S.Title>

      <S.CarouselWrapper>
        <S.Arrow onClick={prevSlide}>‹</S.Arrow>

        <S.SlideContainer>
          {slides.slice(startIndex, startIndex + visibleSlides).map((slide, index) => (
            <S.Slide key={index}>
              <S.Image src={slide.image} alt={`Ação ${index + 1}`} />
              <S.Description>{slide.text}</S.Description>
            </S.Slide>
          ))}
        </S.SlideContainer>

        <S.Arrow onClick={nextSlide}>›</S.Arrow>
      </S.CarouselWrapper>

      <S.Button>Seja um voluntário</S.Button>
    </S.Container>
  );
}