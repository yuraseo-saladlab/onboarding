🔗 공개 웹링크 (GitHub Pages)
https://yuraseo-saladlab.github.io/onboarding/

# 알파앱스 온보딩 (Onboarding)

쇼핑몰 온보딩 "맞춤 솔루션 선택" 화면과, 제품별 **애니메이션 씬**(클릭커블 데모) 모음입니다.

---

## 🗂️ 버전 구조 (가장 먼저 확인)

- **`onboarding-v7/` = 수정용 (작업 대상).** 앞으로 모든 작업·수정은 이 폴더 안에서 합니다.
  **자체 완결(self-contained)** — 이미지·아이콘까지 폴더 안(`onboarding-v7/assets/`)에 들어 있어, **개발자에게 이 폴더만 넘기면 그대로 동작**합니다(외부 참조 없음, 폰트만 CDN).
- **루트 = v6 원본 (동결 스냅샷).** `onboarding-single-view-v6.html` + 루트 `core.css`·`core.js`·`scene-*.html`·`assets/`. **건드리지 않습니다.**
- 레거시 v3·v4·v5: 루트의 단일 파일 시안(참고용).

---

## 📁 `onboarding-v7/` 구성

| 파일 / 폴더 | 설명 | 수정 주체 |
|---|---|---|
| `onboarding-single-view-v7.html` | 메인 온보딩 화면 (히어로 3-A·상세모달 3-B가 씬을 iframe으로 임베드) | 디자인시스템/전체 담당 |
| `core.css` · `core.js` | 공유 CSS/JS (토큰·컴포넌트·애니 드라이버·재생/정지/시크 하네스) | 디자인시스템/전체 담당 |
| `scene-<제품><N>.html` (15개) | 제품·씬별 독립 애니메이션 씬 | **스쿼드** |
| `assets/` | 이미지. 아이콘 SVG = `assets/icon/`, 공용 이미지(히어로·공용 상품) = `assets/common/`, 제품별 = `assets/<제품>/` | |

> 씬 파일은 `core.css`·`core.js`를 링크하는 **독립 HTML**입니다. 씬을 고치면 메인 화면(히어로·상세모달)과 임베드에 모두 자동 반영됩니다.

---

## 👥 스쿼드별 작업 규칙

- **자기 제품의 `onboarding-v7/scene-<제품>*.html`만 수정합니다.** (업셀 → `scene-upsell*` / 리뷰 → `scene-review*` / 푸시 → `scene-push*` / 캔버스 → `scene-canvas*` / 인스타 → `scene-insta*`)
- **건드리지 않는 것**: 공유 파일(`onboarding-v7/core.css`·`core.js`·`onboarding-single-view-v7.html`), 다른 스쿼드의 씬, 그리고 **루트 v6 원본 전체**. 공용이라 한 스쿼드가 바꾸면 전 제품에 영향이 갑니다.
- 공유 CSS/JS 변경이 필요하면 디자인시스템·전체 담당자에게 요청하세요.

---

## ✏️ 씬 고치는 법

각 씬 파일(`onboarding-v7/scene-*.html`)의 구조는 이렇습니다.
```html
<link rel="stylesheet" href="core.css">          <!-- 공유(수정 X) -->
<div id="sceneDefs">
  <template data-scene="up1">  … 이 안의 HTML만 수정 …  </template>
</div>
<script src="core.js"></script>                   <!-- 공유(수정 X) -->
<script>renderEmbed('up1', …)</script>
```

1. 씬 파일을 브라우저로 열면 **뷰포트 전체에 씬이 재생**됩니다(자동재생 미리보기).
2. 고칠 요소에 **우클릭 → 검사(Inspect)**로 `class="…"` 확인 → 편집기에서 **`<template>` 안**의 그 부분을 수정.
3. 저장 → 브라우저 새로고침으로 확인.

> ⚠️ **클래스명은 그대로 두세요.** `up1s`·`ps-wall`·`cv2-sc` 같은 클래스에 애니메이션 드라이버가 붙습니다. 이름을 바꾸면 애니가 안 걸립니다. (문구·상품명·가격·사진 등 **내용**만 자유롭게 바꾸면 됩니다.)
>
> 🖼️ **이미지 경로는 `assets/…`** (폴더 내부). 새 이미지는 `onboarding-v7/assets/`에 넣고 `assets/…`로 참조하세요.

---

## 🖼️ 다른 페이지(앵귤러 등)에 씬 임베드하기

씬은 iframe `src`만 바꿔 어디에나 끼울 수 있습니다.
```html
<iframe src="https://yuraseo-saladlab.github.io/onboarding/onboarding-v7/scene-push2.html"
        style="width:100%;height:600px;border:0"></iframe>
```
- 기본은 자동재생. 첫 프레임(포스터)만 두려면 `?autoplay=0`.
- 씬은 iframe 전체를 풀블리드로 채웁니다(카드 프레임·라운드는 감싸는 쪽에서).

---

## 🏠 집에서 이어서 작업하기

```bash
# 처음 한 번
git clone https://github.com/SaladLabInc/total-onboarding.git
cd total-onboarding

# 작업 시작 전 최신화
git pull

# 수정 후 올리기 (자기 스쿼드 onboarding-v7/scene-<제품>*.html 만)
git add -A
git commit -m "무엇을 바꿨는지 한 줄"
git push
```

---

## 🔒 참고
- `.DS_Store`는 `.gitignore`로 제외돼 있습니다.
- 이전 시안(v3~v6)·구 데모 파일은 루트에 레거시로 보존돼 있고, **작업 대상은 `onboarding-v7/`** 입니다.
