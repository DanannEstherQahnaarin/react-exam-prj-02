# 설치 및 설정 가이드

이 문서는 프로젝트를 처음 설정하거나 다른 컴퓨터에서 재설정하는 방법을 안내합니다.

## 📋 목차

1. [저장소 클론 및 초기 설정](#1-저장소-클론-및-초기-설정)
2. [의존성 설치](#2-의존성-설치)
3. [개발 서버 실행](#3-개발-서버-실행)
4. [빌드 및 배포](#4-빌드-및-배포)
5. [Tailwind CSS 설정](#5-tailwind-css-설정)
6. [Styled Components 설정](#6-styled-components-설정)
7. [추가 설정](#7-추가-설정)

---

## 1. 저장소 클론 및 초기 설정

### Git 저장소 클론

```bash
git clone <저장소-URL>
cd react-exam-prj-01
```

### Git 사용자 정보 설정 (처음 사용하는 경우)

다른 컴퓨터에서 처음 Git을 사용하는 경우, 사용자 정보를 설정하세요:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## 2. 의존성 설치

프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install
```

이 명령어는 `package.json`에 정의된 모든 의존성을 설치합니다:
- React 및 React DOM
- TypeScript
- Vite
- Tailwind CSS
- ESLint 및 관련 플러그인

### 추가 패키지 설치

프로젝트에서 추가로 필요한 패키지를 설치할 수 있습니다:

#### Styled Components

CSS-in-JS 스타일링을 위해 styled-components를 설치할 수 있습니다:

```bash
npm install styled-components
```

TypeScript를 사용하는 경우 타입 정의도 함께 설치하세요:

```bash
npm install -D @types/styled-components
```

---

## 3. 개발 서버 실행

의존성 설치가 완료되면 개발 서버를 실행할 수 있습니다:

```bash
npm run dev
```

개발 서버가 시작되면 브라우저에서 `http://localhost:5173` (또는 터미널에 표시된 주소)로 접속하여 애플리케이션을 확인할 수 있습니다.

### 개발 서버의 주요 기능

- **Hot Module Replacement (HMR)**: 코드 변경 시 자동으로 브라우저에 반영
- **빠른 빌드**: Vite의 빠른 번들링 속도
- **TypeScript 지원**: 실시간 타입 체크

---

## 4. 빌드 및 배포

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

## 5. Tailwind CSS 설정

이 프로젝트는 Tailwind CSS v3를 사용합니다. 의존성 설치 시 자동으로 설치됩니다.

### 설정 파일

프로젝트에는 다음 Tailwind CSS 관련 설정 파일이 포함되어 있습니다:

- **`tailwind.config.js`**: Tailwind CSS 설정 파일
  - 컨텐츠 경로 설정
  - 테마 커스터마이징
  - 플러그인 설정

- **`postcss.config.js`**: PostCSS 설정 파일
  - Tailwind CSS 플러그인
  - Autoprefixer 플러그인

- **`src/index.css`** (또는 메인 CSS 파일): Tailwind CSS 디렉티브 포함
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### 사용 방법

컴포넌트에서 Tailwind CSS 유틸리티 클래스를 직접 사용할 수 있습니다:

```tsx
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  );
}
```

### 새 프로젝트에 Tailwind CSS 추가하기

새로운 프로젝트에 Tailwind CSS를 추가하려면 다음 단계를 따르세요:

1. **패키지 설치**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **설정 파일 생성**:
   ```bash
   npx tailwindcss init -p
   ```

3. **`tailwind.config.js` 설정**:
   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **메인 CSS 파일에 Tailwind 디렉티브 추가**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

더 자세한 내용은 [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)를 참고하세요.

---

## 6. Styled Components 설정

이 프로젝트에서 CSS-in-JS 스타일링을 위해 styled-components를 사용할 수 있습니다.

### 설치

프로젝트 루트 디렉토리에서 다음 명령어를 실행하세요:

```bash
npm install styled-components
```

TypeScript를 사용하는 경우 타입 정의도 함께 설치하세요:

```bash
npm install -D @types/styled-components
```

### 사용 방법

컴포넌트에서 styled-components를 import하여 스타일드 컴포넌트를 생성할 수 있습니다:

```tsx
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

  &:active {
    background-color: #1d4ed8;
  }
`;

function App() {
  return (
    <div>
      <StyledButton>클릭하세요</StyledButton>
    </div>
  );
}
```

### Props를 사용한 동적 스타일링

Props를 사용하여 동적으로 스타일을 변경할 수 있습니다:

```tsx
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.primary ? '#3b82f6' : '#6b7280'};
  color: white;
  padding: ${props => {
    if (props.size === 'small') return '0.25rem 0.5rem';
    if (props.size === 'large') return '0.75rem 1.5rem';
    return '0.5rem 1rem';
  }};
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  font-size: ${props => {
    if (props.size === 'small') return '0.875rem';
    if (props.size === 'large') return '1.125rem';
    return '1rem';
  }};
`;

function App() {
  return (
    <div>
      <StyledButton primary size="small">작은 버튼</StyledButton>
      <StyledButton primary size="medium">중간 버튼</StyledButton>
      <StyledButton size="large">큰 버튼</StyledButton>
    </div>
  );
}
```

### 테마 사용하기

ThemeProvider를 사용하여 전역 테마를 설정할 수 있습니다:

```tsx
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#3b82f6',
    secondary: '#6b7280',
    success: '#10b981',
    danger: '#ef4444',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
};

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: ${props => props.theme.spacing.medium};
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton>테마 버튼</StyledButton>
    </ThemeProvider>
  );
}
```

### CSS-in-JS vs Tailwind CSS

이 프로젝트에서는 Tailwind CSS와 styled-components를 함께 사용할 수 있습니다. 각각의 장단점:

- **Tailwind CSS**: 유틸리티 클래스 기반, 빠른 개발, 작은 번들 크기
- **Styled Components**: 컴포넌트 기반, 동적 스타일링 용이, JavaScript와 통합

프로젝트의 요구사항에 따라 적절한 스타일링 방법을 선택하거나 둘을 함께 사용할 수 있습니다.

더 자세한 내용은 [Styled Components 공식 문서](https://styled-components.com/docs)를 참고하세요.

---

## 7. 추가 설정

### 환경 변수 설정

프로젝트에서 환경 변수가 필요한 경우, 프로젝트 루트에 `.env` 파일을 생성하고 필요한 변수를 추가하세요:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My React App
```

환경 변수는 `VITE_` 접두사로 시작해야 Vite에서 접근할 수 있습니다.

### TypeScript 설정

TypeScript 설정은 다음 파일에서 관리됩니다:

- **`tsconfig.json`**: 기본 TypeScript 설정
- **`tsconfig.app.json`**: 애플리케이션 코드용 설정
- **`tsconfig.node.json`**: Vite 설정 파일용 설정

주요 설정:
- `allowJs: true` - JavaScript 파일 import 허용
- `checkJs: false` - JavaScript 파일 타입 체크 비활성화
- `strict: true` - 엄격한 타입 체크 활성화

### ESLint 설정

ESLint 설정은 `eslint.config.js` 파일에서 관리됩니다. 프로덕션 애플리케이션 개발 시 더 엄격한 린트 규칙을 활성화할 수 있습니다.

#### 타입 인식 린트 규칙 활성화

더 엄격한 타입 체크를 위해 `eslint.config.js`를 다음과 같이 수정할 수 있습니다:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // 기존 설정...
      
      // recommendedTypeChecked 또는 strictTypeChecked 사용
      tseslint.configs.recommendedTypeChecked,
      // 또는 더 엄격한 규칙
      // tseslint.configs.strictTypeChecked,
      
      // 스타일 규칙 (선택사항)
      // tseslint.configs.stylisticTypeChecked,
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

#### React 전용 린트 규칙 추가

React 전용 린트 규칙을 추가하려면 다음 플러그인을 설치하고 설정하세요:

```bash
npm install -D eslint-plugin-react-x eslint-plugin-react-dom
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
      // 기존 설정...
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
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

다른 옵션으로는:
- **`@vitejs/plugin-react-swc`**: SWC를 사용한 더 빠른 컴파일 (Babel 대신)

React Compiler는 이 템플릿에서 기본적으로 비활성화되어 있습니다. 활성화하려면 [React Compiler 설치 문서](https://react.dev/learn/react-compiler/installation)를 참고하세요.

---

## 🐛 문제 해결

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
2. JavaScript 파일 import 시 `.js` 확장자를 명시했는지 확인
3. 타입 정의 파일이 올바르게 설치되었는지 확인

---

## 📚 추가 자료

- [Vite 공식 문서](https://vite.dev)
- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [Styled Components 공식 문서](https://styled-components.com/docs)
- [ESLint 공식 문서](https://eslint.org)