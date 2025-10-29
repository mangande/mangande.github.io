
(function(){
  const root = document.documentElement;
  const key = 'theme';
  const stored = localStorage.getItem(key);
  if(stored){ root.classList.toggle('light', stored === 'light'); }
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem(key, isLight ? 'light' : 'dark');
    });
  }
})();

// Experience section hover functionality
(function(){
  const companyGroups = document.querySelectorAll('.company-group');
  
  companyGroups.forEach(group => {
    let hoverTimeout;
    
    group.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      group.classList.add('expanded');
    });
    
    group.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => {
        group.classList.remove('expanded');
      }, 200); // Small delay to prevent flickering
    });
  });
})();
