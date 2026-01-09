/**
 * @fileoverview 레이아웃 컨테이너 컴포넌트 모음
 * 
 * 이 파일은 페이지 레이아웃을 구성하는 다양한 컨테이너 컴포넌트를 제공합니다.
 * Grid 레이아웃, 위치 지정, 반응형 디자인을 지원합니다.
 * 
 * @component ItemBox - 섹션 내용을 감싸는 메인 컨테이너 (패딩 포함, 반응형)
 * @component GridBox - CSS Grid 레이아웃 컨테이너 (컬럼 수, 간격 설정)
 * @component TopNaviHeaderBox - 상단 네비게이션 헤더용 컨테이너
 * @component ButtonBox - 버튼 정렬용 컨테이너
 * @component CommonBox - 위치 지정이 필요한 요소용 컨테이너 (relative/absolute/static)
 * @component OuterBox - 외부 테두리와 패딩이 있는 컨테이너
 * @component SearchBox - 검색 폼용 컨테이너
 */

import styled from "styled-components";
import type {
  GridProps,
  ContainerProps,
  PositionProps,
  BtnContProps,
} from "@node-props";
import type { RowAlignType } from "@/type/type-source";

/**
 * 상단 네비게이션 헤더 스타일
 * 로고와 메뉴를 양쪽 정렬하는 레이아웃
 */
const TopNaviHeader = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
`;

/**
 * 검색 폼 컨테이너 스타일
 * 검색 폼의 너비와 위치를 설정하는 컨테이너
 */
const SearchContainer = styled.div<{
  $width: number;
  $left: number;
}>`
  width: ${(p) => p.$width}px;
  position: relative;
  left: ${(p) => p.$left}px;
`;

/**
 * Grid 레이아웃 컨테이너 스타일
 * CSS Grid를 사용하여 아이템을 배치합니다.
 * $size가 0이면 auto, 그 외에는 fr 단위를 사용합니다.
 */
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

/**
 * 섹션 메인 컨테이너 스타일
 * 섹션 내용을 감싸는 컨테이너로, 반응형 패딩을 제공합니다.
 * 데스크톱: 150px, 태블릿: 80px, 모바일: 40px, 소형 모바일: 20px
 */
const Container = styled.div`
  padding: 0px 150px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 10px;
  row-gap: 5px;

  @media (max-width: 1024px) {
    padding: 0px 80px;
  }

  @media (max-width: 768px) {
    padding: 0px 40px;
  }

  @media (max-width: 480px) {
    padding: 0px 20px;
  }
`;

/**
 * 버튼 정렬 컨테이너 스타일
 * 버튼의 텍스트 정렬 방향을 설정합니다.
 */
const ButtonContainer = styled.div<{
  $align: RowAlignType;
}>`
  display: block;
  margin: 0 auto;
  text-align: ${(p) => p.$align};
`;

/**
 * 외부 컨테이너 스타일
 * 테두리와 패딩이 있는 외부 컨테이너입니다.
 */
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

/**
 * 상대 위치 컨테이너 스타일
 * position: relative를 사용하여 위치를 조정할 수 있는 컨테이너입니다.
 */
const RelativeContainer = styled.div<{ $top?: number; $left?: number }>`
  position: relative;
  left: ${(props) => (props.$left !== undefined ? `${props.$left}px` : "auto")};
  top: ${(props) => (props.$top !== undefined ? `${props.$top}px` : "auto")};
  display: inline-block;
`;

/**
 * 절대 위치 컨테이너 스타일
 * position: absolute를 사용하여 부모 요소 기준으로 위치를 지정합니다.
 */
const AbsoluteContainer = styled.div<{ $top?: number; $left?: number }>`
  position: absolute;
  left: ${(props) => (props.$left !== undefined ? `${props.$left}px` : "auto")};
  top: ${(props) => (props.$top !== undefined ? `${props.$top}px` : "auto")};
  display: inline-block;
`;

/**
 * 정적 위치 컨테이너 스타일
 * position: static을 사용하는 기본 컨테이너입니다.
 */
const StaticContainer = styled.div`
  position: static;
  display: inline-block;
