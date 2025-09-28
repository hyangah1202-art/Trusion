// assets/js/popup.js
(function(){
  const modal   = document.getElementById('policy-modal');
  if (!modal) return;

  const titleEl = document.getElementById('pmodal-title');
  const bodyEl  = document.getElementById('pmodal-body');
  const closeBtn= modal.querySelector('.pmodal__close');
  let lastFocus = null;

  // 링크 클릭 → 팝업 열기
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[data-popup]');
    if(!a) return;
    e.preventDefault();
    openModal(a.dataset.popup, a.dataset.title || '');
  });

  function openModal(url, title){
    lastFocus = document.activeElement;
    titleEl.textContent = title;
    bodyEl.innerHTML = '불러오는 중…';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';

    fetch(url, {cache: 'no-store'})
      .then(r => r.text())
      .then(html => { bodyEl.innerHTML = html; })
      .catch(() => { bodyEl.innerHTML = '<p>내용을 불러올 수 없습니다.</p>'; });

    if (closeBtn) closeBtn.focus();
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  // 닫기 버튼 (X) 클릭 시 닫기
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // 바깥 클릭 시 닫기
  /* modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); }); */

  // ESC 키 닫기
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });



})();
