/* ============================================================
   吴奕芮 / Wu Yirui — Bilingual CV
   1) 中英双语切换  2) 移动端菜单  3) 交互问答  4) 复制与提示
   ============================================================ */

(function () {
  'use strict';

  /* ---------------- 文案字典 ---------------- */
  var I18N = {
    zh: {
      'nav.about': '关于', 'nav.education': '教育', 'nav.skills': '技能',
      'nav.experience': '经历', 'nav.chat': '聊聊', 'nav.contact': '联系',

      'hero.eyebrow': '双语简历 · Bilingual CV',
      'hero.name': '吴奕芮',
      'hero.tagline': '在语言与业务之间，做可靠的连接者。',
      'hero.sub': '香港理工大学 · 翻译与语言技术硕士在读 ｜ 外贸调度 · 英语教研 · 语言产品',
      'hero.meta1': '现居中国香港',
      'hero.meta2': '2026 年入学 · 硕士在读',
      'hero.meta3': '开放实习与全职机会',
      'hero.download': '下载 PDF 简历',
      'hero.contact': '联系我',
      'hero.caption': '吴奕芮 · 证件照',

      'common.present': '至今',

      'func.informative': '信息功能', 'func.informative2': '信息功能', 'func.informative3': '信息功能',
      'func.expressive': '表情功能',
      'func.phatic': '交际功能',
      'func.appellative': '感召功能',

      'about.title': '关于我',
      'about.p1': '我是吴奕芮，香港理工大学翻译与语言技术硕士在读，本科毕业于北京航空航天大学外国语言文学专业（GPA 3.63/4）。我的经历横跨外贸业务与语言教育：曾做外贸调度员，用英文邮件对接船长与客户，把 1000 多条船舶与货物数据归档为结构化台账；也在外研在线、万词王等语言产品团队实习，做过教学资源数字化、AI 发音测评内测与中考英语内容研发。',
      'about.p2': '我持有英语专业八级证书与初中英语教师资格证，曾以一作身份在 FBET 2024 发表全英论文。我相信语言的价值在“用上”——让一封邮件、一份单证、一堂课真正跑通。',
      'about.facts': '速览',
      'fact.loc': '所在地', 'fact.loc.v': '中国香港',
      'fact.pol': '政治面貌', 'fact.pol.v': '中共党员',
      'fact.edu': '学历', 'fact.edu.v': '硕士在读',
      'fact.target': '求职方向', 'fact.target.v': '外贸运营 · 翻译与本地化 · 英语教研',
      'about.honors': '荣誉与证书',
      'honor.tem8': '英语专业八级 · 71 良好',
      'honor.tem4': '英语专业四级 · 77 良好',
      'honor.cet': '大学英语四级 A 级 · 六级 B 级',
      'honor.contest': '2023 全国大学生英语翻译能力竞赛 · 省级三等奖',
      'honor.putonghua.tag': '普通话', 'honor.putonghua': '二级甲等证书',
      'honor.teacher.tag': '教资', 'honor.teacher': '初中英语教师资格证书',
      'honor.harvard': '哈佛大学线上全英公共卫生与医学导论研讨会 · 成绩 A+',
      'honor.paper': 'FBET 2024 全英一作论文《The Development of Gene Editing Technology and Controversial Issues》',

      'edu.title': '教育经历',
      'edu.polyu.name': '香港理工大学',
      'edu.polyu.degree': '翻译与语言技术 · 硕士在读',
      'edu.polyu.note': '聚焦翻译技术、语言数据与人工智能在语言服务中的应用。',
      'edu.buaa.name': '北京航空航天大学',
      'edu.buaa.degree': '外国语言文学 · 本科 · GPA 3.63/4',
      'edu.courses': '主修课程',
      'edu.buaa.courses': '基础口译、基础笔译、视听说、英语应用文写作、英语文学阅读、二外日语',
      'edu.minor': '辅修',
      'edu.buaa.minor': '生物医学与工程',

      'skills.title': '技能',
      'skills.lang': '语言能力',
      'skill.l1': '中文 · 母语', 'skill.l2': '英语 · TEM-8 / TEM-4',
      'skill.l3': '日语 · 第二外语', 'skill.l4': '普通话 · 二级甲等',
      'skills.trans': '翻译与内容',
      'skill.t1': '基础口译 / 笔译', 'skill.t2': '商务英文邮件',
      'skill.t3': '文稿撰写与公文写作', 'skill.t4': '课件与公众号制作',
      'skills.tools': '工具',
      'skill.to3': 'Excel 数据台账', 'skill.to4': 'AI 发音测评内测',
      'skills.biz': '业务与综合',
      'skill.b1': '外贸单证与船舶调度', 'skill.b2': '流程搭建与信息归档',
      'skill.b3': '教研与课程设计', 'skill.b4': '跨团队沟通协调',

      'exp.title': '我的经历，我的收获',
      'exp.intro': '不只是岗位与职责——每段经历让我成为了怎样的人，我写在这里。',
      'exp.featured': '重点经历',
      'exp.f.title': '外贸调度员',
      'exp.f.org': '广州启航物联佳业集团有限公司',
      'exp.f.p1': '负责船代单证与船舶调度：完成船舶文件的收集与整理，以英文邮件对接船长与客户，统筹货物运输全程。',
      'exp.f.p2': '搭建结构化业务台账：归档 8+ 艘进口海船、1000+ 条业务数据（涵盖 IMO、提单、货量吨数、报关单号等 15+ 字段）；维护驳船动态表，规范归档 500+ 票钢坯货物数据。',
      'exp.f.p3': '承担资源分配、流程搭建与信息传达，倾听并协调团队成员协作。',
      'exp.s1': '艘进口海船', 'exp.s2': '条业务数据', 'exp.s3': '个台账字段', 'exp.s4': '票钢坯货物',
      'exp.f.voice': '这段经历让我懂得：在多方协作的运输链条里，语言不只是翻译，更是让流程跑通的工具。一封措辞准确的英文邮件、一张字段清晰的台账，往往就是船期不延误的关键。',

      'exp.internships': '实习经历',
      'exp.i1.title': '英语教研实习生',
      'exp.i1.org': '外研在线（外研社）',
      'exp.i1.desc': '负责教学资源的数字化录入与分类归档，完成 200+ 项资源的集中化管理；参与 AI 发音测评前端内测，记录数据异常并形成报告，助力算法优化。',
      'exp.i1.voice': '第一次近距离看到语言教学被 AI 重新定义——这也让我下定决心走进语言技术。',
      'exp.i2.title': '语言部实习生',
      'exp.i2.org': '完美世界 · 万词王 APP',
      'exp.i2.desc': '整理中考英语题型并解析考点，对他人整理的资料进行二审把关。',
      'exp.i2.voice': '在真实的语言学习产品里，我学会了对内容质量负责：一个考点的偏差，影响的是成千上万的学生。',
      'exp.i3.title': '助教',
      'exp.i3.org': '假日南星学校',
      'exp.i3.desc': '协助教学与答疑，跟进学生与家长的沟通。',
      'exp.i3.voice': '第一次站上讲台，我学会把知识点讲成学生听得懂的话。',

      'exp.campus': '在校经历',
      'exp.c1.title': '支教老师 / 班主任',
      'exp.c1.org': '育暖航行实践队（湘西、川西山区）',
      'exp.c1.desc': '独立设计课件与课程，为山区学生提供英语教学与心理辅导，参与乡村调研，志愿时长 180+ 小时。',
      'exp.c2.title': '院党校实践部 · 干事',
      'exp.c2.org': '北京航空航天大学',
      'exp.c2.desc': '审查各小班红色剧本并指导改进，监督情景剧制作与评分，协助部长分配、传达任务。',
      'exp.c3.title': '班级心理委员',
      'exp.c3.org': '北京航空航天大学',
      'exp.c3.desc': '策划组织多场主题心理班会，协助学院推广心理辅导活动。',

      'chat.title': '聊聊？',
      'chat.intro': '点一个你想问的问题，我会在这里回答；也可以直接留言，我会通过邮件回复你。',
      'chat.greeting': '你好，我是吴奕芮。很高兴在这里见到你，有什么想了解的都可以问我：',
      'chat.q1': '你在找什么机会？',
      'chat.q2': '为什么读翻译与语言技术？',
      'chat.q3': '外贸调度的工作是什么样的？',
      'chat.q4': '你的英语水平怎么样？',
      'chat.q5': '什么时候可以入职？',
      'chat.placeholder': '写下你的问题或留言…',
      'chat.freeReply': '谢谢你的留言！这是一个静态网站，我没法在这里实时收到消息——点击下面的按钮，会自动帮你写好邮件：',
      'chat.emailBtn': '通过邮件继续',
      'chat.empty': '先写点内容再发送哦～',

      'contact.title': '期待与你合作',
      'contact.intro': '下载完整简历，或通过邮件、电话联系我——我通常会在 24 小时内回复。',
      'contact.download': '下载 PDF 简历',
      'contact.loc': '现居中国香港 · 可远程协作',

      'footer.name': '吴奕芮',
      'footer.built': '以 HTML / CSS / JavaScript 手工构建',

      'toast.phone': '电话号码已复制到剪贴板',
      'chat.answers': {
        q1: '我目前对三类机会最感兴趣：外贸 / 跨境运营、翻译与本地化、英语教研与语言产品。实习、项目合作与全职都欢迎，地点以香港、粤港澳大湾区为主，也接受远程协作。',
        q2: '在外研在线参与 AI 发音测评内测时，我亲眼看到语言教学正在被技术重塑。我希望系统地学习语言技术，而不只是做它的使用者——翻译与语言技术，恰好把我本科的语言功底、对工具的敏感，还有外贸业务里练出来的实战沟通连在了一起。',
        q3: '像一场跨国接力：船还没到港，我就要核对 IMO、提单、货量与报关单，用英文邮件和船长、客户确认每个节点。最忙的时候，我同时维护着 8 艘海船、1000 多条数据的台账。这份工作教会我：在压力下，细节的准确就是一切。',
        q4: '英语专业八级 71 分、四级 77 分，大学英语四六级分别为 A、B；工作中我每天用英文写邮件、核对单证，也以一作身份在 FBET 2024 发表过全英论文。另外我持有普通话二甲证书，日语是我的第二外语。',
        q5: '我目前在香港理工大学全日制读硕士，期间可以参加实习与项目合作，毕业后可全职入职。如果是合适的机会，我们可以先聊聊时间安排，欢迎邮件联系我。'
      }
    },

    en: {
      'nav.about': 'About', 'nav.education': 'Education', 'nav.skills': 'Skills',
      'nav.experience': 'Experience', 'nav.chat': 'Chat', 'nav.contact': 'Contact',

      'hero.eyebrow': 'Bilingual CV · 双语简历',
      'hero.name': 'Wu Yirui',
      'hero.tagline': 'A reliable bridge between languages and business.',
      'hero.sub': 'MA Candidate in Translation & Language Technology, PolyU · Foreign Trade Operations · English EdTech · Language Products',
      'hero.meta1': 'Based in Hong Kong SAR',
      'hero.meta2': 'MA intake 2026',
      'hero.meta3': 'Open to internships & full-time roles',
      'hero.download': 'Download CV (PDF)',
      'hero.contact': 'Contact me',
      'hero.caption': 'Wu Yirui',

      'common.present': 'Present',

      'func.informative': 'Informative', 'func.informative2': 'Informative', 'func.informative3': 'Informative',
      'func.expressive': 'Expressive',
      'func.phatic': 'Phatic',
      'func.appellative': 'Appellative',

      'about.title': 'About',
      'about.p1': 'I’m Wu Yirui, an MA candidate in Translation and Language Technology at The Hong Kong Polytechnic University, with a BA in Foreign Languages and Literature from Beihang University (GPA 3.63/4). My experience spans foreign trade and language education: I worked as a foreign trade dispatcher, corresponding with captains and clients in English and turning 1,000+ vessel and cargo records into structured ledgers; I also interned at language-product teams including Unipus and Word Master, working on digital teaching resources, AI pronunciation-assessment beta testing, and exam content development.',
      'about.p2': 'I hold TEM-8 and a junior-high English teacher qualification, and published a first-author English paper at FBET 2024. I believe language earns its worth by being put to work — making an email, a document, or a lesson actually run.',
      'about.facts': 'Quick facts',
      'fact.loc': 'Location', 'fact.loc.v': 'Hong Kong SAR, China',
      'fact.pol': 'Political status', 'fact.pol.v': 'Member of the CPC',
      'fact.edu': 'Education', 'fact.edu.v': 'MA candidate',
      'fact.target': 'Looking for', 'fact.target.v': 'Foreign trade ops · Translation & localization · English teaching',
      'about.honors': 'Honors & certificates',
      'honor.tem8': 'TEM-8 (Test for English Majors, Band 8) · 71, Good',
      'honor.tem4': 'TEM-4 · 77, Good',
      'honor.cet': 'CET-4 Grade A · CET-6 Grade B',
      'honor.contest': 'National College English Translation Competition (2023) · Provincial 3rd Prize',
      'honor.putonghua.tag': 'Putonghua', 'honor.putonghua': 'Level 2-A Certificate',
      'honor.teacher.tag': 'Teaching', 'honor.teacher': 'Junior High English Teacher Qualification Certificate',
      'honor.harvard': 'Harvard online seminar: Public Health & Medical Introduction (in English) · Grade A+',
      'honor.paper': 'First-author paper (FBET 2024): “The Development of Gene Editing Technology and Controversial Issues”',

      'edu.title': 'Education',
      'edu.polyu.name': 'The Hong Kong Polytechnic University',
      'edu.polyu.degree': 'MA in Translation & Language Technology · Candidate',
      'edu.polyu.note': 'Focus: translation technology, language data, and AI in language services.',
      'edu.buaa.name': 'Beihang University (BUAA)',
      'edu.buaa.degree': 'BA in Foreign Languages and Literature · GPA 3.63/4',
      'edu.courses': 'Main courses',
      'edu.buaa.courses': 'Foundation Interpreting, Foundation Translation, Viewing–Listening–Speaking, Practical English Writing, English Literature, Japanese as L2',
      'edu.minor': 'Minor',
      'edu.buaa.minor': 'Biomedicine and Engineering',

      'skills.title': 'Skills',
      'skills.lang': 'Languages',
      'skill.l1': 'Chinese · Native', 'skill.l2': 'English · TEM-8 / TEM-4',
      'skill.l3': 'Japanese · Second foreign language', 'skill.l4': 'Putonghua · Level 2-A',
      'skills.trans': 'Translation & Content',
      'skill.t1': 'Interpreting / Translation', 'skill.t2': 'Business English correspondence',
      'skill.t3': 'Documents & formal writing', 'skill.t4': 'Courseware & WeChat articles',
      'skills.tools': 'Tools',
      'skill.to3': 'Excel data ledgers', 'skill.to4': 'AI pronunciation beta testing',
      'skills.biz': 'Business & Soft Skills',
      'skill.b1': 'Shipping docs & vessel scheduling', 'skill.b2': 'Process design & data archiving',
      'skill.b3': 'Teaching research & course design', 'skill.b4': 'Cross-team coordination',

      'exp.title': 'My experience, in my own words',
      'exp.intro': 'Beyond titles and duties — what each role made of me, and what I carried away.',
      'exp.featured': 'Featured',
      'exp.f.title': 'Foreign Trade Dispatcher',
      'exp.f.org': 'Guangzhou Qihang IoT Jiayeh Group Co., Ltd.',
      'exp.f.p1': 'Handled ship-agency documents and vessel scheduling: collected and organised vessel paperwork, liaised with captains and clients in English, and coordinated the cargo journey end to end.',
      'exp.f.p2': 'Built structured business ledgers: archived 8+ imported seagoing vessels and 1,000+ records across 15+ fields (IMO numbers, bills of lading, tonnage, customs declaration numbers); maintained the barge-status sheet and standardised 500+ steel-billet shipments.',
      'exp.f.p3': 'Took charge of resource allocation, process design and information flow — listening closely and coordinating team members.',
      'exp.s1': 'imported vessels', 'exp.s2': 'business records', 'exp.s3': 'ledger fields', 'exp.s4': 'steel-billet shipments',
      'exp.f.voice': 'It taught me that in a multi-party shipping chain, language is not just translation — it’s what keeps the process running. One precise English email, one clean ledger field, can be the difference between a vessel sailing on time or not.',

      'exp.internships': 'Internships',
      'exp.i1.title': 'English Teaching & Research Intern',
      'exp.i1.org': 'Unipus (FLTRP Online)',
      'exp.i1.desc': 'Digitised, catalogued and archived teaching resources, centralising 200+ items; joined the front-end beta of an AI pronunciation-assessment tool, documenting data anomalies in reports that fed algorithm optimisation.',
      'exp.i1.voice': 'My first close look at AI reshaping language teaching — and the reason I decided to study language technology.',
      'exp.i2.title': 'Language Department Intern',
      'exp.i2.org': 'Perfect World · Word Master App',
      'exp.i2.desc': 'Organised Zhongkao English question types and analysed exam points; reviewed and quality-checked materials prepared by colleagues.',
      'exp.i2.voice': 'Working on a real language-learning product taught me accountability: one misstated exam point reaches tens of thousands of students.',
      'exp.i3.title': 'Teaching Assistant',
      'exp.i3.org': 'Jiari Nanxing School',
      'exp.i3.desc': 'Supported teaching and Q&A, and maintained communication with students and parents.',
      'exp.i3.voice': 'My first time in front of a class — I learned to turn knowledge points into words students could actually understand.',

      'exp.campus': 'Campus experience',
      'exp.c1.title': 'Volunteer Teacher / Homeroom Teacher',
      'exp.c1.org': 'Yunuan Hangxing Team (mountain schools, W. Hunan & W. Sichuan)',
      'exp.c1.desc': 'Designed courseware and lessons independently; taught English and ran psychological counselling; joined rural fieldwork — 180+ volunteer hours.',
      'exp.c2.title': 'Officer, Party School Practice Department',
      'exp.c2.org': 'Beihang University',
      'exp.c2.desc': 'Reviewed and guided student scripts, supervised stage productions and scoring, and helped assign and communicate tasks.',
      'exp.c3.title': 'Class Psychology Committee Member',
      'exp.c3.org': 'Beihang University',
      'exp.c3.desc': 'Planned themed class meetings and helped promote counselling activities.',

      'chat.title': 'Let’s chat',
      'chat.intro': 'Pick a question below and I’ll answer here — or leave a message and I’ll reply by email.',
      'chat.greeting': 'Hi, I’m Wu Yirui. Lovely to meet you here — ask me anything:',
      'chat.q1': 'What opportunities are you looking for?',
      'chat.q2': 'Why Translation & Language Technology?',
      'chat.q3': 'What was the dispatcher job like?',
      'chat.q4': 'How is your English?',
      'chat.q5': 'When can you start?',
      'chat.placeholder': 'Type your question or message…',
      'chat.freeReply': 'Thanks for your message! This is a static site, so I can’t receive messages here — tap the button below and it’ll draft an email for you:',
      'chat.emailBtn': 'Continue by email',
      'chat.empty': 'Please type a message first.',

      'contact.title': 'Let’s work together',
      'contact.intro': 'Download my full CV or reach me by email or phone — I usually reply within 24 hours.',
      'contact.download': 'Download CV (PDF)',
      'contact.loc': 'Based in Hong Kong · Remote-friendly',

      'footer.name': 'Wu Yirui',
      'footer.built': 'Hand-built with HTML / CSS / JavaScript',

      'toast.phone': 'Phone number copied to clipboard',
      'chat.answers': {
        q1: 'I’m most interested in three areas: foreign trade / cross-border operations, translation & localization, and English teaching-research or language products. I’m open to internships, project collaboration and full-time roles — ideally in Hong Kong or the Greater Bay Area, and I’m happy to work remotely.',
        q2: 'While beta-testing an AI pronunciation-assessment tool at Unipus, I saw language teaching being reshaped by technology. I wanted to study language technology systematically, not just use it. Translation & Language Technology connects my language training, my comfort with tools, and the hands-on communication I learned in foreign trade.',
        q3: 'Like a cross-border relay: before a vessel even docked, I’d check IMO numbers, bills of lading, tonnage and customs forms — confirming every node over email with captains and clients. At peak times I maintained ledgers for 8 vessels and 1,000+ records. It taught me that under pressure, accuracy in the details is everything.',
        q4: 'I scored 71 on TEM-8 and 77 on TEM-4, with Grade A on CET-4 and Grade B on CET-6. I wrote English emails and checked shipping documents daily at work, and published a first-author English paper at FBET 2024. I also hold a Putonghua Level 2-A certificate, and studied Japanese as my second foreign language.',
        q5: 'I’m studying full-time at PolyU and available for internships and project collaboration during my studies, with full-time availability after graduation. For the right opportunity, let’s talk about timing — feel free to email me.'
      }
    }
  };

  var EMAIL = '15823960138@163.com';
  var PHONE = '15823960138';

  /* ---------------- 语言状态 ---------------- */
  var lang = localStorage.getItem('wy-lang') || 'zh';
  if (lang !== 'en' && lang !== 'zh') lang = 'zh';

  function t(key) {
    var v = I18N[lang][key];
    return (typeof v === 'undefined') ? (I18N.en[key] || key) : v;
  }

  function applyLanguage() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.classList.toggle('lang-en', lang === 'en');

    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (typeof val === 'string') el.textContent = val;
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n-placeholder]'), function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.querySelectorAll('.lang-opt').forEach(function (opt) {
      opt.classList.toggle('active', opt.getAttribute('data-lang-opt') === lang);
    });

    renderChat();
  }

  document.getElementById('langToggle').addEventListener('click', function () {
    lang = lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('wy-lang', lang);
    applyLanguage();
  });

  /* ---------------- 移动端菜单 ---------------- */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------------- Toast ---------------- */
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  function copyText(text, okMsg) {
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast(okMsg); } catch (e) { showToast(text); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { showToast(okMsg); }, fallback);
    } else { fallback(); }
  }

  document.getElementById('copyPhone').addEventListener('click', function () {
    copyText(PHONE, t('toast.phone'));
  });

  /* ---------------- 交互问答（寒暄/交际功能） ---------------- */
  var chatStream = document.getElementById('chatStream');
  var chatForm = document.getElementById('chatForm');
  var chatText = document.getElementById('chatText');
  var chatChips = document.getElementById('chatChips');

  // 消息历史：{ role:'bot'|'user', type:'greeting'|'answer'|'free', q?:'q1', text?:string }
  var chatHistory = [{ role: 'bot', type: 'greeting' }];

  function avatarChar(role) {
    return role === 'user' ? (lang === 'zh' ? '你' : 'You') : '吴';
  }

  function buildBubble(msg) {
    var row = document.createElement('div');
    row.className = 'msg ' + (msg.role === 'user' ? 'msg-user' : 'msg-bot');

    var av = document.createElement('div');
    av.className = 'msg-avatar';
    av.setAttribute('aria-hidden', 'true');
    av.textContent = avatarChar(msg.role);

    var bubble = document.createElement('div');
    bubble.className = 'msg-bubble';

    if (msg.role === 'user') {
      bubble.textContent = msg.text;
    } else if (msg.type === 'greeting') {
      bubble.textContent = t('chat.greeting');
    } else if (msg.type === 'answer') {
      bubble.textContent = I18N[lang]['chat.answers'][msg.q];
    } else if (msg.type === 'free') {
      var p = document.createElement('span');
      p.textContent = t('chat.freeReply');
      bubble.appendChild(p);
      var link = document.createElement('a');
      link.className = 'bubble-action';
      var subject = encodeURIComponent(lang === 'zh' ? '简历联系 — 吴奕芮' : 'Regarding your CV — Wu Yirui');
      var body = encodeURIComponent(msg.text + '\n\n— ' + (lang === 'zh' ? '来自个人网站的留言' : 'Message from the personal website'));
      link.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
      link.textContent = t('chat.emailBtn') + ' →';
      var br = document.createElement('br');
      bubble.appendChild(br);
      bubble.appendChild(link);
    }

    row.appendChild(av);
    row.appendChild(bubble);
    return row;
  }

  function renderChat() {
    chatStream.innerHTML = '';
    chatHistory.forEach(function (msg) {
      chatStream.appendChild(buildBubble(msg));
    });
    chatStream.scrollTop = chatStream.scrollHeight;
  }

  function showTypingThen(done) {
    var row = document.createElement('div');
    row.className = 'msg msg-bot';
    row.setAttribute('data-typing', '1');
    var av = document.createElement('div');
    av.className = 'msg-avatar';
    av.setAttribute('aria-hidden', 'true');
    av.textContent = '吴';
    var bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    var typing = document.createElement('span');
    typing.className = 'typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    bubble.appendChild(typing);
    row.appendChild(av);
    row.appendChild(bubble);
    chatStream.appendChild(row);
    chatStream.scrollTop = chatStream.scrollHeight;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setTimeout(function () {
      row.remove();
      done();
    }, reduce ? 120 : 650);
  }

  function answerChip(q, btn) {
    chatHistory.push({ role: 'user', type: 'answer', text: t('chat.' + q) });
    chatChips.querySelectorAll('.chip').forEach(function (b) {
      if (b.getAttribute('data-q') === q) b.disabled = true;
    });
    renderChat();
    showTypingThen(function () {
      chatHistory.push({ role: 'bot', type: 'answer', q: q });
      renderChat();
    });
    if (btn) btn.blur();
  }

  chatChips.addEventListener('click', function (e) {
    var btn = e.target.closest('.chip');
    if (!btn) return;
    answerChip(btn.getAttribute('data-q'), btn);
  });

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = chatText.value.trim();
    if (!text) { showToast(t('chat.empty')); return; }
    chatHistory.push({ role: 'user', type: 'free', text: text });
    chatText.value = '';
    renderChat();
    showTypingThen(function () {
      chatHistory.push({ role: 'bot', type: 'free', text: text });
      renderChat();
    });
  });

  /* ---------------- 滚动揭示 ---------------- */
  var revealTargets = document.querySelectorAll('.sec-head, .about-grid, .honors, .edu-item, .skill-card, .feature-card, .t-item, .campus-item, .chat-panel, .contact-actions');
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- 初始化 ---------------- */
  applyLanguage();
})();
