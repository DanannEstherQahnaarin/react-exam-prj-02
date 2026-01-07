import styled from "styled-components";
import type { ReactNode } from "react";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
`;

const Container = styled.div`
  padding: 0px 150px;
  display: grid;
  grid-template-columns: auto;
  column-gap: 10px;
  row-gap: 5px;
`;

const ButtonContainer = styled.div`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const RelativeContainer = styled.div<PositionProps>`
  position: relative;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  display: inline-block;
`;

const AbsoluteContainer = styled.div<PositionProps>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  display: inline-block;
`;

const StaticContainer = styled.div`
  position: static;
  display: inline-block;
`;

interface GridProps {

}
interface ContainerProps {
  children?: ReactNode | null;
}

interface PositionProps {
  position?: "relative" | "absolute" | "static";
  top?: number;
  left?: number;
  children?: ReactNode;
}

export function CommonBox({ position, top, left, children }: PositionProps) {
  if (position === "relative") {
    return (
      <RelativeContainer top={top} left={left}>
        {children}
      </RelativeContainer>
    );
  } else if (position === "absolute") {
    return (
      <AbsoluteContainer top={top} left={left}>
        {children}
      </AbsoluteContainer>
    );
  } else {
    return <StaticContainer>{children}</StaticContainer>;
  }
}

export function ItemBox({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}

export function GridBox({ children }: ContainerProps) {
  return <GridContainer>{children}</GridContainer>;
}

export function ButtonBox({ children }: ContainerProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
