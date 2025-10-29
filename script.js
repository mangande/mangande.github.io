
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

// Experience section functionality - works on both desktop and mobile
(function(){
  const companyGroups = document.querySelectorAll('.company-group');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  companyGroups.forEach(group => {
    let hoverTimeout;
    
    if (isTouchDevice) {
      // Mobile/Touch devices: Click to toggle
      group.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close all other groups
        companyGroups.forEach(otherGroup => {
          if (otherGroup !== group) {
            otherGroup.classList.remove('expanded');
          }
        });
        
        // Toggle current group
        group.classList.toggle('expanded');
      });
    } else {
      // Desktop: Hover functionality
      group.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        group.classList.add('expanded');
      });
      
      group.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(() => {
          group.classList.remove('expanded');
        }, 200);
      });
    }
  });
})();
