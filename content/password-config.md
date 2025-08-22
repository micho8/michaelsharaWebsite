---
title: Password Configuration
---

# Password Configuration

To change the password for your site, edit the `content/login.md` file and update the `correctPassword` variable.

**Current password:** `michael2024`

**To change it:**
1. Open `content/login.md`
2. Find the line: `const correctPassword = 'michael2024';`
3. Replace `'michael2024'` with your new password
4. Save the file

**Security Notes:**
- This is a client-side password protection system
- The password is stored in plain text in the source code
- For production use, consider implementing server-side authentication
- The session expires when the browser is closed

**How it works:**
- Users must enter the password on the login page
- Once authenticated, they can access all pages
- A logout button appears in the top-right corner
- Authentication persists until the browser session ends
