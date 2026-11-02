/* Learn cyber security — Documentation configuration
 * নতুন Documentation যোগ করতে নিচের DOCS তালিকায় একটি নতুন এন্ট্রি যোগ করুন।
 * (প্রতিটি url অবশ্যই /documentation/<ফোল্ডার>/ ফরম্যাটে এবং ফোল্ডারের ভেতরে index.html থাকতে হবে।)
 */
(function () {
  'use strict';

  var DOCS = [
    {
      title: 'Web Fundamental',
      short: 'Web Fundamentals',
      url: '/documentation/Http/',
      description: ''
    },
    {
      title: 'SQL Injection',
      short: 'SQLi',
      url: '/documentation/Sqli/',
      description: 'ডাটাবেস কোয়েরিতে ব্যবহারকারীর ইনপুট ভুলভাবে মেশানোর ফলে সৃষ্ট ঝুঁকি, তার প্রভাব এবং Parameterized Query দিয়ে প্রতিরোধ।'
    },
    {
      title: 'Cross-Site Scripting',
      short: 'XSS',
      url: '/documentation/Xss/',
      description: 'ওয়েব পেজে অনিরাপদভাবে ইনপুট দেখানোর কারণে ব্রাউজারে স্ক্রিপ্ট চলার ঝুঁকি এবং Output Encoding ও CSP দিয়ে প্রতিরোধ।'
    },
    {
      title: 'Cross-Site Request Forgery',
      short: 'CSRF',
      url: '/documentation/Csrf/',
      description: 'লগইন করা ব্যবহারকারীর ব্রাউজার দিয়ে তার অজান্তে অনুরোধ পাঠানোর ঝুঁকি এবং CSRF Token ও SameSite Cookie দিয়ে প্রতিরোধ।'
    }
  ];

  var path = window.location.pathname.replace(/index\.html$/, '');
  if (path.charAt(path.length - 1) !== '/') { path += '/'; }

  // ডকুমেন্টেশন নেভিগেশন (Navbar-এর নিচের বাটন-সদৃশ লিংক)
  var list = document.getElementById('doc-nav-list');
  if (list) {
    list.textContent = '';
    DOCS.forEach(function (doc) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = doc.url;
      a.textContent = doc.short;
      a.title = doc.title;
      if (path.toLowerCase() === doc.url.toLowerCase()) { a.setAttribute('aria-current', 'page'); }
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  // Documentation পেজের কার্ড তালিকা
  var cards = document.getElementById('doc-cards');
  if (cards) {
    cards.textContent = '';
    DOCS.forEach(function (doc) {
      var card = document.createElement('article');
      card.className = 'card';

      var tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = doc.short;

      var h3 = document.createElement('h3');
      var a = document.createElement('a');
      a.className = 'card-link';
      a.href = doc.url;
      a.textContent = doc.title;
      h3.appendChild(a);

      var p = document.createElement('p');
      p.textContent = doc.description;

      card.appendChild(tag);
      card.appendChild(h3);
      card.appendChild(p);
      cards.appendChild(card);
    });
  }
})();
