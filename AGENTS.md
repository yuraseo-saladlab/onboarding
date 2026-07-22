첨부한 텍스트와 이미지를 활용해서 가짜가 아닌 진짜 실사화 애니메이션으로 매끄러운 흐름으로 만들어줘. 실력있는 UIUX디자이너가 만든 것처럼 감각적인 디자인으로 만들어줘.

## ⚠️ 작업 위치 · 버전 구조 (무조건 가장 먼저 확인)
이 레포는 **원본(v6)** 과 **수정용(v7)** 으로 나뉜다. **모든 작업·수정은 `onboarding-v7/` 폴더 안에서만** 한다. 사용자가 별도 설명을 안 해도 이 규칙을 기본으로 따른다.

| 구분 | 위치 | 상태 |
|---|---|---|
| **v7 = 수정용 (작업 대상)** | `onboarding-v7/` 폴더 — `onboarding-v7/onboarding-single-view-v7.html`, `onboarding-v7/core.css`, `onboarding-v7/core.js`, `onboarding-v7/scene-*.html` | ✅ **여기서만 수정** |
| **v6 = 원본 (보존)** | 루트 — `onboarding-single-view-v6.html`, `core.css`, `core.js`, `scene-*.html`, `assets/` | 🔒 **건드리지 않음** (동결 스냅샷) |
| 이미지/아이콘 | `onboarding-v7/assets/` (SVG 아이콘은 `onboarding-v7/assets/icon/`) | v7 폴더에 **자체 포함** |

- 씬·애니메이션·스타일·코어(JS/CSS)·이미지 무엇을 바꾸든 **전부 `onboarding-v7/` 안의 파일**을 고친다.
- 루트의 `core.css`·`core.js`·`scene-*.html`·`onboarding-single-view-v6.html`·`assets/`은 **v6 원본 = 수정 금지**. (v7이 여기서 갈라져 나온 복사본이라, 루트를 고치면 원본이 오염된다.)
- **`onboarding-v7/`은 자체 완결**이다: 이미지·아이콘을 `onboarding-v7/assets/` 안에 포함(SVG 아이콘은 `onboarding-v7/assets/icon/`). 폴더 밖(`../`) 참조 없음 — 개발자에게 `onboarding-v7/` 폴더만 넘기면 그대로 동작한다. (폰트만 Pretendard CDN에서 로드.)
- 레거시 v3·v4·v5는 루트의 단일 파일 시안(참고용). 건드리지 않는다.

## 애니메이션 공통 룰
- **첫 프레임을 비워두지 말 것.** 카드/씬의 핵심 콘텐츠는 첫 프레임부터 보여야 함. `opacity:0`에서 등장시키지 말고, 콘텐츠는 처음부터 보이게 두고 위치·스케일(transform) 위주로 애니메이션. 결과값·팝업·CTA 등 "액션 이후에 나오는 스토리 요소"만 숨겼다가 등장 가능.
- 폰트는 가급적 12px 이상.
- 빈공간은 콘텐츠로 채울 것(레이아웃 stretch로 때우지 말 것).
- 컬러는 파란색 위주. 성공 상태도 초록색 대신 파랑·검정·흰색.
- 모든 CSS 수치는 짝수(×2).

## 애니메이션 스타일 원칙 (기존 작업 톤 유지)
새 씬·수정 작업은 아래 톤을 그대로 따른다.
- **실사 UIUX 재현.** 추상적인 관리자 패널·목업이 아니라 실제 쇼핑몰/앱 화면을 진짜처럼 재현하고, 실제 상품명·가격·사진·리뷰 문구로 빈 곳 없이 채운다. 레퍼런스의 전체 흐름과 풍부함을 실제 UI로 다 담는다.
- **위젯 인지성.** 스토어 기본 UI는 뉴트럴(회색·흰색)로 두고, 제품이 "추가한 위젯"에만 제품색(`--dc`)·뱃지·스포트라이트·콜아웃을 줘서 무엇이 추가됐는지 즉시 보이게 한다.
- **공용 컴포넌트는 형식 통일 + 색만 제품별.** 재생/정지 컨트롤·시작 버튼·게이지 등 공용 요소는 형태·크기·레이아웃을 통일하고 색만 `--dc`(또는 배경에 맞게)로 바꾼다. 특정 제품색 하드코딩 금지.
- **인터랙션은 씬 간 일관 재사용.** 자동 커서 클릭 시연, 카운트업, 게이지 등은 씬마다 새로 만들지 말고 동일 패턴을 재사용한다.
- **클래스 충돌 주의.** 짧은 범용 클래스명이 전역 규칙과 충돌해 레이아웃이 깨질 수 있으니, 씬 전용 클래스는 고유 접두사를 붙인다.

