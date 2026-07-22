🔗 공개 웹링크
https://yuraseo-saladlab.github.io/onboarding/

# 알파앱스 온보딩 (Onboarding)

쇼핑몰 온보딩 "맞춤 솔루션 선택" 화면과, 제품별 **애니메이션 씬**(클릭커블 데모) 모음입니다.
현재 메인은 **v6** — 애니메이션 씬을 제품·씬별 독립 파일로 분리해 **스쿼드별로 각자 작업**할 수 있게 되어 있습니다.

---

## 📁 파일 구성

### 공유·전역 (⚠️ 스쿼드 디자이너 수정 금지)
| 파일 | 설명 |
|---|---|
| `core.css` | 모든 씬·화면 공유 CSS (토큰·컴포넌트·애니메이션 스타일) |
| `core.js` | 모든 씬·화면 공유 JS (애니 드라이버·재생/정지/시크 하네스) |
| `onboarding-single-view-v6.html` | 메인 온보딩 화면 (히어로 3-A·상세모달 3-B가 씬을 iframe으로 임베드) |
| `index.html` | 랜딩(시안·씬 바로가기) |

### 씬 파일 (스쿼드별 작업 대상)
| 스쿼드 | 파일 |
|---|---|
| 알파리뷰 | `scene-review1.html` · `scene-review2.html` · `scene-review3.html` |
| 알파업셀 | `scene-upsell1.html` · `scene-upsell2.html` · `scene-upsell3.html` |
| 알파푸시 | `scene-push1.html` · `scene-push2.html` · `scene-push3.html` |
| 알파캔버스 | `scene-canvas1.html` · `scene-canvas2.html` · `scene-canvas3.html` |
| 인스타피드 | `scene-insta1.html` · `scene-insta2.html` · `scene-insta3.html` |

> 각 씬은 `core.css`·`core.js`를 링크하는 **독립 HTML**입니다. 씬을 고치면 메인 화면(히어로·상세모달)과 임베드에 모두 자동 반영됩니다.

---

## 👥 스쿼드별 작업 규칙

- **자기 제품의 `scene-<제품>*.html`만 수정합니다.** (업셀 디자이너 → `scene-upsell*` / 리뷰 디자이너 → `scene-review*` / 나머지도 동일)
- **공유 파일(`core.css`·`core.js`·`onboarding-single-view-v6.html`·`index.html`)과 다른 스쿼드의 씬 파일은 건드리지 않습니다.** 공용이라 한 스쿼드가 바꾸면 전 제품에 영향이 갑니다.
- 공유 CSS/JS 변경이 필요하면 디자인시스템·전체 담당자에게 요청하세요.

---

## ✏️ 씬 고치는 법

각 씬 파일을 열면 구조는 이렇습니다.
```html
<link rel="stylesheet" href="core.css">          <!-- 공유(수정 X) -->
<div id="sceneDefs">
  <template data-scene="up1">  … 이 안의 HTML만 수정 …  </template>
</div>
<script src="core.js"></script>                   <!-- 공유(수정 X) -->
<script>renderEmbed('up1', …)</script>
```

1. 씬 파일을 브라우저로 열면 **뷰포트 전체에 씬이 재생**됩니다(단독 미리보기).
2. 고칠 요소에 **우클릭 → 검사(Inspect)**로 `class="…"` 확인 → 편집기에서 **`<template>` 안**의 그 부분을 수정.
3. 저장 → 브라우저 새로고침으로 확인.

> ⚠️ **클래스명은 그대로 두세요.** `up1s`·`ps-wall`·`cv2-sc` 같은 클래스에 애니메이션 드라이버가 붙습니다. 이름을 바꾸면 애니가 안 걸립니다. (문구·상품명·가격·사진 등 **내용**만 자유롭게 바꾸면 됩니다.)

---

## 🖼️ 다른 페이지(앵귤러 등)에 씬 임베드하기

씬은 iframe `src`만 바꿔 어디에나 끼울 수 있습니다.
```html
<iframe src="https://yuraseo-saladlab.github.io/onboarding/scene-push2.html"
        style="width:100%;height:600px;border:0"></iframe>
```
- 기본은 자동재생. 첫 프레임(포스터)만 두려면 `?autoplay=0`.
- 씬은 iframe 전체를 풀블리드로 채웁니다(카드 프레임·라운드는 감싸는 쪽에서).

---

## 🏠 집에서 이어서 작업하기

```bash
# 처음 한 번
git clone https://github.com/yuraseo-saladlab/onboarding.git
cd onboarding

# 작업 시작 전 최신화
git pull

# 수정 후 올리기
git add -A
git commit -m "무엇을 바꿨는지 한 줄"
git push
```

---

## 🔒 참고
- 이 레포는 **private** 입니다. 팀 공유는 GitHub collaborator 추가로 하세요.
- `.DS_Store`는 `.gitignore`로 제외돼 있습니다.
- 이전 시안(v1~v5)·구 데모 파일은 레거시로 보존돼 있고, 메인은 v6입니다.
