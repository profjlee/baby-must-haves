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
        verdict   : "absolute"  shows the 무조건! (absolute must!) label
                    "essential" shows the 사라사! (must!) label
                    anything else (or leaving it out) shows 좋을지도? (maybe?)
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

  subtitleEn: "Our twins arrived in spring 2025. Every item below was bought with our own money and tested through plenty of trial and error. This is the list we wish someone had handed us.",
  subtitleKo: "2025년 봄, 쌍둥이가 태어났습니다. 아래 물건들은 전부 저희 돈으로 직접 사서 많은 시행착오를 거쳐 검증한 것들이에요. 누군가 우리에게 먼저 건네줬더라면 좋았을 리스트입니다.",

  charityEn: "When you buy through these links, Amazon pays us a small commission — your price stays the same. Every cent of it goes to March of Dimes, which supports NICU families and research for healthy moms and babies.",
  charityKo: "이 링크로 구매하시면 아마존이 저희에게 소정의 커미션을 지급합니다. 구매 가격은 그대로예요. 그리고 그 수익금 전액은 신생아 집중치료실(NICU) 가족과 건강한 출산을 위한 연구를 지원하는 March of Dimes에 기부됩니다.",

  disclosureEn: "As an Amazon Associate I earn from qualifying purchases. All commissions will be donated to March of Dimes.",
  disclosureKo: "본 페이지는 아마존 어소시에이트 활동의 일환으로, 적격 구매 시 아마존으로부터 커미션을 받습니다. 모든 커미션은 March of Dimes에 전액 기부됩니다.",
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
  { id: "extras",    emoji: "✨", en: "Little Extras",   ko: "소소한 아이템" },
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
    verdict: "essential",
  },
  {
    category: "feeding",
    nameEn: "Baby Brezza Bottle Washer Pro",
    nameKo: "베이비 브레자 보틀 워셔 프로",
    noteEn: "Washes, sterilizes, and dries bottles in one machine. With twins, this saved us hours every week.",
    noteKo: "젖병 세척·소독·건조까지 한 번에! 쌍둥이 육아에서 매주 몇 시간을 아껴준 기계예요.",
    amazonUrl: "",
    verdict: "essential",
  },
  {
    category: "feeding",
    nameEn: "Baby Brezza Formula Pro Advanced (Formula Dispenser)",
    nameKo: "베이비 브레자 포뮬러 프로 어드밴스드 (자동 분유 제조기)",
    noteEn: "A perfectly mixed, warm bottle at the push of a button — day or night.",
    noteKo: "버튼 하나면 온도와 농도가 딱 맞는 분유 한 병이 바로 나와요. 밤중 수유에 특히 진가를 발휘해요.",
    amazonUrl: "",
    verdict: "essential",
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
    verdict: "essential",
  },
  {
    category: "feeding",
    nameEn: "Inglesina Fast Table Chair",
    nameKo: "잉글레시나 패스트 테이블 체어",
    noteEn: "Clamps onto any table — our go-to for restaurants and travel.",
    noteKo: "어느 테이블에나 끼워 쓰는 휴대용 아기 의자. 식당·여행에 최고예요.",
    amazonUrl: "",
    verdict: "essential",
  },
  {
    category: "feeding",
    nameEn: "BabyBjörn Baby Bib (2 Pack)",
    nameKo: "베이비뵨 턱받이 (2개 세트)",
    noteEn: "Deep pocket catches everything; rinses clean in seconds.",
    noteKo: "깊은 포켓이 흘린 음식을 다 받아줘요. 물로 헹구면 바로 깨끗해져요.",
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
    verdict: "essential",
  },
  {
    category: "sleeping",
    nameEn: "Newton Baby Breathable Crib Mattress",
    nameKo: "뉴턴 베이비 통기성 크립 매트리스",
    noteEn: "Fully breathable and machine-washable — peace of mind for sleep safety.",
    noteKo: "100% 통기성에 통째로 세탁 가능한 매트리스. 수면 안전에 안심이 돼요.",
    amazonUrl: "",
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
    verdict: "essential",
  },
  {
    category: "sleeping",
    nameEn: "Hatch Rest 2nd Gen + Rest Go Sound Machine Bundle",
    nameKo: "해치 레스트 사운드 머신 + 휴대용 레스트 고 세트",
    noteEn: "Sound machine and night light, controlled from your phone; the portable one travels with us.",
    noteKo: "휴대폰으로 조절하는 백색소음기 겸 수유등. 휴대용은 외출할 때 늘 함께해요.",
    amazonUrl: "",
    verdict: "essential",
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

  // ================= GEAR & ON-THE-GO · 외출/이동 =================
  {
    category: "gear",
    nameEn: "Graco SnugRide SnugFit 35 Infant Car Seat",
    nameKo: "그라코 스너그라이드 스너그핏 35 신생아 카시트",
    noteEn: "Safe, straightforward install, and clicks into the stroller frame.",
    noteKo: "안전하고 설치가 쉬우며 유모차 프레임에 바로 장착돼요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "Cybex eGazelle S Stroller (+ Second Seat for Twins)",
    nameKo: "사이벡스 e가젤 S 유모차 (+쌍둥이용 세컨드 시트)",
    noteEn: "Electric-assist stroller that makes pushing two babies up hills feel effortless.",
    noteKo: "전동 어시스트 덕분에 쌍둥이를 태우고 언덕을 올라도 힘들지 않아요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "Baby Trend Snap-N-Go Double Stroller Frame",
    nameKo: "베이비트렌드 스냅앤고 더블 유모차 프레임",
    noteEn: "Two infant car seats click right in — the lightweight twin hack for the first months.",
    noteKo: "신생아 카시트 두 개를 그대로 끼우는 초경량 프레임. 쌍둥이 초기 몇 달의 꿀템이에요.",
    reviewEn: "Honestly, we ended up using this very rarely.",
    reviewKo: "솔직히 말하면 저희는 거의 쓸 일이 없었어요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "Konny Baby Wrap Carrier Flex AirMesh",
    nameKo: "코니 아기띠 플렉스 에어메시",
    noteEn: "A beloved Korean brand — light as a t-shirt, and babies melt into it.",
    noteKo: "티셔츠처럼 가벼운 한국 브랜드 아기띠. 아기가 폭 안겨서 스르르 잠들어요.",
    amazonUrl: "",
  },
  {
    category: "gear",
    nameEn: "Cosco Scenera NEXT Convertible Car Seat",
    nameKo: "코스코 시네라 넥스트 컨버터블 카시트",
    noteEn: "Featherlight and famously affordable — perfect for travel and the second car.",
    noteKo: "가볍고 저렴하기로 유명한 카시트. 여행용이나 세컨드 차량용으로 완벽해요.",
    amazonUrl: "",
    verdict: "essential",
  },
  {
    category: "gear",
    nameEn: "Cybex Libelle Ultra-Compact Stroller",
    nameKo: "사이벡스 리벨 초경량 휴대용 유모차",
    noteEn: "Folds small enough for overhead bins — our everyday grab-and-go stroller.",
    noteKo: "기내 선반에 들어갈 만큼 작게 접히는 유모차. 저희의 데일리 유모차예요.",
    reviewEn: "Twin tip: with a stroller connector, one parent can push both alone.",
    reviewKo: "쌍둥이 팁: 유모차 커넥터로 두 대를 연결하면 혼자서도 둘 다 밀 수 있어요.",
    amazonUrl: "",
    verdict: "essential",
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
    verdict: "essential",
  },

  // ================= HEALTH & SAFETY · 건강/안전 =================
  {
    category: "health",
    nameEn: "Frida Baby Medi Pacifier (Medicine Dispenser)",
    nameKo: "프리다 베이비 메디 쪽쪽이 (투약 젖꼭지)",
    noteEn: "Medicine goes through a pacifier — no spitting, no tears.",
    noteKo: "쪽쪽이로 약을 먹여요. 뱉지도 않고 울지도 않아요.",
    amazonUrl: "",
    verdict: "essential",
  },
  {
    category: "health",
    nameEn: "Frida Baby NoseFrida SnotSucker (Manual Nasal Aspirator)",
    nameKo: "프리다 베이비 노즈프리다 콧물흡입기 (수동)",
    noteEn: "Simple manual suction — oddly effective and easy to clean.",
    noteKo: "단순한 수동 흡입 방식인데 의외로 효과가 좋고 세척도 간편해요.",
    amazonUrl: "",
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

  // ================= BATH · 목욕 =================
  {
    category: "bathing",
    nameEn: "Angelcare Baby Bath Support",
    nameKo: "엔젤케어 목욕 지지대",
    noteEn: "Keeps a slippery newborn secure so you have both hands free.",
    noteKo: "미끄러운 신생아를 안전하게 받쳐줘서 두 손이 자유로워요.",
    amazonUrl: "",
    verdict: "essential",
  },
  {
    category: "bathing",
    nameEn: "Mustela Newborn Baby Arrival Gift Set",
    nameKo: "무스텔라 신생아 스킨케어 세트",
    noteEn: "Gentle French skincare — cleanser, lotion, and diaper cream in one set.",
    noteKo: "순한 프랑스 스킨케어 세트. 클렌저, 로션, 발진 크림이 한 번에 들어있어요.",
    amazonUrl: "",
    verdict: "essential",
  },

  // ================= PLAY · 놀이 =================
  {
    category: "playing",
    nameEn: "Lovevery Play Gym",
    nameKo: "러브에버리 플레이 짐",
    noteEn: "Stage-based play gym designed by child development experts — grows with baby all year.",
    noteKo: "발달 단계별로 구성된 플레이 짐. 돌까지 아기와 함께 자라는 장난감이에요.",
    amazonUrl: "",
    verdict: "essential",
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
    nameEn: "IKEA Cirkustält Kids Play Tent",
    nameKo: "이케아 시르쿠스텔트 키즈 플레이 텐트",
    noteEn: "A cozy little circus hideout — classic IKEA value.",
    noteKo: "서커스 모양의 아늑한 아지트. 가성비는 역시 이케아예요.",
    amazonUrl: "",
    otherUrl: "https://www.ikea.com/us/en/p/cirkustaelt-childrens-tent-red-blue-white-60581369/",
  },
  {
    category: "playing",
    nameEn: "Jack Musical Baby Crib Mobile",
    nameKo: "잭 뮤지컬 크립 모빌",
    noteEn: "Gentle music and slow motion — our babies' favorite view. Pottery Barn Kids only, not on Amazon.",
    noteKo: "잔잔한 음악과 느린 움직임. 우리 아기들이 제일 좋아하는 풍경이에요. 아마존에는 없고 포터리반 키즈에서만 판매해요.",
    amazonUrl: "",
    otherUrl: "https://www.potterybarnkids.com/products/jack-musical-crib-mobile/",
  },

  // ============ ADDED 2026-07-09 (from Julia's Chrome tabs / order history) ============

  // ---- Feeding · 수유/이유식 ----
  {
    category: "feeding",
    nameEn: "Dr. Brown's Natural Flow Options+ Anti-Colic Bottles",
    nameKo: "닥터브라운 옵션스+ 안티콜릭 젖병",
    noteEn: "The classic vented bottle — less gas, less spit-up.",
    noteKo: "벤트 구조로 가스와 게움을 줄여주는 클래식 안티콜릭 젖병이에요.",
    amazonUrl: "",
  },
  {
    category: "feeding",
    nameEn: "Hegen PCTO Feeding Bottles",
    nameKo: "헤겐 PCTO 젖병",
    noteEn: "Square, stackable bottles with snap-on lids that double as storage containers.",
    noteKo: "사각형이라 쌓아 보관하기 좋고, 원터치 뚜껑 덕분에 보관용기로도 쓰는 젖병이에요.",
    amazonUrl: "",
  },
  {
    category: "feeding",
    nameEn: "Dr. Brown's Folding Bottle Drying Rack",
    nameKo: "닥터브라운 접이식 젖병 건조대",
    noteEn: "Holds a full day of bottles and folds flat when not needed.",
    noteKo: "하루치 젖병이 다 올라가고, 안 쓸 땐 납작하게 접혀요.",
    amazonUrl: "https://www.amazon.com/dp/B00HNVWGNS",
  },
  {
    category: "feeding",
    nameEn: "Dapple Baby Bottle & Dish Soap (Travel 2-Pack)",
    nameKo: "대플 젖병 세정제 (여행용 2개)",
    noteEn: "Plant-based soap made for milk residue; the travel size lives in the diaper bag.",
    noteKo: "분유 잔여물 전용 식물성 세정제예요. 여행용 사이즈는 기저귀 가방에 상비해요.",
    amazonUrl: "https://www.amazon.com/dp/B01MRD73PR",
  },
  {
    category: "feeding",
    nameEn: "Munchkin Bristle Bottle Brush",
    nameKo: "먼치킨 브리슬 젖병솔",
    noteEn: "Reaches every corner and looks fine sitting by the sink.",
    noteKo: "구석구석 잘 닦이고 싱크대에 놔둬도 깔끔해 보여요.",
    amazonUrl: "https://www.amazon.com/dp/B0CQKGR569",
  },
  {
    category: "feeding",
    nameEn: "NIVAVA Nursing Pillow",
    nameKo: "니바바 수유쿠션",
    noteEn: "Firm, supportive nursing pillow with a washable cover.",
    noteKo: "모양이 꺼지지 않아 아기를 잘 받쳐주고, 커버는 세탁 가능해요.",
    amazonUrl: "https://www.amazon.com/dp/B0C9M7BHBN",
  },
  {
    category: "feeding",
    nameEn: "MOTHER-K Disposable Bottle Liners (100pcs)",
    nameKo: "마더케이 일회용 젖병 비닐팩 (100매)",
    noteEn: "A Korean travel hack — no bottle washing on the road.",
    noteKo: "한국 엄마들의 외출 꿀템. 여행 중 젖병 설거지가 사라져요.",
    amazonUrl: "https://www.amazon.com/dp/B0CHF4SS9N",
  },
  {
    category: "feeding",
    nameEn: "Amara Organic Baby Food (Stage 2)",
    nameKo: "아마라 유기농 이유식 (2단계)",
    noteEn: "Shelf-stable organic purées you mix fresh with water, milk, or formula.",
    noteKo: "물이나 분유에 바로 개어 먹이는 유기농 이유식이에요. 실온 보관도 가능해요.",
    amazonUrl: "https://www.amazon.com/dp/B07K2SHLYG",
  },
  {
    category: "feeding",
    nameEn: "NumNum GOOtensils Pre-Spoons (3-Pack)",
    nameKo: "넘넘 구텐실 이유식 스푼 (3개)",
    noteEn: "Dip-and-lick spoons for baby-led weaning — no scooping skills needed.",
    noteKo: "떠먹일 필요 없이 아기가 스스로 찍어 빨아먹는 자기주도 이유식 스푼이에요.",
    amazonUrl: "https://www.amazon.com/dp/B0CCW7278L",
  },
  {
    category: "feeding",
    nameEn: "WeeSprout Glass Baby Food Jars (12-Pack)",
    nameKo: "위스프라우트 유리 이유식 용기 (12개)",
    noteEn: "Freezer-to-microwave glass jars for batch-cooked baby food.",
    noteKo: "냉동실에서 전자레인지로 바로 가는 유리 이유식 용기예요.",
    amazonUrl: "https://www.amazon.com/dp/B0F32PMPV9",
  },
  {
    category: "feeding",
    nameEn: "Firgi Silicone Rice Cooker Divider",
    nameKo: "실리콘 밥솥 칸막이 (이유식용)",
    noteEn: "Cook three baby-food batches at once in one rice cooker or Instant Pot.",
    noteKo: "밥솥 하나로 이유식 세 가지를 동시에 만들 수 있는 칸막이예요.",
    amazonUrl: "https://www.amazon.com/dp/B0DQ525DNP",
  },
  {
    category: "feeding",
    nameEn: "Lallisa Silicone Fruit Feeder Spoons",
    nameKo: "실리콘 과일 스크래퍼 스푼",
    noteEn: "Scrapes soft fruit straight into a spoonable purée.",
    noteKo: "과일을 긁어서 바로 떠먹일 수 있는 이중 스푼이에요.",
    amazonUrl: "https://www.amazon.com/dp/B0BZBVLJM3",
  },
  {
    category: "feeding",
    nameEn: "Thyseed Weighted Straw Cup",
    nameKo: "타이시드 무게추 빨대컵",
    noteEn: "Weighted straw sips at any angle — great for the sippy-cup transition.",
    noteKo: "어느 각도로 기울여도 빨리는 무게추 빨대컵. 컵 연습에 좋아요.",
    amazonUrl: "https://www.amazon.com/dp/B0CB671LGX",
  },
  {
    category: "feeding",
    nameEn: "Nuby Easy Go Portable Booster Seat",
    nameKo: "누비 이지고 휴대용 부스터 시트",
    noteEn: "Straps to any chair — for grandparents' houses and rentals.",
    noteKo: "어느 의자에나 묶어 쓰는 휴대용 부스터예요. 조부모님 댁이나 숙소에서 유용해요.",
    amazonUrl: "https://www.amazon.com/dp/B0FWT7LM1Q",
  },
  {
    category: "feeding",
    nameEn: "Miss Mouth's Messy Eater Stain Treater",
    nameKo: "미스 마우스 이유식 얼룩 제거 스프레이",
    noteEn: "Sprays out baby-food and milk stains, even after they've set.",
    noteKo: "이유식과 분유 얼룩 전용 스프레이. 말라붙은 얼룩도 지워져요.",
    amazonUrl: "https://www.amazon.com/dp/B0BVXQQNBB",
  },

  // ---- Sleep · 수면 ----
  {
    category: "sleeping",
    nameEn: "Tapo 2K Pan/Tilt Camera (2-Pack)",
    nameKo: "타포 2K 팬틸트 카메라 (2대)",
    noteEn: "Budget-friendly second set of eyes on two cribs — pan, tilt, and phone alerts.",
    noteKo: "침대 두 개를 지켜보는 가성비 카메라. 휴대폰으로 방향 조절과 알림이 돼요.",
    amazonUrl: "https://www.amazon.com/dp/B09Y8C185M",
  },

  // ---- Gear & On-the-Go · 외출/이동 ----
  {
    category: "gear",
    nameEn: "Tushbaby Hip Seat Carrier",
    nameKo: "터쉬베이비 힙시트",
    noteEn: "Saves your arms and back once babies want up-down-up-down all day.",
    noteKo: "하루 종일 안았다 내렸다 하는 시기에 팔과 허리를 구해주는 힙시트예요.",
    amazonUrl: "https://www.amazon.com/dp/B07R4C4VFX",
  },
  {
    category: "gear",
    nameEn: "Baby Trend Navigator 2-in-1 Stroller Wagon",
    nameKo: "베이비트렌드 네비게이터 2-in-1 스트롤러 왜건",
    noteEn: "Wagon meets stroller — fits two toddlers plus all the park gear.",
    noteKo: "유모차 겸 왜건. 아이 둘에 나들이 짐까지 다 들어가요.",
    amazonUrl: "https://www.amazon.com/dp/B0G1ZF9Z63",
  },
  {
    category: "gear",
    nameEn: "RideSafer Gen 5 Wearable Car Seat (XS)",
    nameKo: "라이드세이퍼 젠5 착용형 카시트 (XS)",
    noteEn: "A car seat kids wear (2yr+) — packs into a backpack for taxis and travel.",
    noteKo: "아이가 입는 카시트예요 (2세+). 백팩에 들어가서 택시나 여행에 최고예요.",
    amazonUrl: "https://www.amazon.com/dp/B0CYNNYLB2",
  },
  {
    category: "gear",
    nameEn: "Munchkin Brica Magnetic Car Window Shade",
    nameKo: "먼치킨 브리카 자석식 차량 햇빛가리개",
    noteEn: "Magnetic and stretch-to-fit — no suction cups falling off mid-drive.",
    noteKo: "자석식이라 운전 중에 흡착판처럼 뚝 떨어질 일이 없어요.",
    amazonUrl: "https://www.amazon.com/dp/B07ZPMHYVB",
  },
  {
    category: "gear",
    nameEn: "Dream On Me Zodiak Playard",
    nameKo: "드림온미 조디악 플레이야드 (휴대용 아기침대)",
    noteEn: "Light travel crib with breathable mesh — folds fast into its carry bag.",
    noteKo: "통기성 메쉬 소재의 가벼운 여행용 아기침대. 캐리백에 금방 접어 넣어요.",
    amazonUrl: "https://www.amazon.com/dp/B0D9Y7GM8V",
  },

  // ---- Health & Safety · 건강/안전 ----
  {
    category: "health",
    nameEn: "Jordan Step 1 Baby Toothbrush (4-Pack)",
    nameKo: "조르단 1단계 아기 칫솔 (4개)",
    noteEn: "Soft bristles and a chunky handle — made for first teeth.",
    noteKo: "부드러운 칫솔모와 잡기 쉬운 손잡이. 첫 이 닦기용으로 딱이에요.",
    amazonUrl: "https://www.amazon.com/dp/B01CKKOIZU",
  },
  {
    category: "health",
    nameEn: "Pigeon Baby Nail Clipper (9m+)",
    nameKo: "피죤 아기 손톱깎이 (9개월+)",
    noteEn: "The splatter-proof case catches clippings before they fly.",
    noteKo: "깎인 손톱이 튀지 않게 케이스가 받아주는 손톱깎이예요.",
    amazonUrl: "https://www.amazon.com/dp/B09Q5YF2BS",
  },
  {
    category: "health",
    nameEn: "Tommee Tippee Electric Nail File",
    nameKo: "토미티피 전동 손톱 파일",
    noteEn: "Six filing heads for the whole family, with an LED light for night trims.",
    noteKo: "온 가족용 파일 헤드가 6개, 야간 손질용 LED 라이트까지 있어요.",
    amazonUrl: "https://www.amazon.com/dp/B09NDTRCYD",
  },
  {
    category: "health",
    nameEn: "Feverall Infant Acetaminophen Suppositories",
    nameKo: "피버올 유아 해열 좌약",
    noteEn: "For fevers when medicine won't stay down — check with your pediatrician.",
    noteKo: "약을 자꾸 뱉거나 토할 때 쓰는 해열 좌약이에요. 소아과와 상의 후 사용하세요.",
    amazonUrl: "https://www.amazon.com/dp/B00Q9BH6O2",
  },
  {
    category: "health",
    nameEn: "Infants' Tylenol (Dye-Free)",
    nameKo: "유아용 타이레놀 (무색소)",
    noteEn: "The standby fever reducer, with a proper dosing syringe included.",
    noteKo: "상비약의 기본인 해열제예요. 계량 주사기가 함께 들어있어요.",
    amazonUrl: "https://www.amazon.com/dp/B073Q34KKQ",
  },
  {
    category: "health",
    nameEn: "Herb Pharm Kids Immune Fortifier",
    nameKo: "허브팜 키즈 면역 시럽",
    noteEn: "Alcohol-free elderberry and echinacea drops for daycare-cold season.",
    noteKo: "어린이집 감기 시즌용 무알코올 엘더베리·에키네시아 시럽이에요.",
    amazonUrl: "https://www.amazon.com/dp/B0199RDWOK",
  },
  {
    category: "health",
    nameEn: "ChildLife Essentials Liquid Multivitamin",
    nameKo: "차일드라이프 액상 종합비타민",
    noteEn: "Orange-mango liquid vitamins that mix easily into milk or water.",
    noteKo: "우유나 물에 쉽게 섞이는 오렌지 망고맛 액상 비타민이에요.",
    amazonUrl: "https://www.amazon.com/dp/B001E123JA",
  },
  {
    category: "health",
    nameEn: "BioGaia Immune Active Baby Probiotic Drops + Vitamin D",
    nameKo: "바이오가이아 유산균 + 비타민D 드롭",
    noteEn: "Probiotic and vitamin D in one dropper — one less thing to remember.",
    noteKo: "유산균과 비타민D를 한 방울로 같이 챙겨요. 챙길 게 하나 줄어요.",
    amazonUrl: "https://www.amazon.com/dp/B09H3PTZSK",
  },
  {
    category: "health",
    nameEn: "EZIGO Extra-Wide Retractable Baby Gate (120\")",
    nameKo: "이지고 초광폭 리트랙터블 안전문 (약 3m)",
    noteEn: "Retractable mesh gate that spans extra-wide openings; rolls away when open.",
    noteKo: "아주 넓은 공간도 막아주는 메쉬 안전문이에요. 안 쓸 땐 돌돌 말려 들어가요.",
    amazonUrl: "https://www.amazon.com/dp/B0DWWMQ2Y3",
  },
  {
    category: "health",
    nameEn: "Compact Fire Extinguisher Spray (2-Pack)",
    nameKo: "가정용 소화 스프레이 (2개)",
    noteEn: "Compact spray extinguishers for the kitchen and nursery floor.",
    noteKo: "주방과 아기방 층에 하나씩 두는 컴팩트 소화 스프레이예요.",
    amazonUrl: "https://www.amazon.com/dp/B0DH5CM2CC",
  },
  {
    category: "health",
    nameEn: "Emergency Fire Blanket (4-Pack)",
    nameKo: "화재 진압 담요 (4장)",
    noteEn: "Fiberglass fire blankets for the kitchen wall — cheap peace of mind.",
    noteKo: "주방 벽에 걸어두는 화재 담요예요. 저렴한 가격으로 마음이 놓여요.",
    amazonUrl: "https://www.amazon.com/dp/B0BVZ8NB1J",
  },
  {
    category: "health",
    nameEn: "Tru Earth Baby Laundry Detergent Sheets",
    nameKo: "트루얼스 아기 세탁 세제 시트",
    noteEn: "Fragrance-free detergent strips for sensitive skin — no jug, no measuring.",
    noteKo: "민감한 피부용 무향 세제 시트예요. 무거운 세제통도, 계량도 필요 없어요.",
    amazonUrl: "https://www.amazon.com/dp/B08DLDJG2K",
  },
  {
    category: "health",
    nameEn: "Toddler Life Jacket (USCG-Approved, 20–30 lbs)",
    nameKo: "유아 구명조끼 (미 해안경비대 인증)",
    noteEn: "Coast Guard-approved vest for pool and lake days.",
    noteKo: "수영장이나 호수 나들이용 인증 구명조끼예요.",
    amazonUrl: "https://www.amazon.com/dp/B0DQ57XS9R",
  },

  // ---- Bath · 목욕 ----
  {
    category: "bathing",
    nameEn: "BambooBebe Gauze Washcloths (10-Pack)",
    nameKo: "밤부베베 거즈 손수건 (10장)",
    noteEn: "The Korean nursery staple — gauze cloths for faces, burps, and everything else.",
    noteKo: "한국 육아 필수템 거즈 손수건. 세수, 트림, 뭐든지 다 쓰여요.",
    amazonUrl: "https://www.amazon.com/dp/B0BLQ4X9T9",
  },
  {
    category: "bathing",
    nameEn: "California Baby Calendula Cream",
    nameKo: "캘리포니아 베이비 카렌듈라 크림",
    noteEn: "Plant-based cream for dry patches and sensitive skin.",
    noteKo: "건조한 부위와 민감성 피부에 바르는 식물성 크림이에요.",
    amazonUrl: "https://www.amazon.com/dp/B00R60FY3U",
  },

  // ---- Play · 놀이 ----
  {
    category: "playing",
    nameEn: "Bright Starts Oball Easy Grasp Ball",
    nameKo: "오볼 클래식",
    noteEn: "The first toy tiny hands can actually hold.",
    noteKo: "작은 손으로도 진짜 잡을 수 있는 첫 장난감이에요.",
    amazonUrl: "https://www.amazon.com/dp/B00ZRD99C0",
  },
  {
    category: "playing",
    nameEn: "Bright Starts Lots of Links (24-Count)",
    nameKo: "브라이트스타츠 링 장난감 (24개)",
    noteEn: "Clip toys to everything — stroller, car seat, play gym.",
    noteKo: "유모차, 카시트, 아기체육관 어디든 장난감을 걸 수 있는 링이에요.",
    amazonUrl: "https://www.amazon.com/dp/B001ABZGU2",
  },
  {
    category: "playing",
    nameEn: "Toniebox 2 Starter Set",
    nameKo: "토니박스 2 스타터 세트",
    noteEn: "Screen-free audio player that toddlers control themselves.",
    noteKo: "아이가 스스로 조작하는 스크린 없는 오디오 플레이어예요.",
    amazonUrl: "https://www.amazon.com/dp/B0FJ3R4FBX",
  },
  {
    category: "playing",
    nameEn: "Tonies Creative Character",
    nameKo: "토니 크리에이티브 캐릭터",
    noteEn: "Record up to 90 minutes of your own stories and songs — grandparents' voices too.",
    noteKo: "우리 가족 목소리로 이야기와 노래를 90분까지 녹음할 수 있어요. 조부모님 목소리도요.",
    amazonUrl: "https://www.amazon.com/dp/B0B6G27X9F",
  },
  {
    category: "playing",
    nameEn: "Veggie Baby Edible Finger Paint",
    nameKo: "먹어도 되는 채소 핑거페인트",
    noteEn: "Vegetable-based paint, safe for babies who taste their art.",
    noteKo: "채소로 만든 물감이라 그림을 맛보는 아기도 안심이에요.",
    amazonUrl: "https://www.amazon.com/dp/B07TKFGP1M",
  },
  {
    category: "playing",
    nameEn: "Flexible Flyer Baby Pull Sled",
    nameKo: "플렉시블 플라이어 유아 눈썰매",
    noteEn: "A classic winter pull sled with a toddler seat.",
    noteKo: "아기 좌석이 달린 클래식 눈썰매예요.",
    amazonUrl: "https://www.amazon.com/dp/B000LF8XSU",
  },

  // ---- Little Extras · 소소한 아이템 ----
  {
    category: "extras",
    nameEn: "Fully Lined Baby Hair Clips (20pcs)",
    nameKo: "유아 헤어핀 (20개)",
    noteEn: "Lined clips that actually stay put in fine baby hair.",
    noteKo: "얇은 아기 머리카락에도 잘 붙어있는 안감 처리 헤어핀이에요.",
    amazonUrl: "https://www.amazon.com/dp/B0CYKNZKNZ",
  },
  {
    category: "extras",
    nameEn: "Acrylic Magnetic Fridge Dry-Erase Board",
    nameKo: "냉장고 자석 아크릴 메모보드",
    noteEn: "Fridge whiteboard for tracking feeds, naps, and who-did-what.",
    noteKo: "수유·낮잠 기록과 역할 분담을 적어두는 냉장고 메모보드예요.",
    amazonUrl: "https://www.amazon.com/dp/B0BLBZRN9S",
  },
  {
    category: "extras",
    nameEn: "To Have and to Hold — Molly Millwood",
    nameKo: "「To Have and to Hold」 — 몰리 밀우드",
    noteEn: "An honest book about motherhood and marriage in the baby years.",
    noteKo: "아기를 키우는 시기의 결혼과 엄마됨을 솔직하게 다룬 책이에요.",
    amazonUrl: "https://www.amazon.com/dp/0062838652",
  },
];
