/**
 * @fileoverview 이미지 컴포넌트 모음
 * 
 * 이 파일은 이미지를 표시하는 다양한 컴포넌트를 제공합니다.
 * 텍스트 오버레이, 호버 효과, 접근성 속성을 지원합니다.
 * 
 * @component Image - 기본 이미지 컴포넌트 (텍스트 오버레이 지원, 클릭 가능)
 * @component ImageCard - 카드 형태 이미지 컴포넌트 (설명 텍스트 오버레이)
 * @component ImgDiv - 배경 이미지가 있는 div 컴포넌트
 */

import styled from "styled-components";
import type { ImageProps } from "@attr-props";

/**
 * 이미지 래퍼 스타일
 * 이미지를 감싸는 컨테이너로, 크기, 클릭 가능 여부, 호버 효과를 제공합니다.
 * 클릭 가능한 경우 호버 시 위로 올라가고 그림자가 생깁니다.
 */
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

/**
 * 이미지 박스 스타일
 * 실제 이미지 요소로, object-fit: cover를 사용하여 컨테이너를 채웁니다.
 * 호버 시 확대 효과를 제공합니다.
 */
const ImageBox = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  display: block;
  transition: transform 0.3s ease;
`;

/**
 * 이미지 텍스트 오버레이 스타일
 * 이미지 중앙에 표시되는 텍스트입니다.
 * 흰색, 그림자 효과, 포인터 이벤트 비활성화
 */
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

/**
 * 설명 텍스트 오버레이 스타일
 * ImageCard에서 사용하는 설명 텍스트입니다.
 */
const DescriptionTxt = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px gray;
  pointer-events: none;
`;

/**
 * 배경 이미지 div 스타일
 * 배경 이미지로 표시되는 div 컴포넌트
 */
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

/**
 * 이미지 div 컴포넌트
 * 
 * 배경 이미지를 사용하는 div 컴포넌트입니다.
 * 
 * @param {ImageProps} props - 이미지 Props
 * @param {string} props.image - 이미지 URL 또는 경로
 * @param {string} [props.text] - 표시될 텍스트
 */
export function ImgDiv({ image, text }: ImageProps) {
  return (
    <ImageDiv image={image} height={100} width={100}>
      <label>{text}</label>
    </ImageDiv>
  );
}

/**
 * 이미지 컴포넌트
 * 
 * 이미지를 표시하는 기본 컴포넌트입니다.
 * 텍스트 오버레이, 클릭 이벤트, 키보드 접근성을 지원합니다.
 * 
 * @param {ImageProps} props - 이미지 Props
 * @param {string} props.image - 이미지 URL 또는 경로
 * @param {string} [props.text] - 이미지 위에 표시될 텍스트 (선택사항)
 * @param {number} props.height - 이미지 높이 (px)
 * @param {number} props.width - 이미지 너비 (px)
 * @param {() => void} [props.onClick] - 클릭 이벤트 핸들러 (선택사항)
 * 
 * @example
 * ```tsx
 * <Image 
 *   image="/image.jpg" 
 *   text="이미지 설명" 
 *   height={200} 
 *   width={200}
 *   onClick={() => console.log("클릭")}
 * />
 * ```
 */
export function Image({ image, text, height, width, onClick }: ImageProps) {
  return (
    <ImageWrapper 
      $height={height} 
      $width={width}
      $clickable={!!onClick}
      onClick={onClick}
      role={onClick ? "button" : "img"}
      tabIndex={onClick ? 0 : -1}
      aria-label={text || "이미지"}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <ImageBox src={image} alt={text || ""} loading="lazy" />
      {text && <ImageTxt>{text}</ImageTxt>}
    </ImageWrapper>
  );
}

/**
 * 이미지 카드 컴포넌트
 * 
 * 카드 형태로 이미지를 표시하는 컴포넌트입니다.
 * 이미지 위에 설명 텍스트가 오버레이되어 표시됩니다.
 * 클릭 이벤트와 키보드 접근성을 지원합니다.
 * 
 * @param {ImageProps} props - 이미지 Props
 * @param {string} props.image - 이미지 URL 또는 경로
 * @param {string} [props.text] - 카드 설명 텍스트 (오버레이)
 * @param {number} props.height - 이미지 높이 (px)
 * @param {number} props.width - 이미지 너비 (px)
 * @param {() => void} [props.onClick] - 클릭 이벤트 핸들러 (선택사항)
 * 
 * @example
 * ```tsx
 * <ImageCard 
 *   image="/card.jpg" 
 *   text="숙소 및 부티크 호텔" 
 *   height={200} 
 *   width={200}
 *   onClick={() => handleClick("hotel")}
 * />
 * ```
 */
export function ImageCard({ image, text, height, width, onClick }: ImageProps) {
  return (
    <ImageWrapper 
      $height={height} 
      $width={width}
      $clickable={!!onClick}
      onClick={onClick}
      role={onClick ? "button" : "img"}
      tabIndex={onClick ? 0 : -1}
      aria-label={text || "카드 이미지"}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <ImageBox src={image} alt={text || ""} loading="lazy" />
      {text && <DescriptionTxt>{text}</DescriptionTxt>}
    </ImageWrapper>
  );
}
