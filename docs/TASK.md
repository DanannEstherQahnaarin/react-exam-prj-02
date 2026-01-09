# 작업 계획서 (TASK)

이 문서는 프로젝트 구현을 위한 단계별 작업 계획을 정의합니다.

---

## 📋 목차

1. [1단계: 섹션 뼈대 구성](#1단계-섹션-뼈대-구성)
2. [2단계: 섹션 조립 및 레이아웃 정리](#2단계-섹션-조립-및-레이아웃-정리)
3. [3단계: 이벤트 핸들러 구현](#3단계-이벤트-핸들러-구현)
4. [4단계: 스타일링 완성](#4단계-스타일링-완성)
5. [5단계: 최적화 및 검증](#5단계-최적화-및-검증)

---

## 1단계: 섹션 뼈대 구성

### 목표
PRD 작성 시 제시한 이미지를 기반으로 각 섹션을 구분하고, 기본 뼈대를 구성합니다. 기존 구성에 수정이 필요한 경우 수정 및 추가합니다.

### 작업 내용

#### 1.1 섹션 컴포넌트 파일 생성

**파일**: `src/section/`

각 섹션별로 독립적인 컴포넌트 파일을 생성하고 기본 JSX 구조를 작성합니다.

- [ ] **MainAroundBox.tsx** - 에어비앤비 둘러보기 섹션
  - 제목: "에어비엔둘러보기"
  - 4개 카드 그리드 레이아웃
  - 각 카드: ImageCard 컴포넌트 사용
  - 카드 항목:
    1. 숙소 및 부티크 호텔
    2. 트립
    3. 어드벤처
    4. 레스토랑
  - 하단에 큰 이미지 추가 (특별 여행 안내용)

- [ ] **MainTravelGuide.tsx** - 특별 여행 안내 섹션 (새로 생성)
  - 배경 이미지 섹션
  - 텍스트 오버레이:
    - 제목: "호스트의 안내를 받아 특별한 장소로 떠나는 여행"
    - 부제목: "숙소, 식사, 액티비티 포함"
    - 링크: "자세히 보기"
  - Styled Components로 배경 이미지 및 텍스트 오버레이 스타일링

- [ ] **MainChoBox.tsx** - 추천여행지 섹션
  - 제목: "추천여행지"
  - 5개 이미지 카드 그리드 레이아웃
  - 각 카드: Image 컴포넌트 사용

- [ ] **MainAdBox.tsx** - 광고 섹션
  - 3개의 광고 슬롯
  - 가로 배치 레이아웃
  - GridBox 또는 Flex 레이아웃 사용

- [ ] **MainLodging.tsx** - 전세계 숙소 섹션
  - 제목: "전세계 숙소"
  - 8개 숙소 카드 그리드 레이아웃 (4열)
  - 각 숙소 카드 구성 요소:
    - 이미지 (Image 컴포넌트)
    - 카테고리 (SubHeader)
    - 제목 (일반 텍스트)
    - 평점 (별 표시)
    - 호스트 정보 (일반 텍스트)

#### 1.2 기존 섹션 컴포넌트 검토 및 수정

- [x] **TopHeader.tsx** - 완료
  - 로고 SVG 구현 확인
  - 네비게이션 메뉴 구현 확인
  - GridBox 사용 확인

- [x] **TopBody.tsx** - 완료
  - 검색 폼 기본 구조 확인
  - 검색 버튼 구현 확인
  - 추가 작업: 배경 이미지 적용 필요

#### 1.3 공통 컴포넌트 확인 및 추가

기존 컴포넌트로 구현 불가능한 경우 새 컴포넌트 추가:

- [ ] **LodgingCard.tsx** (필요시) - 숙소 카드 컴포넌트
  - 이미지, 카테고리, 제목, 평점, 호스트 정보를 포함하는 통합 카드 컴포넌트
  - Props로 데이터 받기
  - onClick 이벤트 핸들러 콜백 함수 지원 (3단계에서 구현)

- [ ] **StarRating.tsx** (필요시) - 별점 컴포넌트
  - 평점을 별로 표시하는 컴포넌트
  - Props: `rating: number` (0-5)

#### 1.4 데이터 구조 정의

- [ ] **src/type/lodging-data.tsx** - 숙소 데이터 타입 정의
  ```typescript
  export interface LodgingItem {
    id: string;
    image: string;
    category: string;
    title: string;
    rating: number;
    hostInfo: string;
  }
  ```

- [ ] **src/data/lodging-data.tsx** - 숙소 목 데이터 (선택사항)
  - PRD에 정의된 8개 숙소 데이터

### 체크리스트

- [ ] 모든 섹션 컴포넌트 파일 생성
- [ ] 각 섹션의 기본 JSX 구조 작성
- [ ] 기존 컴포넌트 (GridBox, Image, ImageCard, Headers 등) 적절히 사용
- [ ] TypeScript 타입 정의 완료
- [ ] 컴포넌트가 기본 렌더링되는지 확인

---

## 2단계: 섹션 조립 및 레이아웃 정리

### 목표
1단계에서 만든 각 섹션 컴포넌트를 App.tsx에서 조립하고, 레이아웃을 정리합니다.

### 작업 내용

#### 2.1 App.tsx 리팩토링

- [ ] **섹션 컴포넌트로 교체**
  - 기존에 직접 작성된 섹션 코드를 각 섹션 컴포넌트로 교체
  - Import 문 정리
  - 섹션 순서 확인

- [ ] **섹션 순서 정리**
  ```typescript
  <header>
    <TopHeader />
    <TopBody />
  </header>
  <main>
    <MainAroundBox />
    <MainTravelGuide />  // 새로 추가
    <MainChoBox />
    <MainAdBox />
    <MainLodging />
  </main>
  ```

- [ ] **중복 코드 제거**
  - App.tsx에서 직접 구현된 섹션 내용 제거
  - 각 섹션 컴포넌트로 위임

#### 2.2 레이아웃 통일

- [ ] **ItemBox 사용 확인**
  - 각 섹션이 적절한 컨테이너로 감싸져 있는지 확인
  - ItemBox, OuterBox 등 적절한 컨테이너 사용

- [ ] **간격 및 여백 통일**
  - 섹션 간 간격 일관성 확인
  - GridBox의 column_gap, row_gap 값 통일

#### 2.3 이미지 경로 및 자산 관리

- [ ] **이미지 자산 추가**
  - `src/assets/` 디렉토리에 필요한 이미지 파일 추가
  - 각 섹션별 이미지 경로 설정

- [ ] **이미지 컴포넌트 Props 확인**
  - Image, ImageCard 컴포넌트에 이미지 경로 전달
  - 높이/너비 값 적절히 설정

#### 2.4 기본 스타일링 적용

- [ ] **Styled Components 기본 스타일**
  - 각 섹션에서 필요한 기본 스타일 적용
  - MainTravelGuide의 배경 이미지 스타일링
  - 텍스트 오버레이 스타일링

- [ ] **컬러 팔레트 사용**
  - 버튼, 링크 등에 ColorPalette 타입 사용
  - 일관된 색상 적용

### 체크리스트

- [ ] App.tsx가 깔끔하게 정리됨
- [ ] 모든 섹션이 올바른 순서로 표시됨
- [ ] 섹션 간 간격이 일관됨
- [ ] 이미지가 올바르게 표시됨
- [ ] 기본 레이아웃이 PRD의 이미지와 유사함

---

## 3단계: 이벤트 핸들러 구현

### 목표
PRD 및 RULES를 참조하여 모든 인터랙티브 기능의 이벤트 핸들러를 구현합니다. **이벤트가 들어가는 모든 컴포넌트는 이벤트 핸들러를 콜백 함수로 Props로 받아야 합니다.**

### 작업 내용

#### 3.1 이벤트 핸들러 타입 정의

- [ ] **src/interface/section-props.tsx** 생성
  - 각 섹션별 Props 인터페이스 정의:
    ```typescript
    export interface MainAroundBoxProps {
      onCardClick?: (cardId: string) => void;
    }
    
    export interface MainTravelGuideProps {
      onLearnMoreClick?: () => void;
    }
    
    export interface MainChoBoxProps {
      onDestinationClick?: (id: string) => void;
    }
    
    export interface MainLodgingProps {
      lodgings?: LodgingItem[];
      onLodgingClick?: (lodgingId: string) => void;
    }
    
    export interface TopHeaderProps {
      onLogoClick?: () => void;
      onMenuClick?: (menu: string) => void;
    }
    
    export interface TopBodyProps {
      onSubmit?: (data: SearchData) => void;
    }
    ```

- [ ] **SearchData 타입 정의**
  ```typescript
  export interface SearchData {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }
  ```

#### 3.2 TopHeader 이벤트 구현

- [ ] **로고 클릭 이벤트**
  - Props에 `onLogoClick?: () => void` 추가
  - 로고 div에 onClick 핸들러 연결
  - App.tsx에서 콜백 함수 정의

- [ ] **메뉴 항목 클릭 이벤트**
  - Props에 `onMenuClick?: (menu: string) => void` 추가
  - 각 메뉴 항목에 onClick 핸들러 연결
  - 메뉴 이름을 파라미터로 전달
  - App.tsx에서 콜백 함수 정의

#### 3.3 TopBody 검색 폼 이벤트 구현

- [ ] **검색 폼 제출 이벤트**
  - Props에 `onSubmit?: (data: SearchData) => void` 추가
  - 폼 제출 시 데이터 수집
  - FormData 또는 state를 사용하여 검색 데이터 추출
  - 콜백 함수에 데이터 전달
  - App.tsx에서 검색 데이터 처리 콜백 정의

#### 3.4 MainAroundBox 이벤트 구현

- [ ] **카드 클릭 이벤트**
  - Props에 `onCardClick?: (cardId: string) => void` 추가
  - 각 ImageCard에 onClick 콜백 전달
  - 카드 ID 정의 (예: "hotel", "trip", "adventure", "restaurant")
  - App.tsx에서 카드 클릭 처리 콜백 정의

#### 3.5 MainTravelGuide 이벤트 구현

- [ ] **"자세히 보기" 링크 클릭 이벤트**
  - Props에 `onLearnMoreClick?: () => void` 추가
  - 링크에 onClick 핸들러 연결
  - App.tsx에서 콜백 함수 정의

#### 3.6 MainChoBox 이벤트 구현

- [ ] **이미지 카드 클릭 이벤트**
  - Props에 `onDestinationClick?: (id: string) => void` 추가
  - 각 Image 컴포넌트에 onClick 콜백 전달
  - 여행지 ID 정의 (예: "1", "2", "3", "4", "5")
  - App.tsx에서 여행지 클릭 처리 콜백 정의

#### 3.7 MainLodging 이벤트 구현

- [ ] **숙소 카드 클릭 이벤트**
  - Props에 `onLodgingClick?: (lodgingId: string) => void` 추가
  - LodgingCard 또는 각 숙소 카드 div에 onClick 핸들러 연결
  - 각 숙소의 ID 전달
  - App.tsx에서 숙소 클릭 처리 콜백 정의

#### 3.8 App.tsx에서 이벤트 핸들러 통합

- [ ] **모든 이벤트 핸들러 콜백 함수 정의**
  ```typescript
  const handleLogoClick = () => {
    console.log("로고 클릭");
    // 홈으로 이동 로직
  };
  
  const handleMenuClick = (menu: string) => {
    console.log("메뉴 클릭:", menu);
    // 메뉴별 처리 로직
  };
  
  const handleSearch = (data: SearchData) => {
    console.log("검색 데이터:", data);
    // 검색 처리 로직
  };
  
  // ... 기타 이벤트 핸들러
  ```

- [ ] **각 섹션에 이벤트 핸들러 전달**
  - 모든 섹션 컴포넌트에 적절한 Props 전달
  - 콜백 함수 연결 확인

### 체크리스트

- [ ] 모든 섹션 Props 인터페이스 정의 완료
- [ ] 모든 이벤트 핸들러가 콜백 함수로 구현됨
- [ ] App.tsx에서 모든 이벤트 핸들러 콜백 함수 정의됨
- [ ] 각 섹션에 이벤트 핸들러 Props 전달됨
- [ ] 모든 클릭 이벤트가 정상 작동함 (콘솔 로그 확인)
- [ ] 폼 제출 시 데이터가 올바르게 수집됨

---

## 4단계: 스타일링 완성

### 목표
Styled Components를 사용하여 모든 섹션의 스타일링을 완성하고, 시각적 완성도를 높입니다.

### 작업 내용

#### 4.1 MainTravelGuide 스타일링

- [ ] **배경 이미지 스타일링**
  - 전체 너비 배경 이미지 적용
  - 이미지 크기 조정 (cover, contain 등)
  - 배경 이미지 위치 조정

- [ ] **텍스트 오버레이 스타일링**
  - 텍스트 위치 조정 (좌측 정렬)
  - 텍스트 색상 (흰색 또는 대비되는 색)
  - 텍스트 그림자 효과
  - 반응형 폰트 크기

- [ ] **링크 스타일링**
  - "자세히 보기" 링크 스타일
  - 호버 효과
  - 화살표 아이콘 추가

#### 4.2 호버 효과 추가

- [ ] **카드 컴포넌트 호버 효과**
  - ImageCard 컴포넌트에 호버 효과
  - 그림자 증가 또는 크기 변화
  - 트랜지션 효과

- [ ] **숙소 카드 호버 효과**
  - LodgingCard 또는 숙소 카드에 호버 효과
  - 이미지 확대 효과 (선택사항)

- [ ] **버튼 호버 효과**
  - BasicButton 호버 효과 확인
  - 색상 변화 또는 그림자 효과

- [ ] **링크 호버 효과**
  - 네비게이션 메뉴 호버 효과
  - "자세히 보기" 링크 호버 효과

#### 4.3 반응형 디자인 구현

- [ ] **화면 크기별 GridBox 조정**
  - 모바일: 1-2열
  - 태블릿: 2-3열
  - 데스크톱: 4-5열
  - 미디어 쿼리 또는 Props를 통한 동적 조정

- [ ] **반응형 이미지 크기**
  - 화면 크기에 따른 이미지 크기 조정
  - 객체 맞춤 (object-fit) 설정

- [ ] **반응형 텍스트 크기**
  - 화면 크기에 따른 폰트 크기 조정
  - MainHeader, SubHeader 반응형 적용

#### 4.4 스타일 통일성 확인

- [ ] **색상 팔레트 일관성**
  - 모든 버튼, 링크에 ColorPalette 사용
  - 배경색, 텍스트 색상 통일

- [ ] **간격 통일성**
  - 섹션 간 간격 통일
  - 요소 간 간격 통일
  - 패딩, 마진 값 일관성

- [ ] **폰트 스타일 통일성**
  - 폰트 패밀리 통일
  - 폰트 크기 계층 구조 확인
  - 폰트 굵기 일관성

#### 4.5 애니메이션 및 트랜지션 (선택사항)

- [ ] **페이지 로드 애니메이션**
  - 섹션별 페이드인 효과 (선택사항)

- [ ] **상호작용 트랜지션**
  - 클릭, 호버 시 부드러운 트랜지션
  - 트랜지션 시간 설정 (0.2s ~ 0.3s)

### 체크리스트

- [ ] MainTravelGuide 배경 이미지 및 텍스트 오버레이 스타일링 완료
- [ ] 모든 호버 효과 적용됨
- [ ] 반응형 디자인 구현됨
- [ ] 스타일 통일성 확인됨
- [ ] 시각적으로 PRD 이미지와 유사함

---

## 5단계: 최적화 및 검증

### 목표
코드 품질 개선, 성능 최적화, 접근성 개선, 그리고 최종 검증을 수행합니다.

### 작업 내용

#### 5.1 타입 안전성 강화

- [ ] **모든 Props 타입 확인**
  - `any` 타입 사용 금지 확인
  - 모든 함수 매개변수 타입 명시
  - 반환 타입 명시 (가능한 경우)

- [ ] **타입 Import 확인**
  - 모든 타입 import가 `import type` 사용하는지 확인
  - RULES.md 규칙 준수

- [ ] **타입 에러 해결**
  ```bash
  npm run build
  # TypeScript 타입 체크 실행
  ```
  - 모든 타입 에러 해결

#### 5.2 코드 리팩토링

- [ ] **중복 코드 제거**
  - 반복되는 JSX 패턴을 컴포넌트로 추출
  - 유틸리티 함수 추출 (필요시)

- [ ] **컴포넌트 재사용성 향상**
  - Props를 통한 커스터마이징 가능하도록 개선
  - 기본값 설정으로 사용 편의성 향상

- [ ] **Import 문 정리**
  - 사용하지 않는 import 제거
  - Import 순서 정리 (RULES.md 준수)
  - Path Alias 사용 확인

#### 5.3 접근성 (A11y) 개선

- [ ] **ARIA 속성 추가**
  - 버튼, 링크에 적절한 aria-label 추가
  - 이미지에 alt 텍스트 추가
  - 검색 폼에 aria-describedby 추가
  - 네비게이션에 aria-label 추가

- [ ] **키보드 네비게이션**
  - Tab 순서 확인
  - Enter/Space로 버튼 활성화 확인
  - 포커스 스타일 확인

- [ ] **시맨틱 HTML**
  - 적절한 HTML 태그 사용 (header, main, nav, section 등)
  - 의미론적으로 올바른 구조

#### 5.4 성능 최적화

- [ ] **이미지 최적화**
  - 적절한 이미지 크기 사용
  - lazy loading 적용 (선택사항)
  - 이미지 포맷 최적화 (WebP 등, 선택사항)

- [ ] **컴포넌트 최적화**
  - 불필요한 리렌더링 방지
  - React.memo 사용 검토 (필요시)
  - useCallback, useMemo 사용 검토 (필요시)

- [ ] **번들 크기 최적화**
  - 사용하지 않는 import 제거
  - 코드 스플리팅 검토 (선택사항)

#### 5.5 에러 처리

- [ ] **에러 바운더리 (선택사항)**
  - 섹션별 에러 처리
  - 사용자 친화적인 에러 메시지

- [ ] **타입 가드 (선택사항)**
  - Props 유효성 검사
  - 데이터 유효성 검사

#### 5.6 테스트 및 검증

- [ ] **기능 테스트**
  - 모든 이벤트 핸들러 동작 확인
  - 검색 폼 동작 확인
  - 모든 링크, 버튼 동작 확인

- [ ] **타입 체크**
  ```bash
  npm run build
  # TypeScript 타입 체크 실행
  ```
  - 타입 에러 없음 확인

- [ ] **린터 체크**
  ```bash
  npm run lint
  # ESLint 오류 확인
  ```
  - 린터 오류 해결

- [ ] **브라우저 호환성 확인**
  - Chrome, Firefox, Safari, Edge에서 동작 확인
  - 반응형 디자인 확인 (다양한 화면 크기)

- [ ] **콘솔 에러 확인**
  - 개발자 도구에서 에러, 경고 확인
  - 모든 에러 해결

#### 5.7 문서화

- [ ] **코드 주석 추가** (필요시)
  - 복잡한 로직에 주석 추가
  - 컴포넌트 사용법 주석 (JSDoc, 선택사항)

- [ ] **README 업데이트** (필요시)
  - 프로젝트 실행 방법
  - 주요 기능 설명

### 체크리스트

- [ ] 모든 타입 에러 해결됨
- [ ] 코드 리팩토링 완료
- [ ] 접근성 개선 완료
- [ ] 성능 최적화 완료
- [ ] 모든 기능 테스트 통과
- [ ] 타입 체크 오류 없음
- [ ] 린터 오류 없음
- [ ] 브라우저 호환성 확인 완료
- [ ] 콘솔 에러 없음

---

## 📝 작업 진행 상황

### 현재 상태

- ✅ **1단계 진행 중**
  - TopHeader: 완료
  - TopBody: 완료 (배경 이미지 적용 필요)
  - MainAroundBox: 구현 필요
  - MainTravelGuide: 생성 필요
  - MainChoBox: 구현 필요
  - MainAdBox: 구현 필요
  - MainLodging: 구현 필요

- ⏳ **2단계 대기**

- ⏳ **3단계 대기**

- ⏳ **4단계 대기**

- ⏳ **5단계 대기**

### 우선순위

1. **높음**: 1단계 완료 (모든 섹션 뼈대 구성)
2. **높음**: 2단계 완료 (섹션 조립 및 레이아웃 정리)
3. **중간**: 3단계 완료 (이벤트 핸들러 구현)
4. **중간**: 4단계 완료 (스타일링 완성)
5. **낮음**: 5단계 완료 (최적화 및 검증)

---

## 🔍 참고사항

- 각 단계는 순차적으로 진행하되, 필요시 병렬 작업 가능
- PRD.md와 RULES.md를 항상 참조하며 작업
- 컴포넌트 추가 시 기존 컴포넌트 재사용 우선 검토
- 모든 이벤트 핸들러는 콜백 함수로 구현 (3단계)
- 새 컴포넌트의 CSS는 Styled Components 사용
- 타입은 반드시 `import type`으로 import
- 각 단계 완료 시 체크리스트 확인 후 다음 단계 진행

---

**마지막 업데이트**: 2024
