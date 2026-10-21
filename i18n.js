/* =========================================================
   Flow Quest — translations
   English (left-to-right) and Arabic (right-to-left).

   • In the HTML, elements carry data-i18n="key" (plain text),
     data-i18n-html="key" (text with <b>/<kbd> tags),
     data-i18n-aria="key" (screen-reader label) or
     data-i18n-title="key" (tooltip).
   • In script.js, call I18N.t('key', { name: value }).
   ========================================================= */
(() => {
  'use strict';

  const STRINGS = {
    en: {
      // ----- page -----
      language: 'Language',
      tagline: 'Water for a Brighter Tomorrow',
      reset: 'Reset',
      resetAria: 'Reset game',
      resetTitle: 'Restart this game from the beginning',
      menuAria: 'Open menu',
      score: 'Score',
      lv: 'Lv',
      lives: 'Lives',
      gameArea: 'Flow Quest game area',

      eyebrow: 'A charity: water story',
      lead: 'Two sides of one mission: getting clean water to the people who need it. Choose your role.',
      villager: 'Villager',
      villagerSub: 'Living without clean water nearby',
      villagerDesc: 'Your village is running dry. Catch the rain, avoid polluted water, and purify every drop you carry home.',
      tagCatch: 'Catch rain',
      tagPurify: 'Purify',
      tagGuard: 'Avoid the guard',
      playVillager: 'Play as Villager',
      volunteer: 'Warehouse Volunteer',
      volunteerSub: 'Packing water for delivery',
      volunteerDesc: "Load cases of clean water onto the truck before it leaves for the villages. Don't let a leaking case get on board.",
      tagTimer: 'Beat the timer',
      tagInspect: 'Inspect cases',
      tagForklift: 'Dodge the forklift',
      playVolunteer: 'Play as Volunteer',
      keysDesktop: 'Move <kbd>←</kbd><kbd>→</kbd> or <kbd>A</kbd><kbd>D</kbd> · Jump <kbd>↑</kbd> or <kbd>Space</kbd> · Interact <kbd>E</kbd> · Pause <kbd>P</kbd>',
      keysTouch: 'Use the buttons below: ← → to move, ↑ to jump, and the hand to interact.',

      howTo: 'How to Play',
      helpVillager: 'How to Play: Villager',
      helpVolunteer: 'How to Play: Volunteer',
      hv1: '<b>Catch clean drops</b> to fill your jerry can (10 max).',
      hv2: '<b>Avoid polluted drops.</b> They cost a heart and <b>20 points</b>.',
      hv3: '<b>Use the biosand filter</b> on the bridge to turn your can into clean water.',
      hv4: '<b>Pick up litter</b> for a cleanup bonus.',
      hv5: '<b>Stay out of the Restricted Area.</b> The guard sends you back and you lose <b>25 points</b>.',
      hv6: 'Fill the village tank to <b>100</b> to level up. Clear level 5 to win.',
      hw1: '<b>Grab cases</b> at the end of the conveyor belt (carry up to 3).',
      hw2: '<b>Load the truck</b> before its timer runs out.',
      hw3: '<b>Leaking cases</b> go in the <b>recycling bin</b>. Loading one costs <b>30 points</b>.',
      hw4: '<b>Jump over the forklift.</b> A hit costs <b>25 points</b> and drops your cases.',
      hw5: '<b>Spills slow you down.</b> Interact to mop them up for a bonus.',
      hw6: 'Each full truck heads to the villages. Send <b>5 trucks</b> to win.',
      gotIt: 'Got it',

      paused: 'Paused',
      resume: 'Resume',
      restart: 'Restart',
      switchRole: 'Switch Role',
      learnMore: 'Learn about charity: water',
      gameOver: 'Game over',
      wellDone: 'Well done',
      level: 'Level',
      playAgain: 'Play Again',

      controls: 'Controls',
      interact: 'Interact',
      jump: 'Jump',
      moveLeft: 'Move left',
      moveRight: 'Move right',
      dropDown: 'Drop down',
      touchControls: 'Touch controls',
      stCollect: 'Collect',
      stDirty: 'Dirty water',
      stFilter: 'Filtering',
      stClean: 'Clean water',
      stBelt: 'Case on belt',
      stCarry: 'Carrying',
      stLoaded: 'Loaded',
      stDelivered: 'Delivered',

      // ----- role-specific labels -----
      barVillage: 'Village water',
      barTruck: 'Truck load',
      progVillage: 'Collect / Purify Progress',
      progTruck: 'Pack / Load / Deliver Progress',
      carryCan: 'Jerry can',
      carrying: 'Carrying',
      herdLivestock: 'Livestock',
      herdTrucks: 'Trucks sent',
      emptyTrucks: 'Delivered trucks appear here',

      // ----- messages -----
      startVillage: 'Catch the clean blue drops and carry them to the filter.',
      startWarehouse: 'Grab cases from the belt and load the truck.',
      resetPick: 'Pick a role to start playing.',
      resetDone: 'Game reset. Fresh start!',
      winVillage: 'The village has a steady supply of clean water. A brighter tomorrow starts here.',
      loseVillage: 'The village still needs you. Every drop counts. Try again.',
      winWarehouse: 'Five trucks of clean water are on the road to the villages. Great work.',
      loseWarehouse: 'The trucks are still waiting. Every case counts. Try again.',
      restricted: 'Restricted area. The guard sent you back. −25 points',
      polluted: 'Polluted water. Avoid the brown drops. −20 points',
      canFull: 'Jerry can full. Take it to the filter on the bridge.',
      canFullWarn: 'Your can is full. Purify it at the bridge.',
      filtered: 'Filtered. +{n} clean water for the village.',
      ranDry: 'The village ran dry. You lost a heart and an animal.',
      levelVillage: 'Level {n}. The herd grew, and the rain is getting heavier and dirtier.',
      filterBusy: 'The filter is working…',
      canEmpty: 'Your can is empty. Catch some clean drops first.',
      filterRight: 'Head right to the filter on the bridge →',
      filterLeft: '← Head left to the filter on the bridge',
      forkliftDrop: 'Forklift hit. You dropped your cases. −25 points',
      forkliftHit: 'Forklift hit. Jump over it next time. −25 points',
      levelTruck: 'Level {n}. Bigger truck, faster forklift.',
      truckLeft: 'The truck left with only {load}/{target} cases.',
      casesFine: 'These cases are fine. Load them on the truck.',
      onlyLeaking: 'Only leaking cases go in the recycling bin.',
      handsFull: 'Hands full. Take these to the truck.',
      waitingCase: 'Waiting for the next case…',
      leakingHeld: 'That case is leaking. Put it in the recycling bin.',
      truckBusy: 'The truck is on the road. Hang on.',
      handsEmpty: 'Your hands are empty. Grab cases from the belt.',
      leakLoaded: 'A leaking case got on the truck. −{n} points',
      truckFull: 'Truck full and heading to the villages. +{n}',
      truckRight: 'Head right to load the truck →',
      truckLeftDir: '← Head left to load the truck',
      beltRight: 'Grab cases from the conveyor belt →',
      beltLeft: '← Grab cases from the conveyor belt',

      // ----- status line -----
      sDelivered: 'Clean water delivered to the village tank.',
      sPouring: 'Pouring water into the biosand filter…',
      sFiltering: 'Filtering through sand and gravel…',
      sCanFull: 'Can full. Go to the filter and interact.',
      sKeepCatching: 'Keep catching, or purify now at the bridge.',
      sCatch: 'Catch clean blue drops to fill your can.',
      sTruckDelivered: 'Truck delivered. Clean water is on the way.',
      sPulling: 'A new truck is pulling in…',
      sHoldingLeak: 'You are holding a leaking case. Recycle it.',
      sHandsFull: 'Hands full. Load the truck.',
      sGrabMore: 'Grab more, or load the truck now.',
      sTruckNeeds: 'Truck needs {n} more case(s) · {s}s left',

      // ----- labels drawn in the game scene -----
      cVillage: 'VILLAGE',
      cFilter: 'BIOSAND FILTER',
      cSign1: 'RESTRICTED',
      cSign2: 'AREA',
      cDepot: 'CLEAN WATER DEPOT',
      cPickUp: 'PICK UP',
      cRecycling: 'RECYCLING',
      cTruckSide: 'CLEAN WATER',
      cSlippery: 'slippery',
      cCases: '{a}/{b} cases',
      cSecs: '{n}s',
      cOnWay: 'On the way to the villages',
      cPulling: 'Pulling in…',
      cLeaving: 'Leaving…',
      pPurify: 'Purify',
      pPickUp: 'Pick up',
      pKeepOut: 'Keep out',
      pGrab: 'Grab case',
      pRecycle: 'Recycle',
      pMop: 'Mop',
      pLoad: 'Load',
      pBeep: 'Beep',
      popCleanup: 'Cleanup +25',
      popWater: '+{n} clean water',
      popLeaking: 'Leaking case',
      popCase: '+1 case',
      popRecycled: 'Recycled +{n}',
      popMopped: 'Mopped +10',
      popLoaded: '+{n} loaded',
      popLeakPenalty: '−{n} leaking',
      popDropped: '−{n} case(s)',

      facts: [
        '100% of public donations to charity: water go directly to fund clean water projects.',
        'Millions of people around the world still live without access to clean drinking water.',
        'In many communities, women and girls spend hours every day walking to collect water.',
        'Clean water close to home means more time for school, work, and family.',
        'Biosand filters use layers of sand and gravel to remove dirt and many germs from water.',
      ],
    },

    ar: {
      // ----- page -----
      language: 'اللغة',
      tagline: 'مياه من أجل غدٍ أكثر إشراقًا',
      reset: 'إعادة',
      resetAria: 'إعادة ضبط اللعبة',
      resetTitle: 'ابدأ هذه اللعبة من جديد',
      menuAria: 'فتح القائمة',
      score: 'النقاط',
      lv: 'المستوى',
      lives: 'الأرواح',
      gameArea: 'منطقة لعب Flow Quest',

      eyebrow: 'قصة من charity: water',
      lead: 'وجهان لمهمة واحدة: إيصال المياه النظيفة إلى من يحتاجونها. اختر دورك.',
      villager: 'ساكن القرية',
      villagerSub: 'يعيش بلا مياه نظيفة قريبة',
      villagerDesc: 'قريتك تجف. اجمع مياه المطر، وتجنّب المياه الملوثة، ونقِّ كل قطرة تحملها إلى البيت.',
      tagCatch: 'اجمع المطر',
      tagPurify: 'نقِّ المياه',
      tagGuard: 'تجنّب الحارس',
      playVillager: 'العب كساكن القرية',
      volunteer: 'متطوع المستودع',
      volunteerSub: 'يجهّز المياه للتوصيل',
      volunteerDesc: 'حمّل صناديق المياه النظيفة على الشاحنة قبل أن تنطلق إلى القرى. لا تدع صندوقًا مسرّبًا يصعد إليها.',
      tagTimer: 'سابق الوقت',
      tagInspect: 'افحص الصناديق',
      tagForklift: 'تفادَ الرافعة الشوكية',
      playVolunteer: 'العب كمتطوع',
      keysDesktop: 'تحرّك <kbd>←</kbd><kbd>→</kbd> أو <kbd>A</kbd><kbd>D</kbd> · اقفز <kbd>↑</kbd> أو <kbd>Space</kbd> · تفاعل <kbd>E</kbd> · إيقاف مؤقت <kbd>P</kbd>',
      keysTouch: 'استخدم الأزرار بالأسفل: ← → للتحرك، ↑ للقفز، واليد للتفاعل.',

      howTo: 'طريقة اللعب',
      helpVillager: 'طريقة اللعب: ساكن القرية',
      helpVolunteer: 'طريقة اللعب: متطوع المستودع',
      hv1: '<b>اجمع القطرات النظيفة</b> لملء الجالون (10 كحد أقصى).',
      hv2: '<b>تجنّب القطرات الملوثة.</b> تكلّفك قلبًا و<b>20 نقطة</b>.',
      hv3: '<b>استخدم الفلتر الرملي الحيوي</b> على الجسر لتحويل ما في الجالون إلى مياه نظيفة.',
      hv4: '<b>التقط النفايات</b> لتحصل على مكافأة تنظيف.',
      hv5: '<b>ابتعد عن المنطقة المحظورة.</b> سيعيدك الحارس وتخسر <b>25 نقطة</b>.',
      hv6: 'املأ خزان القرية حتى <b>100</b> لتنتقل إلى المستوى التالي. أكمل المستوى 5 لتفوز.',
      hw1: '<b>خذ الصناديق</b> من نهاية السير الناقل (حتى 3 في المرة).',
      hw2: '<b>حمّل الشاحنة</b> قبل انتهاء الوقت.',
      hw3: '<b>الصناديق المسرّبة</b> مكانها <b>حاوية إعادة التدوير</b>. تحميل أحدها يكلّفك <b>30 نقطة</b>.',
      hw4: '<b>اقفز فوق الرافعة الشوكية.</b> الاصطدام بها يكلّفك <b>25 نقطة</b> ويُسقط صناديقك.',
      hw5: '<b>البقع المسكوبة تبطئك.</b> تفاعل معها لمسحها والحصول على مكافأة.',
      hw6: 'كل شاحنة ممتلئة تنطلق إلى القرى. أرسل <b>5 شاحنات</b> لتفوز.',
      gotIt: 'فهمت',

      paused: 'إيقاف مؤقت',
      resume: 'متابعة',
      restart: 'إعادة البدء',
      switchRole: 'تغيير الدور',
      learnMore: 'تعرّف على charity: water',
      gameOver: 'انتهت اللعبة',
      wellDone: 'أحسنت',
      level: 'المستوى',
      playAgain: 'العب مجددًا',

      controls: 'التحكم',
      interact: 'تفاعل',
      jump: 'قفز',
      moveLeft: 'تحرّك يسارًا',
      moveRight: 'تحرّك يمينًا',
      dropDown: 'نزول',
      touchControls: 'أزرار اللمس',
      stCollect: 'الجمع',
      stDirty: 'مياه ملوثة',
      stFilter: 'التنقية',
      stClean: 'مياه نظيفة',
      stBelt: 'صندوق على السير',
      stCarry: 'الحمل',
      stLoaded: 'التحميل',
      stDelivered: 'التوصيل',

      // ----- role-specific labels -----
      barVillage: 'مياه القرية',
      barTruck: 'حمولة الشاحنة',
      progVillage: 'تقدّم الجمع / التنقية',
      progTruck: 'تقدّم التعبئة / التحميل / التوصيل',
      carryCan: 'الجالون',
      carrying: 'تحمل',
      herdLivestock: 'المواشي',
      herdTrucks: 'الشاحنات المرسلة',
      emptyTrucks: 'تظهر الشاحنات المُسلَّمة هنا',

      // ----- messages -----
      startVillage: 'اجمع القطرات الزرقاء النظيفة واحملها إلى الفلتر.',
      startWarehouse: 'خذ الصناديق من السير الناقل وحمّل الشاحنة.',
      resetPick: 'اختر دورًا لتبدأ اللعب.',
      resetDone: 'تمت إعادة الضبط. بداية جديدة!',
      winVillage: 'أصبح لدى القرية مصدر ثابت للمياه النظيفة. غدٌ أكثر إشراقًا يبدأ من هنا.',
      loseVillage: 'ما زالت القرية بحاجة إليك. كل قطرة مهمة. حاول مرة أخرى.',
      winWarehouse: 'خمس شاحنات من المياه النظيفة في طريقها إلى القرى. عمل رائع.',
      loseWarehouse: 'ما زالت الشاحنات تنتظر. كل صندوق مهم. حاول مرة أخرى.',
      restricted: 'منطقة محظورة. أعادك الحارس. −25 نقطة',
      polluted: 'مياه ملوثة. تجنّب القطرات البنية. −20 نقطة',
      canFull: 'امتلأ الجالون. خذه إلى الفلتر على الجسر.',
      canFullWarn: 'الجالون ممتلئ. نقِّه عند الجسر.',
      filtered: 'تمت التنقية. +{n} مياه نظيفة للقرية.',
      ranDry: 'جفّت مياه القرية. خسرت قلبًا وحيوانًا.',
      levelVillage: 'المستوى {n}. كبر القطيع، وأصبح المطر أغزر وأكثر تلوثًا.',
      filterBusy: 'الفلتر يعمل…',
      canEmpty: 'الجالون فارغ. اجمع بعض القطرات النظيفة أولًا.',
      filterRight: '→ اتجه يمينًا إلى الفلتر على الجسر',
      filterLeft: 'اتجه يسارًا إلى الفلتر على الجسر ←',
      forkliftDrop: 'اصطدام بالرافعة الشوكية. سقطت صناديقك. −25 نقطة',
      forkliftHit: 'اصطدام بالرافعة الشوكية. اقفز فوقها في المرة القادمة. −25 نقطة',
      levelTruck: 'المستوى {n}. شاحنة أكبر ورافعة أسرع.',
      truckLeft: 'غادرت الشاحنة وفيها {load}/{target} صناديق فقط.',
      casesFine: 'هذه الصناديق سليمة. حمّلها على الشاحنة.',
      onlyLeaking: 'الصناديق المسرّبة فقط تذهب إلى حاوية إعادة التدوير.',
      handsFull: 'يداك ممتلئتان. خذ هذه إلى الشاحنة.',
      waitingCase: 'بانتظار الصندوق التالي…',
      leakingHeld: 'هذا الصندوق يسرّب. ضعه في حاوية إعادة التدوير.',
      truckBusy: 'الشاحنة على الطريق. انتظر قليلًا.',
      handsEmpty: 'يداك فارغتان. خذ صناديق من السير الناقل.',
      leakLoaded: 'صعد صندوق مسرّب إلى الشاحنة. −{n} نقطة',
      truckFull: 'امتلأت الشاحنة وانطلقت إلى القرى. +{n}',
      truckRight: '→ اتجه يمينًا لتحميل الشاحنة',
      truckLeftDir: 'اتجه يسارًا لتحميل الشاحنة ←',
      beltRight: '→ خذ صناديق من السير الناقل',
      beltLeft: 'خذ صناديق من السير الناقل ←',

      // ----- status line -----
      sDelivered: 'وصلت المياه النظيفة إلى خزان القرية.',
      sPouring: 'صبّ المياه في الفلتر الرملي الحيوي…',
      sFiltering: 'تتم التنقية عبر الرمل والحصى…',
      sCanFull: 'الجالون ممتلئ. اذهب إلى الفلتر وتفاعل معه.',
      sKeepCatching: 'واصل الجمع، أو نقِّ المياه الآن عند الجسر.',
      sCatch: 'اجمع القطرات الزرقاء النظيفة لملء الجالون.',
      sTruckDelivered: 'وصلت الشاحنة. المياه النظيفة في الطريق.',
      sPulling: 'شاحنة جديدة تصل الآن…',
      sHoldingLeak: 'تحمل صندوقًا مسرّبًا. ضعه في حاوية إعادة التدوير.',
      sHandsFull: 'يداك ممتلئتان. حمّل الشاحنة.',
      sGrabMore: 'خذ المزيد، أو حمّل الشاحنة الآن.',
      sTruckNeeds: 'تحتاج الشاحنة إلى {n} صناديق أخرى · متبقٍ {s} ث',

      // ----- labels drawn in the game scene -----
      cVillage: 'القرية',
      cFilter: 'فلتر رملي حيوي',
      cSign1: 'منطقة',
      cSign2: 'محظورة',
      cDepot: 'مستودع المياه النظيفة',
      cPickUp: 'الاستلام',
      cRecycling: 'إعادة التدوير',
      cTruckSide: 'مياه نظيفة',
      cSlippery: 'زلق',
      cCases: '{a}/{b} صناديق',
      cSecs: '{n} ث',
      cOnWay: 'في الطريق إلى القرى',
      cPulling: 'تصل الآن…',
      cLeaving: 'تغادر…',
      pPurify: 'تنقية',
      pPickUp: 'التقاط',
      pKeepOut: 'ممنوع الدخول',
      pGrab: 'خذ صندوقًا',
      pRecycle: 'تدوير',
      pMop: 'مسح',
      pLoad: 'تحميل',
      pBeep: 'تنبيه',
      popCleanup: 'تنظيف +25',
      popWater: '+{n} مياه نظيفة',
      popLeaking: 'صندوق مسرّب',
      popCase: '+1 صندوق',
      popRecycled: 'تدوير +{n}',
      popMopped: 'مسح +10',
      popLoaded: '+{n} تم تحميلها',
      popLeakPenalty: '−{n} تسريب',
      popDropped: '−{n} صناديق',

      facts: [
        '100% من التبرعات العامة لـ charity: water تذهب مباشرةً لتمويل مشاريع المياه النظيفة.',
        'ما زال ملايين الناس حول العالم يعيشون دون الحصول على مياه شرب نظيفة.',
        'في كثير من المجتمعات، تقضي النساء والفتيات ساعات كل يوم في المشي لجلب المياه.',
        'المياه النظيفة القريبة من البيت تعني وقتًا أكثر للدراسة والعمل والعائلة.',
        'تستخدم الفلاتر الرملية الحيوية طبقات من الرمل والحصى لإزالة الأوساخ والكثير من الجراثيم من المياه.',
      ],
    },
  };

  const LANGS = { en: { dir: 'ltr' }, ar: { dir: 'rtl' } };
  let lang = 'en';
  try {
    const saved = localStorage.getItem('flowquest-lang');
    if (saved && STRINGS[saved]) lang = saved;
  } catch (_) { /* storage unavailable: stay in English */ }

  // Look up a string and fill in {placeholders}
  function t(key, vars) {
    let s = STRINGS[lang][key];
    if (s === undefined) s = STRINGS.en[key];
    if (s === undefined) return key;
    if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  }

  // Translate every marked element and set the page direction
  function applyPage() {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = LANGS[lang].dir;
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => { el.setAttribute('title', t(el.dataset.i18nTitle)); });
  }

  const listeners = [];
  function setLang(next) {
    if (!STRINGS[next]) return;
    lang = next;
    try { localStorage.setItem('flowquest-lang', lang); } catch (_) { /* ignore */ }
    applyPage();
    listeners.forEach((fn) => fn(lang));
  }

  window.I18N = {
    t,
    setLang,
    applyPage,
    onChange: (fn) => listeners.push(fn),
    get lang() { return lang; },
    get rtl() { return LANGS[lang].dir === 'rtl'; },
  };
})();
