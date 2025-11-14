import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #010101;
  background-color: #fff;
  padding: 40px 20px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  width: 80%;
`;

export const Slide = styled.div`
  flex: 0 0 22%;
  background-color: #fff5f5;
  border: 2px solid #f1c4c4;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  transition: all 0.4s ease;

  @media (max-width: 1024px) {
    flex: 0 0 40%;
  }

  @media (max-width: 768px) {
    flex: 0 0 80%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 0.85rem;
  color: #333;
`;

export const Arrow = styled.div`
  font-size: 2.5rem;
  cursor: pointer;
  user-select: none;
  color: #a45a5a;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  background-color: #a45a5a;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8b4545;
  }
`;
