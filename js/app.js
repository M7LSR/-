(function () {
  var WEEK = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  var clock = document.getElementById('clock');
  var dateLine = document.getElementById('dateLine');
  var courseMeta = document.getElementById('courseMeta');
  var toastEl = document.getElementById('toast');
  var toastTimer = null;

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function greeting(h) {
    if (h < 5) return '夜深了';
    if (h < 11) return '早上好';
    if (h < 13) return '中午好';
    if (h < 18) return '下午好';
    return '晚上好';
  }

  function renderTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var dateText = (now.getMonth() + 1) + '月' + now.getDate() + '日 ' + WEEK[now.getDay()];

    clock.textContent = pad(h) + ':' + pad(m);
    dateLine.textContent = dateText + ' · ' + greeting(h);
    courseMeta.textContent = dateText.replace(' ', ' · ') + ' · 共 0 节';
  }

  function showToast(message) {
    if (!message) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove('show');
    }, 2000);
  }

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest('[data-toast]');
    if (!trigger) return;
    if (trigger.tagName === 'A') event.preventDefault();
    showToast(trigger.getAttribute('data-toast'));
  });

  var tabs = document.querySelectorAll('.tab:not(.fab-slot)');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (other) {
        other.classList.remove('active');
        other.removeAttribute('aria-current');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-current', 'page');
    });
  });

  renderTime();
  window.setInterval(renderTime, 30000);
})();