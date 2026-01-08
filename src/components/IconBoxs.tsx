import styled from "styled-components";
import type { BoxProps } from "@attr-props";

const IconDiv = styled.div<{ $img: string }>`
  background: url(${(props) => props.$img});
  height: 200px;
  background-size: cover;
  display: grid;
`;

export function ImgBox({ img, text }: BoxProps) {
  return (
    <IconDiv $img={img}>
      <label>{text}</label>
    </IconDiv>
  );
}
