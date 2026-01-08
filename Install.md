# 설치 및 설정 가이드

이 문서는 **숙소 예약 플랫폼** 프로젝트의 설치 및 설정 방법을 안내합니다.

## 📋 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [시작하기](#2-시작하기)
3. [의존성 설치](#3-의존성-설치)
4. [개발 서버 실행](#4-개발-서버-실행)
5. [빌드 및 배포](#5-빌드-및-배포)
6. [프로젝트 구조](#6-프로젝트-구조)
7. [TypeScript Path Alias](#7-typescript-path-alias)
8. [Styled Components 사용](#8-styled-components-사용)
9. [추가 설정](#9-추가-설정)
10. [문제 해결](#10-문제-해결)

---

## 1. 프로젝트 개요

이 프로젝트는 다음 기술 스택을 사용합니다:

- **React 19.2.0**: UI 라이브러리
- **TypeScript 5.9.3**: 타입 안전성
- **Vite 7.2.4**: 빌드 도구 및 개발 서버
- **Styled Components 6.2.0**: CSS-in-JS 스타일링
- **ESLint**: 코드 품질 관리

---

## 2. 시작하기

### 필수 요구사항

- **Node.js**: 18.0.0 이상
- **npm**: 9.0.0 이상 (또는 yarn, pnpm)

### 저장소 클론

```bash
git clone <저장소-URL>
cd my-react-ex02
```

### Git 사용자 정보 설정 (처음 사용하는 경우)

다른 컴퓨터에서 처음 Git을 사용하는 경우, 사용자 정보를 설정하세요:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 3. 의존성 설치

프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install
```

이 명령어는 `package.json`에 정의된 모든 의존성을 설치합니다:

### 주요 의존성

**프로덕션 의존성:**
- `react` & `react-dom`: React 라이브러리
- `styled-components`: CSS-in-JS 스타일링

**개발 의존성:**
- `typescript`: TypeScript 컴파일러
- `vite`: 빌드 도구
- `@vitejs/plugin-react`: React 플러그인
- `eslint`: 코드 린터
- `typescript-eslint`: TypeScript용 ESLint 플러그인

---

## 4. 개발 서버 실행

의존성 설치가 완료되면 개발 서버를 실행할 수 있습니다:

```bash
npm run dev
```

개발 서버가 시작되면 브라우저에서 `http://localhost:5173` (또는 터미널에 표시된 주소)로 접속하여 애플리케이션을 확인할 수 있습니다.

### 개발 서버의 주요 기능

- **Hot Module Replacement (HMR)**: 코드 변경 시 자동으로 브라우저에 반영
- **빠른 빌드**: Vite의 빠른 번들링 속도
- **TypeScript 지원**: 실시간 타입 체크
- **Fast Refresh**: React 컴포넌트 상태 유지하며 업데이트

---

## 5. 빌드 및 배포

### 프로덕션 빌드

배포를 위한 프로덕션 빌드를 생성합니다:

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉토리에 생성됩니다.

### 빌드 결과 미리보기

빌드된 결과물을 로컬에서 미리볼 수 있습니다:

```bash
npm run preview
```

### 코드 린팅

코드 품질을 확인하기 위해 ESLint를 실행할 수 있습니다:

```bash
npm run lint
```

---

## 6. 프로젝트 구조

```
my-react-ex02/
├── src/
│   ├── components/          # 재사용 가능한 UI 컴포넌트
│   │   ├── Buttons.tsx      # 버튼 컴포넌트
│   │   ├── Containers.tsx   # 컨테이너 컴포넌트
│   │   ├── Headers.tsx      # 헤더 컴포넌트
│   │   ├── IconBoxs.tsx     # 아이콘 박스 컴포넌트
│   │   ├── Images.tsx       # 이미지 컴포넌트
│   │   └── Liner.tsx        # 선 컴포넌트
│   ├── section/             # 페이지 섹션 컴포넌트
│   │   ├── TopHeader.tsx    # 상단 헤더
│   │   ├── TopBody.tsx      # 상단 바디
│   │   ├── MainAroundBox.tsx
│   │   ├── MainChoBox.tsx
│   │   ├── MainAdBox.tsx
│   │   └── MainLodging.tsx
│   ├── interface/           # TypeScript 인터페이스
│   │   ├── attr-props.tsx
│   │   └── node-props.tsx
│   ├── type/                # TypeScript 타입 정의
│   │   └── type-source.tsx
│   ├── assets/              # 정적 에셋
│   ├── css/                 # CSS 파일
│   ├── App.tsx              # 메인 앱 컴포넌트
│   └── main.tsx             # 진입점
├── public/                  # 정적 파일
├── dist/                    # 빌드 결과물
├── node_modules/            # 의존성 패키지
├── index.html               # HTML 템플릿
├── package.json             # 프로젝트 설정
├── tsconfig.json            # TypeScript 설정
├── tsconfig.app.json        # 앱용 TypeScript 설정
├── tsconfig.node.json       # Node용 TypeScript 설정
├── vite.config.ts           # Vite 설정
├── eslint.config.js         # ESLint 설정
└── README.md                # 프로젝트 문서
```

---

## 7. TypeScript Path Alias

이 프로젝트는 TypeScript Path Alias를 사용하여 더 깔끔한 import 경로를 제공합니다.

### 설정된 Path Alias

다음 Path Alias가 `tsconfig.app.json`과 `vite.config.ts`에 설정되어 있습니다:

- `@/*` → `./src/*` - src 디렉토리 전체
- `@components/*` → `./src/components/*` - 컴포넌트 디렉토리
- `@section/*` → `./src/section/*` - 섹션 디렉토리
- `@interface/*` → `./src/interface/*` - 인터페이스 디렉토리
- `@type/*` → `./src/type/*` - 타입 디렉토리
- `@assets/*` → `./src/assets/*` - 에셋 디렉토리
- `@css/*` → `./src/css/*` - CSS 디렉토리
- `@node-props` → `./src/interface/node-props.tsx` - 노드 props 인터페이스
- `@attr-props` → `./src/interface/attr-props.tsx` - 속성 props 인터페이스
- `@type-source` → `./src/type/type-source.tsx` - 타입 소스

### 사용 예시

```typescript
// 상대 경로 대신 Path Alias 사용
import { GridBox, ItemBox } from "@components/Containers";
import { MainHeader, SubHeader } from "@components/Headers";
import TopHeader from "@section/TopHeader";
import type { ColorPalette } from "@/type/type-source";
import type { btnProps } from "@attr-props";
import logo from "@assets/react.svg";
import "@css/App.css";
```

### 설정 파일

Path Alias는 다음 파일에서 설정되어 있습니다:

- **`tsconfig.app.json`**: TypeScript 컴파일러를 위한 path 매핑
- **`vite.config.ts`**: Vite 번들러를 위한 alias 설정

두 파일 모두 동일한 alias를 사용하도록 설정되어 있어 TypeScript 타입 체크와 Vite 빌드 모두에서 정상 작동합니다.

---

## 8. Styled Components 사용

이 프로젝트는 **Styled Components**를 주 스타일링 방법으로 사용합니다.

### 설치 상태

Styled Components는 이미 설치되어 있습니다:

```json
{
  "dependencies": {
    "styled-components": "^6.2.0"
  }
}
```

### 기본 사용 방법

컴포넌트에서 styled-components를 import하여 스타일드 컴포넌트를 생성할 수 있습니다:

```typescript
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background-color: #2563eb;
  }
`;
```

### Props를 사용한 동적 스타일링

이 프로젝트에서는 props를 사용하여 동적으로 스타일을 변경합니다:

```typescript
import styled from 'styled-components';
import type { ColorPalette } from '@/type/type-source';

const colorMap: Record<ColorPalette, string> = {
  primary: "#3b82f6",
  secondary: "#6b7280",
  // ...
};

const Btn = styled.button<{
  $color: ColorPalette;
  $back_color: ColorPalette;
}>`
  background-color: ${(p) => colorMap[p.$back_color]};
  color: ${(p) => colorMap[p.$color]};
`;
```

### 프로젝트의 컴포넌트 예시

이 프로젝트의 실제 컴포넌트 구조:

```typescript
// src/components/Containers.tsx
const GridContainer = styled.div<{
  $count: number;
  $size: number;
  $columnGap: number;
  $rowGap: number;
}>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$count}, ${(p) => p.$size === 0 ? 'auto' : `${p.$size}fr`});
  column-gap: ${(p) => p.$columnGap}px;
  row-gap: ${(p) => p.$rowGap}px;
`;
```

더 자세한 내용은 [Styled Components 공식 문서](https://styled-components.com/docs)를 참고하세요.

---

## 9. 추가 설정

### 환경 변수 설정

프로젝트에서 환경 변수가 필요한 경우, 프로젝트 루트에 `.env` 파일을 생성하고 필요한 변수를 추가하세요:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=숙소 예약 플랫폼
```

환경 변수는 `VITE_` 접두사로 시작해야 Vite에서 접근할 수 있습니다.

### TypeScript 설정

TypeScript 설정은 다음 파일에서 관리됩니다:

- **`tsconfig.json`**: 기본 TypeScript 설정
- **`tsconfig.app.json`**: 애플리케이션 코드용 설정 (Path Alias 포함)
- **`tsconfig.node.json`**: Vite 설정 파일용 설정

주요 설정:
- `strict: true` - 엄격한 타입 체크 활성화
- `verbatimModuleSyntax: true` - 타입 전용 import 강제
- `noUnusedLocals: true` - 사용하지 않는 지역 변수 체크
- `noUnusedParameters: true` - 사용하지 않는 매개변수 체크

### ESLint 설정

ESLint 설정은 `eslint.config.js` 파일에서 관리됩니다.

현재 활성화된 규칙:
- `@eslint/js`: JavaScript 기본 규칙
- `typescript-eslint`: TypeScript 규칙
- `react-hooks`: React Hooks 규칙
- `react-refresh`: React Fast Refresh 규칙

#### 타입 인식 린트 규칙 활성화 (선택사항)

더 엄격한 타입 체크를 위해 `eslint.config.js`를 다음과 같이 수정할 수 있습니다:

```js
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 기존 설정...
      tseslint.configs.recommendedTypeChecked,
      // 또는 더 엄격한 규칙
      // tseslint.configs.strictTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### Vite 플러그인

이 프로젝트는 `@vitejs/plugin-react`를 사용하여 React Fast Refresh를 지원합니다.

다른 옵션:
- **`@vitejs/plugin-react-swc`**: SWC를 사용한 더 빠른 컴파일 (Babel 대신)

React Compiler는 이 프로젝트에서 기본적으로 비활성화되어 있습니다. 활성화하려면 [React Compiler 설치 문서](https://react.dev/learn/react-compiler/installation)를 참고하세요.

---

## 10. 문제 해결

### 의존성 설치 오류

의존성 설치 중 오류가 발생하면 다음을 시도하세요:

```bash
# node_modules 및 lock 파일 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### 포트 충돌

개발 서버가 실행 중인 포트가 이미 사용 중인 경우, Vite가 자동으로 다른 포트를 사용합니다. 터미널에 표시된 주소를 확인하세요.

### TypeScript 오류

TypeScript 오류가 발생하면 다음을 확인하세요:

1. `tsconfig.app.json`의 설정이 올바른지 확인
2. Path Alias가 올바르게 설정되었는지 확인
3. 타입 정의 파일이 올바르게 설치되었는지 확인
4. `verbatimModuleSyntax`가 활성화된 경우, 타입은 `import type`으로 import해야 함

**예시:**
```typescript
// 올바른 방법
import type { ColorPalette } from '@/type/type-source';
import type { btnProps } from '@attr-props';

// 잘못된 방법 (verbatimModuleSyntax 활성화 시)
import { ColorPalette } from '@/type/type-source';
```

### Styled Components 타입 오류

Styled Components를 사용할 때 타입 오류가 발생하면:

1. `@types/styled-components`가 설치되어 있는지 확인 (이 프로젝트는 styled-components 6.x를 사용하므로 별도 설치 불필요)
2. Props 타입이 올바르게 정의되었는지 확인
3. Transient props (예: `$color`)를 사용할 때는 `$` 접두사를 사용해야 함

---

## 📚 추가 자료

- [Vite 공식 문서](https://vite.dev)
- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org)
- [Styled Components 공식 문서](https://styled-components.com/docs)
- [ESLint 공식 문서](https://eslint.org)

---

## 📝 참고사항

- 이 프로젝트는 **Styled Components**를 주 스타일링 방법으로 사용합니다
- **Tailwind CSS**는 설치되어 있지만 현재 사용하지 않습니다
- 모든 컴포넌트는 TypeScript로 작성되어 타입 안전성을 보장합니다
- Path Alias를 사용하여 깔끔한 import 경로를 제공합니다
