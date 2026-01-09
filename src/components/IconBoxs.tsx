/**
 * @fileoverview 아이콘 박스 컴포넌트
 * 
 * 배경 이미지를 사용하는 아이콘 박스 컴포넌트입니다.
 * 이미지 위에 텍스트 레이블을 표시합니다.
 * 
 * @component ImgBox - 배경 이미지와 텍스트가 있는 박스 컴포넌트
 */

import styled from "styled-components";
import type { BoxProps } from "@attr-props";

/**
 * 아이콘 div 스타일
 * 배경 이미지를 사용하여 아이콘을 표시합니다.
 */
const IconDiv = styled.div<{ $img: string }>`
  background: url(${(props) => props.$img});
  height: 200px;
  background-size: cover;
  display: grid;
`;

/**
 * 이미지 박스 컴포넌트
 * 
 * 배경 이미지로 아이콘을 표시하고, 그 위에 텍스트 레이블을 표시합니다.
 * 
 * @param {BoxProps} props - 박스 Props
 * @param {string} props.img - 배경 이미지 URL 또는 경로
 * @param {string} props.text - 표시될 텍스트 레이블
 * 
 * @example
 * ```tsx
 * <ImgBox img="/icon.jpg" text="아이콘 이름" />
 * ```
 */
export function ImgBox({ img, text }: BoxProps) {
  return (
    <IconDiv $img={img}>
      <label>{text}</label>
    </IconDiv>
  );
}