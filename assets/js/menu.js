
// Simple active link helper
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu .nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if (href && href.indexOf(path) !== -1) a.classList.add('active');
  });
})();
