/**
 * @fileoverview 선 컴포넌트
 * 
 * 페이지 구분선을 표시하는 컴포넌트입니다.
 * 섹션 간 구분 또는 시각적 분리선으로 사용됩니다.
 * 
 * @component SolidLine - 실선 구분선 컴포넌트
 */

import styled from "styled-components";

/**
 * 실선 스타일
 * 검은색 1px 실선을 표시합니다.
 */
const LineSoild = styled.div`
  border: 1px solid black;
`;

/**
 * 실선 컴포넌트
 * 
 * 섹션 간 구분선이나 시각적 분리선을 표시합니다.
 * 검은색 1px 실선으로 렌더링됩니다.
 * 
 * @returns {JSX.Element} 실선 요소
 * 
 * @example
 * ```tsx
 * <SolidLine />
 * ```
 */
export function SolidLine() {
  return <LineSoild />;
}