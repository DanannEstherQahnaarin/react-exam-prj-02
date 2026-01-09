# 개발 규칙 및 가이드라인 (RULES)

이 문서는 프로젝트 개발 시 준수해야 할 코딩 규칙과 가이드라인을 정의합니다.

---

## 📋 목차

1. [일반 규칙](#1-일반-규칙)
2. [TypeScript 규칙](#2-typescript-규칙)
3. [컴포넌트 작성 규칙](#3-컴포넌트-작성-규칙)
4. [이벤트 핸들러 규칙](#4-이벤트-핸들러-규칙)
5. [Styled Components 규칙](#5-styled-components-규칙)
6. [파일 구조 및 네이밍](#6-파일-구조-및-네이밍)
7. [Import 규칙](#7-import-규칙)
8. [코드 예시](#8-코드-예시)

---

## 1. 일반 규칙

### 1.1 파일 확장자

- **`.tsx`**: React 컴포넌트를 포함하는 TypeScript 파일
- **`.ts`**: 타입 정의, 유틸리티 함수 등 컴포넌트가 아닌 TypeScript 파일

### 1.2 기본 원칙

- ✅ **기존 컴포넌트 재사용**: 이미 만들어진 컴포넌트를 최대한 활용
- ✅ **필요시 확장**: 기존 컴포넌트를 수정하거나 확장하여 사용
- ✅ **타입 안전성**: 모든 코드는 TypeScript 타입을 명시적으로 정의
- ✅ **일관성**: 프로젝트 전체에 걸쳐 일관된 코딩 스타일 유지

---

## 2. TypeScript 규칙

### 2.1 타입 정의 필수

모든 함수, 컴포넌트, 변수에 타입을 명시해야 합니다.

```typescript
// ✅ 올바른 예시
interface ButtonProps {
  text: string;
  type: ButtonType;
  onClick?: () => void;
}

export function Button({ text, type, onClick }: ButtonProps) {
  // ...
}

// ❌ 잘못된 예시
export function Button({ text, type }) {
  // 타입이 명시되지 않음
}
```

### 2.2 타입 Import 규칙

`verbatimModuleSyntax`가 활성화되어 있으므로, 타입은 반드시 `import type`으로 import 해야 합니다.

```typescript
// ✅ 올바른 예시
import type { GridProps, ContainerProps } from "@node-props";
import type { ColorPalette } from "@/type/type-source";
import styled from "styled-components"; // 값은 일반 import

// ❌ 잘못된 예시
import { GridProps, ContainerProps } from "@node-props"; // 타입을 값으로 import
```

### 2.3 타입 파일 위치

- **인터페이스**: `src/interface/` 디렉토리에 정의
- **타입 정의**: `src/type/` 디렉토리에 정의
- **로컬 타입**: 컴포넌트 내부에서만 사용하는 타입은 해당 파일 내에 정의 가능

```typescript
// src/interface/node-props.tsx
export interface ContainerProps {
  children?: ReactNode | null;
}

// src/type/type-source.tsx
export type ColorPalette = "primary" | "secondary" | "success" | ...;

// src/components/Buttons.tsx (로컬 타입)
const Btn = styled.button<{
  $width: number;
  $height: number;
  $color: ColorPalette;
}>`
  // ...
`;
```

---

## 3. 컴포넌트 작성 규칙

### 3.1 기존 컴포넌트 우선 사용

**기존 컴포넌트가 있으면 반드시 재사용**해야 합니다. 필요시 Props를 확장하여 사용합니다.

#### 사용 가능한 기존 컴포넌트

**Containers** (`@components/Containers`):
- `GridBox`: 그리드 레이아웃
- `ItemBox`: 기본 컨테이너
- `ButtonBox`: 버튼 컨테이너
- `SearchBox`: 검색 폼 컨테이너
- `TopNaviHeaderBox`: 네비게이션 헤더
- `OuterBox`: 외부 컨테이너
- `CommonBox`: 위치 기반 컨테이너

**Headers** (`@components/Headers`):
- `MainHeader`: 메인 제목
- `SubHeader`: 서브 제목

**Images** (`@components/Images`):
- `Image`: 기본 이미지 컴포넌트
- `ImageCard`: 이미지 카드 컴포넌트

**Buttons** (`@components/Buttons`):
- `BasicButton`: 기본 버튼 컴포넌트

**IconBoxs** (`@components/IconBoxs`):
- `ImgBox`: 아이콘 박스 컴포넌트

#### 재사용 예시

```typescript
// ✅ 올바른 예시: 기존 컴포넌트 재사용
import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";

export default function MySection() {
  return (
    <Box.ItemBox>
      <MainHeader>제목</MainHeader>
      <Box.GridBox count={4} size={1} column_gap={10} row_gap={5}>
        {/* 내용 */}
      </Box.GridBox>
    </Box.ItemBox>
  );
}
```

### 3.2 컴포넌트 확장 및 수정

기존 컴포넌트가 요구사항을 완전히 충족하지 못할 경우:

1. **Props 확장**: 기존 컴포넌트의 Props 인터페이스를 확장
2. **컴포넌트 수정**: 기존 컴포넌트 파일을 직접 수정
3. **새 컴포넌트 생성**: 완전히 새로운 기능이 필요한 경우에만 새로 생성

```typescript
// ✅ 예시: Props 인터페이스 확장
// src/interface/node-props.tsx에 추가
export interface ExtendedGridProps extends GridProps {
  maxWidth?: number;
  align?: "left" | "center" | "right";
}

// ✅ 예시: 기존 컴포넌트 수정
// src/components/Containers.tsx에서 GridContainer 수정
const ExtendedGridContainer = styled.div<{
  $count: number;
  $size: number;
  $columnGap: number;
  $rowGap: number;
  $maxWidth?: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$count}, ${(p) => (p.$size === 0 ? "auto" : `${p.$size}fr`)});
  column-gap: ${(p) => p.$columnGap}px;
  row-gap: ${(p) => p.$rowGap}px;
  ${(p) => p.$maxWidth && `max-width: ${p.$maxWidth}px;`}
`;
```

### 3.3 새 컴포넌트 생성 규칙

새로운 컴포넌트를 생성해야 하는 경우:

1. 기존 컴포넌트로는 구현 불가능한 기능일 때
2. 재사용 가능한 독립적인 UI 요소일 때
3. `src/components/` 디렉토리에 생성
4. PascalCase로 명명

```typescript
// ✅ 새 컴포넌트 생성 예시
// src/components/Card.tsx
import styled from "styled-components";
import type { ContainerProps } from "@node-props";

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export function Card({ children }: ContainerProps) {
  return <CardContainer>{children}</CardContainer>;
}
```

---

## 4. 이벤트 핸들러 규칙

### 4.1 콜백 함수로 전달

**이벤트가 들어가는 모든 컴포넌트는 이벤트 핸들러를 콜백 함수로 Props로 받아야 합니다.**

컴포넌트 내부에서 직접 이벤트 핸들러를 정의하지 않고, 부모 컴포넌트에서 전달받습니다.

```typescript
// ✅ 올바른 예시: 콜백 함수로 전달
// src/interface/attr-props.tsx
export interface ButtonProps {
  text: string;
  type: ButtonType;
  onClick?: () => void; // 콜백 함수
  onSubmit?: (e: React.FormEvent) => void; // 폼 제출 콜백
}

// src/components/Buttons.tsx
export function BasicButton({ text, type, onClick }: ButtonProps) {
  return (
    <Btn type={type} onClick={onClick}>
      {text}
    </Btn>
  );
}

// 사용 예시 (부모 컴포넌트)
export default function MyPage() {
  const handleClick = () => {
    console.log("버튼 클릭됨");
  };

  return <BasicButton text="클릭" type="button" onClick={handleClick} />;
}
```

```typescript
// ❌ 잘못된 예시: 컴포넌트 내부에서 직접 처리
export function BasicButton({ text, type }: ButtonProps) {
  const handleClick = () => {
    // 이렇게 하지 않음
    console.log("클릭됨");
  };

  return <Btn type={type} onClick={handleClick}>{text}</Btn>;
}
```

### 4.2 이벤트 핸들러 타입 정의

이벤트 핸들러의 타입은 React의 이벤트 타입을 사용합니다.

```typescript
// 일반 클릭 이벤트
onClick?: () => void;
onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

// 폼 이벤트
onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

// 입력 이벤트
onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
```

### 4.3 이벤트 핸들러 예시

```typescript
// ✅ 검색 폼 컴포넌트 예시
interface SearchFormProps {
  onSubmit: (data: { destination: string; checkIn: string; checkOut: string; guests: number }) => void;
}

export function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      destination: formData.get("destination") as string,
      checkIn: formData.get("checkIn") as string,
      checkOut: formData.get("checkOut") as string,
      guests: parseInt(formData.get("guests") as string),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 폼 필드 */}
    </form>
  );
}

// 사용 예시
export default function TopBody() {
  const handleSearch = (data: { destination: string; checkIn: string; checkOut: string; guests: number }) => {
    console.log("검색 데이터:", data);
    // 검색 로직 처리
  };

  return <SearchForm onSubmit={handleSearch} />;
}
```

---

## 5. Styled Components 규칙

### 5.1 필수 사용

**새로 추가하는 컴포넌트에 CSS가 적용해야 할 경우, 반드시 Styled Components를 사용해야 합니다.**

일반 CSS 파일(`.css`)은 사용하지 않습니다. (기존 CSS 파일은 유지 가능)

```typescript
// ✅ 올바른 예시: Styled Components 사용
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export function MyComponent() {
  return <StyledContainer>내용</StyledContainer>;
}

// ❌ 잘못된 예시: 일반 CSS 사용
import "./MyComponent.css"; // 이렇게 하지 않음

export function MyComponent() {
  return <div className="container">내용</div>;
}
```

### 5.2 Transient Props 사용

Styled Components에서 props로 스타일을 전달할 때는 **반드시 `$` 접두사**를 사용해야 합니다.

```typescript
// ✅ 올바른 예시: Transient Props ($ 접두사)
const StyledBox = styled.div<{
  $width: number;
  $height: number;
  $color: string;
}>`
  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
  color: ${(p) => p.$color};
`;

// 사용
<StyledBox $width={100} $height={50} $color="red" />

// ❌ 잘못된 예시: $ 접두사 없이 사용
const StyledBox = styled.div<{
  width: number; // $ 없음
}>`
  width: ${(p) => p.width}px; // DOM에 width 속성이 전달될 수 있음
`;
```

### 5.3 타입 안전한 Styled Components

Styled Components의 props 타입을 명시적으로 정의합니다.

```typescript
// ✅ 올바른 예시: 타입 정의
import type { ColorPalette } from "@/type/type-source";

const Btn = styled.button<{
  $width: number;
  $height: number;
  $color: ColorPalette;
  $back_color: ColorPalette;
}>`
  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
  background-color: ${(p) => colorMap[p.$back_color]};
  color: ${(p) => colorMap[p.$color]};
`;
```

### 5.4 스타일 상수 정의

반복되는 스타일 값은 상수로 정의합니다.

```typescript
// 색상 팔레트 예시
const colorMap: Record<ColorPalette, string> = {
  primary: "#3b82f6",
  secondary: "#6b7280",
  success: "#10b981",
  // ...
};

// 스타일 상수
const borderRadius = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

const Btn = styled.button`
  border-radius: ${borderRadius.medium};
`;
```

---

## 6. 파일 구조 및 네이밍

### 6.1 디렉토리 구조

```
src/
├── components/     # 재사용 가능한 UI 컴포넌트
├── section/        # 페이지 섹션 컴포넌트
├── interface/      # TypeScript 인터페이스 (.tsx)
├── type/           # TypeScript 타입 정의 (.tsx)
├── assets/         # 정적 에셋
└── css/            # CSS 파일 (기존 파일 유지)
```

### 6.2 파일 명명 규칙

- **컴포넌트 파일**: PascalCase (예: `Buttons.tsx`, `TopHeader.tsx`)
- **타입 파일**: kebab-case 또는 camelCase (예: `type-source.tsx`, `node-props.tsx`)
- **유틸리티 파일**: camelCase (예: `utils.ts`, `helpers.ts`)

### 6.3 컴포넌트 명명 규칙

- **함수 컴포넌트**: PascalCase
- **Styled Component**: PascalCase (예: `StyledContainer`, `GridContainer`)
- **일반 변수**: camelCase
- **상수**: UPPER_SNAKE_CASE 또는 camelCase

```typescript
// ✅ 올바른 예시
export function BasicButton() { } // PascalCase
const StyledContainer = styled.div``; // PascalCase
const colorMap = { }; // camelCase
const MAX_WIDTH = 1200; // UPPER_SNAKE_CASE
```

---

## 7. Import 규칙

### 7.1 Path Alias 사용

**반드시 Path Alias를 사용**하여 import 경로를 작성합니다. 상대 경로(`../`)는 사용하지 않습니다.

```typescript
// ✅ 올바른 예시: Path Alias 사용
import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import type { GridProps } from "@node-props";
import type { ColorPalette } from "@/type/type-source";
import TopHeader from "@section/TopHeader";

// ❌ 잘못된 예시: 상대 경로 사용
import { GridBox } from "../components/Containers";
import { MainHeader } from "../../components/Headers";
```

### 7.2 Import 순서

Import는 다음 순서로 정렬합니다:

1. React 관련
2. 타입 import (`import type`)
3. 외부 라이브러리
4. Path Alias로 시작하는 내부 모듈 (컴포넌트, 섹션, 인터페이스, 타입)
5. 상대 경로 (가능한 한 사용하지 않음)

```typescript
// ✅ 올바른 import 순서 예시
import { useState } from "react";
import type { ReactNode } from "react";
import styled from "styled-components";
import type { GridProps, ContainerProps } from "@node-props";
import type { ColorPalette } from "@/type/type-source";
import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import TopHeader from "@section/TopHeader";
```

### 7.3 Import 그룹화

관련된 import는 그룹으로 묶고 빈 줄로 구분합니다.

```typescript
// ✅ 올바른 예시: 그룹화
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import styled from "styled-components";

import type { GridProps } from "@node-props";
import type { ColorPalette } from "@/type/type-source";

import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
```

---

## 8. 코드 예시

### 8.1 완전한 컴포넌트 예시

```typescript
// src/components/Card.tsx
import styled from "styled-components";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const CardContainer = styled.div<{
  $hoverable: boolean;
}>`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  
  ${(p) =>
    p.$hoverable &&
    `
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #333;
`;

export function Card({ title, children, onClick, onMouseEnter }: CardProps) {
  const isHoverable = !!onClick;

  return (
    <CardContainer
      $hoverable={isHoverable}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <CardTitle>{title}</CardTitle>
      {children}
    </CardContainer>
  );
}
```

### 8.2 섹션 컴포넌트 예시

```typescript
// src/section/FeaturedSection.tsx
import type { ReactNode } from "react";
import * as Box from "@components/Containers";
import { MainHeader, SubHeader } from "@components/Headers";
import { ImageCard } from "@components/Images";

interface FeaturedSectionProps {
  onCardClick?: (id: string) => void;
}

export default function FeaturedSection({ onCardClick }: FeaturedSectionProps) {
  const handleCardClick = (id: string) => {
    if (onCardClick) {
      onCardClick(id);
    }
  };

  return (
    <Box.ItemBox>
      <MainHeader>추천 여행지</MainHeader>
      <Box.GridBox count={5} size={1} column_gap={10} row_gap={5}>
        <ImageCard
          image="/image1.jpg"
          text="여행지 1"
          height={200}
          width={200}
          onClick={() => handleCardClick("1")}
        />
        {/* ... */}
      </Box.GridBox>
    </Box.ItemBox>
  );
}
```

### 8.3 이벤트 핸들러가 있는 컴포넌트 예시

```typescript
// src/components/SearchForm.tsx
import { useState } from "react";
import styled from "styled-components";
import type { ButtonType } from "@/type/type-source";
import * as Box from "@components/Containers";
import { SubHeader } from "@components/Headers";
import { BasicButton } from "@components/Buttons";

interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

interface SearchFormProps {
  onSubmit: (data: SearchData) => void;
  onReset?: () => void;
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

export function SearchForm({ onSubmit, onReset }: SearchFormProps) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ destination, checkIn, checkOut, guests });
  };

  const handleReset = () => {
    setDestination("");
    setCheckIn("");
    setCheckOut("");
    setGuests(1);
    if (onReset) {
      onReset();
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SubHeader>목적지</SubHeader>
      <Input
        type="text"
        placeholder="모든 위치"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      {/* 나머지 필드 */}
      <Box.ButtonBox align="center">
        <BasicButton type="submit" text="검색" />
        <BasicButton type="button" text="초기화" onClick={handleReset} />
      </Box.ButtonBox>
    </FormContainer>
  );
}
```

---

## 📝 체크리스트

새 컴포넌트를 작성할 때 다음을 확인하세요:

- [ ] TypeScript 타입이 모두 정의되어 있는가?
- [ ] 타입 import는 `import type`을 사용하는가?
- [ ] 기존 컴포넌트를 최대한 재사용하는가?
- [ ] 이벤트 핸들러는 콜백 함수로 Props로 받는가?
- [ ] Styled Components를 사용하는가?
- [ ] Transient Props에 `$` 접두사를 사용하는가?
- [ ] Path Alias를 사용하여 import하는가?
- [ ] 파일명과 컴포넌트명이 PascalCase인가?

---

## 🔍 참고사항

- 이 규칙은 프로젝트의 일관성을 유지하기 위한 가이드라인입니다.
- 특별한 경우 규칙에서 벗어날 필요가 있다면 팀과 상의 후 결정합니다.
- 규칙을 위반하는 기존 코드가 있다면 리팩토링을 고려합니다.

---

**마지막 업데이트**: 2024
