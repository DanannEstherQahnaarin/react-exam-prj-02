# Product Requirements Document (PRD)

## 📋 프로젝트 개요

**프로젝트명**: 숙소 예약 플랫폼 (Airbnb 스타일)

**프로젝트 목적**:
1. 리액트 화면 구성 완료
2. 화면의 구성 및 컴포넌트 역할 파악
3. 리액트 및 타입스크립트 구성 학습

**기술 스택**: React 19.2.0, TypeScript 5.9.3, Vite 7.2.4, Styled Components 6.2.0

---

## 🎯 프로젝트 목표

### 학습 목표
- React 컴포넌트 기반 개발 이해
- TypeScript를 활용한 타입 안전한 개발
- Styled Components를 이용한 CSS-in-JS 스타일링
- 컴포넌트 재사용성과 모듈화 원칙 학습
- Path Alias를 활용한 프로젝트 구조화

### 구현 목표
- 사용자 친화적인 숙소 예약 플랫폼 UI 구현
- 반응형 레이아웃 구성
- 재사용 가능한 컴포넌트 라이브러리 구축

---

## 🖼️ 화면 구성

### 1. 상단 헤더 영역 (TopHeader)

**위치**: 페이지 최상단

**구성 요소**:
- **로고 영역** (왼쪽)
  - Airbnb 스타일 로고 SVG 아이콘
  - 클릭 시 홈으로 이동

- **네비게이션 메뉴** (오른쪽)
  - "호스트 등록" (Host registration)
  - "도움말" (Help)
  - "회원가입" (Sign up)
  - "로그인" (Login)

**레이아웃**: 
- Grid 레이아웃 사용
- 좌우 정렬 (justify-content: space-between)

**구현 컴포넌트**: `TopHeader.tsx`

---

### 2. 히어로 섹션 (Hero Section / TopBody)

**위치**: 헤더 바로 아래, 배경 이미지 위에 오버레이

**배경 이미지**:
- 현대적인 나무 건축물이 있는 자연 풍경
- 고해상도 이미지로 전체 화면 커버

**검색 폼 (오버레이)**:
- **제목**: "특색 있는 숙소와 즐길 거리를 예약하세요."
- **입력 필드**:
  - 목적지 (Destination): 텍스트 입력, placeholder "모든 위치"
  - 체크인/체크아웃: 날짜 선택 (date input)
  - 인원: 드롭다운 선택
- **검색 버튼**: 빨간색 강조 버튼 "검색"

**하단 정보** (우측 하단):
- "Airbnb Luxe © 2024"
- "개인정보 보호, 이용약관" 링크

**구현 컴포넌트**: `TopBody.tsx`

---

### 3. 에어비앤비 둘러보기 섹션 (Explore Airbnb)

**제목**: "에어비앤비 둘러보기"

**컨텐츠**: 4개의 카드 형태 아이템 (가로 배치)
1. **숙소 및 부티크 호텔**: 현대적인 방 이미지
2. **트립**: 하이킹하는 사람 이미지
3. **어드벤처**: 절벽 위 사람 이미지
4. **레스토랑**: 음식 이미지

**레이아웃**: 
- Grid 레이아웃 (4열)
- 각 카드는 이미지와 텍스트 포함

**구현 컴포넌트**: `MainAroundBox.tsx`

---

### 4. 특별 여행 안내 섹션 (Featured Travel Guide)

**배경 이미지**:
- 광활한 계곡/사막 풍경의 파노라마 이미지
- 일출/일몰의 따뜻한 색감
- 사람들이 바위 위에서 경관을 감상하는 장면

**텍스트 오버레이** (좌측):
- **제목**: "호스트의 안내를 받아 특별한 장소로 떠나는 여행"
- **부제목**: "숙소, 식사, 액티비티 포함"
- **링크**: "자세히 보기" (우측 화살표 아이콘)

**레이아웃**:
- 전체 너비 배경 이미지
- 좌측 정렬 텍스트 오버레이

---

### 5. 추천 여행지 섹션 (Recommended Destinations)

**제목**: "추천여행지"

**컨텐츠**: 5개의 이미지 카드 (가로 배치)
- 각 카드는 여행지 이미지만 표시
- Grid 레이아웃 (5열)

**구현 컴포넌트**: `MainChoBox.tsx`

---

### 6. 광고 섹션 (Advertisement)

**컨텐츠**: 3개의 광고 슬롯 (구현 예정)

**레이아웃**: 가로 배치

**구현 컴포넌트**: `MainAdBox.tsx`

---

### 7. 전세계 숙소 섹션 (Worldwide Accommodations)

**제목**: "전세계 숙소"

**컨텐츠**: 8개의 숙소 카드 (2행 x 4열 그리드)

