import styled from "styled-components";
import type { ImageProps } from "@attr-props";

const ImageWrapper = styled.div<{ 
  $height?: number; 
  $width?: number; 
  $clickable: boolean;
}>`
  position: relative;
  width: ${(p) => (p.$width ? `${p.$width}px` : "100%")};
  height: ${(p) => (p.$height ? `${p.$height}px` : "100%")};
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${(p) =>
    p.$clickable &&
    `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    &:hover img {
      transform: scale(1.05);
    }
  `}
`;

const ImageBox = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
`;

const ImageTxt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px gray;
  pointer-events: none;
`;

const DescriptionTxt = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px gray;
  pointer-events: none;
`;

const ImageDiv = styled.div<ImageProps>`
  background: url(${(props) => props.image});
  height: ${(props) => props.height};
  background-size: cover;
  display: grid;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 100px;
  font-size: 1.3rem;
`;

export function ImgDiv({ image, text }: ImageProps) {
  return (
    <ImageDiv image={image} height={100} width={100}>
      <label>{text}</label>
    </ImageDiv>
  );
}

export function Image({ image, text, height, width, onClick }: ImageProps) {
  return (
    <ImageWrapper 
      $height={height} 
      $width={width}
      $clickable={!!onClick}
      onClick={onClick}
    >
      <ImageBox src={image} alt={text || ""} />
      {text && <ImageTxt>{text}</ImageTxt>}
    </ImageWrapper>
  );
}

export function ImageCard({ image, text, height, width, onClick }: ImageProps) {
  return (
    <ImageWrapper 
      $height={height} 
      $width={width}
      $clickable={!!onClick}
      onClick={onClick}
    >
      <ImageBox src={image} alt={text || ""} />
      {text && <DescriptionTxt>{text}</DescriptionTxt>}
    </ImageWrapper>
  );
}
