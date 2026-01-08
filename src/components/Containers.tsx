import styled from "styled-components";
import type {
  GridProps,
  ContainerProps,
  PositionProps,
  BtnContProps,
} from "@node-props";
import type { RowAlignType } from "@/type/type-source";

const TopNaviHeader = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
`;

const SearchContainer = styled.div<{
  $width: number;
  $left: number;
}>`
  width: ${(p) => p.$width}px;
  position: relative;
  left: ${(p) => p.$left}px;
`;

const GridContainer = styled.div<{
  $count: number;
  $size: number;
  $columnGap: number;
  $rowGap: number;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${(p) => p.$count},
    ${(p) => (p.$size === 0 ? "auto" : `${p.$size}fr`)}
  );
  column-gap: ${(p) => p.$columnGap}px;
  row-gap: ${(p) => p.$rowGap}px;
`;

const Container = styled.div`
  padding: 0px 150px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  row-gap: 5px;
`;

const ButtonContainer = styled.div<{
  $align: RowAlignType;
}>`
  display: block;
  margin: 0 auto;
  text-align: ${(p) => p.$align};
`;

const OuterContainer = styled.div<{
  $padding: number;
  $width: number;
  $height: number;
}>`
  border: 1px solid black;
  border-radius: 5px;
  padding: ${(p) => p.$padding}px;
  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
`;

const RelativeContainer = styled.div<{ $top?: number; $left?: number }>`
  position: relative;
  left: ${(props) => (props.$left !== undefined ? `${props.$left}px` : "auto")};
  top: ${(props) => (props.$top !== undefined ? `${props.$top}px` : "auto")};
  display: inline-block;
`;

const AbsoluteContainer = styled.div<{ $top?: number; $left?: number }>`
  position: absolute;
  left: ${(props) => (props.$left !== undefined ? `${props.$left}px` : "auto")};
  top: ${(props) => (props.$top !== undefined ? `${props.$top}px` : "auto")};
  display: inline-block;
`;

const StaticContainer = styled.div`
  position: static;
  display: inline-block;
`;

export function CommonBox({ position, top, left, children }: PositionProps) {
  switch (position) {
    case "relative":
      return (
        <RelativeContainer $top={top} $left={left}>
          {children}
        </RelativeContainer>
      );
    case "absolute":
      return (
        <AbsoluteContainer $top={top} $left={left}>
          {children}
        </AbsoluteContainer>
      );
    default:
      return <StaticContainer>{children}</StaticContainer>;
  }
}

export function ItemBox({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}

export function GridBox({
  children,
  count,
  size,
  column_gap,
  row_gap,
}: GridProps) {
  return (
    <GridContainer
      $count={count}
      $size={size}
      $columnGap={column_gap}
      $rowGap={row_gap}
    >
      {children}
    </GridContainer>
  );
}

export function TopNaviHeaderBox({ children }: ContainerProps) {
  return <TopNaviHeader>{children}</TopNaviHeader>;
}

export function ButtonBox({ children, align }: BtnContProps) {
  return <ButtonContainer $align={align}>{children}</ButtonContainer>;
}

export function OuterBox({ children }: ContainerProps) {
  return (
    <OuterContainer $height={200} $padding={50} $width={200}>
      {children}
    </OuterContainer>
  );
}

export function SearchBox({ children }: ContainerProps) {
  return (
    <SearchContainer $width={300} $left={80}>
      {children}
    </SearchContainer>
  );
}
