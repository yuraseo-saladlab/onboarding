
    /* ═══════════════════════════════════════════════
       설정 — 카페24 앱스토어에서 유입된 앱 (진입 컨텍스트)
    ═══════════════════════════════════════════════ */
    let ENTRY = 'review';           // 앱스토어에서 선택하고 들어온 앱 (진입 화면에서 setEntry로 결정)
    // ⓘ 카피는 2026-07-03 정리 기준 가안 — 확정 전 // TODO

    /* ═══════════════════════════════════════════════
       제품 데이터 — 네러티브·피처·씬
    ═══════════════════════════════════════════════ */
    const P = {
      review: {
        name: '알파리뷰', color: 'var(--sds-bg-brand)', addHover: 'var(--color-purple-600, #5B3AE0)', free: '· 처음 쓰면 무료체험 14일',
        main: '<span>카페24 리뷰 솔루션 1위</span><br>알파리뷰와 빠르게 성장해요',
        hook: '리뷰가 신뢰로, 신뢰가 성장으로 이어져요',
        trust: ['유료 고객사 5,000+', '라이브 쇼핑몰 25,000+'],
        trustNote: '',
        tags: ['리뷰 그로스', 'AI 루틴', '모든 리뷰 위젯'],
        beats: [
          ['모든 순간이 리뷰로, 쌓인 리뷰는 구매로', '빠른 리뷰, 외부몰 리뷰, QR 코드 리뷰까지 알파리뷰 한 곳에 모여요. 쌓인 리뷰만큼 쇼핑몰은 성장해요.'],
          ['AI가 중요한 것만 알려드려요', '중요한 것만 보면 돼요. 알파리뷰 AI가 부정 리뷰는 걸러내고, 좋은 리뷰는 상단에 고정해요. 전체 리뷰는 알아서 요약해요.'],
          ['같은 리뷰도 알파리뷰를 거치면 달라요', '텍스트부터 포토·영상·쇼츠까지 이 세상 모든 리뷰가 20종 이상의 알파리뷰 위젯으로 쇼핑몰 브랜드를 완성해요.'],
        ],
        feats: [
          {
            kicker: '리뷰 그로스', title: '가장 빠르게, 양질의 리뷰를 모읍니다',
            desc: '모든 곳에서 남길 수 있고, 남긴 것을 모을 수 있어요. 그게 모여 신뢰와 성장이 됩니다.',
            chips: ['QR 리뷰', '알림톡 빠른 리뷰', '외부 리뷰 연동'], scene: 'rv1',
            done: '✓ 이렇게 리뷰가 쌓여요',
          },
          {
            kicker: 'AI 루틴', title: '쌓이는 리뷰, 똑똑해지는 AI',
            desc: '사람의 업무가 시스템의 루틴이 됩니다 — 실행하던 일이, 감지하면 되는 일로 바뀌어요.',
            chips: ['AI 리뷰 분석', 'AI 자동 답글', '부정 리뷰 감지·대응'], scene: 'rv2',
            done: '✓ 부정 리뷰도 AI가 먼저 잡아요',
          },
          {
            kicker: '모든 리뷰 기능', title: '다채로운 디자인으로, 제품의 매력을 더 효과적으로',
            desc: '어디서 본 그 기능, 다 있습니다. 포토·영상부터 숏츠 위젯까지.',
            chips: ['포토·영상 리뷰', '20여 종 위젯 + 숏츠', '리뷰 뱃지·상단 고정'], scene: 'rv3',
            done: '✓ 필요한 위젯이 전부 준비돼 있어요',
          },
        ],
      },
      upsell: {
        name: '알파업셀', color: 'var(--sds-bg-danger)', addHover: 'var(--color-red-600, #B42027)', free: '· 처음 쓰면 무료체험 14일',
        main: '<b>더 담고 싶은 쇼핑 경험</b><br>추가 매출 만드는 알파업셀 공식',
        hook: '광고비는 그대로, 객단가가 오릅니다. 잘 버는 몰은 업셀 중',
        trust: ['가격 최적화', '추천 위젯 12종'],
        tags: ['AI 상품 추천', '가격 최적화', '숫자로 증명'],
        beats: [
          ['고객이 더 담고 싶은 상품을 발견해요', 'AI 추천 위젯 12종이 동선 곳곳에서 어울리는 상품을 제안해요.'],
          ['담기만 하고 안 사는 고객에게만 할인해요', '이탈 직전 고객에게만 딱 맞는 프로모션으로 구매를 이끌어요.'],
          ['다음 전략이 보이는 알파업셀 인사이트', '매출·전환·객단가로 다음에 뭘 더 팔지 숫자로 알려줘요.'],
        ],
        feats: [
          {
            kicker: 'AI 상품 추천', title: '고객이 더 담고 싶은 상품을 발견해요',
            desc: 'AI 추천 모델 9종이 12가지 위젯으로 고객 동선 곳곳에 어울리는 상품을 보여줘요. 마음에 드는 상품을 발견한 고객은 기분 좋게 담아요.',
            chips: ['AI 추천 모델 9종', '추천 위젯 12종', '옵션세트 바로 담기'], scene: 'up1',
            done: '✓ 클릭 한 번에 장바구니가 커졌어요',
          },
          {
            kicker: '가격 최적화', title: '담기만 하고 안 사는 고객에게만 할인해요',
            desc: '장바구니에서 떠나는 고객이 구매 버튼 누르는 프로모션, 돈 버는 진짜 할인 전략, 모두 알파업셀에 있어요',
            chips: ['가격 A/B/N 테스트 자동화', '프로모션 다단계 결합', '최대 이익 가격 탐색'], scene: 'up2',
            done: '✓ 최대 이익 가격을 찾았어요',
          },
          {
            kicker: '숫자로 증명', title: '다음 전략이 보이는 알파업셀 인사이트',
            desc: '지난 할인 프로모션 결과를 매출·전환율·객단가로 확인해요. 다음 할인에서 뭘 더 팔아야 할지, 그 답은 인사이트에 있어요.',
            chips: ['함께구매 금액 자동 집계', '함께구매 건수 자동 집계', '객단가·매출 리포트'], scene: 'up3',
            done: '✓ 성장이 숫자로 보여요',
          },
        ],
      },
      push: {
        name: '알파푸시', color: 'var(--sds-bg-info)', addHover: 'var(--color-blue-600, #1D5DC4)', free: '· 처음 쓰면 무료체험 14일',
        main: '<b>간편가입부터 메시지 발송까지</b><br>알파푸시로 쉽게 시작해요',
        hook: '따로 쓰던 CRM 번들을 하나로, 세팅 한번에 자동화까지',
        trust: ['월 39,000원 정액', '무료 플랜 제공'],
        tags: ['전환 액션 번들', '클릭 몇 번 캠페인', '정액 저가'],
        beats: [
          ['필요한 전환 기능이 모두 준비됐어요', '선물하기·회원가입·캠페인·탐색 유도를 한 곳에서 써요.'],
          ['월 39,000원으로 부담없이 운영해요', '무료로 시작하고, 정교해지고 싶을 때 정액 하나면 돼요.'],
          ['클릭 몇 번으로, 오늘 바로 캠페인', '레시피대로 문자·친구톡·알림톡이 자동으로 나가요.'],
        ],
        feats: [
          {
            kicker: '전환 액션 번들', title: '필요한 기능과 설정 모두 준비됐어요',
            desc: '선물하기·초스피드 회원가입·캠페인 메세지·탐색 유도까지 한 곳에서 모두 사용할 수 있어요.',
            chips: ['선물하기', '초스피드 회원가입', '캠페인 메세지', '탐색 유도'], scene: 'ps1',
            done: '✓ 고객 여정이 한 곳에 모였어요',
          },
          {
            kicker: '합리적인 가격', title: '월 39,000원으로 부담없이 운영해요',
            desc: '무료로 시작해도 충분해요. 더 정교해지고 싶을 때는 월 39,000원이면 돼요.',
            chips: ['월 39,000원 정액', '무료 플랜', '발송비 외 추가 없음'], scene: 'ps3',
            done: '✓ 이 스테이지엔 이보다 좋은 선택이 없어요',
          },
          {
            kicker: '캠페인 자동화', title: '클릭 몇 번으로, 오늘 바로 캠페인',
            desc: '미리 짜둔 레시피대로 문자·친구톡·알림톡이 자동으로 나가요. 세그먼트 관리까지.',
            chips: ['회원가입·첫구매·재구매 레시피', '장바구니 방치 온사이트 팝업', '세그먼트 관리'], scene: 'ps2',
            done: '✓ 캠페인이 자동으로 돌기 시작했어요',
          },
        ],
      },
      canvas: {
        name: '알파캔버스', color: 'var(--c-canvas)', addHover: 'var(--color-teal-600, #0D9488)', free: '· 스킨 사면 알파앱스 무료 2개월',
        main: '<b>스킨, 이제 가볍게 골라요</b><br>알파캔버스에서 마음껏 고치니까',
        hook: '개발자없이 내 맘대로 수정, 스킨 선택을 자유롭게',
        trust: ['노코드 위젯 편집', '초기 도입 혜택'],
        tags: ['상세페이지 위젯 편집', '기획전 갈아끼우기', '도입 혜택'],
        beats: [
          ['쇼핑몰 디자인, 클릭과 드래그로 완성해요', '끌어다 놓기만 하면 원하는 페이지가 그대로 조립돼요.'],
          ['스킨 구매 후에도 계속 업그레이드돼요', '새 기능이 더해질 때마다 쇼핑몰이 더 새로워져요.'],
          ['이제 시작하는 사장님을 위한 혜택 3가지', '도입에 필요한 혜택을 알파캔버스가 먼저 챙겼어요.'],
        ],
        feats: [
          {
            kicker: '노코드 편집', title: '쇼핑몰 디자인, 클릭과 드래그로 완성해요',
            desc: '끌어다 놓기만 하면 상상하던 페이지가 원하는 대로 조립돼요. 디자이너나 개발자 찾느라 뛰어다니지 않아도 돼요.',
            chips: ['기획전·브랜드·공백페이지 자유 레이아웃', '디자인 요소 전체 제공'], scene: 'cv2',
            done: '✓ 위젯 6개 조립 — 전환율 2.4% → 13.0%',
          },
          {
            kicker: '계속 업그레이드', title: '스킨 구매 후에도 계속 기능이 업그레이드 돼요',
            desc: '한 번 사고 마는 스킨은 그만! 알파캔버스는 계속 발전해요. 새 기능이 더해질 때마다 쇼핑몰은 더 새로워져요.',
            chips: [], scene: 'cv1',
            done: '',
          },
          {
            kicker: '시작 혜택', title: '이제 시작하는 사장님을 위한 혜택 3가지',
            desc: '당장 필요한 도입 혜택을 알파캔버스가 먼저 챙겼어요. 어떤 혜택이 열리는지 지금 확인해 보세요.',
            chips: ['처음 사용하는 고객사만 해당'], scene: 'cv3',
            done: '',
          },
        ],
      },
      instafeed: {
        name: '인스타피드', color: 'var(--c-insta)', addHover: 'var(--color-pink-600, #D73D71)', free: '· 최초 30건 무료, 이후 매월 5건 무료',
        main: '<b>인스타피드를 쇼핑몰 안에</b><br>그대로 가져와요',
        hook: '감성 콘텐츠로 머무는 시간이 늘어요 · 체류 +25%',
        trust: ['노코드 피드 연동', '인스타 게시물 자동 노출'],
        tags: ['피드 자동 연동', '상품과 자연 연결', '콘텐츠 체류'],
        beats: [
          ['계정을 한번만 연결하면 돼요', '인스타그램 계정을 한 번만 연결하면 돼요. 코드도, 디자이너도 필요 없어요.'],
          ['게시물이 자동으로 들어와요', '새 게시글을 올릴 때마다 쇼핑몰 위젯에 바로 업데이트돼요.'],
          ['고객이 더 머물러요', '감성 콘텐츠를 보며 자연스럽게 체류시간이 늘어나요 · 체류 +25%'],
        ],
        feats: [
          {
            kicker: '피드 연동', title: '계정 한 번 연결로, 인스타 피드가 쇼핑몰에',
            desc: '인스타그램 계정을 한 번만 연결하면 게시물이 그대로 쇼핑몰 위젯에 들어와요. 코드도, 디자이너도 필요 없어요.',
            chips: ['노코드 연동', '게시물 자동 불러오기', '팔로워·소식 노출'], scene: 'if1',
            done: '✓ 인스타 피드가 연동됐어요',
          },
          {
            kicker: '자동 노출', title: '새 게시물을 올리면, 위젯이 알아서 바뀌어요',
            desc: '인스타에 게시글을 올리기만 하면 쇼핑몰 피드 위젯에 바로 업데이트돼요. 상품 옆에서 브랜드 무드를 자연스럽게 전해요.',
            chips: ['업로드 즉시 반영', '상품과 자연 연결', '이벤트·소식 전달'], scene: 'if2',
            done: '✓ 새 게시물이 자동으로 노출돼요',
          },
          {
            kicker: '콘텐츠 체류', title: '감성 콘텐츠를 보며 더 오래 머물러요',
            desc: '보는 재미가 있는 감성 피드가 이탈을 붙잡아요. 머무는 시간이 늘면 둘러보는 상품도, 구매 기회도 함께 늘어나요.',
            chips: ['체류시간 +25%', '이탈 감소', '탐색 상품 증가'], scene: 'if3',
            done: '✓ 체류시간이 25% 늘었어요',
          },
        ],
      },
    };

    // 카페24 앱스토어 진입 가능한 5개 앱 (진입 화면 노출 순서)
    const ALL_APPS = ['canvas', 'instafeed', 'review', 'push', 'upsell'];
    // 추천 대상 = 진입 앱 제외 나머지. 단 인스타피드는 추천 카드로 노출하지 않음(진입 전용)
    const isReco = k => k !== ENTRY && k !== 'instafeed';
    let RECO_ORDER = ALL_APPS.filter(isReco);
    let KEYS = [ENTRY, ...RECO_ORDER];

    // 진입 앱 확정 — 파생 리스트·장바구니를 진입 앱 기준으로 다시 세팅
    function setEntry(k) {
      ENTRY = k;
      RECO_ORDER = ALL_APPS.filter(isReco);
      KEYS = [ENTRY, ...RECO_ORDER];
      cart = new Set([ENTRY]);
    }

    /* ═══════════════════════════════════════════════
       씬 HTML — 실제 기능 기반 클릭 액션 목업
       ⓘ 수치(리뷰 1,284건·₩8,420,000 등)는 예시값 — 실데이터 확인 후 교체 // TODO
    ═══════════════════════════════════════════════ */
    // 씬 HTML은 하단 #sceneDefs의 <template>에 하드코딩되어 있음 — 여기서 로드만 한다
    const SCENES = {};
    document.querySelectorAll('#sceneDefs template[data-scene]').forEach(t => { SCENES[t.dataset.scene] = t.innerHTML; });

    /* 히어로 우측 패널 (비트별 목업) — ENTRY 제품용 */
    const HERO_PANES = {};
    document.querySelectorAll('#sceneDefs template[data-hero]').forEach(t => {
      const p = t.dataset.hero.split(':');
      (HERO_PANES[p[0]] = HERO_PANES[p[0]] || [])[+p[1]] = t.innerHTML;
    });

    /* 완료 화면 설치 안내 */
    const INSTALL = {
      review: { auto: '알파리뷰 일부 기능', manual: '알파리뷰 일부 기능' },
      push: { auto: '알파푸시' },
      upsell: { manual: '알파업셀' },
      canvas: { manual: '알파캔버스' },
      instafeed: { auto: '인스타피드' },
    };

    /* ═══════════════════════════════════════════════
       상태 + 유틸
    ═══════════════════════════════════════════════ */
    const $ = id => document.getElementById(id);
    let cart = new Set([ENTRY]);
    let curView = 'info1';

    const fmtNum = n => n.toLocaleString('ko-KR');

    function runCounts(root) {
      root.querySelectorAll('.cnt').forEach(el => {
        if (el.dataset.ran) return;
        el.dataset.ran = '1';
        const from = +(el.dataset.from || 0), to = +el.dataset.to;
        const fmt = el.dataset.fmt;
        const delay = +(el.dataset.delay || 0); // 씬 애니메이션 타이밍과 동기화
        el._ct = setTimeout(() => {
          const t0 = performance.now(), dur = 950;
          (function tick(t) {
            const p = Math.max(0, Math.min(1, (t - t0) / dur));
            const e = 1 - Math.pow(1 - p, 3);
            const v = Math.round(from + (to - from) * e);
            el.textContent = fmt === 'won' ? fmtNum(v) + '원' : fmt === 'star' ? (v / 10).toFixed(1) : fmtNum(v);
            if (p < 1) el._cr = requestAnimationFrame(tick);
          })(t0);
        }, delay);
      });
    }

    /* ═══════════════════════════════════════════════
       라우팅 + 스텝퍼
    ═══════════════════════════════════════════════ */
    const STEP_LABELS = ['담당자 정보 입력', '쇼핑몰 정보 입력', '맞춤 솔루션 선택', '카드 등록'];
    const VIEW_STEP = { entry: 0, info1: 1, info2: 2, hero: 3, pick: 3, widget: 3, card: 4, done: 5 };
    const VIEW_ID = { entry: 'viewEntry', info1: 'viewInfo1', info2: 'viewInfo2', hero: 'viewHero', pick: 'viewPick', widget: 'viewWidget', card: 'viewCard', done: 'viewDone' };

    function buildStepper(cur) {
      const box = $('steps'); box.innerHTML = '';
      STEP_LABELS.forEach((lbl, i) => {
        const n = i + 1;
        const st = document.createElement('div');
        st.className = 'st clickable' + (n < cur ? ' done' : n === cur ? ' active' : '');
        st.innerHTML = `<span class="n">${n < cur ? '✓' : n}</span>${lbl}`;
        st.onclick = () => go(stepEntry(n));   // 검토·비교용: 모든 단계 클릭 이동
        box.appendChild(st);
        if (n < STEP_LABELS.length) {
          const seg = document.createElement('span');
          seg.className = 'st-seg' + (n < cur ? ' done' : '');
          box.appendChild(seg);
        }
      });
    }

    function stepEntry(n) { return ({ 1: 'info1', 2: 'info2', 3: 'hero', 4: 'card' })[n]; }

    function animateInfoHeroCount(view) {
      if (view !== 'info1' && view !== 'info2') return;
      const root = $(VIEW_ID[view]);
      if (!root) return;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      root.querySelectorAll('.ih-social-count').forEach(el => {
        const to = +(el.dataset.countTo || 42000);
        const from = +(el.dataset.countFrom || 0);
        const dur = +(el.dataset.countDur || 1200);
        if (el._ihCountFrame) cancelAnimationFrame(el._ihCountFrame);
        if (reduceMotion) {
          el.textContent = fmtNum(to);
          return;
        }
        const t0 = performance.now();
        el.textContent = fmtNum(from);
        const tick = t => {
          const p = Math.max(0, Math.min(1, (t - t0) / dur));
          const e = 1 - Math.pow(1 - p, 3);
          el.textContent = fmtNum(Math.round(from + (to - from) * e));
          if (p < 1) el._ihCountFrame = requestAnimationFrame(tick);
          else el.textContent = fmtNum(to);
        };
        el._ihCountFrame = requestAnimationFrame(tick);
      });
    }

    function go(view) {
      curView = view;
      Object.values(VIEW_ID).forEach(id => $(id).classList.remove('on'));
      $(VIEW_ID[view]).classList.add('on');
      animateInfoHeroCount(view);
      // 진입 앱 선택 화면은 케이스 선택 단계라 스텝퍼 숨김
      const isEntry = (view === 'entry');
      $('steps').style.display = isEntry ? 'none' : '';
      if (!isEntry) buildStepper(VIEW_STEP[view]);
      window.scrollTo(0, 0);
      // 장바구니 도크: 히어로·추천 화면에서만
      const dockOn = (view === 'hero' || view === 'pick');
      $('cartDock').classList.toggle('show', dockOn);
      if (dockOn) renderDock();
      if (view === 'hero') startHero(); else stopHero();
      if (view === 'done') renderDone();
    }

    document.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));
    { const _cb = $('cardBack'); if (_cb) _cb.onclick = () => go(cart.has('review') ? 'widget' : 'pick'); }

    // 로고 클릭 → 첫 화면(진입 앱 선택)으로 복귀
    { const _lg = document.querySelector('.topbar .logo'); if (_lg) { _lg.style.cursor = 'pointer'; _lg.title = '처음으로 (앱 다시 선택)'; _lg.onclick = () => go('entry'); } }

    /* ═══════════════════════════════════════════════
       스텝 3-A — 히어로 (자동 네러티브)
    ═══════════════════════════════════════════════ */
    const BEAT_MS = 3400;
    // 비트별 개별 노출 시간(자동 넘김·진행 게이지 기준). 히어로는 수동 재생이라 목업 재생 길이에 맞춘 근사값.
    const BEAT_DUR = {
      review: [10000, 10200, 8600],
      upsell: [10600, 6000, 4600],
      push: [8600, 5000, 4600],
      canvas: [9000, 8000, 5000],
      instafeed: [6000, 5000, 5000],
    };
    const beatMs = i => (BEAT_DUR[ENTRY] || [])[i] || BEAT_MS;
    let heroTimer = null, heroIdx = 0;

    function initHero() {
      const d = P[ENTRY];
      // 비트 카피: 전용 beats가 있으면 사용, 없으면 상세 피처(title·desc)를 히어로 비트로 재활용
      const beatData = d.beats || d.feats.map(f => [f.title, f.desc]);
      $('heroKicker').innerHTML = `<span class="dot" style="background:${d.color}"></span>카페24 앱스토어에서 선택하신 앱 · ${d.name}`;
      $('heroTitle').style.setProperty('--hc', d.color);
      $('heroTitle').innerHTML = d.main;
      $('heroTrust').innerHTML = d.trust.map(t => `<span class="td">${t}</span>`).join('') + (d.trustNote ? `<span class="note">${d.trustNote}</span>` : '');
      const beats = $('heroBeats'); beats.innerHTML = '';
      beatData.forEach((b, i) => {
        const el = document.createElement('div');
        el.className = 'beat';
        el.style.setProperty('--beat-ms', beatMs(i) + 'ms');
        el.innerHTML = `<span class="brow"><span class="bn">${i + 1}</span><span class="bt">${b[0]}</span></span><span class="bd">${b[1]}</span><span class="prog"><span class="prog-knob"></span></span><span class="prog-hit" title="게이지를 누르거나 드래그해 위치 이동"></span>`;
        // beat 클릭 = 현재 비트면 재생/정지 토글, 다른 비트면 처음부터 (prog-hit 영역 제외)
        el.onclick = () => { if (i === heroIdx) { heroPaused ? resumeHero() : pauseHero(); } else scrubBeat(i, 0); };
        // 진행 게이지(prog-hit) 클릭·드래그 = 위치 시크
        const hit = el.querySelector('.prog-hit');
        if (hit) bindScrub(hit, i, (fi, f) => scrubBeat(fi, f), () => heroIdx);
        beats.appendChild(el);
      });
      const panes = $('heroPanes');
      panes.style.setProperty('--dc', d.color);
      // 히어로 씬 = 독립 씬 파일을 iframe으로 임베드(제품 임베드와 완전히 동일한 구조).
      // 각 씬은 iframe 안에서 자동재생하고, v6는 beatMs 타이머로 다음 씬(iframe src)만 교체한다.
      panes.innerHTML = `<iframe class="hero-frame" id="heroFrame" title="${d.name} 씬"></iframe>`;
    }

    /* 히어로 스테이지에 상세 씬을 렌더 + 상세 오버레이와 동일하게 클릭 액션·드라이버를 바인딩.
       비트 재진입/다시보기 시 씬을 새로 그려 첫 프레임(포스터)부터 다시 시작한다. */
    function renderHeroScene(pane) {
      const scene = pane.dataset.scene;
      pane.innerHTML = SCENES[scene] || '';
      renderStars(pane);
      bindHeroScene(pane);
    }

    /* 씬 재생 라우팅 — 3-A 히어로 스테이지와 3-B 상세 오버레이가 공용(단일 소스).
       새 씬 드라이버는 여기 한 곳에만 추가하면 양쪽에 반영됨 */
    function playScene(sc, stage) {
      runCounts(stage);
      if (sc.classList.contains('ps-wall')) seqWall(sc);
      if (sc.classList.contains('pc-scene')) seqPcx(sc);
      if (sc.classList.contains('up1s')) scrollUpx(sc);
      if (sc.classList.contains('up2s')) seqUp2(sc);
      if (sc.classList.contains('rv2s')) seqRv2(sc);
      if (sc.classList.contains('if1s')) seqIf1(sc);
    }

    function bindHeroScene(stage) {
      const sc = stage.querySelector('.sc');
      if (!sc) return;
      // 씬 내부 CTA(data-act) 클릭 = 상세 오버레이 dtGo와 동일한 재생 로직
      stage.querySelectorAll('[data-act]').forEach(btn => {
        btn.addEventListener('click', () => {
          const act = btn.dataset.act;
          if (act && act.startsWith('theme-')) sc.dataset.theme = act.split('-')[1];
          sc.classList.add('on');
          playScene(sc, stage);
        });
      });
      // 다시 보기 = 씬 재렌더(첫 프레임으로 복귀)
      const rb = stage.querySelector('.cmp-replay');
      if (rb) rb.onclick = () => renderHeroScene(stage);
      // 캔버스 씬 — 렌더 직후 초기화(상세 오버레이와 동일)
      if (stage.querySelector('.cv2-sc')) initCvBuilder(stage);
      if (stage.querySelector('.cv1-sc')) initCvDetail(stage);
    }

    /* 텍스트 별점(★/☆)을 Figma 별 아이콘으로 치환 */
    function renderStars(root) {
      const mk = s => [...s].map(ch => ch === '★' ? '<i class="star"></i>' : ch === '☆' ? '<i class="star empty"></i>' : '').join('');
      root.querySelectorAll('.rv-stars, .st, .st5').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/[★☆]+/, m => `<span class="star-row">${mk(m)}</span>`);
      });
    }

    function heroGo(i) {
      heroIdx = i;
      [...$('heroBeats').children].forEach((el, j) => {
        el.classList.toggle('on', j === i);
        el.classList.toggle('done', j < i);
        if (j === i) { const p = el.querySelector('.prog'); if (p) { p.style.animation = 'none'; void p.offsetWidth; p.style.animation = ''; } } // 게이지 리스타트
      });
      // 해당 비트의 씬 파일로 iframe 교체 → 씬이 iframe 안에서 자동재생 (autoplay 기본 ON)
      const fr = $('heroFrame');
      if (fr) fr.src = `scene-${SCENE_SLUG[ENTRY] || ENTRY}${i + 1}.html`;
    }

    /* 진행 게이지 스크럽 — 다른 비트면 처음부터, 현재 비트면 누른 위치(f:0~1)로 씬·게이지 시크 (v2와 동일, iframe은 postMessage로) */
    function scrubBeat(i, f) {
      if (i !== heroIdx) { heroGo(i); return; }
      const ms = f * beatMs(i);
      const beatEl = $('heroBeats').children[i];
      const prog = beatEl && beatEl.querySelector('.prog');
      if (prog && prog.getAnimations) prog.getAnimations().forEach(a => { try { a.currentTime = ms; } catch (e) { } });
      postScene($('heroFrame'), { __alphaScene: 'seek', ms, paused: heroPaused });
      if (!heroPaused) restartHeroTimer(Math.max(400, beatMs(i) - ms));
      else heroRemain = Math.max(400, beatMs(i) - ms);
    }

    // 셋업 카운트는 최종값으로 고정(ran 처리 → runCounts에서 스킵), 페이오프 카운트는 0으로(클릭 시 카운트업)
    function heroPrimeCounts(pane) {
      pane.querySelectorAll('.cnt').forEach(c => {
        if (c.closest('.hero-payoff')) { delete c.dataset.ran; c.textContent = c.dataset.fmt === 'star' ? ((+c.dataset.from || 0) / 10).toFixed(1) : (c.dataset.from || '0'); }
        else { const to = +c.dataset.to || 0; c.textContent = c.dataset.fmt === 'won' ? fmtNum(to) + '원' : fmtNum(to); c.dataset.ran = '1'; }
      });
    }
    function heroResetPayoffCounts(pane) {
      pane.querySelectorAll('.hero-payoff .cnt').forEach(c => {
        clearTimeout(c._ct);
        cancelAnimationFrame(c._cr);
        delete c.dataset.ran;
        c.textContent = c.dataset.fmt === 'star' ? ((+c.dataset.from || 0) / 10).toFixed(1) : (c.dataset.from || '0');
      });
    }

    // 각 방사형 리뷰 카드를 대응되는 rvh-sources 내부 UI의 실측 위치에 연결한다.
    function syncRvhCardTargets(pane) {
      const rvh = pane.querySelector('.rvh-gather');
      if (!rvh) return;
      const R = rvh.getBoundingClientRect();
      if (!R.width || !R.height) return;
      const even = value => Math.round(value / 2) * 2;
      rvh.querySelectorAll('.rvh-rc').forEach((card, index) => {
        const key = card.dataset.rvhTarget;
        const target = rvh.querySelector(`[data-rvh-source="${key}"]`) || rvh.querySelector('.rvh-sources .rvs.s2');
        if (!target) return;
        const T = target.getBoundingClientRect();
        if (!T.width || !T.height) return;
        const tx = even(T.left + T.width / 2 - (R.left + R.width / 2));
        const ty = even(T.top + T.height / 2 - (R.top + R.height / 2));
        const sx = Number.parseFloat(card.style.getPropertyValue('--x')) || 0;
        const sy = Number.parseFloat(card.style.getPropertyValue('--y')) || 0;
        const mx = even(sx + (tx - sx) * .72);
        const my = even(sy + (ty - sy) * .72 + (index % 2 ? 8 : -8));
        card.style.setProperty('--rc-target-x', `${tx}px`);
        card.style.setProperty('--rc-target-y', `${ty}px`);
        card.style.setProperty('--rc-mid-x', `${mx}px`);
        card.style.setProperty('--rc-mid-y', `${my}px`);
      });
    }

    // 우측상단 버튼 → 페이오프(결과) 등장. 셋업(poster)은 그대로 유지 → 전(입력)과 후(결과)가 확실히 달라짐
    function heroPlay() {
      const pane = $('heroPanes').children[heroIdx];
      if (!pane) return;
      syncRvhCardTargets(pane);
      pane.classList.add('played');
      runCounts(pane);   // 셋업은 ran 처리되어 스킵, 페이오프만 카운트업
      // 방사형 1번씬: 소스카드→몰 연결선을 실측해 그림 (몰 이동·소스 등장 애니 후)
      if (pane.querySelector('.rvh-gather')) setTimeout(() => drawRvhLines(pane), 1000);
    }

    // 각 rvs 소스카드의 오른쪽 중앙 → rvh-mall 왼쪽 중앙으로 연결선 경로 계산(%)
    function drawRvhLines(pane) {
      const rvh = pane.querySelector('.rvh-gather');
      const svg = pane.querySelector('.rvh-lines');
      const mall = pane.querySelector('.rvh-mall');
      if (!rvh || !svg || !mall) return;
      // 연결선 좌표계 = .rvh-stage(래퍼) 기준 (SVG가 stage를 덮음)
      const R = (pane.querySelector('.rvh-stage') || rvh).getBoundingClientRect();
      if (!R.width || !R.height) return;
      const m = mall.getBoundingClientRect();
      const mx = ((m.left - R.left) / R.width) * 100;
      const my = ((m.top + m.height / 2 - R.top) / R.height) * 100;
      const cards = pane.querySelectorAll('.rvh-sources .rvs');
      const paths = svg.querySelectorAll('path');
      cards.forEach((c, i) => {
        const p = paths[i];
        if (!p) return;
        const b = c.getBoundingClientRect();
        const sx = ((b.right - R.left) / R.width) * 100;
        const sy = ((b.top + b.height / 2 - R.top) / R.height) * 100;
        const cx = (sx + mx) / 2;
        p.setAttribute('d', `M${sx.toFixed(1)},${sy.toFixed(1)} C${cx.toFixed(1)},${sy.toFixed(1)} ${cx.toFixed(1)},${my.toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`);
      });
    }
    window.addEventListener('resize', () => {
      const hp = $('heroPanes'); if (!hp) return;
      const pane = hp.children[heroIdx];
      if (pane?.querySelector('.rvh-gather')) {
        syncRvhCardTargets(pane);
        if (pane.classList.contains('played')) drawRvhLines(pane);
      }
      const detailPane = $('dtStage')?.querySelector('.hero-pane');
      if (detailPane?.querySelector('.rvh-gather')) syncRvhCardTargets(detailPane);
    });

    // 다시 보기 → 재생 전(첫 버튼) 상태로 복귀. 다시 "재생" 버튼을 눌러야 애니가 돈다
    function heroReplay() {
      const pane = $('heroPanes').children[heroIdx];
      if (!pane) return;
      pane.classList.remove('played');   // 페이오프 숨김 + 셋업/버튼 원상복귀
      heroResetPayoffCounts(pane);
    }

    let heroPaused = false;
    let heroBeatStart = 0, heroRemain = 0; // 이어보기용: 현재 비트의 남은 시간 기억
    // 히어로 진입 → 첫 씬부터 beatMs 타이머로 자동 넘김 (heroCtrl로 멈춤/재생)
    function startHero() { heroPaused = false; $('heroBeats')?.classList.remove('paused'); $('heroPanes')?.classList.remove('paused'); syncHeroCtrl(); heroGo(0); restartHeroTimer(); }
    function restartHeroTimer(ms) {
      stopHero();
      if (heroPaused) return;
      heroRemain = (typeof ms === 'number') ? ms : beatMs(heroIdx);
      heroBeatStart = Date.now();
      heroTimer = setTimeout(() => {
        const n = $('heroBeats').children.length || 1;
        heroGo((heroIdx + 1) % n);
        restartHeroTimer();
      }, heroRemain);
    }
    function stopHero() { if (heroTimer) { clearTimeout(heroTimer); heroTimer = null; } }
    function pauseHero() {
      heroRemain = Math.max(300, heroRemain - (Date.now() - heroBeatStart)); // 남은 시간 저장
      heroPaused = true; stopHero();
      $('heroBeats').classList.add('paused'); $('heroPanes').classList.add('paused');
      postScene($('heroFrame'), { __alphaScene: 'pause' });   // iframe 씬도 정지
      syncHeroCtrl();
    }
    function resumeHero() { // 처음부터가 아니라 멈춘 지점부터 이어서
      heroPaused = false;
      $('heroBeats').classList.remove('paused'); $('heroPanes').classList.remove('paused');
      postScene($('heroFrame'), { __alphaScene: 'play' });    // iframe 씬도 재개
      syncHeroCtrl();
      restartHeroTimer(heroRemain);
    }

    /* 카운트업(JS 기반)은 CSS 시크에 안 잡히므로 직접 계산.
       재생 중이면 그 지점부터 카운트를 이어서 굴리고, 정지 중이면 값만 고정 */
    function animateCount(c, from, to, fmt, dur, startP) {
      const t0 = performance.now();
      (function tick(t) {
        const p = Math.max(0, Math.min(1, startP + (t - t0) / dur));
        const v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
        c.textContent = fmt === 'won' ? fmtNum(v) + '원' : fmtNum(v);
        if (p < 1) c._cr = requestAnimationFrame(tick);
      })(t0);
    }
    function seekCounts(pane, ms, playing) {
      if (!pane) return;
      pane.querySelectorAll('.cnt').forEach(c => {
        if (c._ct) { clearTimeout(c._ct); c._ct = null; }
        if (c._cr) { cancelAnimationFrame(c._cr); c._cr = null; }
        const to = +c.dataset.to, from = +(c.dataset.from || 0), delay = +(c.dataset.delay || 0), dur = 950, fmt = c.dataset.fmt;
        const setV = v => c.textContent = fmt === 'won' ? fmtNum(v) + '원' : fmtNum(v);
        if (ms >= delay + dur) { setV(to); c.dataset.ran = '1'; return; }         // 이미 완료
        if (ms <= delay) {                                                        // 아직 시작 전
          setV(from);
          if (playing) { c.dataset.ran = '1'; c._ct = setTimeout(() => animateCount(c, from, to, fmt, dur, 0), delay - ms); }
          else delete c.dataset.ran;
          return;
        }
        const p0 = (ms - delay) / dur;                                            // 카운트 진행 중
        setV(Math.round(from + (to - from) * (1 - Math.pow(1 - p0, 3))));
        c.dataset.ran = '1';
        if (playing) animateCount(c, from, to, fmt, dur, p0);
      });
    }

    function playHero() { resumeHero(); }
    function syncHeroCtrl() {
      const b = $('heroCtrl'); if (!b) return;
      b.classList.toggle('paused', heroPaused);
      const tx = b.querySelector('.hc-tx'); if (tx) tx.textContent = heroPaused ? '자동 넘김 재생' : '자동 넘김 멈춤';
    }
    { const c = $('heroCtrl'); if (c) c.onclick = () => (heroPaused ? playHero() : pauseHero()); }

    /* ═══════════════════════════════════════════════
       스텝 3-B — 추천 카드 + 담기
    ═══════════════════════════════════════════════ */
    const MICRO = {
      review: `<div class="md-review">
          <div class="md-rv-top">
            <div class="md-rv-channels"><span style="--d:0s">톡</span><span style="--d:.4s">몰</span><span style="--d:.8s">QR</span></div>
            <span class="md-rv-summary">빠른 수집 5000+건</span>
          </div>
          <div class="md-rv-quote">
            <div class="md-rv-item one"><span class="th">📷</span><span class="md-rv-copy"><b>★★★★★</b><i>핏이 딱 맞고 사진 그대로예요</i></span><span class="md-rv-ai">포토</span></div>
            <div class="md-rv-item two"><span class="th">✓</span><span class="md-rv-copy"><b>★★★★★</b><i>배송도 빠르고 재구매할래요</i></span><span class="md-rv-ai">검증</span></div>
          </div>
        </div>`,
      upsell: `<div class="md-cart">
          <span class="md-plus1">+1 담김</span>
          <div class="md-cartrow"><span class="th">🪴</span>미니 화분<span class="pr">12,900원</span></div>
          <div class="md-cartrow ai"><span class="th">💡</span>무드 조명<span class="aitag">AI 추천</span><span class="pr">19,800원</span></div>
        </div>`,
      push: `<div class="md-phone">
          <div class="md-noti"><span class="ic br">알</span><span><b>알파몰</b>첫 구매 10% 쿠폰 도착 🎁</span><span class="tm">지금</span></div>
          <div class="md-noti"><span class="ic sms">💬</span><span><b>알파몰</b>장바구니 상품이 기다려요</span><span class="tm">5분 전</span></div>
          <span class="md-auto">캠페인 자동 발송 중</span>
        </div>`,
      canvas: `<div class="md-canvas">
          <span class="md-blk wide">여름 기획전 배너<span class="md-edit">✏️ 편집 중</span></span>
          <span class="md-blk">상품 그리드</span>
          <span class="md-blk">브랜드 스토리</span>
        </div>`,
      instafeed: `<div class="md-insta">
          <div class="md-ig-head"><span class="md-ig-av"></span><b>@alphamall</b><span class="md-ig-tag">인스타 연동</span></div>
          <div class="md-ig-grid"><i style="background-image:url('assets/insta/f2.png')"></i><i style="background-image:url('assets/insta/f5.png')"></i><i style="background-image:url('assets/insta/f7.png')"></i></div>
        </div>`,
    };

    function renderPick() {
      const entry = P[ENTRY];
      $('pickTitle').innerHTML = `<b style="color:${entry.color}">${entry.name}</b>와 함께 쓰면,<br>성장이 더 빨라지는 솔루션이에요`;
      const grid = $('pickGrid'); grid.innerHTML = '';
      const isInstaEntry = ENTRY === 'instafeed';
      grid.classList.toggle('is-insta-entry', isInstaEntry);
      grid.closest('.pick')?.classList.toggle('is-insta-entry', isInstaEntry);
      RECO_ORDER.forEach(k => {
        const d = P[k];
        const card = document.createElement('div');
        card.className = 'pcard' + (cart.has(k) ? ' added' : '');
        card.style.setProperty('--pc', d.color);
        card.style.setProperty('--add-hover', d.addHover);
        card.dataset.key = k;
        card.innerHTML = `
          <div class="pc-stage">${MICRO[k] || ''}</div>
          <div class="pc-body">
            <span class="pc-name">${d.name}${d.free ? `<em class="pc-free">${d.free}</em>` : ''}</span>
            <div class="pc-main">${d.main.replace(/<\/?b>/g, '')}</div>
            <p class="pc-hook">${d.hook}</p>
            <div class="pc-tags">${d.tags.map(t => `<span class="pc-tag">${t}</span>`).join('')}</div>
            <div class="pc-btns">
              <button class="sds-btn sds-btn--lg sds-btn--neutral-outline pc-view">기능 자세히 보기</button>
              <button class="sds-btn sds-btn--lg sds-btn--add pc-add${cart.has(k) ? ' is-added' : ''}">${cart.has(k) ? '<i class="pc-ck"></i>담김 · 빼기' : '<i class="pc-plus"></i>담기'}</button>
            </div>
          </div>`;
        card.querySelector('.pc-view').onclick = () => openDetail(k);
        card.querySelector('.pc-add').onclick = e => toggleCart(k, e.currentTarget);
        grid.appendChild(card);
      });
    }

    function toggleCart(k, fromEl) {
      if (k === ENTRY) return;
      if (cart.has(k)) cart.delete(k);
      else { cart.add(k); if (fromEl) flyToCart(fromEl, P[k].color); }
      renderPick(); renderDock(); syncDetailAdd();
    }

    function flyToCart(fromEl, color) {
      const a = fromEl.getBoundingClientRect();
      const b = $('cdCount').getBoundingClientRect();
      const dot = document.createElement('div');
      dot.className = 'fly-dot';
      dot.style.background = color;
      dot.style.left = a.left + a.width / 2 + 'px';
      dot.style.top = a.top + a.height / 2 + 'px';
      document.body.appendChild(dot);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        dot.style.left = b.left + 'px';
        dot.style.top = b.top + 'px';
        dot.style.transform = 'scale(.4)';
        dot.style.opacity = '.5';
      }));
      setTimeout(() => {
        dot.remove();
        const c = $('cdCount');
        c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump');
      }, 660);
    }

    /* ═══════════════════════════════════════════════
       장바구니 도크
    ═══════════════════════════════════════════════ */
    function renderDock() {
      $('cdCount').textContent = cart.size;
      const chips = $('cdChips'); chips.innerHTML = '';
      KEYS.filter(k => cart.has(k)).forEach(k => {
        const d = P[k];
        if (!d) return;
        const chip = document.createElement('span');
        if (k === ENTRY) {
          chip.className = 'cd-chip entry';
          chip.innerHTML = `${d.name}<span class="lk">카페24에서 선택한 솔루션</span>`;
        } else {
          chip.className = 'cd-chip added';
          chip.style.setProperty('--cc', d.color);
          chip.innerHTML = `${d.name}<button class="rm" title="빼기"></button>`;
          chip.querySelector('.rm').onclick = () => toggleCart(k);
        }
        chips.appendChild(chip);
      });
      $('cdNext').textContent = '다음';
      $('cdBack').textContent = '이전';
    }

    { const _cdn = $('cdNext'); if (_cdn) _cdn.onclick = () => {
      if (curView === 'hero') go('pick');
      else go(cart.has('review') ? 'widget' : 'card');
    }; }
    { const _cdb = $('cdBack'); if (_cdb) _cdb.onclick = () => go(curView === 'hero' ? 'info2' : 'hero'); }

    /* ═══════════════════════════════════════════════
       자세히 보기 오버레이 — 피처 클릭 씬
    ═══════════════════════════════════════════════ */
    let dtKey = null, dtIdx = 0;

    function openDetail(k) {
      dtKey = k; dtIdx = 0;
      const d = P[k];
      const dt = $('detail');
      dt.style.setProperty('--dc', d.color);
      dt.style.setProperty('--add-hover', d.addHover);
      { const _n = $('dtName'); if (_n) _n.textContent = d.name; }
      $('dtMain').innerHTML = d.main;
      const nav = $('featNav'); nav.innerHTML = '';
      d.feats.forEach((f, i) => {
        const b = document.createElement('button');
        b.className = 'fn-item';
        b.style.setProperty('--beat-ms', dtBeatMs(i) + 'ms');
        b.innerHTML = `<span class="fn-kicker"><span class="no">${i + 1}</span>${f.kicker}</span>
          <div class="fn-title">${f.title}</div>
          <p class="fn-desc">${f.desc}</p>
          <div class="fn-chips">${f.chips.map(c => `<span>${c}</span>`).join('')}</div>
          <span class="prog"><span class="prog-knob"></span></span><span class="prog-hit" title="게이지를 누르거나 드래그해 위치 이동"></span>`;
        // 현재 기능이면 재생/정지 토글, 다른 기능이면 처음부터 (prog-hit 영역 제외)
        b.onclick = () => { if (i === dtIdx) { dtPaused ? resumeDt() : pauseDt(); } else scrubDt(i, 0); };
        const hit = b.querySelector('.prog-hit');
        if (hit) bindScrub(hit, i, (fi, f) => scrubDt(fi, f), () => dtIdx);
        nav.appendChild(b);
      });
      syncDetailAdd();
      dt.classList.add('on');
      stopHero();
      dtPaused = false; nav.classList.remove('paused'); syncDtCtrl();
      dtGo(0);
    }

    // 제품키 → 씬 파일 슬러그 (파일명 scene-<슬러그><표시번호>.html)
    const SCENE_SLUG = { review: 'review', upsell: 'upsell', push: 'push', canvas: 'canvas', instafeed: 'insta' };

    /* 3-B 상세모달 자동 넘김 — 3-A 히어로와 동일: beatMs 타이머로 다음 기능(씬)으로 전환, 진행 게이지·정지 지원 */
    let dtTimer = null, dtPaused = false, dtBeatStart = 0, dtRemain = 0;
    const dtBeatMs = i => (BEAT_DUR[dtKey] || [])[i] || BEAT_MS;
    function stopDtTimer() { if (dtTimer) { clearTimeout(dtTimer); dtTimer = null; } }
    function restartDtTimer(ms) {
      stopDtTimer();
      if (dtPaused) return;
      dtRemain = (typeof ms === 'number') ? ms : dtBeatMs(dtIdx);
      dtBeatStart = Date.now();
      dtTimer = setTimeout(() => {
        const n = (P[dtKey].feats || []).length || 1;
        dtGo((dtIdx + 1) % n);
      }, dtRemain);
    }
    function syncDtCtrl() {
      const b = $('dtCtrl'); if (!b) return;
      b.classList.toggle('paused', dtPaused);
      const tx = b.querySelector('.hc-tx'); if (tx) tx.textContent = dtPaused ? '자동 넘김 재생' : '자동 넘김 멈춤';
    }
    function pauseDt() {
      dtRemain = Math.max(300, dtRemain - (Date.now() - dtBeatStart));
      dtPaused = true; $('featNav')?.classList.add('paused'); stopDtTimer();
      postScene($('dtStage').querySelector('iframe'), { __alphaScene: 'pause' });   // iframe 씬도 정지
      syncDtCtrl();
    }
    function resumeDt() {
      dtPaused = false; $('featNav')?.classList.remove('paused');
      postScene($('dtStage').querySelector('iframe'), { __alphaScene: 'play' });    // iframe 씬도 재개
      syncDtCtrl(); restartDtTimer(dtRemain);
    }
    { const c = $('dtCtrl'); if (c) c.onclick = () => (dtPaused ? resumeDt() : pauseDt()); }

    /* ── iframe 씬 제어: 부모(v6)가 재생/정지/시크를 씬 iframe 안으로 postMessage. 3-A·3-B 공용 ── */
    function postScene(frame, data) { try { if (frame && frame.contentWindow) frame.contentWindow.postMessage(data, '*'); } catch (e) { } }

    /* 재생바 스크럽 — prog-hit에 클릭+드래그 바인딩 (3-A·3-B 공용). doScrub(i,f), getActive()=현재 인덱스 */
    function bindScrub(hit, i, doScrub, getActive) {
      let dragging = false;
      const seek = (clientX) => {
        if (i !== getActive()) { doScrub(i, 0); return; }
        const r = hit.getBoundingClientRect();
        doScrub(i, Math.max(0, Math.min(1, (clientX - r.left) / r.width)));
      };
      hit.addEventListener('pointerdown', (ev) => { ev.stopPropagation(); dragging = true; try { hit.setPointerCapture(ev.pointerId); } catch (e) { } seek(ev.clientX); });
      hit.addEventListener('pointermove', (ev) => { if (dragging) { ev.stopPropagation(); seek(ev.clientX); } });
      const end = (ev) => { if (dragging) { dragging = false; try { hit.releasePointerCapture(ev.pointerId); } catch (e) { } } };
      hit.addEventListener('pointerup', end);
      hit.addEventListener('pointercancel', end);
    }

    // (씬 컨텍스트 전용) setTimeout/rAF를 일시정지 가능하게 래핑 →
    // getAnimations().pause()가 못 잡는 setTimeout 드라이버(seqWall·빌더·seqUp2 등)까지 '진짜' 정지.
    if (document.getElementById('embedStage') && !window.__sceneClock) {
      window.__sceneClock = 1;
      (function () {
        const realTO = window.setTimeout.bind(window), realCT = window.clearTimeout.bind(window), realRAF = window.requestAnimationFrame.bind(window);
        let paused = false, seq = 1;
        const tos = new Map();      // vid -> {arm, remaining, startedAt, realId}
        const pendingRAF = [];      // 정지 중 대기한 rAF 콜백
        window.setTimeout = function (cb, delay) {
          const args = [].slice.call(arguments, 2), vid = 'v' + (seq++);
          const rec = { remaining: +delay || 0 };
          rec.arm = function () { rec.startedAt = Date.now(); rec.realId = realTO(function () { tos.delete(vid); cb.apply(null, args); }, rec.remaining); };
          tos.set(vid, rec); if (!paused) rec.arm(); return vid;
        };
        window.clearTimeout = function (vid) { const rec = tos.get(vid); if (rec) { if (rec.realId) realCT(rec.realId); tos.delete(vid); } else if (typeof vid === 'number') realCT(vid); };
        window.requestAnimationFrame = function (cb) { if (paused) { pendingRAF.push(cb); return 0; } return realRAF(cb); };
        window.__scenePause = function () {
          if (paused) return; paused = true;
          tos.forEach(function (rec) { if (rec.realId) { realCT(rec.realId); rec.realId = null; rec.remaining = Math.max(0, rec.remaining - (Date.now() - rec.startedAt)); } });
        };
        window.__sceneResume = function () {
          if (!paused) return; paused = false;
          tos.forEach(function (rec) { rec.arm(); });
          const q = pendingRAF.splice(0); q.forEach(function (cb) { realRAF(cb); });
        };
      })();
    }

    // (씬 파일 컨텍스트에서 수신) 자기 #embedStage 애니메이션 + 타이머 드라이버를 재생/정지/시크
    let _heldAnims = [];   // 정지 시점에 '재생 중'이던 애니만 기억 → 재개 때 그것만 이어감(끝난 애니 되감기 방지)
    window.addEventListener('message', (e) => {
      const m = e.data; if (!m || m.__alphaScene == null) return;
      const stage = document.getElementById('embedStage');
      if (!stage) return;
      const cmd = m.__alphaScene;
      if (cmd === 'pause') {
        if (window.__scenePause) window.__scenePause();               // setTimeout/rAF 드라이버 정지
        // 재생 중(running)인 애니만 정지·기억 (finished는 건드리지 않음 → 재개 시 되감기 없음)
        _heldAnims = (stage.getAnimations ? stage.getAnimations({ subtree: true }) : []).filter(a => a.playState === 'running');
        _heldAnims.forEach(a => { try { a.pause(); } catch (e) { } });
        // 진행 중인 네이티브 스무스 스크롤 고정 (scrollUpx 등)
        stage.querySelectorAll('*').forEach(el => {
          if (el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1) {
            const sb = el.style.scrollBehavior; el.style.scrollBehavior = 'auto';
            el.scrollTop = el.scrollTop; el.scrollLeft = el.scrollLeft; el.style.scrollBehavior = sb;
          }
        });
      } else if (cmd === 'play') {
        _heldAnims.forEach(a => { try { a.play(); } catch (e) { } });  // 정지 때 멈춘 것만 이어서 재생
        _heldAnims = [];
        if (window.__sceneResume) window.__sceneResume();
      } else if (cmd === 'seek') {
        const ms = m.ms || 0;
        (stage.getAnimations ? stage.getAnimations({ subtree: true }) : []).forEach(a => { try { a.currentTime = ms; } catch (e) { } });
        if (typeof seekCounts === 'function') seekCounts(stage, ms, !m.paused);
      }
    });

    function dtGo(i) {
      dtIdx = i;
      const d = P[dtKey];
      [...$('featNav').children].forEach((el, j) => {
        el.classList.toggle('on', j === i);
        if (j === i) { const p = el.querySelector('.prog'); if (p) { p.style.animation = 'none'; void p.offsetWidth; p.style.animation = ''; } } // 게이지 리스타트
      });
      const stage = $('dtStage');
      // 3-B 상세 씬 = 독립 씬 파일을 iframe으로 임베드 — 제품(Angular) 임베드와 동일 구조.
      // 3-A 히어로처럼 씬은 iframe 안에서 자동재생, beatMs 타이머로 다음 기능 자동 넘김.
      const slug = SCENE_SLUG[dtKey] || dtKey;
      stage.innerHTML = `<iframe class="dt-scene-frame" src="scene-${slug}${i + 1}.html" title="${d.name} ${i + 1}번 씬" loading="lazy"></iframe>`;
      const _dp = $('dtPrev'); if (_dp) _dp.disabled = (i === 0);
      const _dn = $('dtNext'); if (_dn) _dn.textContent = (i === d.feats.length - 1) ? '기능 다 봤어요 ✓' : '다음 기능 →';
      restartDtTimer();
    }

    /* 3-B 진행 게이지 스크럽 — 3-A scrubBeat와 동일 (다른 기능이면 처음부터, 현재 기능이면 시크) */
    function scrubDt(i, f) {
      if (i !== dtIdx) { dtGo(i); return; }
      const ms = f * dtBeatMs(i);
      const navEl = $('featNav').children[i];
      const prog = navEl && navEl.querySelector('.prog');
      if (prog && prog.getAnimations) prog.getAnimations().forEach(a => { try { a.currentTime = ms; } catch (e) { } });
      postScene($('dtStage').querySelector('iframe'), { __alphaScene: 'seek', ms, paused: dtPaused });
      if (!dtPaused) restartDtTimer(Math.max(400, dtBeatMs(i) - ms));
      else dtRemain = Math.max(400, dtBeatMs(i) - ms);
    }

    /* rv2(AI 리뷰 대응) — AI 답글을 한 글자씩 스트리밍한 뒤, 부정 리뷰 행을 '대응 완료'로 전환 */
    function seqRv2(sc) {
      const reply = sc.querySelector('.ai-reply');
      const tx = sc.querySelector('.ar-tx');
      const caret = tx && tx.querySelector('.ar-caret');
      const neg = sc.querySelector('.rvi-row.neg');
      const flag = neg && neg.querySelector('.flag');
      if (!tx || !reply || !caret) return;
      const full = tx.dataset.full || '';
      // 초기화(리플레이 대비)
      clearTimeout(sc._rvT);
      reply.classList.remove('typed');
      if (neg) neg.classList.remove('resolved');
      if (flag) { flag.classList.remove('done'); flag.textContent = '⚠ 부정 감지'; }
      const tn = document.createTextNode('');
      tx.insertBefore(tn, caret);
      let i = 0;
      const alive = () => sc.isConnected && sc.classList.contains('on');
      const type = () => {
        if (!alive()) return;
        if (i <= full.length) {
          tn.data = full.slice(0, i);
          i++;
          sc._rvT = setTimeout(type, 26);
        } else {
          reply.classList.add('typed');   // 캐럿 숨김 + 완료 태그 등장
          sc._rvT = setTimeout(() => {
            if (!alive()) return;
            if (flag) { flag.textContent = '✓ 대응 완료'; flag.classList.add('done'); }
            if (neg) neg.classList.add('resolved');
          }, 300);
        }
      };
      sc._rvT = setTimeout(type, 360);   // sc-result 페이드 이후 시작
    }

    /* up2(가격 테스트) — 단일 커서가 CTA에서 '다다익선 할인' 카드로 이동·탭 → 카드 선택(is-picked).
       그 뒤 CSS(uax-intro 페이드 1.05s / step 1.2s~)가 이어받아 3-스텝 플로우 재생 */
    function seqUp2(sc) {
      const go = sc.querySelector('.uax-go');
      const card = sc.querySelector('.uax-mcard.pick');
      const cta = sc.querySelector('.uax-introcta .cl-start');
      if (!go || !card) return;
      const scale = () => (sc.getBoundingClientRect().width / sc.offsetWidth) || 1;
      const placeAt = (t, dur) => {
        if (!t) return;
        const b = sc.getBoundingClientRect(), r = t.getBoundingClientRect(), k = scale();
        const x = (r.left + r.width / 2 - b.left) / k - 8;
        const y = (r.top + r.height / 2 - b.top) / k - 6;
        go.style.transition = dur ? `left ${dur}ms cubic-bezier(.4,0,.2,1), top ${dur}ms cubic-bezier(.4,0,.2,1)` : 'none';
        go.style.left = Math.round(x) + 'px';
        go.style.top = Math.round(y) + 'px';
      };
      const alive = () => sc.isConnected && sc.classList.contains('on');
      placeAt(cta || card, 0);           // 커서 시작 위치 = CTA
      requestAnimationFrame(() => {
        setTimeout(() => { if (alive()) placeAt(card, 520); }, 140);   // 카드로 활강
        setTimeout(() => { if (alive()) { go.classList.add('tap'); card.classList.add('is-picked'); } }, 720); // 도착·탭·선택
      });
    }

    /* up1(상세페이지 위젯) — 단일 커서가 CTA에서 폰으로 이동, 위젯마다 스크롤을 멈추고 탭.
       탭 순간 u-hit1~3 클래스로 [담김 버튼 팝 + 객단가 행·막대 + 델타 플래시]가 한 박자에 터지게 구동 */
    function scrollUpx(sc) {
      const el = sc.querySelector('.upx-scroll');
      const go = sc.querySelector('.upx-go');
      if (!el) return;
      sc.querySelectorAll('.upx-fly').forEach(n => n.remove());   // 재생 대비 잔여 칩 정리
      const alive = () => sc.isConnected && sc.classList.contains('on');
      const at = (ms, fn) => setTimeout(() => { if (alive()) fn(); }, ms);
      const scale = () => (sc.getBoundingClientRect().width / sc.offsetWidth) || 1;
      // 이동도 rAF로 — 이전 위치→새 위치 easeInOut 활강 (glide·카운트와 같은 시간축)
      const move = (x, y, dur) => {
        if (!go) return;
        const x1 = parseFloat(go.style.left) || 0, y1 = parseFloat(go.style.top) || 0;
        const x2 = Math.round(x), y2 = Math.round(y);
        if (go._mv) cancelAnimationFrame(go._mv);
        if (!dur) { go.style.left = x2 + 'px'; go.style.top = y2 + 'px'; return; }
        const t0 = performance.now();
        (function tick(t) {
          if (!sc.isConnected) return;
          const p = Math.max(0, Math.min(1, (t - t0) / dur));
          const e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          go.style.left = (x1 + (x2 - x1) * e) + 'px';
          go.style.top = (y1 + (y2 - y1) * e) + 'px';
          if (p < 1) go._mv = requestAnimationFrame(tick);
        })(t0);
      };
      // 커서 팁을 target 중심으로 — 씬 좌표계 기준(스테이지 스케일 보정)
      const moveTo = (sel, dur, dx = 0, dy = 0) => {
        const t = sc.querySelector(sel);
        if (!t || !go) return;
        const b = sc.getBoundingClientRect(), r = t.getBoundingClientRect(), k = scale();
        move((r.left + r.width / 2 - b.left) / k - 8 + dx, (r.top + r.height / 2 - b.top) / k - 6 + dy, dur);
      };
      // 스크롤 대상 버튼은 도착 시점 좌표를 해석적으로 계산 — 스크롤 진행 상태와 무관하게 정확
      const view = sc.querySelector('.upx-view');
      const moveToBtn = (sel, scrollY, dur) => {
        const t = sc.querySelector(sel);
        if (!t || !go || !view) return;
        const b = sc.getBoundingClientRect(), vr = view.getBoundingClientRect(), k = scale();
        move(
          (vr.left - b.left) / k + t.offsetLeft + t.offsetWidth / 2 - 8,
          (vr.top - b.top) / k + t.offsetTop - scrollY + t.offsetHeight / 2 - 6,
          dur
        );
      };
      const tap = () => {
        if (!go) return;
        go.classList.remove('tap');
        void go.offsetWidth;
        go.classList.add('tap');
      };
      // 객단가 — 탭마다 구간 카운트업 + 숫자 펌프 + '+₩' 델타
      const num = sc.querySelector('.upx-aovval'), numWrap = sc.querySelector('.upx-aovnum'), delta = sc.querySelector('.upx-delta');
      const bump = (from, to) => {
        if (delta) { delta.textContent = '+' + (to - from).toLocaleString('ko-KR'); delta.classList.remove('pop'); void delta.offsetWidth; delta.classList.add('pop'); }
        if (numWrap) { numWrap.classList.remove('pump'); void numWrap.offsetWidth; numWrap.classList.add('pump'); }
        if (!num) return;
        const t0 = performance.now(), dur = 560;
        (function tick(t) {
          if (!sc.isConnected) return;
          const p = Math.max(0, Math.min(1, (t - t0) / dur)), e = 1 - Math.pow(1 - p, 3);
          num.textContent = Math.round(from + (to - from) * e).toLocaleString('ko-KR');
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      };
      const pop = t => { if (!t) return; t.classList.remove('upx-pop'); void t.offsetWidth; t.classList.add('upx-pop'); };
      const off = t => (t ? Math.max(0, t.offsetTop - 44) : 0);
      // 담긴 상품 수 — 탭마다 1→4로 증가 + 팝 (폰 헤더 배지 + 폰 장바구니 서랍 헤더, 두 .upx-cnt 동기)
      const cnts = [...sc.querySelectorAll('.upx-cnt')];
      const setCnt = n => cnts.forEach(c => { c.textContent = n; pop(c); });
      // 플라이 — 탭한 버튼 중심에서 오른쪽 장바구니 행으로 가격 칩이 살짝 아치를 그리며 날아간다.
      // 좌표는 커서(moveTo)와 동일하게 씬 rect·스케일 보정. 도착 시 행에 착지 파동, 노드 제거.
      const fly = (fromSel, toSel, label) => {
        const from = sc.querySelector(fromSel), to = sc.querySelector(toSel);
        if (!from || !to || !sc.isConnected) return;
        const b = sc.getBoundingClientRect(), k = scale();
        const fr = from.getBoundingClientRect(), tr = to.getBoundingClientRect();
        const x1 = (fr.left + fr.width / 2 - b.left) / k, y1 = (fr.top + fr.height / 2 - b.top) / k;
        const x2 = (tr.left + tr.width / 2 - b.left) / k, y2 = (tr.top + tr.height / 2 - b.top) / k;
        const chip = document.createElement('div');
        chip.className = 'upx-fly';
        chip.textContent = label;
        chip.style.transform = 'translate(' + x1 + 'px, ' + y1 + 'px) translate(-50%, -50%) scale(1)';
        chip.style.opacity = '0';
        sc.appendChild(chip);
        const dur = 620, arc = 60, t0 = performance.now();
        (function tick(t) {
          if (!sc.isConnected) { chip.remove(); return; }
          const p = Math.max(0, Math.min(1, (t - t0) / dur));
          const e = 1 - Math.pow(1 - p, 3);
          const cx = x1 + (x2 - x1) * e;
          const cy = y1 + (y2 - y1) * e - Math.sin(p * Math.PI) * arc;   // 완만한 아치
          const s = 1 - .28 * e;
          chip.style.transform = 'translate(' + cx + 'px, ' + cy + 'px) translate(-50%, -50%) scale(' + s + ')';
          chip.style.opacity = p < .12 ? (p / .12) : (p > .84 ? Math.max(0, 1 - (p - .84) / .16) : 1);
          if (p < 1) requestAnimationFrame(tick);
          else { chip.remove(); to.classList.remove('land'); void to.offsetWidth; to.classList.add('land'); }
        })(t0);
      };
      // 스크롤도 rAF로 구동 — 정확한 시점에 끝나 커서 좌표 측정과 어긋나지 않게 (easeInOut, 실제 브라우징 느낌)
      el.style.scrollBehavior = 'auto';
      const glide = (toY, dur) => {
        const from = el.scrollTop, d = Math.min(toY, el.scrollHeight - el.clientHeight) - from, t0 = performance.now();
        (function tick(t) {
          if (!sc.isConnected) return;
          const p = Math.max(0, Math.min(1, (t - t0) / dur));
          const e = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
          el.scrollTop = from + d * e;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      };
      // 출발 — 폰 화면 중앙에 커서를 놓고 시작 (CTA는 우측 카드로 이동했으므로 폰 기준으로 배치)
      if (go) {
        const t = sc.querySelector('.upx-screen');
        if (t) {
          const b = sc.getBoundingClientRect(), r = t.getBoundingClientRect(), k = scale();
          move((r.left + r.width / 2 - b.left) / k - 8, (r.top + r.height / 2 - b.top) / k - 6, 0);
        }
      }
      // 장바구니 서랍(풀폭 바텀시트) — '바로 구매'(.vg-buy) 탭 시 .cart-open 으로 슬라이드업.
      // 서랍 = [놓친 상품 추천 스트립] + [담은 상품 목록] + [결제 예정 금액] 단일 UI.
      // 결제도 '바로 구매'가 담당 — 서랍이 열린 상태에서 다시 탭하면 주문 완료 모달로 진행.
      // 딤 백드롭(.upx-cartbd) 클릭 → 닫힘. (재생마다 스테이지가 새로 렌더되므로 onclick 재바인딩이 안전)
      const vgOpen = sc.querySelector('.vg-open');
      const vgBuy = sc.querySelector('.vg-buy');
      const vgCart = sc.querySelector('.vg-cart');
      const cartBd = sc.querySelector('.upx-cartbd');
      const dn = sc.querySelector('.upx-done'), dx = sc.querySelector('.upx-donex');
      const cdTot = sc.querySelector('.upx-cdtot b');
      const setTot = v => { if (cdTot) { cdTot.textContent = v; pop(cdTot); } };
      const openCart = () => sc.classList.add('cart-open');
      const closeCart = () => sc.classList.remove('cart-open');
      const closeDone = () => sc.classList.remove('u-buy');
      const doBuy = () => { closeCart(); sc.classList.add('u-buy', 'u-complete'); if (go) { go.classList.remove('tap'); go.classList.add('bye'); } };
      const press = btn => { if (!btn) return; btn.classList.remove('press'); void btn.offsetWidth; btn.classList.add('press'); };
      // 버튼 트리거 — 재생 전 '구매하기'=서랍 열기 / '바로 구매'=결제(주문 완료). '장바구니'는 표시용(클릭 이벤트 없음)
      if (vgOpen) vgOpen.onclick = openCart;
      if (vgBuy) vgBuy.onclick = doBuy;
      if (cartBd) cartBd.onclick = closeCart;
      if (dx) dx.onclick = closeDone;
      if (dn) dn.onclick = (e) => { if (e.target === dn) closeDone(); };
      /* 1탭 — 구매버튼 상단 위젯(wg1) 담기 */
      at(200, () => { glide(off(sc.querySelector('.wg1')), 640); moveTo('.upx-screen', 700, 0, -60); });
      at(900, () => moveTo('.wg1 .upx-pl.pick', 460));
      at(1440, () => { tap(); fly('.wg1 .upx-pl.pick', '.vg-open', '+34,000'); });
      at(1560, () => { sc.classList.add('u-hit1'); bump(22900, 56900); setCnt(2); setTot('56,900원'); });
      /* 본문 훑기 — 탭 없는 브라우징 비트 */
      at(2500, () => { glide(off(sc.querySelector('.vg-sec')), 800); moveTo('.upx-screen', 900, 100, 40); });
      /* 2탭 — 본문 하단 위젯(wg2) 담기 */
      at(3900, () => glide(off(sc.querySelector('.wg2')), 700));
      at(4700, () => moveTo('.wg2 .upx-pl.pick', 460));
      at(5240, () => { tap(); fly('.wg2 .upx-pl.pick', '.vg-open', '+26,000'); });
      at(5360, () => { sc.classList.add('u-hit2'); bump(56900, 82900); setCnt(3); setTot('82,900원'); });
      /* '구매하기' 탭 → 장바구니 서랍 슬라이드업 (놓친 상품 추천 + 담은 상품 + 결제 예정) */
      at(6300, () => { glide(el.scrollHeight, 700); moveTo('.vg-open', 760); });
      at(7200, () => { tap(); press(vgOpen); openCart(); });
      /* 3탭 — 서랍 상단 놓친 상품 스트립의 미스트 담기 */
      at(7900, () => moveTo('.upx-msc.pick .upx-msbtn', 480));
      at(8440, () => { tap(); fly('.upx-msc.pick .upx-msbtn', '.upx-cdtot b', '+19,000'); });
      at(8560, () => { sc.classList.add('u-hit3'); bump(82900, 101900); setCnt(4); setTot('101,900원'); });
      /* 결 — 12종 팬 펼침 (커서는 유지 · 결제 탭까지 이어감) */
      at(9400, () => { sc.classList.add('u-done'); });
      /* '바로 구매' 탭 = 결제 → 주문 완료 모달 (서랍 상태 무관, 별도 트리거) */
      at(9700, () => moveTo('.vg-buy', 560));
      at(10300, () => { tap(); press(vgBuy); });
      at(10600, () => { doBuy(); });
    }

    /* if1(인스타피드) — 태그된 게시글을 8개까지 하나씩 수집(사이드바 슬라이드-인 + 폰 태그 배지),
       다 모으면 ourira 쇼핑몰 홈으로 통째 교체(피드 그리드 팝 + 하이라이트 + 토스트 + 컨페티).
       재렌더로 씬이 새로 그려지므로 setTimeout은 sc.isConnected로 가드 — 리플레이/화면전환 시 자동 중단 */
    function seqIf1(sc) {
      if (!sc.isConnected || sc.classList.contains('finding') || sc.classList.contains('finish')) return;
      const posts = [...sc.querySelectorAll('.if1-post')];
      const cells = [...sc.querySelectorAll('.if1-rcell')];
      const wrap = sc.querySelector('.if1-posts');
      const num = sc.querySelector('.if1-cnum');
      const total = posts.length || 8;
      const STEP = 280;
      const alive = () => sc.isConnected && sc.classList.contains('on');
      const at = (ms, fn) => setTimeout(() => { if (alive()) fn(); }, ms);

      sc.classList.add('finding');   // 빈 자리 숨김 + 스캔 스윕 + 진행 배지 + 중앙 버튼 숨김

      // 280ms마다 태그 게시글 1개씩 수집: 사이드바 카드 슬라이드-인 + 폰 셀 태그 배지 팝
      for (let i = 1; i <= total; i++) {
        at(STEP * i, () => {
          if (posts[i - 1]) posts[i - 1].classList.add('show');
          if (cells[i - 1]) cells[i - 1].classList.add('found');
          if (num) num.textContent = i;
          if (wrap) wrap.scrollTop = wrap.scrollHeight;   // 새 카드가 보이게 하단으로
        });
      }

      // 다 모으면 → 쇼핑몰 홈 게시(브라우저 교체 + 토스트 + 컨페티)
      at(STEP * total + 750, () => {
        sc.classList.remove('finding');
        sc.classList.add('finish');
        if (num) num.textContent = total;
        if1Confetti(sc);
      });
    }

    /* if1 컨페티 — 28조각을 상단에서 흩뿌려 낙하 (마무리 게시 축하) */
    function if1Confetti(sc) {
      const wrap = sc.querySelector('.if1-conf');
      if (!wrap) return;
      wrap.innerHTML = '';
      const colors = ['#EC4A7F', '#FF9EC2', '#D300C5', '#962FBF', '#4F5BD5', '#FEDA75'];
      const frag = document.createDocumentFragment();
      for (let i = 0; i < 28; i++) {
        const p = document.createElement('i');
        const w = 6 + (i % 4) * 2, h = 6 + (i % 3) * 2;
        p.style.left = (2 + (i * 37 % 96)) + '%';
        p.style.width = w + 'px';
        p.style.height = h + 'px';
        p.style.background = colors[i % colors.length];
        p.style.borderRadius = (i % 2 === 0) ? '50%' : '2px';
        p.style.animationDelay = ((i % 7) * 0.08) + 's';
        p.style.animationDuration = (1.1 + (i % 5) * 0.22) + 's';
        frag.appendChild(p);
      }
      wrap.appendChild(frag);
    }

    /* ps3(요금 비교) — 기능을 한 칸씩 또렷하게 켜고, 켤 때마다 경쟁 CRM 요금이 계단식으로 훅 상승 · 알파푸시는 39,000 그대로 */
    function seqPcx(sc) {
      const feats = [...sc.querySelectorAll('.pcx-f')];
      const oBar = sc.querySelector('.pcx-bar.o');
      const oVal = sc.querySelector('.pcx-oval');
      if (!feats.length || !oBar) return;
      // 시작가 90,000(기능 1개) → 기능 켤 때마다 계단식 상승 → 마지막 '월 방문 고객 급증'에서 100만+로 폭등
      const steps = [
        { h: 20, v: 90000 },
        { h: 32, v: 150000 },
        { h: 44, v: 240000 },
        { h: 56, v: 360000 },
        { h: 66, v: 490000 },
        { h: 76, v: 620000 },
        { h: 100, v: 1000000 },
      ];
      const fmt = n => n.toLocaleString('en-US');
      feats[0].classList.add('ckd');
      oBar.style.height = steps[0].h + '%';
      if (oVal) oVal.textContent = fmt(steps[0].v) + '원 ↑';
      let i = 1;
      const GAP = 640; // 느리고 딱딱 끊기는 스텝
      function step() {
        if (!sc.isConnected) return;
        if (i >= feats.length) {
          sc.classList.add('pcx-done'); // 알파푸시 39,000 그대로 강조
          return;
        }
        feats[i].classList.add('ckd');
        const s = steps[i];
        oBar.style.height = s.h + '%';
        if (oVal) oVal.textContent = fmt(s.v) + '원 ↑';
        oBar.classList.remove('bump');
        void oBar.offsetWidth;
        oBar.classList.add('bump');
        i++;
        setTimeout(step, GAP);
      }
      setTimeout(step, 560);
    }

    /* ps1(전환 장치 벽) — 한 줄(2칸)씩 동시에 켜서 ~8초 안에 8개 장치가 모두 작동 */
    async function seqWall(sc) {
      const cards = [...sc.querySelectorAll('.pwc')];
      const grid = sc.querySelector('.pw-grid');
      const mtFinished = card => {
        try {
          const src = card.querySelector('.pwc-mt') || card;
          return src.getAnimations({ subtree: true })
            .filter(a => { try { return a.effect.getTiming().iterations !== Infinity; } catch (e) { return false; } })
            .map(a => a.finished.catch(() => { }));
        } catch (e) { return []; }
      };
      for (let i = 0; i < cards.length; i += 2) {
        const batch = cards.slice(i, i + 2);
        if (batch.some(c => !c.isConnected)) return;   // 리플레이로 씬이 새로 그려지면 중단
        batch.forEach(c => c.classList.add('go'));
        // 같은 행 2칸을 동시에 켜므로, 스크롤은 배치 마지막 카드 기준(아랫줄도 함께 보이게)
        if (grid) {
          const card = batch[batch.length - 1];
          const target = card.offsetTop + card.offsetHeight - grid.clientHeight + 16;
          grid.scrollTop = Math.max(0, target);
        }
        await new Promise(r => setTimeout(r, 60));   // 애니메이션 재개(등록) 대기
        // 두 카드의 지표 바(pwc-mt)가 파랑으로 전환 완료되면 다음 행으로
        const done = batch.flatMap(mtFinished);
        await Promise.all([
          new Promise(r => setTimeout(r, 360)),                                       // 최소 노출
          Promise.race([Promise.all(done), new Promise(r => setTimeout(r, 1500))]),   // pwc-mt 완료 or 상한
        ]);
        await new Promise(r => setTimeout(r, 40));
      }
      // 전체 재생 완료 → 그리드를 맨 위로 되돌리고 완료 요약 노출
      if (grid && sc.isConnected) setTimeout(() => { grid.scrollTop = 0; }, 400);
      const lb = sc.querySelector('.pw-head .cl-lb');
      if (lb && sc.isConnected) lb.textContent = '✓ 8개 전환 장치 모두 작동 중';
      // 카피 히어로 — 화면 중앙으로 확대 이동 후 복귀. 중앙 이동량을 실측(FLIP)해 CSS 변수로 주입
      if (sc.isConnected) setTimeout(() => {
        if (!sc.isConnected) return;
        const eye = sc.querySelector('.pw-eyebrow');
        if (eye) {
          const er = eye.getBoundingClientRect(), scr = sc.getBoundingClientRect();
          const k = (scr.width / sc.offsetWidth) || 1;
          const dx = ((scr.left + scr.width / 2) - (er.left + er.width / 2)) / k;
          const dy = ((scr.top + scr.height / 2) - (er.top + er.height / 2)) / k;
          eye.style.setProperty('--eyeX', Math.round(dx) + 'px');
          eye.style.setProperty('--eyeY', Math.round(dy) + 'px');
        }
        sc.classList.add('wall-done');
      }, 600);
    }

    /* 캔버스 씬 1 — 상세페이지 원클릭 편집 투어 (기승전결) */
    function initCvDetail(stage) {
      const sc = stage.querySelector('.cv1-sc');
      if (!sc) return;
      const btn = sc.querySelector('.cl-start');
      const eds = [...sc.querySelectorAll('.dp-ed')];
      let run = false;
      const go = () => {
        if (run) return;
        run = true;
        sc.classList.add('on');
        /* 승 — 페이지를 따라 내려가며 6군데를 차례로 수정 */
        eds.forEach((el, i) => {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              el.classList.add('done');
              if (el.dataset.ed === 'review') runCounts(stage);
            }, 460);
          }, 900 + i * 1500);
        });
        /* 전 — 맨 위로 복귀, 타임세일 스트립 + 특가 강조 */
        const t7 = 900 + eds.length * 1500 + 300;
        setTimeout(() => {
          sc.scrollTo({ top: 0, behavior: 'smooth' });
          sc.classList.add('s7');
        }, t7);
        /* 결 — 기존 방식 취소선 · 알파캔버스 0원 스탬프 · 다시 보기 */
        setTimeout(() => { sc.classList.add('s8'); }, t7 + 1400);
      };
      if (btn) btn.addEventListener('click', go);
    }

    /* 캔버스 씬 2 — 위젯 조립 빌더 (v4 demo-canvas 이식) */
    function initCvBuilder(stage) {
      const sc = stage.querySelector('.cv2-sc');
      if (!sc) return;
      const items = [...sc.querySelectorAll('.cvb-item')];
      const fillBar = sc.querySelector('.cvb-fill-bar');
      const pctEl = sc.querySelector('.cvb-pct');
      const convEl = sc.querySelector('.cvb-convval');
      const confBox = sc.querySelector('.cvb-confetti');
      const themeBtn = sc.querySelector('.cvb-theme');
      let conv = 2.4, placed = 0;
      const total = items.length;

      const moveHint = () => {
        items.forEach(it => it.classList.remove('hint'));
        const next = items.find(it => !it.classList.contains('set'));
        if (next) next.classList.add('hint');
      };

      const confetti = () => {
        if (!confBox) return;
        const colors = ['#00B7A8', '#FFD54F', '#FF7A59', '#6D58F2', '#28C840', '#FF5F87'];
        for (let i = 0; i < 28; i++) {
          const c = document.createElement('i');
          c.style.left = (Math.random() * 100) + '%';
          c.style.background = colors[i % colors.length];
          c.style.animationDelay = (Math.random() * .5) + 's';
          c.style.animationDuration = (1.3 + Math.random() * .9) + 's';
          confBox.appendChild(c);
        }
        setTimeout(() => { confBox.innerHTML = ''; }, 2800);
      };

      const setItem = (it) => {
        if (it.classList.contains('set')) return;
        it.classList.add('set');
        const ck = it.querySelector('.ck');
        if (ck) ck.textContent = '✓ 적용';
        const slot = sc.querySelector('.cvb-slot[data-s="' + it.dataset.w + '"]');
        const canvas = sc.querySelector('.cvb-canvas');
        if (slot) {
          slot.classList.add('set');
          // 방금 배치된 위젯이 화면에 보이도록 캔버스를 부드럽게 스크롤(뒤쪽 위젯이 스크롤에 가려지지 않게)
          if (canvas) setTimeout(() => {
            const target = slot.offsetTop + slot.offsetHeight - canvas.clientHeight + 14;
            canvas.scrollTop = Math.max(0, target);
          }, 70);
        }
        if (it.dataset.w === 'review') runCounts(stage);
        placed++;
        const d = parseFloat(it.dataset.d || 0);
        if (d) {
          conv = Math.round((conv + d) * 10) / 10;
          convEl.textContent = conv.toFixed(1) + '%';
          convEl.animate(
            [{ transform: 'scale(1.3)', color: '#0CA678' }, { transform: 'scale(1)' }],
            { duration: 380, easing: 'cubic-bezier(.2,1.4,.4,1)' }
          );
        }
        const pct = Math.round(placed / total * 100);
        pctEl.textContent = pct + '%';
        fillBar.style.width = pct + '%';
        if (placed === total) {
          sc.classList.add('on');
          runCounts(stage);
          confetti();
          // 조립 완료 → 완성된 페이지를 위에서부터 보여주도록 맨 위로 스크롤
          if (canvas) setTimeout(() => { canvas.scrollTop = 0; }, 700);
        }
      };

      /* 원클릭 오토플레이 — 기(빈 슬롯) → 승(자동 조립) → 전(테마 통째 교체) → 결(전환율 완성) */
      const playBtn = sc.querySelector('.cvb-play');
      let started = false;
      const STEP = 720, PICK = 420;
      const autoplay = () => {
        if (started) return;
        started = true;
        items.forEach(it => it.classList.remove('hint'));
        const playLb = playBtn && playBtn.querySelector('.cl-lb');
        if (playBtn) { playBtn.disabled = true; if (playLb) playLb.textContent = '조립 중…'; }
        // 조립 순서 = 우측 cvb-canvas 배치 순서(위→아래): 띠배너 → 헤더 → 콘텐츠배너 → 상품그리드 → 포토리뷰 → 푸터
        const CANVAS_ORDER = ['coupon', 'header', 'hero', 'prods', 'review', 'footer'];
        const ordered = CANVAS_ORDER.map(w => items.find(it => it.dataset.w === w)).filter(Boolean);
        const seq = ordered.length === items.length ? ordered : items;
        seq.forEach((it, idx) => {
          setTimeout(() => { it.classList.add('hint'); }, STEP * idx);
          setTimeout(() => { it.classList.remove('hint'); setItem(it); }, STEP * idx + PICK);
        });
        const doneAt = STEP * (items.length - 1) + PICK + 600;
        setTimeout(() => {
          if (playLb) playLb.textContent = '🎉 페이지 완성!';
        }, doneAt);
        /* 다크모드 자동 전환 애니메이션 제거 — 조립 완성으로 마무리 */
        setTimeout(() => {
          if (playLb) playLb.textContent = '✓ 클릭 한 번으로 페이지 완성';
        }, doneAt + 1200);
      };

      if (playBtn) playBtn.addEventListener('click', autoplay);
      items.forEach(it => it.addEventListener('click', autoplay));

      if (themeBtn) themeBtn.addEventListener('click', () => {
        const dark = sc.dataset.theme === 'b';
        if (dark) { delete sc.dataset.theme; themeBtn.textContent = '🌙 블랙 프라이데이로 통째로 갈아끼우기'; }
        else { sc.dataset.theme = 'b'; themeBtn.textContent = '🌼 스프링 무드로 되돌리기'; }
      });
    }

    function syncDetailAdd() {
      if (!dtKey) return;
      const btn = $('dtAdd');
      const added = cart.has(dtKey);
      const isEntry = (dtKey === ENTRY);
      btn.classList.toggle('is-added', added);
      btn.innerHTML = isEntry ? '✓ 앱스토어에서 선택한 앱이에요'
        : added ? '✓ 담김 · 빼기' : `<i class="dt-cart"></i>${P[dtKey].name} 담기`;
      btn.onclick = () => {
        if (isEntry) { closeDetail(); return; }
        toggleCart(dtKey, btn); syncDetailAdd();
      };
    }

    function closeDetail() {
      stopDtTimer();
      $('detail').classList.remove('on');
      if (curView === 'hero') startHero();
      renderPick(); renderDock();
    }

    { const _b = $('dtBack'); if (_b) _b.onclick = closeDetail; }
    { const _c = $('dtClose'); if (_c) _c.onclick = closeDetail; }
    // 새 창 UX: 배경(창 밖) 클릭·Esc로 닫기
    $('detail')?.addEventListener('click', e => { if (e.target === $('detail')) closeDetail(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('detail')?.classList.contains('on')) closeDetail(); });
    { const _dp = $('dtPrev'); if (_dp) _dp.onclick = () => { if (dtIdx > 0) dtGo(dtIdx - 1); }; }
    { const _dn = $('dtNext'); if (_dn) _dn.onclick = () => { if (dtIdx < P[dtKey].feats.length - 1) dtGo(dtIdx + 1); else closeDetail(); }; }

    /* 히어로(hp-live) 스테이지 클릭 → 상세 오버레이 진입: 비활성화 (dt-inner 등장 없음) */

    /* ═══════════════════════════════════════════════
       완료 화면
    ═══════════════════════════════════════════════ */
    function renderDone() {
      const picked = KEYS.filter(k => cart.has(k));
      const box = $('doneSols'); box.innerHTML = '';
      const row = document.createElement('div'); row.className = 'done-sol-row';
      row.innerHTML = picked.map(k => `<span class="done-sol" style="background:${P[k].color}">${P[k].name}</span>`).join('')
        + '<span class="done-cond">14일 무료체험</span>';
      box.appendChild(row);
      const auto = [], manual = [];
      picked.forEach(k => { const i = INSTALL[k]; if (!i) return; if (i.auto) auto.push(i.auto); if (i.manual) manual.push(i.manual); });
      $('autoSec').style.display = auto.length ? 'block' : 'none';
      $('autoList').textContent = [...new Set(auto)].join(', ');
      $('manualSec').style.display = manual.length ? 'block' : 'none';
      $('manualList').textContent = [...new Set(manual)].join(', ');
    }

    /* ═══════════════════════════════════════════════
       진입 앱 선택 화면
    ═══════════════════════════════════════════════ */
    function renderEntry() {
      const grid = $('entGrid'); if (!grid) return;
      grid.innerHTML = '';
      ALL_APPS.forEach(k => {
        const d = P[k];
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'ent-card';
        card.style.setProperty('--ec', d.color);
        card.innerHTML = `
          <span class="ent-ic"><i></i></span>
          <span class="ent-name">${d.name}</span>
          <span class="ent-hook">${d.hook}</span>
          <span class="ent-go">이 앱으로 시작 →</span>`;
        card.onclick = () => { setEntry(k); initHero(); renderPick(); renderDock(); go('info1'); };
        grid.appendChild(card);
      });
    }

    /* 임베드 렌더 — 단일 씬을 #embedStage에 단독 렌더 + (기본) 자동재생.
       rv1~3 = 알파리뷰 히어로 애니(HERO_PANES), 그 외 = SCENES. */
    function renderEmbed(key, autoplay) {
      const stage = $('embedStage');
      if (!stage) return;
      const COLOR = { rv: '#6D58F2', up: '#E62C35', ps: '#307AF3', cv: '#00B7A8', if: '#EC4A7F' };
      stage.style.setProperty('--dc', COLOR[key.slice(0, 2)] || '#6D58F2');
      const hm = key.match(/^rv([123])$/);
      if (hm) {
        const pane0 = (HERO_PANES.review && HERO_PANES.review[+hm[1] - 1]) || '';
        stage.innerHTML = pane0;
        const pane = stage.querySelector('.hero-pane');
        if (!pane) return;
        pane.classList.add('on', 'poster');
        heroPrimeCounts(pane);
        renderStars(stage);
        stage.querySelectorAll('[data-heroplay]').forEach(b => b.onclick = () => {
          syncRvhCardTargets(pane); pane.classList.add('played'); runCounts(pane);
          if (pane.querySelector('.rvh-gather')) setTimeout(() => drawRvhLines(pane), 1000);
        });
        stage.querySelectorAll('[data-heroreplay]').forEach(b => b.onclick = () => {
          pane.classList.remove('played'); heroResetPayoffCounts(pane);
        });
        if (autoplay) setTimeout(() => { const b = stage.querySelector('[data-heroplay]'); if (b) b.click(); }, 800);
      } else {
        stage.dataset.scene = key;
        stage.innerHTML = SCENES[key] || '';
        if (!stage.querySelector('.sc')) return;
        renderStars(stage);
        bindHeroScene(stage);
        if (autoplay) setTimeout(() => {
          const b = stage.querySelector('[data-act]') || stage.querySelector('.cl-start');
          if (b) { b.click(); return; }
          const sc = stage.querySelector('.sc'); if (sc) { sc.classList.add('on'); playScene(sc, stage); }
        }, 800);
      }
    }
