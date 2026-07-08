/* ============================================================
   ITEMS.JS — This is the ONLY file you need to edit!
   ============================================================

   HOW TO ADD AN ITEM:
   1. Copy one of the item blocks below (from "{" to "},")
   2. Paste it into the right category section
   3. Fill in the fields:
        category  : must match one of the category ids below
        nameEn    : product name in English
        nameKo    : product name in Korean
        noteEn    : your one-line comment in English (why you love it)
        noteKo    : same comment in Korean
        reviewEn  : (optional) your longer personal review, a few sentences —
                    shows as an italic quote under the note
        reviewKo  : (optional) same review in Korean
        amazonUrl : your Amazon AFFILIATE link (from SiteStripe — see README)
        otherUrl  : (optional) link for items not sold on Amazon
        mustHave  : true = marks it as "our favorite"
   4. Save the file. Done — the page updates automatically.

   To REMOVE an item, delete its whole block (from "{" to "},").
   ============================================================ */

// ---------- SITE SETTINGS ----------
const SITE_CONFIG = {
  // Your Amazon Associates tag, e.g. "juliagives-20".
  // Once you fill this in, it is automatically added to every
  // Amazon link on the page (links pasted from SiteStripe
  // already contain it, so either way works).
  amazonTag: "",

  kickerEn: "A twin family's honest list",
  kickerKo: "쌍둥이 가족의 솔직한 리스트",

  titleEn: "The things that actually worked",
  titleKo: "정말 도움이 된 것들만 모았습니다",

  subtitleEn: "Our twins arrived in spring 2025. Every item below was bought with our own money and tested through months of feeds, naps, and laundry. No sponsorships, no gifted products — just the list we wish someone had handed us.",
  subtitleKo: "2025년 봄, 쌍둥이가 태어났습니다. 아래 물건들은 전부 저희 돈으로 직접 사서 수개월의 수유와 낮잠, 빨래 속에서 검증한 것들이에요. 협찬도 증정품도 없이, 누군가 우리에게 먼저 건네줬더라면 좋았을 리스트입니다.",

  charityEn: "When you buy through these links, Amazon pays us a small commission — your price stays the same. Every cent of it goes to March of Dimes, which supports NICU families and research for healthy moms and babies.",
  charityKo: "이 링크로 구매하시면 아마존이 저희에게 소정의 커미션을 지급합니다. 구매 가격은 그대로예요. 그리고 그 수익금 전액은 신생아 집중치료실(NICU) 가족과 건강한 출산을 위한 연구를 지원하는 March of Dimes에 기부됩니다.",

  disclosureEn: "As an Amazon Associate I earn from qualifying purchases.",
  disclosureKo: "본 페이지는 아마존 어소시에이트 활동의 일환으로, 적격 구매 시 아마존으로부터 커미션을 받습니다.",
};

// ---------- CATEGORIES ----------
// (id is used internally — don't change it once items use it)
const CATEGORIES = [
  { id: "feeding",   emoji: "🍼", en: "Feeding",         ko: "수유 · 이유식" },
  { id: "sleeping",  emoji: "🌙", en: "Sleep",           ko: "수면" },
  { id: "diapering", emoji: "🧷", en: "Diapering",       ko: "기저귀" },
  { id: "gear",      emoji: "🚗", en: "Gear & On-the-Go", ko: "외출 · 이동" },
  { id: "health",    emoji: "🩺", en: "Health & Safety", ko: "건강 · 안전" },
  { id: "bathing",   emoji: "🛁", en: "Bath",            ko: "목욕" },
  { id: "playing",   emoji: "🧸", en: "Play",            ko: "놀이" },
];

