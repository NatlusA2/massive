import React from 'react';
import styled, { keyframes } from 'styled-components';

const marqueeAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
`;

const MarqueeContent = styled.div`
  display: flex;
  align-items: center;
  animation: ${marqueeAnimation} 10s linear infinite;
 
`;

const Image = styled.img`
  width: 180px;
  height: 100px;
  transition: transform 0.3s ease-in-out;
  margin: 70px 50px 0px 50px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Marquee = ({ images }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`marquee-image-${index}`} />
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};
export default Marquee;
