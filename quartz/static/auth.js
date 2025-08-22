// Authentication check for all pages
(function() {
  // Skip authentication check for the login page itself
  if (window.location.pathname === '/login' || window.location.pathname === '/login/') {
    return;
  }
  
  // Check if user is authenticated
  if (sessionStorage.getItem('authenticated') !== 'true') {
    // Redirect to login page
    window.location.href = '/login';
    return;
  }
  
  // Add logout functionality
  function addLogoutButton() {
    // Wait for the page to load
    setTimeout(function() {
      // Look for the header or navigation area
      const header = document.querySelector('header') || document.querySelector('.header') || document.querySelector('nav');
      
      if (header) {
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.style.cssText = `
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 8px 16px;
          background: #ff6b6b;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          z-index: 1000;
          transition: background 0.3s;
        `;
        
        logoutBtn.addEventListener('mouseover', function() {
          this.style.background = '#ff5252';
        });
        
        logoutBtn.addEventListener('mouseout', function() {
          this.style.background = '#ff6b6b';
        });
        
        logoutBtn.addEventListener('click', function() {
          sessionStorage.removeItem('authenticated');
          window.location.href = '/login';
        });
        
        header.appendChild(logoutBtn);
      }
    }, 1000);
  }
  
  // Add logout button when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addLogoutButton);
  } else {
    addLogoutButton();
  }
})();
