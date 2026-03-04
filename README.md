# 📁 Park Yi-seul's Personal Portfolio

> **"기본에 충실하며, 사용자 중심의 인터페이스를 구축하는 퍼블리셔 박이슬입니다."**

본 프로젝트는 저의 기술적 역량과 프로젝트 결과물을 한눈에 확인할 수 있도록 제작된 개인 포트폴리오 웹사이트입니다.
시맨틱 마크업을 기반으로 구조를 설계하고, CSS와 JavaScript를 기능 단위로 분리하여 유지보수성을 고려해 제작했습니다.

## 🔗 Link

- **Live Demo:** [https://parkyiseul-portfolio.netlify.app/](https://parkyiseul-portfolio.netlify.app/)
- **Repository:** [https://github.com/yi-seul/portfolio](https://github.com/yi-seul/portfolio)
- **Notion:** [https://www.notion.so/170464c3e67c4ed78dd9c35efd63ea24?source=copy_link]

---

## 🛠 Tech Stack

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white"/>
</p>

---

## 📌 Project Overview

- **기여도:** 100% (개인 프로젝트)
- **주요 기능:** \* 자기소개 및 보유 스킬 시각화
    - 프로젝트 아카이빙 및 상세 내용 모달/링크 연결
    - 콘택트 폼 및 SNS 링크 연결

---

## 🚀 Key Points (Publisher Focus)

### 1. 시맨틱 마크업 (Semantic Markup)

- `header`, `main`, `section`, `footer` 등 의미 있는 태그를 사용하여 웹 접근성과 SEO를 고려했습니다.
- 웹 표준을 준수하여 브라우저 환경에 구애받지 않는 일관된 화면을 제공합니다.

### 2. 체계적인 CSS 관리

- **reset.css**: 브라우저 기본 스타일을 초기화하여 디자인 일관성 유지
- **common.css**: 폰트, 컬러 변수, 공통 레이아웃 등 재사용 가능한 스타일 정의
- **style.css**: 각 섹션별 개별 디자인 요소 정의
- 유지보수를 위해 CSS 코드를 논리적인 순서로 배치하였습니다.

### 3. 반응형 웹 디자인 (Responsive Web)

- `@media` 쿼리를 활용하여 모바일, 태블릿, 데스크탑 등 다양한 디바이스 환경에 최적화된 레이아웃을 구현했습니다.

### 4. Vanilla JavaScript 활용

- 라이브러리 없이 순수 자바스크립트를 활용하여 네비게이션 효과, 스크롤 애니메이션 등 인터랙티브한 요소를 구현했습니다.

---

## 📂 Directory Structure

```text
.
├── index.html           # 메인 페이지
├── css/
│   ├── reset.css        # 브라우저 초기화 스타일
│   ├── common.css       # 공통 스타일 (Layout, Variable)
│   └── style.css        # 페이지 개별 스타일
├── js/
│   └── main.js          # 인터랙션 및 로직 구현
├── images/              # 프로젝트 사용 이미지 리소스
└── README.md            # 프로젝트 설명서
```

---

## 🧠 Development Strategy

### ✔ 구조 설계 우선 접근

UI 구현 이전에 마크업 구조를 먼저 설계하여 레이아웃 의존도를 최소화했습니다.

### ✔ 유지보수 고려

공통 스타일과 페이지 전용 스타일을 분리하여 확장성을 확보했습니다.

### ✔ 전역 오염 최소화

JavaScript는 기능 단위로 분리하여 전역 변수 사용을 최소화했습니다.

---

## 🧩 Trouble Shooting

### 1. 반응형 전환 시 레이아웃 깨짐 현상

→ flex 및 width 단위 재정의로 해결

### 2. 스크롤 이벤트 과다 실행

→ 이벤트 로직 최적화 및 조건 분기 처리

### 3. z-index 충돌

→ stacking context 재정리로 해결

---

## 🚀 Deployment

- Netlify를 활용한 정적 웹 배포
- GitHub 저장소 연동을 통한 관리
- 배포 후 브라우저 콘솔 에러 0건 확인
