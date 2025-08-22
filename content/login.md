---
title: Login - Michael Shara
---

# Welcome to Michael Shara's Portfolio

<div style="text-align:center; margin: 40px 0;">
  <img src="./homeReferences/sharaImage.png" alt="Michael Shara" width="300" style="border-radius: 10px;">
</div>

<div style="max-width: 400px; margin: 0 auto; padding: 30px; background: rgba(255,255,255,0.05); border-radius: 15px; backdrop-filter: blur(10px);">
  <h2 style="text-align: center; margin-bottom: 30px;">Enter Password</h2>
  
  <form id="loginForm" style="display: flex; flex-direction: column; gap: 20px;">
    <div>
      <input 
        type="password" 
        id="password" 
        placeholder="Enter password" 
        style="width: 100%; padding: 12px; border: 2px solid #646464; border-radius: 8px; background: rgba(255,255,255,0.1); color: inherit; font-size: 16px;"
        required
      >
    </div>
    
    <button 
      type="submit" 
      style="padding: 12px 24px; background: #284b63; color: white; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; transition: background 0.3s;"
      onmouseover="this.style.background='#1a3a4f'"
      onmouseout="this.style.background='#284b63'"
    >
      Access Site
    </button>
  </form>
  
  <div id="error" style="color: #ff6b6b; text-align: center; margin-top: 15px; display: none;">
    Incorrect password. Please try again.
  </div>
</div>

<script>
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const password = document.getElementById('password').value;
  const correctPassword = 'michael2024'; // You can change this password
  
  if (password === correctPassword) {
    // Set a session flag
    sessionStorage.setItem('authenticated', 'true');
    // Redirect to the main site
    window.location.href = '/';
  } else {
    document.getElementById('error').style.display = 'block';
    document.getElementById('password').value = '';
  }
});

// Check if already authenticated
if (sessionStorage.getItem('authenticated') === 'true') {
  window.location.href = '/';
}
</script>

<style>
body {
  background: linear-gradient(135deg, #1a1a1a 0%, #2b2b2b 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

input:focus {
  outline: none;
  border-color: #284b63 !important;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
</style>
