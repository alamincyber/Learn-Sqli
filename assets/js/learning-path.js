/* Learn cyber security — Learning Path (১০টি Stage, Checklist ও Progress) */
(function () {
  'use strict';

  var STORAGE_KEY = 'lcs-learning-progress-v1';
  var DOC_HUB = { title: 'Documentation তালিকা', url: '/documentation/' };
  var DOC_SQLI = { title: 'SQL Injection', url: '/documentation/Sqli/' };
  var DOC_XSS = { title: 'Cross-Site Scripting (XSS)', url: '/documentation/Xss/' };
  var DOC_CSRF = { title: 'CSRF', url: '/documentation/Csrf/' };

  var STAGES = [
    {
      title: 'Computer ও Internet Fundamentals',
      why: 'সিকিউরিটি আসলে "কোনো কিছু কীভাবে কাজ করে" তা বোঝার উপর দাঁড়িয়ে আছে। কম্পিউটার ও ইন্টারনেটের ভিত্তি না জানলে পরে কোনো Vulnerability-র কারণ বোঝা কঠিন হয়ে যায়।',
      objectives: [
        'একটি কম্পিউটার ও Operating System কীভাবে কাজ করে তা সহজ ভাষায় বলতে পারা',
        'ইন্টারনেটে একটি ওয়েবসাইট খোলার পুরো ধাপ ব্যাখ্যা করতে পারা',
        'Command Line-এ প্রাথমিক কমান্ড চালাতে পারা'
      ],
      topics: ['Operating System', 'Filesystem', 'Process ও Permission', 'Client ও Server', 'IP Address', 'DNS', 'TCP ও UDP', 'HTTP ও HTTPS', 'Browser Request', 'Command Line-এর প্রাথমিক ধারণা'],
      explanation: 'প্রথমে বুঝুন Client (যেমন আপনার ব্রাউজার) এবং Server (যেখানে ওয়েবসাইট থাকে) কীভাবে কথা বলে। আপনি যখন একটি ঠিকানা লেখেন, তখন DNS নামটিকে IP Address-এ রূপান্তর করে, TCP সংযোগ তৈরি হয়, তারপর HTTP/HTTPS দিয়ে অনুরোধ (Request) যায় এবং উত্তর (Response) ফিরে আসে। এই পুরো যাত্রা বোঝাই এই Stage-এর মূল লক্ষ্য।',
      resources: [
        { name: 'Cisco Networking Academy', url: 'https://www.netacad.com/', note: 'বেশ কিছু প্রাথমিক কোর্স বিনামূল্যে পাওয়া যায়; সব কোর্স বিনামূল্যে নয়।' },
        { name: 'MDN Web Docs — HTTP', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP', note: 'HTTP-এর নির্ভরযোগ্য ও বিনামূল্যের ডকুমেন্টেশন (ইংরেজি)।' },
        { name: 'TryHackMe', url: 'https://tryhackme.com/', note: 'শুরুর রুমগুলোর অনেকগুলো বিনামূল্যে; কিছু কনটেন্ট Paid।' }
      ],
      exercise: 'ব্রাউজারের Developer Tools-এর Network ট্যাব খুলে যেকোনো ওয়েবসাইট লোড করুন এবং একটি Request ও তার Response Header দেখে বাংলায় লিখে রাখুন।',
      project: 'এক পাতার একটি নোট লিখুন: "আমি ব্রাউজারে একটি ঠিকানা লিখলে কী কী ঘটে" — DNS, TCP ও HTTP ধাপসহ।',
      checklist: [
        'Client ও Server-এর পার্থক্য নিজের ভাষায় বলতে পারি',
        'IP Address ও DNS কী কাজ করে তা ব্যাখ্যা করতে পারি',
        'TCP ও UDP-এর মূল পার্থক্য বলতে পারি',
        'HTTP ও HTTPS-এর পার্থক্য বুঝি',
        'Browser Developer Tools-এ Network ট্যাব দেখতে পারি',
        'Terminal-এ প্রাথমিক কমান্ড চালাতে পারি',
        'Mini Project নোটটি সম্পন্ন করেছি'
      ],
      prerequisite: 'ইন্টারনেট ব্যবহারের অভিজ্ঞতা থাকলেই চলবে। পরের Stage-এ যাওয়ার আগে ওয়েবসাইট খোলার ধাপগুলো নিজের ভাষায় ব্যাখ্যা করতে পারতে হবে।',
      docs: [DOC_HUB]
    },
    {
      title: 'Linux ও Networking',
      why: 'বেশিরভাগ সার্ভার ও সিকিউরিটি টুল Linux-এ চলে। নেটওয়ার্কের ধারণা পরিষ্কার থাকলে Port, Protocol ও সংযোগ-সংক্রান্ত সমস্যা বিশ্লেষণ করা সহজ হয়।',
      objectives: [
        'Linux Terminal-এ ফাইল ও ডিরেক্টরি পরিচালনা করতে পারা',
        'File Permission পড়তে ও বুঝতে পারা',
        'Port, Protocol ও DNS Resolution ব্যাখ্যা করতে পারা'
      ],
      topics: ['Linux Fundamentals', 'Terminal Command', 'File ও Directory', 'File Permission', 'Process Management', 'Networking Basics', 'Ports ও Protocols', 'DNS Resolution', 'TCP Handshake-এর ধারণা', 'Basic Network Troubleshooting'],
      explanation: 'Linux-এ সবকিছু ফাইল হিসেবে দেখা হয় এবং প্রতিটি ফাইলের মালিক ও Permission আছে। নেটওয়ার্কে প্রতিটি সার্ভিস একটি নির্দিষ্ট Port-এ শোনে (যেমন HTTP সাধারণত 80, HTTPS 443)। TCP Handshake মানে সংযোগ শুরুর আগে দুই পক্ষের "হ্যালো-হ্যালো-ঠিক আছে" ধরনের তিন ধাপের যোগাযোগ।',
      resources: [
        { name: 'Linux Journey', url: 'https://linuxjourney.com/', note: 'বিনামূল্যে Linux শেখার ধাপভিত্তিক সাইট (ইংরেজি)।' },
        { name: 'OverTheWire — Bandit', url: 'https://overthewire.org/wargames/bandit/', note: 'Linux কমান্ড অনুশীলনের বিনামূল্যের গেম।' },
        { name: 'Cisco Networking Academy', url: 'https://www.netacad.com/', note: 'নেটওয়ার্কিংয়ের ভিত্তি; বিনামূল্যে ও Paid দুই ধরনের কোর্স আছে।' }
      ],
      exercise: 'Bandit Wargame-এর প্রথম কয়েকটি লেভেল সম্পন্ন করুন এবং প্রতিটি লেভেলে কোন কমান্ড কেন কাজ করল তা নোট করুন।',
      project: 'আপনার নিজের Linux মেশিনে (বা VM-এ) একটি ফোল্ডার বানিয়ে বিভিন্ন Permission সেট করুন এবং Permission বদলালে কী পরিবর্তন হয় তার একটি ছোট রিপোর্ট লিখুন।',
      checklist: [
        'ls, cd, cat, cp, mv, rm ইত্যাদি কমান্ড ব্যবহার করতে পারি',
        'File Permission (rwx) পড়তে পারি',
        'Process দেখা ও বন্ধ করার মূল ধারণা জানি',
        'Common Port ও তাদের Protocol চিনি',
        'DNS Resolution কীভাবে হয় ব্যাখ্যা করতে পারি',
        'TCP Handshake-এর ধারণা বলতে পারি',
        'ping, traceroute-এর মতো টুলের কাজ বুঝি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 1 সম্পন্ন থাকা ভালো। পরের Stage-এর আগে Terminal-এ স্বচ্ছন্দ হতে হবে।',
      docs: [DOC_HUB]
    },
    {
      title: 'Web Development Fundamentals',
      why: 'ওয়েব অ্যাপ কীভাবে তৈরি হয় না জানলে সেটি কীভাবে ভাঙা যায় বা সুরক্ষিত করা যায় তা বোঝা যায় না। বেশিরভাগ Vulnerability ডেভেলপমেন্টের ভুল থেকেই আসে।',
      objectives: [
        'একটি সাধারণ ওয়েব পেজ তৈরি করতে পারা',
        'HTTP Request-এর Method, Header, Cookie ও Session বোঝা',
        'REST API, JSON ও ডাটাবেসের প্রাথমিক ধারণা পাওয়া'
      ],
      topics: ['HTML', 'CSS', 'JavaScript Basics', 'Client-side ও Server-side', 'HTTP Methods', 'Headers', 'Cookies', 'Sessions', 'Authentication', 'REST API', 'JSON', 'SQL ও Database Basics'],
      explanation: 'HTML পেজের কাঠামো, CSS সাজসজ্জা এবং JavaScript আচরণ ঠিক করে। ব্রাউজারে (Client-side) যা চলে তা ব্যবহারকারী দেখতে ও বদলাতে পারে, আর সার্ভারে (Server-side) যা চলে তার উপরেই আসল নিরাপত্তা নির্ভর করে। Cookie ও Session দিয়ে সার্ভার বোঝে কোন অনুরোধটি কোন ব্যবহারকারীর।',
      resources: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', note: 'HTML, CSS, JavaScript ও HTTP-এর বিনামূল্যের নির্ভরযোগ্য গাইড।' },
        { name: 'SQLBolt', url: 'https://sqlbolt.com/', note: 'SQL শেখার বিনামূল্যের ইন্টারঅ্যাকটিভ পাঠ।' },
        { name: 'GitHub', url: 'https://github.com/', note: 'কোড রাখা ও পোর্টফোলিও তৈরির জন্য।' }
      ],
      exercise: 'একটি সাধারণ লগইন ফর্ম তৈরি করুন এবং Network ট্যাবে দেখুন ফর্ম জমা দিলে কোন Method, Header ও Body যায়।',
      project: 'HTML, CSS ও JavaScript দিয়ে একটি ছোট স্ট্যাটিক ওয়েবসাইট বানিয়ে GitHub Pages-এ প্রকাশ করুন।',
      checklist: [
        'একটি বেসিক HTML পেজ লিখতে পারি',
        'CSS দিয়ে পেজ সাজাতে পারি',
        'JavaScript দিয়ে সাধারণ ইন্টারঅ্যাকশন করতে পারি',
        'GET ও POST-এর পার্থক্য বুঝি',
        'Cookie ও Session কীভাবে কাজ করে ব্যাখ্যা করতে পারি',
        'JSON পড়তে ও লিখতে পারি',
        'একটি REST API Endpoint-এর কাজ বুঝি',
        'প্রাথমিক SELECT কোয়েরি লিখতে পারি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 1 ও 2-এর ধারণা থাকা প্রয়োজন। পরের Stage-এর আগে HTTP Request ও Response নিজে পড়ে বুঝতে পারতে হবে।',
      docs: [DOC_HUB]
    },
    {
      title: 'Web Security Fundamentals',
      why: 'নির্দিষ্ট Vulnerability শেখার আগে নিরাপত্তার মূল নীতিগুলো জানা দরকার, যাতে আপনি Payload মুখস্থ না করে সমস্যার মূল কারণ বুঝতে পারেন।',
      objectives: [
        'Authentication ও Authorization-এর পার্থক্য বোঝা',
        'কেন Input Validation ও Access Control জরুরি তা ব্যাখ্যা করা',
        'OWASP Top 10-এর ধারণা পাওয়া'
      ],
      topics: ['Authentication ও Authorization', 'Input Validation', 'Access Control', 'Session Security', 'Security Misconfiguration', 'Sensitive Data Exposure', 'OWASP Top 10', 'Secure Coding Fundamentals'],
      explanation: 'Authentication মানে "তুমি কে?" আর Authorization মানে "তুমি কী করতে পারো?"। ব্যবহারকারীর পাঠানো যেকোনো ইনপুটকে অবিশ্বস্ত ধরতে হবে এবং সার্ভারের দিকে যাচাই করতে হবে। OWASP Top 10 হলো ওয়েব অ্যাপের সবচেয়ে গুরুত্বপূর্ণ ঝুঁকির একটি পরিচিত তালিকা।',
      resources: [
        { name: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', note: 'বিনামূল্যে; সর্বাধিক গুরুত্বপূর্ণ ওয়েব ঝুঁকির তালিকা।' },
        { name: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/', note: 'নিরাপদ কোডিং ও প্রতিরোধের সংক্ষিপ্ত গাইড।' },
        { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', note: 'বিনামূল্যে একাউন্টে কোর্স ও Lab পাওয়া যায়।' }
      ],
      exercise: 'OWASP Top 10-এর প্রতিটি ঝুঁকির জন্য এক লাইনে বাংলায় লিখুন: এটি কী এবং একটি বাস্তব উদাহরণ।',
      project: 'নিজের তৈরি Stage 3-এর ওয়েবসাইট বা ছোট অ্যাপের জন্য একটি নিরাপত্তা চেকলিস্ট (Input, Session, Cookie, HTTPS) তৈরি করুন।',
      checklist: [
        'Authentication ও Authorization-এর পার্থক্য বলতে পারি',
        'Server-side Validation কেন জরুরি ব্যাখ্যা করতে পারি',
        'Access Control ভাঙলে কী ঘটতে পারে তা বুঝি',
        'Session ও Cookie নিরাপত্তার মূল ধারণা জানি',
        'Security Misconfiguration-এর উদাহরণ দিতে পারি',
        'OWASP Top 10 পড়েছি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 3 সম্পন্ন থাকা প্রয়োজন। পরের Stage-এর আগে HTTP Request বিশ্লেষণে স্বচ্ছন্দ হতে হবে।',
      docs: [DOC_HUB, DOC_SQLI, DOC_XSS, DOC_CSRF]
    },
    {
      title: 'Burp Suite ও Manual Testing',
      why: 'Burp Suite হলো ওয়েব সিকিউরিটি টেস্টিংয়ের সবচেয়ে বহুল ব্যবহৃত টুলগুলোর একটি। এটি দিয়ে আপনি ব্রাউজার ও সার্ভারের মাঝের Request-Response দেখতে ও বিশ্লেষণ করতে পারেন।',
      objectives: [
        'Burp Suite Proxy সেটআপ করে ট্রাফিক দেখতে পারা',
        'Repeater দিয়ে Request বদলে পাঠানো ও ফলাফল বিশ্লেষণ করা',
        'নিয়মমাফিক Manual Testing Workflow অনুসরণ করা'
      ],
      topics: ['Proxy', 'HTTP History', 'Request ও Response', 'Repeater', 'Intruder-এর মৌলিক ধারণা', 'Decoder', 'Parameters', 'Cookies', 'Headers', 'Session Testing', 'Manual Testing Workflow'],
      explanation: 'Proxy আপনার ব্রাউজারের ট্রাফিক মাঝপথে ধরে দেখায়। HTTP History-তে সব Request জমা থাকে। Repeater দিয়ে একই Request বারবার একটু বদলে পাঠিয়ে সার্ভারের আচরণ দেখা যায়। মনে রাখবেন: শুধু নিজের Lab বা অনুমোদিত Target-এই এই টুল ব্যবহার করতে হবে।',
      resources: [
        { name: 'Burp Suite ডকুমেন্টেশন', url: 'https://portswigger.net/burp/documentation', note: 'Community Edition বিনামূল্যে; Professional Paid।' },
        { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', note: 'Burp ব্যবহার করে করার মতো বিনামূল্যের Lab আছে।' },
        { name: 'OWASP Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/', note: 'টেস্টিং পদ্ধতির বিনামূল্যের গাইড (ইংরেজি)।' }
      ],
      exercise: 'PortSwigger-এর একটি সহজ Lab-এ Burp Proxy দিয়ে Request ধরে Repeater-এ পাঠিয়ে ফলাফল দেখুন এবং প্রতিটি ধাপ নোট করুন।',
      project: 'একটি অনুমোদিত Lab বা নিজের অ্যাপে একটি Request-এর প্রতিটি Parameter বিশ্লেষণ করে একটি ছোট "Request Analysis" নোট লিখুন।',
      checklist: [
        'Burp Suite ইনস্টল করে ব্রাউজারের সাথে Proxy সংযুক্ত করেছি',
        'HTTP History থেকে Request খুঁজে পড়তে পারি',
        'Repeater ব্যবহার করে Request বদলে পাঠাতে পারি',
        'Decoder দিয়ে Encoding বুঝতে পারি',
        'Cookie ও Header বিশ্লেষণ করতে পারি',
        'শুধু অনুমোদিত Target-এ টেস্ট করার নিয়ম মেনে চলি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 3 ও 4 সম্পন্ন থাকা প্রয়োজন। পরের Stage-এর আগে নিজে একটি Request বিশ্লেষণ করতে পারতে হবে।',
      docs: [DOC_HUB]
    },
    {
      title: 'Common Web Vulnerabilities',
      why: 'এখানে আপনি বাস্তবে সবচেয়ে বেশি দেখা যাওয়া ওয়েব Vulnerability-গুলো আলাদা আলাদা Module হিসেবে শিখবেন, যা পরে Bug Bounty ও Security Testing-এর মূল ভিত্তি হবে।',
      objectives: [
        'প্রতিটি Vulnerability-র কারণ, প্রভাব ও প্রতিরোধ ব্যাখ্যা করা',
        'অনুমোদিত Lab-এ নিরাপদে পরীক্ষা করা',
        'একটি পরিষ্কার Vulnerability Report-এর কাঠামো বোঝা'
      ],
      topics: ['SQL Injection', 'Cross-Site Scripting', 'IDOR ও Broken Access Control', 'Authentication Vulnerabilities', 'File Upload Vulnerabilities', 'Path Traversal', 'SSRF', 'Security Misconfiguration', 'Information Disclosure', 'Business Logic Vulnerabilities', 'Race Conditions'],
      explanation: 'প্রতিটি Module একই কাঠামোতে শিখুন: ১) Vulnerability কী, ২) কেন ঘটে, ৩) কোথায় দেখা যেতে পারে, ৪) অনুমোদিত Lab-এ কীভাবে পরীক্ষা করা হয়, ৫) Payload বা Test Input কেন কাজ করে, ৬) সম্ভাব্য Impact, ৭) Prevention, ৮) Reporting। এভাবে শিখলে Payload মুখস্থ না করে মূল কারণ বোঝা যায়।',
      extra: [
        { heading: 'SQL Injection', body: 'ইনপুট সরাসরি ডাটাবেস কোয়েরির অংশ হয়ে গেলে ঘটে। প্রতিরোধ: Parameterized Query।' },
        { heading: 'Cross-Site Scripting', body: 'ইনপুট ওয়েব পেজে অনিরাপদভাবে দেখানো হলে ব্রাউজারে স্ক্রিপ্ট চলতে পারে। প্রতিরোধ: Output Encoding ও CSP।' },
        { heading: 'IDOR ও Broken Access Control', body: 'সার্ভার যাচাই না করলে একজন ব্যবহারকারী অন্যের ডেটা দেখতে পারে। প্রতিরোধ: প্রতিটি অনুরোধে সার্ভার-সাইড Authorization।' },
        { heading: 'Authentication Vulnerabilities', body: 'দুর্বল লগইন, পাসওয়ার্ড রিসেট বা Session ব্যবস্থাপনার ত্রুটি। প্রতিরোধ: শক্ত পাসওয়ার্ড নীতি, Rate Limiting ও MFA।' },
        { heading: 'File Upload Vulnerabilities', body: 'ফাইল আপলোডে যথাযথ যাচাই না থাকলে ক্ষতিকর ফাইল সার্ভারে যেতে পারে। প্রতিরোধ: ধরন ও কনটেন্ট যাচাই, নিরাপদ স্টোরেজ।' },
        { heading: 'Path Traversal', body: 'ফাইলের পথে ব্যবহারকারীর ইনপুট থাকলে নির্ধারিত ফোল্ডারের বাইরের ফাইল পড়া যেতে পারে। প্রতিরোধ: পথ Normalize ও Allow-list।' },
        { heading: 'SSRF', body: 'সার্ভারকে দিয়ে ভেতরের বা অন্য সার্ভিসে অনুরোধ পাঠানো যায়। প্রতিরোধ: গন্তব্যের Allow-list ও নেটওয়ার্ক সীমাবদ্ধতা।' },
        { heading: 'Security Misconfiguration', body: 'ডিফল্ট সেটিং, অপ্রয়োজনীয় সার্ভিস বা বিস্তারিত Error বার্তা। প্রতিরোধ: Hardening ও নিয়মিত পর্যালোচনা।' },
        { heading: 'Information Disclosure', body: 'অসাবধানে সংবেদনশীল তথ্য প্রকাশ। প্রতিরোধ: Error ও Debug তথ্য সীমিত রাখা।' },
        { heading: 'Business Logic Vulnerabilities', body: 'অ্যাপের নিয়মের ফাঁক থেকে সৃষ্ট সমস্যা, যা টুলে ধরা কঠিন। প্রতিরোধ: ব্যবসায়িক নিয়ম যাচাই ও টেস্ট।' },
        { heading: 'Race Conditions', body: 'একই সময়ে একাধিক অনুরোধে অপ্রত্যাশিত ফল। প্রতিরোধ: Locking ও Atomic Operation।' }
      ],
      resources: [
        { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', note: 'প্রতিটি Module-এর জন্য বিনামূল্যের তত্ত্ব ও Lab।' },
        { name: 'OWASP Juice Shop', url: 'https://owasp.org/www-project-juice-shop/', note: 'নিজের কম্পিউটারে চালানো যায় এমন বিনামূল্যের ইচ্ছাকৃত দুর্বল অ্যাপ।' },
        { name: 'OWASP Cheat Sheet Series', url: 'https://cheatsheetseries.owasp.org/', note: 'প্রতিরোধের নির্দেশিকা।' }
      ],
      exercise: 'প্রতিটি Module-এর জন্য অন্তত একটি অনুমোদিত Lab সম্পন্ন করুন এবং কেন কাজ করল তা বাংলায় লিখুন।',
      project: 'একটি Lab বেছে নিয়ে সম্পূর্ণ Write-up লিখুন: সমস্যা, পরীক্ষার ধাপ, কারণ, Impact ও প্রতিরোধ।',
      checklist: [
        'SQL Injection-এর ধারণা ও প্রতিরোধ বুঝি',
        'XSS-এর ধরন ও প্রতিরোধ বুঝি',
        'IDOR ও Broken Access Control ব্যাখ্যা করতে পারি',
        'Authentication সংক্রান্ত দুর্বলতা চিনি',
        'File Upload ও Path Traversal-এর ঝুঁকি বুঝি',
        'SSRF-এর মূল ধারণা জানি',
        'Information Disclosure ও Misconfiguration চিনতে পারি',
        'Business Logic ও Race Condition-এর পার্থক্য বুঝি',
        'অন্তত একটি Lab সম্পন্ন করে Write-up লিখেছি'
      ],
      prerequisite: 'Stage 4 ও 5 সম্পন্ন থাকা প্রয়োজন। পরের Stage-এর আগে অন্তত কয়েকটি Vulnerability নিজে Lab-এ বুঝে করতে পারতে হবে।',
      docs: [DOC_SQLI, DOC_XSS, DOC_CSRF, DOC_HUB]
    },
    {
      title: 'API Security',
      why: 'আধুনিক অ্যাপ্লিকেশন প্রায় সবই API-নির্ভর। ওয়েব ও মোবাইল অ্যাপের পেছনের ডেটা API দিয়েই আসে, তাই API-র নিরাপত্তা অত্যন্ত গুরুত্বপূর্ণ।',
      objectives: [
        'REST API ও JSON পড়তে ও বুঝতে পারা',
        'API-র Authentication ও Authorization সমস্যা চিনতে পারা',
        'Burp Suite দিয়ে অনুমোদিত API টেস্ট করতে পারা'
      ],
      topics: ['API কী', 'REST API', 'JSON', 'HTTP Methods ও Status Codes', 'Authentication ও Authorization', 'API Keys ও Tokens', 'Object-level Authorization', 'Function-level Authorization', 'Mass Assignment', 'Rate Limiting', 'Excessive Data Exposure', 'API Documentation', 'Burp Suite দিয়ে API Testing', 'OWASP API Security Top 10'],
      explanation: 'API হলো দুটি সফটওয়্যারের কথা বলার নিয়ম। প্রতিটি অনুরোধে সার্ভারকে যাচাই করতে হয় ব্যবহারকারী ওই নির্দিষ্ট অবজেক্ট (Object-level) এবং ওই নির্দিষ্ট কাজ (Function-level) করার অনুমতি রাখে কি না। Mass Assignment মানে ব্যবহারকারীর পাঠানো অতিরিক্ত ফিল্ডও অ্যাপ গ্রহণ করে ফেলা।',
      resources: [
        { name: 'OWASP API Security Project', url: 'https://owasp.org/www-project-api-security/', note: 'বিনামূল্যে; API Security Top 10 সহ।' },
        { name: 'PortSwigger — API Testing', url: 'https://portswigger.net/web-security', note: 'বিনামূল্যের তত্ত্ব ও Lab (Web Security Academy-র অংশ)।' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', note: 'HTTP Method ও Status Code বোঝার জন্য।' }
      ],
      exercise: 'একটি অনুমোদিত Lab বা নিজের তৈরি ছোট API-তে Object-level Authorization যাচাই করুন এবং ফলাফল নোট করুন।',
      project: 'একটি ছোট REST API (যেকোনো ভাষায়) বানিয়ে তাতে Authentication, Authorization ও Rate Limiting যোগ করুন।',
      checklist: [
        'REST API ও JSON বুঝি',
        'Status Code-এর অর্থ জানি',
        'API Key ও Token-এর পার্থক্য বলতে পারি',
        'Object-level ও Function-level Authorization-এর পার্থক্য বুঝি',
        'Mass Assignment ও Excessive Data Exposure ব্যাখ্যা করতে পারি',
        'Rate Limiting কেন দরকার তা বুঝি',
        'OWASP API Security Top 10 পড়েছি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 3, 4 ও 6 সম্পন্ন থাকা প্রয়োজন। পরের Stage-এর আগে অন্তত একটি API Lab সম্পন্ন করতে হবে।',
      docs: [DOC_HUB]
    },
    {
      title: 'Bug Bounty Methodology',
      why: 'Bug Bounty মানে শুধু Vulnerability খোঁজা নয়; নিয়ম মেনে, Scope-এর ভেতরে থেকে, পরিষ্কার প্রমাণসহ রিপোর্ট করাও সমান গুরুত্বপূর্ণ। কোনো পুরস্কার বা আয়ের নিশ্চয়তা নেই।',
      objectives: [
        'Program Policy ও Scope সঠিকভাবে পড়া',
        'নিয়মমাফিক Reconnaissance ও Manual Testing করা',
        'পরিষ্কার ও দায়িত্বশীল Report লেখা'
      ],
      topics: ['Bug Bounty কী', 'Scope ও Out-of-scope', 'Program Policy', 'Reconnaissance-এর মৌলিক ধারণা', 'Asset Discovery', 'Manual Testing', 'Authentication ও Authorization Testing', 'Business Logic Testing', 'False Positive এড়ানো', 'Evidence সংগ্রহ', 'Impact ব্যাখ্যা', 'Report Writing', 'Responsible Disclosure'],
      explanation: 'প্রতিটি প্রোগ্রামের নিজস্ব নিয়ম ও Scope আছে। Scope-এর বাইরে কিছু পরীক্ষা করা যাবে না। কিছু পেলে তার প্রমাণ (Request, Response, ধাপ) সংরক্ষণ করুন, প্রকৃত Impact ব্যাখ্যা করুন এবং কেবল প্রোগ্রামের নির্ধারিত মাধ্যমে জানান। নিশ্চিত না হয়ে রিপোর্ট করলে False Positive হতে পারে।',
      resources: [
        { name: 'Hacker101', url: 'https://www.hacker101.com/', note: 'বিনামূল্যের ভিডিও ও অনুশীলন (ইংরেজি)।' },
        { name: 'PortSwigger Web Security Academy', url: 'https://portswigger.net/web-security', note: 'Manual Testing-এর দক্ষতার জন্য।' },
        { name: 'OWASP Web Security Testing Guide', url: 'https://owasp.org/www-project-web-security-testing-guide/', note: 'টেস্টিং পদ্ধতির বিনামূল্যের গাইড।' }
      ],
      exercise: 'একটি পাবলিক Bug Bounty বা Vulnerability Disclosure Policy পড়ে Scope, নিষিদ্ধ কাজ ও রিপোর্টিং নিয়ম বাংলায় সারাংশ করুন (কোনো পরীক্ষা ছাড়াই)।',
      project: 'আপনার পুরোনো একটি Lab Write-up নিয়ে সেটিকে একটি পূর্ণাঙ্গ Vulnerability Report ফরম্যাটে (সারাংশ, ধাপ, Impact, প্রতিকার) রূপ দিন।',
      checklist: [
        'Scope ও Out-of-scope-এর অর্থ বুঝি',
        'একটি Program Policy পুরোটা পড়েছি',
        'Reconnaissance-এর অনুমোদিত সীমা জানি',
        'False Positive কীভাবে এড়াতে হয় জানি',
        'Evidence কীভাবে সংরক্ষণ করতে হয় জানি',
        'Impact ব্যাখ্যা করার পদ্ধতি বুঝি',
        'Responsible Disclosure-এর নিয়ম মেনে চলার প্রতিশ্রুতি নিয়েছি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 5, 6 ও 7 সম্পন্ন থাকা প্রয়োজন। শুধুমাত্র অনুমোদিত প্রোগ্রামে অংশ নিন।',
      docs: [DOC_HUB]
    },
    {
      title: 'Advanced Specialization',
      why: 'মৌলিক ভিত্তি তৈরির পর আপনার আগ্রহ অনুযায়ী একটি বা একাধিক ক্ষেত্রে গভীরে যাওয়ার সময় এটি। সবগুলো একসাথে শেখার চেষ্টা না করে একটি বেছে নেওয়াই ভালো।',
      objectives: [
        'নিজের আগ্রহের ক্ষেত্র নির্বাচন করা',
        'নির্বাচিত ক্ষেত্রের পূর্বজ্ঞান ও শেখার ধারা বোঝা',
        'ওই ক্ষেত্রের অনুশীলনের রিসোর্স ব্যবহার করা'
      ],
      topics: ['Advanced Web Security', 'Advanced API Security', 'Penetration Testing ও Red Team', 'Blue Team ও SOC', 'Cloud Security', 'Digital Forensics', 'Malware Analysis', 'Reverse Engineering', 'Security Engineering'],
      explanation: 'প্রতিটি ক্ষেত্রের জন্য আলাদা পূর্বজ্ঞান লাগে। নিচের তালিকা দেখে নিজের আগ্রহ ও সময় অনুযায়ী একটি বেছে নিন এবং ধীরে ধীরে এগোন।',
      extra: [
        { heading: 'Advanced Web Security', body: 'পূর্বজ্ঞান: Stage 4–6। শিখবেন: জটিল Authentication, Business Logic, Client-side আক্রমণ। অনুশীলন: PortSwigger Web Security Academy (https://portswigger.net/web-security)।' },
        { heading: 'Advanced API Security', body: 'পূর্বজ্ঞান: Stage 7। শিখবেন: জটিল Authorization সমস্যা, GraphQL ও Token নিরাপত্তা। অনুশীলন: OWASP API Security Project।' },
        { heading: 'Penetration Testing ও Red Team', body: 'পূর্বজ্ঞান: Linux, Networking ও Web Security। শিখবেন: Pentest Methodology, Reporting ও অনুমোদিত পরিবেশে Adversary Simulation। অনুশীলন: TryHackMe, Hack The Box (উভয়েই Free ও Paid কনটেন্ট আছে)।' },
        { heading: 'Blue Team ও SOC', body: 'পূর্বজ্ঞান: Networking ও Linux। শিখবেন: Log বিশ্লেষণ, Alert Triage, Incident Response। অনুশীলন: TryHackMe-এর SOC সংক্রান্ত রুম।' },
        { heading: 'Cloud Security', body: 'পূর্বজ্ঞান: Networking ও Web Security। শিখবেন: Identity ও Access Management, Storage ও নেটওয়ার্ক Misconfiguration। অনুশীলন: flAWS (https://flaws.cloud/)।' },
        { heading: 'Digital Forensics', body: 'পূর্বজ্ঞান: Operating System ও Filesystem। শিখবেন: Disk ও Memory বিশ্লেষণ, Evidence সংরক্ষণ। অনুশীলন: TryHackMe-এর Forensics রুম।' },
        { heading: 'Malware Analysis', body: 'পূর্বজ্ঞান: Operating System, Networking ও প্রাথমিক Programming। শিখবেন: Static ও Dynamic Analysis নিরাপদ বিচ্ছিন্ন পরিবেশে। অনুশীলন: Malware Traffic Analysis (https://malware-traffic-analysis.net/)।' },
        { heading: 'Reverse Engineering', body: 'পূর্বজ্ঞান: Programming ও Computer Architecture-এর ধারণা। শিখবেন: Binary পড়া ও Debugging। অনুশীলন: Crackmes (https://crackmes.one/)।' },
        { heading: 'Security Engineering', body: 'পূর্বজ্ঞান: Programming ও Web Security। শিখবেন: Secure Design, Code Review ও Security Automation। অনুশীলন: OWASP ASVS (https://owasp.org/www-project-application-security-verification-standard/)।' }
      ],
      resources: [
        { name: 'TryHackMe', url: 'https://tryhackme.com/', note: 'বিভিন্ন ক্ষেত্রের রুম; Free ও Paid দুই ধরনের কনটেন্ট আছে।' },
        { name: 'Hack The Box', url: 'https://www.hackthebox.com/', note: 'Free ও Paid দুই ধরনের কনটেন্ট আছে।' },
        { name: 'OWASP', url: 'https://owasp.org/', note: 'বিভিন্ন প্রজেক্ট ও গাইডের বিনামূল্যের ভান্ডার।' }
      ],
      exercise: 'একটি ক্ষেত্র বেছে নিয়ে একটি ৪ সপ্তাহের শেখার পরিকল্পনা লিখুন এবং প্রথম সপ্তাহের কাজ শেষ করুন।',
      project: 'নির্বাচিত ক্ষেত্রে একটি ছোট প্রজেক্ট (যেমন একটি Lab Write-up বা টুল-পর্যালোচনা) সম্পন্ন করে GitHub-এ প্রকাশ করুন।',
      checklist: [
        'আমার আগ্রহের একটি ক্ষেত্র নির্বাচন করেছি',
        'ওই ক্ষেত্রের পূর্বজ্ঞান সম্পর্কে জেনেছি',
        'শেখার একটি পরিকল্পনা তৈরি করেছি',
        'অন্তত একটি অনুশীলন রিসোর্স ব্যবহার শুরু করেছি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'Stage 1–8 সম্পন্ন থাকা ভালো। পরের Stage-এর আগে নিজের একটি প্রজেক্ট বা Write-up থাকতে হবে।',
      docs: [DOC_HUB]
    },
    {
      title: 'Portfolio ও Career Preparation',
      why: 'দক্ষতা থাকলেও তা অন্যকে দেখাতে না পারলে সুযোগ কম আসে। পোর্টফোলিও, লেখা ও যোগাযোগ দক্ষতা আপনার কাজকে দৃশ্যমান করে। এটি চাকরি বা আয়ের নিশ্চয়তা দেয় না, শুধু প্রস্তুতি বাড়ায়।',
      objectives: [
        'একটি নিজস্ব GitHub পোর্টফোলিও তৈরি করা',
        'পরিষ্কার Technical Documentation ও Report লেখা',
        'নৈতিকতা ও পেশাদারিত্ব বজায় রাখা'
      ],
      topics: ['GitHub Portfolio', 'Technical Documentation', 'Lab Write-ups', 'Vulnerability Report', 'CV ও Resume', 'Interview Preparation', 'English Technical Reading', 'Communication Skills', 'Responsible Disclosure', 'Professional Ethics'],
      explanation: 'আপনার Lab Write-up, Documentation ও প্রজেক্ট একজায়গায় সাজিয়ে রাখুন। কোনো ডিগ্রি, সার্টিফিকেট বা অভিজ্ঞতা বাড়িয়ে লিখবেন না; যা সত্যিই করেছেন তা স্পষ্টভাবে লিখুন। ইংরেজি Technical লেখা পড়ার অভ্যাস গড়ুন, কারণ বেশিরভাগ রিসোর্স ইংরেজিতে।',
      resources: [
        { name: 'GitHub', url: 'https://github.com/', note: 'পোর্টফোলিও ও Write-up প্রকাশের জন্য বিনামূল্যের প্ল্যাটফর্ম।' },
        { name: 'Hacker101', url: 'https://www.hacker101.com/', note: 'Report লেখা ও Disclosure সংক্রান্ত বিনামূল্যের কনটেন্ট।' },
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', note: 'ইংরেজি Technical Reading অনুশীলনের জন্য।' }
      ],
      exercise: 'আপনার সেরা দুটি Lab Write-up বা প্রজেক্ট বেছে নিয়ে README সহ GitHub-এ প্রকাশ করুন।',
      project: 'একটি সংক্ষিপ্ত পোর্টফোলিও পেজ বা GitHub প্রোফাইল README তৈরি করুন যেখানে আপনার শেখার যাত্রা ও প্রজেক্টগুলো আছে।',
      checklist: [
        'GitHub-এ অন্তত একটি প্রজেক্ট বা Write-up প্রকাশ করেছি',
        'একটি Technical Documentation লিখেছি',
        'একটি Vulnerability Report-এর নমুনা লিখেছি',
        'CV বা Resume-এ কেবল সত্য তথ্য লিখেছি',
        'ইংরেজি Technical লেখা নিয়মিত পড়ার অভ্যাস শুরু করেছি',
        'Responsible Disclosure ও Professional Ethics মেনে চলার অঙ্গীকার করেছি',
        'Mini Project সম্পন্ন করেছি'
      ],
      prerequisite: 'আগের Stage-গুলোর কাজ থেকে দেখানোর মতো অন্তত একটি প্রজেক্ট বা Write-up থাকা প্রয়োজন।',
      docs: [DOC_HUB]
    }
  ];

  // ---------- Storage helpers (Local Storage কাজ না করলেও যেন পেজ চলে) ----------
  var memoryStore = {};
  var storageOk = true;

  function load() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') { memoryStore = parsed; }
      }
    } catch (e) { storageOk = false; }
  }

  function save() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryStore)); }
    catch (e) { storageOk = false; }
  }

  function bn(n) {
    return String(n).replace(/\d/g, function (d) { return '০১২৩৪৫৬৭৮৯'.charAt(Number(d)); });
  }

  function itemId(si, ci) { return 's' + si + '-c' + ci; }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (text !== undefined) { e.textContent = text; }
    return e;
  }

  function addList(parent, items, cls) {
    var ul = el('ul', cls || '');
    items.forEach(function (t) { ul.appendChild(el('li', '', t)); });
    parent.appendChild(ul);
  }

  function addHeading(parent, text) { parent.appendChild(el('h4', '', text)); }

  // ---------- Render ----------
  var root = document.getElementById('stages');
  var overallText = document.getElementById('overall-text');
  var overallBar = document.getElementById('overall-bar');
  var overallFill = overallBar ? overallBar.firstElementChild : null;
  var resetBtn = document.getElementById('reset-progress');
  var storageNote = document.getElementById('storage-note');
  if (!root) { return; }

  load();
  root.textContent = '';

  var totalItems = 0;
  STAGES.forEach(function (s) { totalItems += s.checklist.length; });

  STAGES.forEach(function (stage, si) {
    var details = el('details', 'stage');
    details.id = 'stage-' + (si + 1);

    var summary = el('summary');
    summary.appendChild(el('span', 'stage-num', bn(si + 1)));
    summary.appendChild(el('span', 'stage-title', 'Stage ' + bn(si + 1) + ': ' + stage.title));
    var meta = el('span', 'stage-meta');
    meta.setAttribute('data-meta', String(si));
    summary.appendChild(meta);
    details.appendChild(summary);

    var body = el('div', 'stage-body');

    addHeading(body, 'কেন এই Stage গুরুত্বপূর্ণ');
    body.appendChild(el('p', '', stage.why));

    addHeading(body, 'Learning Objectives');
    addList(body, stage.objectives);

    addHeading(body, 'কী কী শিখতে হবে');
    addList(body, stage.topics, 'chips');

    addHeading(body, 'সহজ বাংলা ব্যাখ্যা');
    body.appendChild(el('p', '', stage.explanation));

    if (stage.extra) {
      stage.extra.forEach(function (x) {
        var box = el('div', 'notice info');
        var p = el('p');
        p.appendChild(el('strong', '', x.heading + ': '));
        p.appendChild(document.createTextNode(x.body));
        box.appendChild(p);
        body.appendChild(box);
      });
    }

    addHeading(body, 'Free বা Freemium Learning Resources');
    var rl = el('ul', 'link-list');
    stage.resources.forEach(function (r) {
      var li = el('li');
      var a = el('a', '', r.name);
      a.href = r.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      li.appendChild(a);
      li.appendChild(document.createTextNode(' — ' + r.note));
      rl.appendChild(li);
    });
    body.appendChild(rl);

    addHeading(body, 'Practical Exercise');
    body.appendChild(el('p', '', stage.exercise));

    addHeading(body, 'Mini Project');
    body.appendChild(el('p', '', stage.project));

    addHeading(body, 'Completion Checklist');
    var cl = el('ul', 'checklist');
    stage.checklist.forEach(function (text, ci) {
      var id = itemId(si, ci);
      var li = el('li');
      var label = el('label');
      label.setAttribute('for', id);
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.id = id;
      input.checked = memoryStore[id] === true;
      input.addEventListener('change', function () {
        if (input.checked) { memoryStore[id] = true; } else { delete memoryStore[id]; }
        save();
        update();
      });
      label.appendChild(input);
      label.appendChild(el('span', '', text));
      li.appendChild(label);
      cl.appendChild(li);
    });
    body.appendChild(cl);

    addHeading(body, 'পরবর্তী Stage-এ যাওয়ার আগে কী জানা প্রয়োজন');
    body.appendChild(el('p', '', stage.prerequisite));

    addHeading(body, 'সম্পর্কিত Documentation');
    var dl = el('ul', 'link-list');
    stage.docs.forEach(function (d) {
      var li = el('li');
      var a = el('a', '', d.title);
      a.href = d.url;
      li.appendChild(a);
      dl.appendChild(li);
    });
    body.appendChild(dl);

    details.appendChild(body);
    root.appendChild(details);
  });

  // ---------- Progress calculation ----------
  function update() {
    var doneTotal = 0;
    STAGES.forEach(function (stage, si) {
      var done = 0;
      stage.checklist.forEach(function (_, ci) {
        if (memoryStore[itemId(si, ci)] === true) { done++; }
      });
      doneTotal += done;
      var node = document.getElementById('stage-' + (si + 1));
      var meta = root.querySelector('[data-meta="' + si + '"]');
      if (meta) { meta.textContent = bn(done) + '/' + bn(stage.checklist.length); }
      if (node) {
        // শুধু সব আইটেম সম্পন্ন হলেই Stage সম্পন্ন দেখাবে
        node.classList.toggle('done', done === stage.checklist.length);
      }
    });
    var percent = totalItems ? Math.round((doneTotal / totalItems) * 100) : 0;
    if (overallText) {
      overallText.textContent = 'মোট অগ্রগতি: ' + bn(doneTotal) + '/' + bn(totalItems) + ' (' + bn(percent) + '%)';
    }
    if (overallFill) { overallFill.style.width = percent + '%'; }
    if (overallBar) { overallBar.setAttribute('aria-valuenow', String(percent)); }
    if (storageNote) { storageNote.hidden = storageOk; }
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      var ok = window.confirm('আপনি কি সত্যিই আপনার সব অগ্রগতি মুছে ফেলতে চান? এটি আর ফেরানো যাবে না।');
      if (!ok) { return; }
      memoryStore = {};
      try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) { storageOk = false; }
      Array.prototype.forEach.call(root.querySelectorAll('input[type="checkbox"]'), function (c) { c.checked = false; });
      update();
    });
  }

  // URL hash দিয়ে নির্দিষ্ট Stage খুলুন
  if (window.location.hash.indexOf('#stage-') === 0) {
    var target = document.getElementById(window.location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') { target.open = true; }
  } else {
    var first = document.getElementById('stage-1');
    if (first) { first.open = true; }
  }

  update();
})();