**각 숙소 카드 구성**:
- **이미지**: 숙소의 주요 이미지
- **카테고리**: "오두막" 등 숙소 유형
- **제목**: 숙소 이름 (예: "BALIAN TREEHOUSE w beautiful pool")
- **평점**: 별 5개 표시
- **호스트 정보**: "185 슈퍼호스트" 등

**예시 숙소 데이터**:
1. BALIAN TREEHOUSE w beautiful pool (녹색 나무집, 풀장)
2. Unique Architecture Cave House (흰색 동굴 집)
3. The House (따뜻한 조명의 돌집)
4. Modern, Chic Penthouse with Mountain, City & Sea Views (현대적인 펜트하우스)
5. 출장에 위치한 개인 스튜디오 (핑크 테마 스튜디오)
6. Vacation house in etr-village Himac (올리브 나무가 있는 빌라)
7. The Cozy Palace (화려한 침대가 있는 럭셔리 침실)
8. Private Pool House with Amazing Views (오션뷰가 있는 수영장 하우스)

**레이아웃**: 
- Grid 레이아웃 (4열)
- 반응형: 화면 크기에 따라 열 수 조정 가능

**구현 컴포넌트**: `MainLodging.tsx`

---

## 🧩 컴포넌트 구조

### 섹션 컴포넌트 (src/section/)

| 컴포넌트 | 역할 | 주요 기능 |
|---------|------|----------|
| `TopHeader.tsx` | 상단 네비게이션 | 로고 및 메뉴 표시 |
| `TopBody.tsx` | 히어로 섹션 | 검색 폼 오버레이 |
| `MainAroundBox.tsx` | 둘러보기 섹션 | 4개 카드 그리드 |
| `MainChoBox.tsx` | 추천여행지 섹션 | 5개 이미지 그리드 |
| `MainAdBox.tsx` | 광고 섹션 | 광고 슬롯 |
| `MainLodging.tsx` | 숙소 목록 섹션 | 8개 숙소 카드 그리드 |

### 공통 컴포넌트 (src/components/)

#### Containers.tsx
- **GridBox**: 그리드 레이아웃 컨테이너
  - Props: `count`, `size`, `column_gap`, `row_gap`
  - 기능: 동적 그리드 열 생성 (size가 0이면 auto)
  
- **ItemBox**: 기본 아이템 컨테이너
  - 기능: 패딩 및 단일 열 그리드 레이아웃

- **ButtonBox**: 버튼 컨테이너
  - 기능: 중앙 정렬 버튼 그룹

- **SearchBox**: 검색 폼 컨테이너
  - Props: `$width`, `$left`
  - 기능: 검색 폼 위치 및 너비 제어

- **TopNaviHeaderBox**: 상단 네비게이션 헤더 박스
  - 기능: 로고와 메뉴를 좌우 정렬

#### Headers.tsx
- **MainHeader**: 메인 제목
  - 스타일: 큰 폰트, 중앙 정렬, 그림자 효과

- **SubHeader**: 서브 제목
  - 스타일: 작은 폰트, 좌측 정렬

#### Images.tsx
- **Image**: 기본 이미지 컴포넌트
  - Props: `image`, `text`, `height`, `width`
  - 기능: 이미지 위 텍스트 오버레이

- **ImageCard**: 이미지 카드 컴포넌트
  - Props: `image`, `text`, `height`, `width`
  - 기능: 배경 이미지 위 텍스트 표시

#### Buttons.tsx
- **BasicButton**: 기본 버튼 컴포넌트
  - Props: `text`, `type`, `$color`, `$back_color`, `$width`, `$height`, `$b_radius`
  - 기능: 색상 팔레트를 사용한 스타일링

#### IconBoxs.tsx
- **ImgBox**: 아이콘 박스 컴포넌트
  - Props: `img`, `text`
  - 기능: 배경 이미지 위 텍스트 표시

#### Liner.tsx
- **SolidLine**: 실선 컴포넌트
  - 기능: 구분선 표시

---

## 📝 기능 요구사항

### 필수 기능 (Must Have)

1. **화면 구성**
   - [x] 상단 헤더 (로고 + 네비게이션)
   - [x] 히어로 섹션 (배경 이미지 + 검색 폼)
   - [x] 둘러보기 섹션 (4개 카드)
   - [ ] 특별 여행 안내 섹션
   - [ ] 추천여행지 섹션 (5개 이미지)
   - [ ] 광고 섹션
   - [x] 전세계 숙소 섹션 (8개 카드)

2. **검색 기능**
   - [x] 목적지 입력 필드
   - [x] 체크인/체크아웃 날짜 선택
   - [x] 인원 선택 드롭다운
   - [x] 검색 버튼

3. **컴포넌트 시스템**
   - [x] 재사용 가능한 GridBox 컴포넌트
   - [x] 이미지 컴포넌트 (Image, ImageCard)
   - [x] 헤더 컴포넌트 (MainHeader, SubHeader)
   - [x] 버튼 컴포넌트 (색상 팔레트 지원)