// ---------- ITEMS ----------
const ITEMS = [

  // ================= FEEDING · 수유 =================
  {
    category: "feeding",
    nameEn: "Stokke Tripp Trapp High Chair + Newborn Set",
    nameKo: "스토케 트립트랩 하이체어 + 뉴본 세트",
    noteEn: "One chair that grows from newborn to adult — they join the table from day one.",
    noteKo: "신생아부터 어른까지 쓰는 의자예요. 태어난 날부터 식탁에 함께 앉을 수 있어요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "feeding",
    nameEn: "Baby Brezza Bottle Washer Pro",
    nameKo: "베이비 브레자 보틀 워셔 프로",
    noteEn: "Washes, sterilizes, and dries bottles in one machine. With twins, this saved us hours every week.",
    noteKo: "젖병 세척·소독·건조까지 한 번에! 쌍둥이 육아에서 매주 몇 시간을 아껴준 기계예요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "feeding",
    nameEn: "Baby Brezza Superfast Portable Bottle Warmer",
    nameKo: "베이비 브레자 휴대용 보틀 워머",
    noteEn: "Warms a bottle anywhere, no outlet needed — car, stroller, middle of the night.",
    noteKo: "콘센트 없이 어디서든 분유를 데워줘요. 차 안, 유모차, 새벽 수유에 최고예요.",
    amazonUrl: "",
  },
  {
    category: "feeding",
    nameEn: "Dr. Brown's Formula Mixing Pitcher",
    nameKo: "닥터브라운 분유 믹싱 피처",
    noteEn: "Mix a day's worth of formula at once, clump-free. A twin-parent essential.",
    noteKo: "하루치 분유를 덩어리 없이 한 번에 만들어 두는 피처. 쌍둥이 부모 필수템이에요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "feeding",
    nameEn: "Willow Go Wearable Breast Pump (Double)",
    nameKo: "윌로우 고 착용형 무선 유축기 (더블)",
    noteEn: "Hands-free, cord-free pumping — you can pump while caring for two babies.",
    noteKo: "손도 줄도 필요 없는 착용형 유축기. 아기를 돌보면서 유축할 수 있어요.",
    amazonUrl: "",
  },
  {
    category: "feeding",
    nameEn: "Inglesina Fast Table Chair",
    nameKo: "잉글레시나 패스트 테이블 체어",
    noteEn: "Clamps onto any table — our go-to for restaurants and travel.",
    noteKo: "어느 테이블에나 끼워 쓰는 휴대용 아기 의자. 식당·여행에 최고예요.",
    amazonUrl: "",
  },
  {
    category: "feeding",
    nameEn: "BabyBjörn Baby Bib (2 Pack)",
    nameKo: "베이비뵨 턱받이 (2개 세트)",
    noteEn: "Deep pocket catches everything; rinses clean in seconds.",
    noteKo: "깊은 포켓이 흘린 음식을 다 받아줘요. 물로 헹구면 바로 깨끗해져요.",
    amazonUrl: "",
  },
  {
    category: "feeding",
    nameEn: "Burt's Bees Baby Organic Burp Cloths (5 Pack)",
    nameKo: "버츠비 베이비 오가닉 트림수건 (5장)",
    noteEn: "Soft, absorbent, and they survive endless washing.",
    noteKo: "부드럽고 흡수력 좋고, 수없이 세탁해도 멀쩡해요.",
    amazonUrl: "",
  },

  // ================= SLEEP · 수면 =================
  {
    category: "sleeping",
    nameEn: "babyletto Yuzu 8-in-1 Convertible Crib",
    nameKo: "베이비레토 유주 8-in-1 컨버터블 아기침대",
    noteEn: "Converts from bassinet to crib to toddler bed — one purchase for years.",
    noteKo: "배시넷부터 유아 침대까지 변신하는 침대. 한 번 사면 몇 년을 써요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "sleeping",
    nameEn: "Newton Baby Breathable Crib Mattress",
    nameKo: "뉴턴 베이비 통기성 크립 매트리스",
    noteEn: "Fully breathable and machine-washable — peace of mind for sleep safety.",
    noteKo: "100% 통기성에 통째로 세탁 가능한 매트리스. 수면 안전에 안심이 돼요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "sleeping",
    nameEn: "Newton Organic Cotton Crib Sheets (2 Pack)",
    nameKo: "뉴턴 오가닉 코튼 크립 시트 (2장)",
    noteEn: "Breathable sheets that fit the Newton mattress perfectly.",
    noteKo: "뉴턴 매트리스에 딱 맞는 통기성 좋은 순면 시트예요.",
    amazonUrl: "",
  },
  {
    category: "sleeping",
    nameEn: "Woolino 4 Season Ultimate Baby Sleep Bag",
    nameKo: "울리노 사계절 슬립백 (수면조끼)",
    noteEn: "Merino wool sleep sack for all seasons, 0–2 years. Worth every penny.",
    noteKo: "메리노 울 소재로 사계절 내내 쓰는 슬립백 (0~2세). 값어치를 톡톡히 해요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "sleeping",
    nameEn: "Hatch Rest 2nd Gen + Rest Go Sound Machine Bundle",
    nameKo: "해치 레스트 사운드 머신 + 휴대용 레스트 고 세트",
    noteEn: "Sound machine and night light, controlled from your phone; the portable one travels with us.",
    noteKo: "휴대폰으로 조절하는 백색소음기 겸 수유등. 휴대용은 외출할 때 늘 함께해요.",
    amazonUrl: "",
  },
  {
    category: "sleeping",
    nameEn: "Nanit Pro Baby Monitor",
    nameKo: "나닛 프로 베이비 모니터",
    noteEn: "Crystal-clear overhead camera with breathing motion tracking.",
    noteKo: "머리 위에서 내려다보는 선명한 카메라와 호흡 움직임 모니터링 기능.",
    amazonUrl: "",
  },
  {
    category: "sleeping",
    nameEn: "Owlet Dream Sock Smart Baby Monitor",
    nameKo: "아울렛 드림 삭스 스마트 모니터",
    noteEn: "Tracks oxygen and heart rate while baby sleeps — extra reassurance for NICU-graduate parents.",
    noteKo: "아기가 자는 동안 산소포화도와 심박수를 확인해줘요. 니큐 졸업생 부모에게 큰 안심이 됩니다.",
    amazonUrl: "",
  },

  // ================= DIAPERING · 기저귀 =================
  {
    category: "diapering",
    nameEn: "Coterie Ultra Soft Diapers (Monthly Supply)",
    nameKo: "코테리 울트라 소프트 기저귀 (월간 구독)",
    noteEn: "The softest, most absorbent diapers we tried — fewer blowouts, fewer night changes.",
    noteKo: "써본 것 중 가장 부드럽고 흡수력 좋은 기저귀. 새는 일도, 밤중 교체도 줄었어요.",
    amazonUrl: "",
    otherUrl: "https://www.coterie.com",
    mustHave: true,
  },
  {
    category: "diapering",
    nameEn: "Boogie No-Touch Diaper Rash Cream (with Spatula)",
    nameKo: "부기 노터치 기저귀 발진 크림 (스패츌러 포함)",
    noteEn: "Apply cream without getting it on your hands. Genius tube design.",
    noteKo: "손에 안 묻히고 바르는 발진 크림. 튜브 디자인이 천재적이에요.",
    amazonUrl: "",
  },
  {
    category: "diapering",
    nameEn: "Momcozy Baby Wipe Warmer",
    nameKo: "맘코지 물티슈 워머",
    noteEn: "Warm wipes = far fewer midnight tears (theirs and ours).",
    noteKo: "따뜻한 물티슈 덕분에 새벽 기저귀 갈이 울음이 확 줄었어요.",
    amazonUrl: "",
  },
  {
    category: "diapering",
    nameEn: "Skip Hop Baby Changing Pad",
    nameKo: "스킵합 기저귀 교환 패드",
    noteEn: "Wipes clean instantly — no covers to wash.",
    noteKo: "커버 세탁이 필요 없이 물티슈로 쓱 닦으면 끝나는 교환 패드예요.",
    amazonUrl: "",
  },
  {
    category: "diapering",
    nameEn: "Dagne Dover Indi Diaper Bag Backpack (Large)",
    nameKo: "다그네 도버 인디 기저귀 가방 백팩 (라지)",
    noteEn: "Fits gear for two babies and still looks like a nice bag.",
    noteKo: "쌍둥이 짐이 다 들어가는데도 예쁜 가방처럼 보여요.",
    amazonUrl: "",
  },

  // ================= GEAR & ON-THE-GO · 외출/이동 =================
  {
    category: "gear",
    nameEn: "Graco SnugRide SnugFit 35 Infant Car Seat",
    nameKo: "그라코 스너그라이드 스너그핏 35 신생아 카시트",
    noteEn: "Safe, straightforward install, and clicks into the stroller frame.",
    noteKo: "안전하고 설치가 쉬우며 유모차 프레임에 바로 장착돼요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "gear",
    nameEn: "Cybex eGazelle S Stroller (+ Second Seat for Twins)",
    nameKo: "사이벡스 e가젤 S 유모차 (+쌍둥이용 세컨드 시트)",
    noteEn: "Electric-assist stroller that makes pushing two babies up hills feel effortless.",
    noteKo: "전동 어시스트 덕분에 쌍둥이를 태우고 언덕을 올라도 힘들지 않아요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "gear",
    nameEn: "Baby Trend Snap-N-Go Double Stroller Frame",
    nameKo: "베이비트렌드 스냅앤고 더블 유모차 프레임",
    noteEn: "Two infant car seats click right in — the lightweight twin hack for the first months.",
    noteKo: "신생아 카시트 두 개를 그대로 끼우는 초경량 프레임. 쌍둥이 초기 몇 달의 꿀템이에요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "Konny Baby Wrap Carrier Flex AirMesh",
    nameKo: "코니 아기띠 플렉스 에어메시",
    noteEn: "A beloved Korean brand — light as a t-shirt, and babies melt into it.",
    noteKo: "티셔츠처럼 가벼운 한국 브랜드 아기띠. 아기가 폭 안겨서 스르르 잠들어요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "gear",
    nameEn: "Solly Baby Wrap Carrier",
    nameKo: "솔리 베이비 랩 캐리어",
    noteEn: "Buttery-soft newborn wrap for skin-to-skin naps.",
    noteKo: "신생아 캥거루 케어에 좋은 아주 부드러운 랩 아기띠예요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "4moms MamaRoo Multi-Motion Baby Swing",
    nameKo: "포맘스 마마루 바운서 (스윙)",
    noteEn: "Five motions that mimic parents' arms — buys you a shower with twins.",
    noteKo: "엄마 품처럼 움직이는 5가지 모션. 쌍둥이 육아 중 샤워할 시간을 벌어줘요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "BabyBjörn Bouncer Balance Soft",
    nameKo: "베이비뵨 바운서 밸런스 소프트",
    noteEn: "No batteries — baby's own movement makes it bounce. Folds flat for travel.",
    noteKo: "배터리 없이 아기 움직임으로 통통 흔들리는 바운서. 납작하게 접혀 휴대도 편해요.",
    amazonUrl: "",
  },

  // ================= HEALTH & SAFETY · 건강/안전 =================
  {
    category: "health",
    nameEn: "Frida Baby Medi Pacifier (Medicine Dispenser)",
    nameKo: "프리다 베이비 메디 쪽쪽이 (투약 젖꼭지)",
    noteEn: "Medicine goes through a pacifier — no spitting, no tears.",
    noteKo: "쪽쪽이로 약을 먹여요. 뱉지도 않고 울지도 않아요.",
    amazonUrl: "",
  },
  {
    category: "health",
    nameEn: "Momcozy Electric Nasal Aspirator",
    nameKo: "맘코지 전동 콧물흡입기",
    noteEn: "Gentle, effective, and babies tolerate it surprisingly well.",
    noteKo: "부드럽고 효과 좋은 콧물흡입기. 아기들이 의외로 잘 참아줘요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "health",
    nameEn: "Little Remedies New Baby Essentials Kit",
    nameKo: "리틀 레머디스 신생아 상비약 키트",
    noteEn: "Saline spray, gas drops, gripe water, fever reducer — the whole starter medicine cabinet.",
    noteKo: "식염수 스프레이, 가스 완화제, 그라이프 워터, 해열제까지 신생아 상비약이 한 세트에.",
    amazonUrl: "",
  },
  {
    category: "health",
    nameEn: "Mommy's Bliss Baby Probiotic Drops",
    nameKo: "마미스 블리스 유아 유산균 드롭",
    noteEn: "Daily drops that helped with gas and colic in the early months.",
    noteKo: "초기 몇 달 배앓이와 가스 완화에 도움이 된 데일리 유산균이에요.",
    amazonUrl: "",
  },
  {
    category: "health",
    nameEn: "Momcozy Electric Baby Nail Buffer",
    nameKo: "맘코지 전동 아기 손톱 트리머",
    noteEn: "Files tiny nails safely while they sleep — no more clipper anxiety.",
    noteKo: "아기가 자는 동안 안전하게 손톱을 갈아줘요. 손톱깎이 공포 끝!",
    amazonUrl: "",
  },
  {
    category: "health",
    nameEn: "Canopy Bedside Humidifier 2.0",
    nameKo: "캐노피 가습기 2.0",
    noteEn: "Mold-resistant, dishwasher-safe humidifier for dry nursery air.",
    noteKo: "곰팡이 걱정 없고 식기세척기 세척이 가능한 아기방 가습기예요.",
    amazonUrl: "",
    otherUrl: "https://getcanopy.co",
  },

  // ================= BATH · 목욕 =================
  {
    category: "bathing",
    nameEn: "Lalo Bath Tub",
    nameKo: "라로 아기 욕조",
    noteEn: "Clean design, supportive newborn position, drains and dries fast.",
    noteKo: "디자인이 깔끔하고 신생아 자세를 잘 받쳐줘요. 물 빠짐과 건조도 빨라요.",
    amazonUrl: "",
  },
  {
    category: "bathing",
    nameEn: "Angelcare Baby Bath Support",
    nameKo: "엔젤케어 목욕 지지대",
    noteEn: "Keeps a slippery newborn secure so you have both hands free.",
    noteKo: "미끄러운 신생아를 안전하게 받쳐줘서 두 손이 자유로워요.",
    amazonUrl: "",
  },
  {
    category: "bathing",
    nameEn: "KeaBabies Bamboo Washcloths (6 Pack)",
    nameKo: "키아베이비스 대나무 아기 워시클로스 (6장)",
    noteEn: "Impossibly soft on newborn skin.",
    noteKo: "신생아 피부에 닿아도 될 만큼 정말 부드러워요.",
    amazonUrl: "",
  },
  {
    category: "bathing",
    nameEn: "Mustela Newborn Baby Arrival Gift Set",
    nameKo: "무스텔라 신생아 스킨케어 세트",
    noteEn: "Gentle French skincare — cleanser, lotion, and diaper cream in one set.",
    noteKo: "순한 프랑스 스킨케어 세트. 클렌저, 로션, 발진 크림이 한 번에 들어있어요.",
    amazonUrl: "",
  },

  // ================= PLAY · 놀이 =================
  {
    category: "playing",
    nameEn: "Lovevery Play Gym",
    nameKo: "러브에버리 플레이 짐",
    noteEn: "Stage-based play gym designed by child development experts — grows with baby all year.",
    noteKo: "발달 단계별로 구성된 플레이 짐. 돌까지 아기와 함께 자라는 장난감이에요.",
    amazonUrl: "",
    mustHave: true,
  },
  {
    category: "playing",
    nameEn: "Bumbo Floor Seat PLUS",
    nameKo: "범보 플로어 시트 플러스",
    noteEn: "Helps early sitters join the action; tray attaches for snacks and toys.",
    noteKo: "아기가 앉아서 함께 놀 수 있게 도와줘요. 간식·장난감용 트레이도 부착돼요.",
    amazonUrl: "",
  },
  {
    category: "playing",
    nameEn: "Tiny Land Kids Play Tent",
    nameKo: "타이니랜드 키즈 플레이 텐트",
    noteEn: "A cozy little hideout that makes the nursery magical.",
    noteKo: "아기방을 동화처럼 만들어주는 아늑한 아지트예요.",
    amazonUrl: "",
  },
  {
    category: "playing",
    nameEn: "Jack Musical Baby Crib Mobile",
    nameKo: "잭 뮤지컬 크립 모빌",
    noteEn: "Gentle music and slow motion — our babies' favorite view.",
    noteKo: "잔잔한 음악과 느린 움직임. 우리 아기들이 제일 좋아하는 풍경이에요.",
    amazonUrl: "",
  },
];
