# React + TypeScript + Vite - 숙소 예약 플랫폼

이 프로젝트는 React, TypeScript, Vite를 사용하여 구축된 숙소 예약 플랫폼입니다. Styled Components를 활용한 컴포넌트 기반 아키텍처로 구성되어 있습니다.

## 📦 설치

상세한 설치 및 설정 방법은 [Install.md](./Install.md)를 참조하세요.

### 빠른 시작

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

현재 두 가지 공식 플러그인을 사용할 수 있습니다:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)는 Fast Refresh를 위해 [Babel](https://babeljs.io/)을 사용합니다 (또는 [rolldown-vite](https://vite.dev/guide/rolldown)에서 사용할 때 [oxc](https://oxc.rs) 사용)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)는 Fast Refresh를 위해 [SWC](https://swc.rs/)를 사용합니다

## React Compiler

React Compiler는 개발 및 빌드 성능에 미치는 영향으로 인해 이 템플릿에서 활성화되어 있지 않습니다. 추가하려면 [이 문서](https://react.dev/learn/react-compiler/installation)를 참조하세요.

## ESLint 설정 확장

프로덕션 애플리케이션을 개발하는 경우, 타입 인식 린트 규칙을 활성화하도록 설정을 업데이트하는 것을 권장합니다:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 기타 설정...

      // tseslint.configs.recommended를 제거하고 이것으로 교체
      tseslint.configs.recommendedTypeChecked,
      // 또는 더 엄격한 규칙을 위해 이것을 사용
      tseslint.configs.strictTypeChecked,
      // 선택적으로 스타일 규칙을 위해 이것을 추가
      tseslint.configs.stylisticTypeChecked,

      // 기타 설정...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // 기타 옵션...
    },
  },
])
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 기타 설정...
      // React용 린트 규칙 활성화
      reactX.configs['recommended-typescript'],
      // React DOM용 린트 규칙 활성화
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // 기타 옵션...
    },
  },
])
```

## 🏗️ 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Buttons.tsx      # 버튼 컴포넌트 (색상 팔레트 지원)
│   ├── Containers.tsx   # 컨테이너 컴포넌트 (GridBox, ItemBox 등)
│   ├── Headers.tsx      # 헤더 컴포넌트 (MainHeader, SubHeader)
│   ├── IconBoxs.tsx     # 아이콘 박스 컴포넌트
│   ├── Images.tsx       # 이미지 컴포넌트 (Image, ImageCard)
│   └── Liner.tsx        # 선 컴포넌트
├── section/             # 페이지 섹션 컴포넌트
│   ├── TopHeader.tsx    # 상단 헤더 (네비게이션)
│   ├── TopBody.tsx      # 상단 바디 (검색 폼)
│   ├── MainAroundBox.tsx # 둘러보기 섹션
│   ├── MainChoBox.tsx   # 추천여행지 섹션
│   ├── MainAdBox.tsx    # 광고 섹션
│   └── MainLodging.tsx  # 숙소 목록 섹션
├── interface/           # TypeScript 인터페이스 정의
│   ├── attr-props.tsx   # 속성 관련 인터페이스
│   └── node-props.tsx   # 노드 관련 인터페이스
├── type/                # TypeScript 타입 정의
│   └── type-source.tsx  # 공통 타입 (ColorPalette, ButtonType 등)
├── assets/              # 정적 에셋 파일
└── css/                 # CSS 스타일 파일
```

## 🎨 주요 기능

### 컴포넌트 시스템

- **재사용 가능한 컴포넌트**: Containers, Buttons, Headers, Images 등
- **타입 안전성**: TypeScript로 모든 컴포넌트와 props 타입 정의
- **색상 팔레트**: 미리 정의된 색상 팔레트를 통한 일관된 디자인

### Styled Components

모든 스타일링은 Styled Components를 사용하여 구현되었습니다:

```typescript
import { GridBox, ItemBox } from "@components/Containers";
import { MainHeader, SubHeader } from "@components/Headers";
import { Image, ImageCard } from "@components/Images";

// 사용 예시
<GridBox count={4} size={1} column_gap={10} row_gap={5}>
  <ImageCard image="" text="숙소 및 부티크 호텔" height={200} width={200} />
</GridBox>
```

### 색상 팔레트 시스템

`ColorPalette` 타입을 통해 일관된 색상 사용:

```typescript
import type { ColorPalette } from "@/type/type-source";

// 사용 가능한 색상: primary, secondary, success, danger, warning, info, white, black, red, gray
<BasicButton 
  text="검색" 
  type="submit"
  $back_color="red"
  $color="white"
/>
```

## 📝 TypeScript Path Alias

이 프로젝트는 TypeScript Path Alias를 사용하여 더 깔끔한 import 경로를 제공합니다.

### 설정된 Path Alias

- `@/*` → `./src/*` - src 디렉토리 전체
- `@components/*` → `./src/components/*` - 컴포넌트 디렉토리
- `@section/*` → `./src/section/*` - 섹션 디렉토리
- `@interface/*` → `./src/interface/*` - 인터페이스 디렉토리
- `@type/*` → `./src/type/*` - 타입 디렉토리
- `@assets/*` → `./src/assets/*` - 에셋 디렉토리
- `@css/*` → `./src/css/*` - CSS 디렉토리

### 사용 예시

Path Alias를 사용하면 상대 경로 대신 더 간결한 import를 사용할 수 있습니다:

```typescript
// 기존 방식 (상대 경로)
import { ItemBox } from '../components/Containers'
import { ImgBox } from '../components/IconBoxs'
import logo from '../assets/react.svg'
import '../css/App.css'

// Path Alias 사용
import { ItemBox } from '@components/Containers'
import { ImgBox } from '@components/IconBoxs'
import TopHeader from '@section/TopHeader'
import type { ColorPalette } from '@/type/type-source'
import logo from '@assets/react.svg'
import '@css/App.css'
```

### 설정 파일

Path Alias는 다음 파일에서 설정되어 있습니다:

- **`tsconfig.app.json`**: TypeScript 컴파일러를 위한 path 매핑
- **`vite.config.ts`**: Vite 번들러를 위한 alias 설정

두 파일 모두 동일한 alias를 사용하도록 설정되어 있어 TypeScript 타입 체크와 Vite 빌드 모두에서 정상 작동합니다.

## 🧩 주요 컴포넌트

### Containers
- `GridBox`: 그리드 레이아웃 컨테이너 (count, size, column_gap, row_gap)
- `ItemBox`: 기본 아이템 컨테이너
- `ButtonBox`: 버튼 컨테이너
- `SearchBox`: 검색 폼 컨테이너
- `TopNaviHeaderBox`: 상단 네비게이션 헤더

### Headers
- `MainHeader`: 메인 헤더 (큰 제목)
- `SubHeader`: 서브 헤더 (작은 제목)

### Images
- `Image`: 기본 이미지 컴포넌트
- `ImageCard`: 이미지 카드 컴포넌트 (텍스트 포함)

### Buttons
- `BasicButton`: 기본 버튼 컴포넌트 (색상 팔레트 지원)

## 🛠️ 기술 스택

- **React 19.2.0**: UI 라이브러리
- **TypeScript 5.9.3**: 타입 안전성
- **Vite 7.2.4**: 빌드 도구
- **Styled Components 6.2.0**: CSS-in-JS 스타일링
- **ESLint**: 코드 품질 관리