### 향상 기능 (Nice to Have)

1. **인터랙션**
   - [ ] 호버 효과
   - [ ] 이미지 슬라이더
   - [ ] 검색 폼 유효성 검사

2. **반응형 디자인**
   - [ ] 모바일 최적화
   - [ ] 태블릿 최적화
   - [ ] 화면 크기별 그리드 조정

3. **데이터 관리**
   - [ ] 숙소 데이터 상태 관리
   - [ ] 검색 결과 필터링

---

## 🎨 디자인 요구사항

### 색상 팔레트

현재 정의된 색상 팔레트 (`ColorPalette` 타입):
- `primary`: #3b82f6
- `secondary`: #6b7280
- `success`: #10b981
- `danger`: #ef4444
- `warning`: #f59e0b
- `info`: #3b82f6
- `white`: #ffffff
- `black`: #000000
- `red`: #ff0000
- `gray`: #6b7280

### 타이포그래피

- **MainHeader**: 32px, font-weight 600, 색상 #4b4b4b
- **SubHeader**: 16px, font-weight 400, 색상 #666
- **기본 텍스트**: 15px

### 레이아웃

- **컨테이너 패딩**: 좌우 150px
- **그리드 간격**: column-gap 10px, row-gap 5px
- **버튼 기본 스타일**: border-radius 15px

---

## 🔧 기술 요구사항

### 개발 환경

- Node.js: 18.0.0 이상
- npm: 9.0.0 이상
- TypeScript: 5.9.3

### 필수 패키지

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "styled-components": "^6.2.0"
  },
  "devDependencies": {
    "typescript": "~5.9.3",
    "vite": "^7.2.4",
    "@vitejs/plugin-react": "^5.1.1"
  }
}
```

### 코딩 규칙

1. **타입 안전성**
   - 모든 컴포넌트에 TypeScript 타입 정의 필수
   - `verbatimModuleSyntax` 활성화: 타입은 `import type`으로 import

2. **컴포넌트 명명**
   - PascalCase 사용
   - 파일명과 컴포넌트명 일치

3. **Path Alias 사용**
   - 상대 경로 대신 Path Alias 사용 필수
   - `@components`, `@section`, `@interface`, `@type` 등

4. **Styled Components 규칙**
   - Transient props는 `$` 접두사 사용 (예: `$color`, `$width`)
   - 컴포넌트별 스타일드 컴포넌트 정의

---

## 📂 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Buttons.tsx
│   ├── Containers.tsx
│   ├── Headers.tsx
│   ├── IconBoxs.tsx
│   ├── Images.tsx
│   └── Liner.tsx
├── section/             # 페이지 섹션 컴포넌트
│   ├── TopHeader.tsx
│   ├── TopBody.tsx
│   ├── MainAroundBox.tsx
│   ├── MainChoBox.tsx
│   ├── MainAdBox.tsx
│   └── MainLodging.tsx
├── interface/           # TypeScript 인터페이스
│   ├── attr-props.tsx
│   └── node-props.tsx
├── type/                # TypeScript 타입 정의
│   └── type-source.tsx
├── assets/              # 정적 에셋
├── css/                 # CSS 파일
├── App.tsx              # 메인 앱 컴포넌트
└── main.tsx             # 진입점
```

---

## ✅ 체크리스트

### Phase 1: 기본 구조 (완료)
- [x] 프로젝트 초기 설정
- [x] 기본 컴포넌트 구조 생성
- [x] Path Alias 설정
- [x] TypeScript 타입 정의

### Phase 2: 헤더 및 히어로 섹션 (진행 중)
- [x] TopHeader 컴포넌트 구현
- [x] TopBody 컴포넌트 구현
- [ ] 배경 이미지 추가
- [ ] 검색 폼 스타일링 완료

### Phase 3: 메인 섹션 (진행 중)
- [x] MainAroundBox 기본 구조
- [ ] MainAroundBox 이미지 및 스타일링
- [ ] MainChoBox 구현
- [ ] MainAdBox 구현
- [x] MainLodging 기본 구조
- [ ] MainLodging 데이터 표시

### Phase 4: 스타일링 및 최적화 (예정)
- [ ] 전체 스타일 통일
- [ ] 반응형 디자인 적용
- [ ] 이미지 최적화
- [ ] 성능 최적화

---

## 📚 참고 자료

- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org)
- [Styled Components 문서](https://styled-components.com/docs)
- [Vite 공식 문서](https://vite.dev)

---

## 📝 비고

이 프로젝트는 학습 목적으로 제작되었으며, 실제 상용 서비스와는 차이가 있을 수 있습니다. 
주요 목표는 React와 TypeScript를 활용한 컴포넌트 기반 개발 방법을 학습하는 것입니다.
