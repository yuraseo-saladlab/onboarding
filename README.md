🔗 공개 웹링크
https://yuraseo-saladlab.github.io/onboarding/

# 알파앱스 온보딩 (Onboarding)

쇼핑몰 온보딩 "맞춤 솔루션 선택" 화면과, 우측 프레임에 들어가는 제품별 **클릭커블 데모** 모음입니다.

---

## 📁 파일 구성

| 파일 | 설명 |
|---|---|
| `onboarding-single-view.html` | **메인 화면.** 스텝퍼 + 솔루션 선택 + 우측 데모 프레임(iframe). |
| `canvas-onboarding.html` | 알파캔버스 데모 (프레임 안에 임베드됨) |
| `instafeed-onboarding.html` | 인스타피드 데모 |
| `review-onboarding.html` | 알파리뷰 데모 |
| `push-onboarding.html` | 알파푸시 데모 |
| `upsell-onboarding.html` | 알파업셀 데모 |
| `onboarding-single-view-original.html` | 작업 전 백업본 |

> 메인 화면 우측 프레임은 위 데모 파일들을 `<iframe>`으로 불러옵니다. 즉, **프레임 안의 내용은 메인 파일이 아니라 각 데모 파일을 고쳐야** 바뀝니다.

---

## 🏠 집에서 이어서 작업하기

### 1) 처음 한 번 — 내려받기 (clone)
집 컴퓨터 터미널에서:
```bash
git clone https://github.com/yuraseo-saladlab/onboarding.git
cd onboarding
```
처음에 GitHub 로그인을 물어보면 `yuraseo-saladlab` 계정으로 인증하세요.
(GitHub CLI가 있으면 `gh auth login` 한 번이면 됩니다.)

### 2) 미리보기
데모 파일은 각각 **단독으로 열리는 완성 파일**이라, 그냥 더블클릭해서 브라우저로 열면 바로 보입니다.
메인 화면 전체를 보려면 `onboarding-single-view.html`을 브라우저로 여세요.

### 3) 수정 후 올리기 (push)
```bash
git add -A
git commit -m "무엇을 바꿨는지 한 줄 설명"
git push
```

### 4) (집↔회사 왔다갔다 할 때) 작업 시작 전 최신화
```bash
git pull
```

---

## ✏️ 프레임 안의 요소 찾고 고치기

각 데모 파일을 열면 내용이 **세 군데**에 나뉘어 있습니다.

1. **`<style>` (파일 위쪽)** — 색·간격·기본 크기 등 디자인 CSS. `.클래스이름 { ... }`
2. **`<script type="text/babel">` (파일 아래쪽)** — 화면에 보이는 글자·구조. `className="..."` 부분이 요소이고, 상품명·가격·문구도 여기 있어요.
3. **`<style id="embed-fill">` / `<style id="embed-enlarge">` (`</head>` 바로 위)** — 메인 프레임에 맞춰 넣은 **레이아웃 보정 블록**.

### 가장 쉬운 방법
1. 데모 파일을 크롬으로 열고, 고치고 싶은 요소에 **우클릭 → 검사(Inspect)**
2. 거기 보이는 `class="..."` 이름을 확인 (예: `price`, `post-thumb`)
3. 편집기에서 그 파일을 열고 **Cmd+F**로 그 클래스명/글자를 검색해 수정
4. 저장 → 브라우저 새로고침으로 확인

> ⚠️ **크기·정렬이 생각대로 안 바뀌면** `embed-fill` / `embed-enlarge` 블록을 먼저 보세요.
> 이 두 블록은 `!important`로 원래 CSS를 덮어쓰고 있어서, 여기 값을 고쳐야 적용되는 경우가 많습니다.

---

## 🧩 메인 화면 동작 메모 (`onboarding-single-view.html`)

- 우측 프레임은 `.anim-area > iframe#animFrame` 이고, `loadPanel()`의 `ANIM` 매핑으로 제품별 데모 파일을 불러옵니다.
- 좌측 칩(문제) 본문을 클릭하면 해당 제품 데모로 프레임이 바뀝니다.
- navy 패널 헤더는 제거됨 — 제품명·헤드라인은 데모 안에서만 노출됩니다.

---

## 🔒 참고
- 이 레포는 **private** 입니다. 팀 공유는 GitHub에서 collaborator 추가 또는 visibility 변경으로 하세요.
- `.DS_Store`는 `.gitignore`로 제외돼 있습니다.
