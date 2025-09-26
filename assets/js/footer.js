// ===== 저작권 연도 자동 적용 =====
(function(){
  const node = document.getElementById('copyYear');
  if (node && !node.textContent.trim()) {
    node.append(new Date().getFullYear());
  }
})();

// ===== 맨 위로 버튼 =====
(function(){
  const btn = document.querySelector('.to-top');
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 200) btn.classList.add('show');
    else btn.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, { passive:true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });
})();

// ===== 토스트 알림 =====
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500); // 2.5초 후 자동 사라짐
}

// ===== 복사 버튼 기능 =====
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = document.querySelector(btn.dataset.copy);
    if(target){
      navigator.clipboard.writeText(target.textContent.trim()).then(()=>{
        showToast('복사되었습니다: ' + target.textContent.trim());
      });
    }
  });
});

(function(){
  const sh = document.querySelector('.sticky-subheader');
  if(!sh) return;
  const onScroll = () => {
     if (window.scrollY > 4) sh.classList.add('elevated');
     else sh.classList.remove('elevated');
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();
})();
