import styled from "styled-components";

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
`;

const ImageText = styled.div`
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
const ImageDiv = styled.div<imageProps>`
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

interface imageProps {
  image: string;
  title?: string;
  height: string;
}

export function ImgDiv({ image, title }: imageProps) {
  return (
    <ImageDiv image={image} height="100px">
      <label>{title}</label>
    </ImageDiv>
  );
}

export function Image({ image, title }: imageProps) {
  return (
    <ImageWrapper>
      <ImageBox src={image} />
      <ImageText>{title}</ImageText>
    </ImageWrapper>
  );
}