## 씬 파일 구조 (onboarding-v7/ 폴더)
- 애니메이션 씬은 제품·씬별 **독립 HTML**: `onboarding-v7/scene-<제품><번호>.html` (예: `onboarding-v7/scene-review1.html`).
  각 파일 = `<link core.css>`(→ `onboarding-v7/core.css`) + 자기 `<template data-scene=…>`(리뷰 히어로는 `data-hero`) + `<script src=core.js>`(→ `onboarding-v7/core.js`) + `renderEmbed(key)`.
- 씬 HTML을 바꿀 땐 **그 파일 안 `<template>` 블록만** 수정한다. 클래스명(예: `up1s`, `ps-wall`, `pc-scene`, `cv2-sc`, `if1s`)은 **유지** — 애니 드라이버(`seqWall`·`initCvBuilder`·`scrollUpx`·`seqPcx` 등)가 그 클래스로 붙는다. 새 클래스로 바꾸면 애니가 안 걸린다.
- `onboarding-v7/core.css`·`onboarding-v7/core.js`는 v7 화면·씬이 공유하는 **전역 소스**(토큰·컴포넌트·애니 드라이버·재생 하네스). 씬은 이걸 `<link>/<script src>`로 불러온다.
- **이미지 경로는 `assets/…`** (폴더 내부 `onboarding-v7/assets/`, SVG 아이콘은 `assets/icon/…`). 새 이미지가 필요하면 `onboarding-v7/assets/`에 넣고 `assets/…`로 참조한다. 루트 `assets/`는 v6 원본용이라 참조하지 않는다(`../assets/` 금지).
- 씬은 iframe으로 임베드되면 **뷰포트를 풀블리드로 채운다.** 카드 프레임(라운드·그림자)은 담는 쪽(상세모달·히어로 스테이지)이 제공한다.
- 재생/정지/시크는 부모가 `postMessage({__alphaScene:'pause'|'play'|'seek'})`로 씬 iframe에 전달해 제어한다. 씬의 `setTimeout/rAF`는 정지 가능하게 래핑돼 있으니, 새 애니도 표준 `setTimeout/requestAnimationFrame`을 쓰면 정지·재개가 자동으로 된다.
- 씬은 기본 **자동재생**(비트 캐러셀로 반복). "다시보기" 버튼은 쓰지 않는다.

## 스쿼드별 작업 범위 (파일 소유 — 중요)
스쿼드 디자이너는 **`onboarding-v7/` 폴더 안, 자기 제품의 씬 파일만** 수정한다. 작업 전 어느 제품(스쿼드)인지 먼저 확인하고, 범위를 벗어난 파일은 건드리지 않는다.

| 스쿼드 | 수정 가능 파일 |
|---|---|
| 알파리뷰 | `onboarding-v7/scene-review1.html`, `onboarding-v7/scene-review2.html`, `onboarding-v7/scene-review3.html` |
| 알파업셀 | `onboarding-v7/scene-upsell1.html`, `onboarding-v7/scene-upsell2.html`, `onboarding-v7/scene-upsell3.html` |
| 알파푸시 | `onboarding-v7/scene-push1.html`, `onboarding-v7/scene-push2.html`, `onboarding-v7/scene-push3.html` |
| 알파캔버스 | `onboarding-v7/scene-canvas1.html`, `onboarding-v7/scene-canvas2.html`, `onboarding-v7/scene-canvas3.html` |
| 인스타피드 | `onboarding-v7/scene-insta1.html`, `onboarding-v7/scene-insta2.html`, `onboarding-v7/scene-insta3.html` |

- **스쿼드 디자이너 수정 금지**: 공유 파일 `onboarding-v7/core.css`·`onboarding-v7/core.js`·`onboarding-v7/onboarding-single-view-v7.html`, 루트 v6 원본 전체(`core.css`·`core.js`·`scene-*.html`·`onboarding-single-view-v6.html`), 다른 스쿼드의 `onboarding-v7/scene-*.html`. 공용이라 한 스쿼드가 바꾸면 전 제품에 영향.
- 다른 스쿼드 파일이나 공유 파일 수정이 필요한 요청이 오면, 바로 고치지 말고 **범위를 벗어난다고 알리고 확인**을 받는다(공유 CSS/JS 변경은 디자인시스템·전체 담당자와 협의).
