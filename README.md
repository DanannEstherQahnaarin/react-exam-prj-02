# React + TypeScript + Vite

이 템플릿은 HMR과 일부 ESLint 규칙을 사용하여 Vite에서 React가 작동하도록 하는 최소 설정을 제공합니다.

## 📦 설치

상세한 설치 및 설정 방법은 [Install.md](./Install.md)를 참조하세요.

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

## TypeScript Path Alias

이 프로젝트는 TypeScript Path Alias를 사용하여 더 깔끔한 import 경로를 제공합니다.

### 설정된 Path Alias

- `@/*` → `./src/*` - src 디렉토리 전체
- `@components/*` → `./src/components/*` - 컴포넌트 디렉토리
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
import logo from '@assets/react.svg'
import '@css/App.css'
```

### 설정 파일

Path Alias는 다음 파일에서 설정되어 있습니다:

- **`tsconfig.app.json`**: TypeScript 컴파일러를 위한 path 매핑
- **`vite.config.ts`**: Vite 번들러를 위한 alias 설정

두 파일 모두 동일한 alias를 사용하도록 설정되어 있어 TypeScript 타입 체크와 Vite 빌드 모두에서 정상 작동합니다.
