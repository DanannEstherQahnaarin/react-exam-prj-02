/**
 * @fileoverview 헤더 컴포넌트 모음
 * 
 * 이 파일은 페이지의 제목과 부제목을 표시하는 헤더 컴포넌트를 제공합니다.
 * 반응형 폰트 크기를 지원하며, 일관된 디자인 시스템을 제공합니다.
 * 
 * @component MainHeader - 섹션의 메인 제목 (큰 폰트, 중앙 정렬, 반응형)
 * @component SubHeader - 부제목 또는 카테고리명 (작은 폰트, 좌측 정렬)
 */

import styled from "styled-components";
import type { ContainerProps } from "@node-props";

/**
 * 메인 헤더 스타일
 * 섹션의 주요 제목에 사용됩니다.
 * 반응형: 데스크톱 32px, 태블릿 24px, 모바일 20px
 */
const MainHeaderDiv = styled.div`
  display: grid;
  color: #222222;
  font-size: 32px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  margin: 0;
  justify-items: center;
  padding-top: 5px;
  padding-bottom: 20px;
  text-shadow: 0 2px 4px rgba(75, 75, 75, 0.1);
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 24px;
    padding-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding-bottom: 12px;
  }
`;

/**
 * 서브 헤더 스타일
 * 부제목, 카테고리명 등에 사용됩니다.
 * 좌측 정렬, 작은 폰트 크기(16px)
 */
const SubHeaderDiv = styled.div`
  display: grid;
  justify-items: left;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  margin: 0;
  line-height: 1.5;
`;

/**
 * 메인 헤더 컴포넌트
 * 
 * 섹션의 주요 제목을 표시합니다. 큰 폰트와 중앙 정렬을 사용하며,
 * 반응형 디자인을 지원합니다.
 * 
 * @param {ContainerProps} props - 컨테이너 Props
 * @param {React.ReactNode} props.children - 헤더 텍스트
 * 
 * @example
 * ```tsx
 * <MainHeader>에어비엔둘러보기</MainHeader>
 * ```
 */
export function MainHeader({ children }: ContainerProps) {
  return <MainHeaderDiv>{children}</MainHeaderDiv>;
}

/**
 * 서브 헤더 컴포넌트
 * 
 * 부제목, 카테고리명, 설명 텍스트 등에 사용됩니다.
 * 작은 폰트와 좌측 정렬을 사용합니다.
 * 
 * @param {ContainerProps} props - 컨테이너 Props
 * @param {React.ReactNode} props.children - 헤더 텍스트
 * 
 * @example
 * ```tsx
 * <SubHeader>오두막</SubHeader>
 * ```
 */
export function SubHeader({ children }: ContainerProps) {
  return <SubHeaderDiv>{children}</SubHeaderDiv>;
}