`;

/**
 * 위치 지정 박스 컴포넌트
 * 
 * relative, absolute, static 위치 지정이 필요한 요소에 사용합니다.
 * top, left 값으로 위치를 조정할 수 있습니다.
 * 
 * @param {PositionProps} props - 위치 속성 Props
 * @param {"relative" | "absolute" | "static"} props.position - 위치 지정 방식
 * @param {number} [props.top] - 상단 오프셋 (px)
 * @param {number} [props.left] - 좌측 오프셋 (px)
 * 
 * @example
 * ```tsx
 * <CommonBox position="relative" top={10} left={20}>
 *   내용
 * </CommonBox>
 * ```
 */
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

/**
 * 섹션 아이템 박스 컴포넌트
 * 
 * 각 섹션의 내용을 감싸는 메인 컨테이너입니다.
 * 반응형 패딩을 제공하여 다양한 화면 크기에 적응합니다.
 * 
 * @param {ContainerProps} props - 컨테이너 Props
 * @param {React.ReactNode} props.children - 자식 요소
 * 
 * @example
 * ```tsx
 * <ItemBox>
 *   <MainHeader>제목</MainHeader>
 *   <GridBox>...</GridBox>
 * </ItemBox>
 * ```
 */
export function ItemBox({ children }: ContainerProps) {
  return <Container>{children}</Container>;
}

/**
 * 그리드 박스 컴포넌트
 * 
 * CSS Grid를 사용하여 아이템을 그리드 형태로 배치합니다.
 * 컬럼 수, 크기, 간격을 설정할 수 있습니다.
 * 
 * @param {GridProps} props - 그리드 Props
 * @param {React.ReactNode} props.children - 그리드 아이템들
 * @param {number} props.count - 컬럼 개수
 * @param {number} props.size - 각 컬럼 크기 (0이면 auto, 그 외는 fr 단위)
 * @param {number} props.column_gap - 컬럼 간 간격 (px)
 * @param {number} props.row_gap - 행 간 간격 (px)
 * 
 * @example
 * ```tsx
 * <GridBox count={4} size={1} column_gap={20} row_gap={20}>
 *   <div>아이템 1</div>
 *   <div>아이템 2</div>
 * </GridBox>
 * ```
 */
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

/**
 * 상단 네비게이션 헤더 박스 컴포넌트
 * 
 * 상단 헤더 영역(로고와 메뉴)을 감싸는 컨테이너입니다.
 * 양쪽 정렬 레이아웃을 제공합니다.
 * 
 * @param {ContainerProps} props - 컨테이너 Props
 */
export function TopNaviHeaderBox({ children }: ContainerProps) {
  return <TopNaviHeader>{children}</TopNaviHeader>;
}

/**
 * 버튼 박스 컴포넌트
 * 
 * 버튼의 정렬 방향을 설정하는 컨테이너입니다.
 * 
 * @param {BtnContProps} props - 버튼 컨테이너 Props
 * @param {RowAlignType} props.align - 텍스트 정렬 방향
 * @param {React.ReactNode} props.children - 버튼 요소
 * 
 * @example
 * ```tsx
 * <ButtonBox align="center">
 *   <BasicButton type="submit" text="검색" />
 * </ButtonBox>
 * ```
 */
export function ButtonBox({ children, align }: BtnContProps) {
  return <ButtonContainer $align={align}>{children}</ButtonContainer>;
}

/**
 * 외부 박스 컴포넌트
 * 
 * 테두리와 패딩이 있는 외부 컨테이너입니다.
 * 기본값: width 200px, height 200px, padding 50px
 * 
 * @param {ContainerProps} props - 컨테이너 Props
 */
export function OuterBox({ children }: ContainerProps) {
  return (
    <OuterContainer $height={200} $padding={50} $width={200}>
      {children}
    </OuterContainer>
  );
}

/**
 * 검색 박스 컴포넌트
 * 
 * 검색 폼을 감싸는 컨테이너입니다.
 * 기본값: width 300px, left 80px
 * 
 * @param {ContainerProps} props - 컨테이너 Props
 */
export function SearchBox({ children }: ContainerProps) {
  return (
    <SearchContainer $width={300} $left={80}>
      {children}
    </SearchContainer>
  );
}
